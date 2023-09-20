import { useQuery } from '@apollo/client';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';
import { QUERY_GET_USER } from '@/gql/user';
import { graphql } from './api/graphql/route';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: '2cents',
    description: "What's your 2 cents?",
};

export default async function RootLayout({
    children,
    portal,
    landing,
}: {
    children: React.ReactNode;
    portal: React.ReactNode;
    landing: React.ReactNode;
}) {
    const resp = await graphql({ query: '{ user { id } }' });

    console.log('resp', resp.status);

    return (
        <html lang="en">
            <body className={inter.className}>
                {resp.status == 200 ? portal : landing}
            </body>
        </html>
    );
}
