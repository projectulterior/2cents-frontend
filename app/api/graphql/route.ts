import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const auth_token = request.cookies.get('auth_token')?.value;

    if (auth_token === undefined) {
        // TODO: handle refresh
        throw 'no auth token';
    }

    const body = await request.json();

    console.log('gql request', body);

    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
        method: 'POST',
        headers: {
            Authorization: auth_token,
            'Content-Type': 'application/json',
        },
        // body: Buffer.from(body),
        body: Buffer.from(JSON.stringify(body)),
    })
        .then((response) => response.json())
        .then(async (response) => {
            console.log('response', response);
            return new NextResponse(JSON.stringify(response), {
                status: response.status,
            });
        });
}
