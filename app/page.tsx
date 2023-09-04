import Logo from '@/components/svg/Logo';
import Image from 'next/image';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-row justify-center items-stretch">
            <div className="flex flex-1 justify-center items-center">
                <div className="ball">
                    <Logo size={250} />
                </div>
            </div>
            <div className="flex flex-1 flex-col justify-center items-stretch">
                <div className="flex flex-1 flex-col justify-end items-start">
                    <p className="text-5xl font-bold">
                        What's your <a className="text-accent">2cents</a>?
                    </p>
                </div>
                <div className="flex flex-1 flex-col justify-center items-start">
                    <p className="text-3xl font-medium">
                        Share your <a className="text-accent">2cents</a> today.
                    </p>
                    <button className="div-accent p-2 my-3 rounded-lg px-10">
                        <p className="text-white font-medium">Create Account</p>
                    </button>
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
