import Logo from '@/components/svg/Logo';
import Image from 'next/image';
import { useState } from 'react';
import CreateAccount from './_components/CreateAccount';
import { cookies } from 'next/headers';
import Link from 'next/link';
import Sidebar from './_components/Sidebar';

export default function () {
    const auth_token = cookies().get('auth_token');

    return auth_token ? <Home /> : <Landing />;
}

function Landing() {
    return (
        <main className="flex min-h-screen flex-row justify-center items-stretch">
            <div className="flex flex-1 justify-center items-center">
                <div className="ball">
                    <Logo size={250} />
                </div>
            </div>
            <div className="flex flex-1 flex-col justify-center items-stretch">
                <div className="flex flex-1 flex-col justify-end items-start">
                    <p className="text-6xl font-black">
                        What's your <a className="text-accent">2cents</a>?
                    </p>
                </div>
                <div className="flex flex-1 flex-col justify-center items-start">
                    <p className="text-3xl font-bold">
                        Share your <a className="text-accent">2cents</a> today.
                    </p>
                    <CreateAccount />
                </div>
                <div className="flex flex-1 flex-col justify-start items-start ">
                    <p className="text-2xl font-medium">
                        Already have an account?
                    </p>
                    <button className="p-2 my-3 rounded-lg px-10 border-solid border-2">
                        <p className="font-medium">Sign In</p>
                    </button>
                </div>
            </div>
        </main>
    );
}

function Home() {
    return (
        <main className="flex min-h-screen flex-row justify-center items-stretch">
            <Sidebar path="/" />
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
