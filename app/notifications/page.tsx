import Logo from '@/components/svg/Logo';
import { cookies } from 'next/headers';
import Link from 'next/link';
import Sidebar from '../_components/Sidebar';

export default function () {
    const auth_token = cookies().get('auth_token');

    return <Home />;
}

function Home() {
    return (
        <main className="flex min-h-screen flex-row justify-center items-stretch">
            <Sidebar path="/notifications" />
            <div
                className="flex flex-col items-center"
                style={{
                    flex: 3,
                    maxWidth: 1000,
                    background: 'yellow',
                }}
            >
                <h1>hello</h1>
            </div>
            <div className="flex flex-1 flex-col">
                <h1>hello</h1>
            </div>
        </main>
    );
}
