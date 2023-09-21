import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const body = await request.json();

    // console.log('graphql', body);

    return graphql(body)
        .then(async (response) => {
            if (response.status == 401) {
                return refreshToken(body);
            }

            return response.json();
        })
        .then(async (response) => {
            return new NextResponse(JSON.stringify(response), {
                status: response.status,
            });
        });
}

export function graphql(body: any) {
    const auth_token = cookies().get('auth_token')?.value;

    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
        cache: 'no-store',
        method: 'POST',
        headers: {
            Authorization: auth_token ?? '',
            'Content-Type': 'application/json',
        },
        body: Buffer.from(JSON.stringify(body)),
    });
}

async function refreshToken(body: any) {
    const refresh_token = cookies().get('refresh_token')?.value;

    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh_token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: Buffer.from(
            JSON.stringify({
                token: refresh_token,
            }),
        ),
    })
        .then((response) => response.json())
        .then((resp) => {
            cookies().set('auth_token', resp.auth_token, { httpOnly: true });
            cookies().set('refresh_token', resp.refresh_token, {
                httpOnly: true,
            });
        })
        .then(() => graphql(body))
        .then((resp) => resp.json());
}
