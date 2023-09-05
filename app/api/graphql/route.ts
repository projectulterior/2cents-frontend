import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const auth_token = request.cookies.get('auth_token')?.value;

    if (auth_token === undefined) {
        // TODO: handle refresh
        throw 'no auth token';
    }

    return fetch(`${process.env.PUBLIC_NEXT_API_URL}/graphql`, {
        method: 'POST',
        headers: {
            Authorization: auth_token,
            'Content-Type': 'application/json',
        },
        body: request.body,
    }).then(
        (response) =>
            new NextResponse(response.body, { status: response.status }),
    );
}
