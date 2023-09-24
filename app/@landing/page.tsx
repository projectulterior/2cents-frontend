import Logo from '@/components/svg/Logo';
import CreateAccount, { SignUp } from '../_components/CreateAccount';

export default function Landing() {
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
                    <SignUp label="Sign In" />
                </div>
                <div className="flex flex-1 flex-col justify-start items-start ">
                    <p className="text-2xl font-medium">
                        Don't have an account?
                    </p>
                    <CreateAccount />
                </div>
            </div>
        </main>
    );
}
