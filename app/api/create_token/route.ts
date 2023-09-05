import { cookies } from 'next/headers';

export async function POST(request: Request) {
    const req = await request.json();

    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/create_token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: Buffer.from(
            JSON.stringify({
                username: req.username,
                password: req.password,
            }),
        ),
    }).then(async (response) => {
        const resp = await response.json();

        cookies().set('auth_token', resp.auth_token, { httpOnly: true });
        cookies().set('refresh_token', resp.auth_token, { httpOnly: true });

        return new Response(JSON.stringify(resp), {
            status: response.status,
            // headers: {
            //     'Set-Cookie': `auth_token=${resp.auth_token}; HttpOnly; refresh_token=${resp.refresh_token}; HttpOnly;`,
            // },
        });
    });
}
