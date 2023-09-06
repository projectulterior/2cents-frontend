import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: '2cents',
    description: "What's your 2 cents?",
};

export default function RootLayout({
    children,
    portal,
    landing,
}: {
    children: React.ReactNode;
    portal: React.ReactNode;
    landing: React.ReactNode;
}) {
    const auth_token = cookies().get('auth_token');

    return (
        <html lang="en">
            <body className={inter.className}>
                {auth_token ? portal : landing}
            </body>
        </html>
    );
}
