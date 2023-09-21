'use client';

import { withAuth } from '@/src/auth/verifyAuth';
import { useRouter } from 'next/navigation';
import { CSSProperties, ReactNode, useState } from 'react';

import DatePicker from 'react-datepicker';
import Datepicker from 'react-tailwindcss-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function CreateAccount() {
    const [isModal, setIsModal] = useState(false);
    const [page, setPage] = useState(0);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState({
        startDate: null,
        endDate: null,
    });

    const handleValueChange = (newValue: any) => {
        console.log('newValue:', newValue);
        setBirthday(newValue);
    };

    return (
        <>
            <button
                className="div-accent p-2 my-3 rounded-lg px-10"
                onClick={() => setIsModal(true)}
            >
                <p className="text-white font-medium">Create Account</p>
            </button>
            {isModal ? (
                <Modal
                    onCompleted={() => {
                        setPage(0);
                        setIsModal(false);
                    }}
                    onCanceled={() => {
                        setPage(0);
                        setIsModal(false);
                    }}
                >
                    {page == 0 ? (
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <p className="text-3xl font-bold mb-10">
                                Create your account
                            </p>
                            <input
                                key="name"
                                className="text-xl"
                                style={{
                                    background: 'lightgrey',
                                    borderRadius: 7,
                                    margin: 2,
                                    padding: 10,
                                    width: '25vw',
                                    marginTop: 5,
                                }}
                                placeholder="Name"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                key="email"
                                className="text-xl"
                                style={{
                                    background: 'lightgrey',
                                    borderRadius: 7,
                                    margin: 2,
                                    padding: 10,
                                    width: '25vw',
                                    marginTop: 5,
                                }}
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className="flex flex-row justify-center items-center">
                                <p className="text-2xl font-bold m-3">
                                    Date of Birth
                                </p>
                                <Datepicker
                                    useRange={false}
                                    asSingle
                                    value={birthday}
                                    onChange={(date: any) => setBirthday(date)}
                                />
                                <input type="date" />
                            </div>
                            <button
                                className="div-accent p-2 my-3 rounded-lg px-10"
                                style={{}}
                                onClick={() => setPage(1)}
                            >
                                <p className="text-white font-medium">Next</p>
                            </button>
                        </div>
                    ) : page == 1 ? (
                        <SignUp />
                    ) : null}
                </Modal>
            ) : null}
        </>
    );
}

function SignUp() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignUp = () => {
        login(username, password)
            .then(() => console.log('sign up success'))
            .then(() => router.refresh())
            .then(() => console.log('refreshed'))
            .catch((error) => setMessage(error));
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <p className="text-3xl font-bold mb-10">Make your login</p>
            <input
                key="username"
                className="text-xl"
                style={{
                    background: 'lightgrey',
                    borderRadius: 7,
                    margin: 2,
                    padding: 10,
                    width: '25vw',
                    marginTop: 5,
                }}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                key="password"
                className="text-xl"
                style={{
                    background: 'lightgrey',
                    borderRadius: 7,
                    margin: 2,
                    padding: 10,
                    width: '25vw',
                    marginTop: 5,
                }}
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-accent">{message}</p>
            <button
                className="div-accent p-2 my-3 rounded-lg px-10"
                onClick={handleSignUp}
            >
                <p className="text-white font-medium">Sign Up</p>
            </button>
        </div>
    );
}

function Modal({
    style,
    children,
    onCompleted,
    onCanceled,
}: {
    style?: CSSProperties;
    children: ReactNode;
    onCompleted: () => void;
    onCanceled: () => void;
}) {
    return (
        <div
            style={{
                position: 'absolute',
                height: '100vh',
                width: '100vw',
                left: 0,
                top: 0,
                zIndex: 100,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backdropFilter: 'blur(8px)',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    // background: 'lightgrey',
                    height: '100%',
                    width: '100%',
                    opacity: 0.2,
                    cursor: 'pointer',
                }}
                onClick={(e) => {
                    e.stopPropagation();
                    onCanceled();
                }}
            />
            <div
                style={{
                    background: 'white',
                    zIndex: 1000,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 50,
                    borderRadius: 30,
                    border: '1px solid grey',
                    ...style,
                }}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                {children}
            </div>
        </div>
    );
}

async function login(username: string, password: string): Promise<void> {
    return fetch(`/api/create_token`, {
        method: 'POST',
        body: Buffer.from(
            JSON.stringify({
                username,
                password,
            }),
        ),
    }).then(async (response) => {
        if (response.status != 200) {
            const resp = await response.json();
            throw resp.error;
        }
    });
}
