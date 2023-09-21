import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    cookies().delete('auth_token');
    cookies().delete('refresh_token');

    return new NextResponse(JSON.stringify({}), { status: 200 });
}
