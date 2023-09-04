'use client';

import { CSSProperties, ReactNode, useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function CreateAccount() {
    const [isModal, setIsModal] = useState(false);
    const [page, setPage] = useState(0);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState<Date | null>(new Date());

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
                                <DatePicker
                                    selected={birthday}
                                    onChange={(date) => setBirthday(date)}
                                />
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
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <p className="text-3xl font-bold mb-10">
                                Make your login
                            </p>
                            <input
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
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
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
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button
                                className="div-accent p-2 my-3 rounded-lg px-10"
                                onClick={() => setPage(1)}
                            >
                                <p className="text-white font-medium">
                                    Sign Up
                                </p>
                            </button>
                        </div>
                    ) : null}
                </Modal>
            ) : null}
        </>
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
