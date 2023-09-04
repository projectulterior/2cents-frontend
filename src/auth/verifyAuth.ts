import type { NextApiRequest, NextApiResponse } from 'next';
import Cookies from 'cookies';

export function withAuth(isToken?: boolean) {
    return async ({
        req,
        res,
        query,
        resolvedUrl,
    }: {
        req: NextApiRequest;
        res: NextApiResponse;
        query: string;
        resolvedUrl: string;
    }) => {
        const cookies = new Cookies(req, res); // Create a cookies instance
        var token = cookies.get('auth_token'); // Get a cookie
        var refresh = cookies.get('refresh_token');

        const redirect = resolvedUrl ? `/login?path=${resolvedUrl}` : '/login';

        if (!token) {
            return {
                redirect: {
                    destination: redirect,
                    permament: false,
                },
            };
        }

        let isVerified = await verifyAuth(token);
        if (!isVerified) {
            const tokens = await refreshToken(cookies);

            token = tokens.auth_token;
            refresh = tokens.refresh_token;
            isVerified = await verifyAuth(token);
        }

        if (!isVerified) {
            return {
                redirect: {
                    destination: redirect,
                    permament: false,
                },
            };
        }

        return {
            props: {
                auth_token: isToken ? token : '',
                refresh_token: isToken ? refresh : '',
            },
        };
    };
}

export async function verifyAuth(token: string): Promise<boolean> {
    return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
        body: Buffer.from(
            JSON.stringify({
                query: `query User { user { id } }`,
            }),
        ),
    })
        .then((resp) => {
            if (resp.status != 200) {
                resp.json().then((data) =>
                    console.log('error response body', data),
                );
                throw `unexpected status code ${resp.status}`;
            }

            return resp.json();
        })
        .then((data) => true)
        .catch((err) => {
            console.log('error in verifyAuth', err);
            return false;
        });
}

async function refreshToken(
    cookies: Cookies,
): Promise<{ auth_token: string; refresh_token: string }> {
    console.log('refreshing token');

    const refresh = cookies.get('refresh_token');

    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh_token`, {
        method: 'POST',
        body: Buffer.from(
            JSON.stringify({
                refresh_token: refresh,
            }),
        ),
    })
        .then((response) => {
            if (response.status != 200) {
                response.json().then((data) => console.log(data));
                throw `unexpected status code ${response.status}`;
            }

            return response.json();
        })
        .then((data: { auth_token: string; refresh_token: string }) => {
            cookies.set('auth_token', data.auth_token, {
                sameSite: true,
                httpOnly: true,
            });
            cookies.set('refresh_token', data.refresh_token, {
                sameSite: true,
                httpOnly: true,
            });

            return data;
        })
        .catch((err) => {
            console.log('error in refreshToken', err);
            return { auth_token: '', refresh_token: '' };
        });
}
