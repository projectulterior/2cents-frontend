'use client';

import './styles.css';
import Header from '../_components/Header';
import MoneyBox from '@/components/svg/MoneyBox';
import SecurityKey from '@/components/svg/SecurityKey';
import LogoutIcon from '@/components/svg/LogoutIcon';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from 'postcss';
import { useMutation, useQuery } from '@apollo/client';
import {
    MUTATION_CENTS_UPDATE,
    MUTATION_USER_DELETE,
    QUERY_GET_USER,
} from '@/gql/user';
import { MUTATION_PASSWORD_UPDATE, MUTATION_USER_UPDATE } from '@/gql/user';
import {
    CoreUserFieldsFragment,
    CoreUserFieldsFragmentDoc,
} from '@/gql/__generated__/graphql';
import Loading from '@/components/Loading';
import { create } from 'domain';
import { Content } from 'next/font/google';
import { client } from '../layout';
import Deactivate from '@/components/svg/Deactivate';

function Account() {
    const [isMarked, setIsMarked] = useState(false);

    return (
        <ExpandableItem
            name="Account"
            icon={<SecurityKey size={40} isMarked={isMarked} />}
            onChange={(isExpanded) => setIsMarked(isExpanded)}
        >
            <UpdateEmail />
            <UpdatePassword />
            <DeactivateAccount />
        </ExpandableItem>
    );
}

function UpdateEmail() {
    const [email, setEmail] = useState('');
    const [update, { data, loading, error, reset }] = useMutation(
        MUTATION_USER_UPDATE,
        {
            errorPolicy: 'all',
        },
    );

    return (
        <div
            className="flex flex-row justify-left items-center"
            style={{
                borderBottom: '1px solid lightgrey',
                height: 70,
            }}
        >
            <input
                key="email"
                className="flex justify-right items-center"
                style={{
                    flex: 5,
                    margin: '5% 10% 5% 10%',
                    border: '2px solid orange',
                }}
                onChange={(e) => {
                    console.log(e.target.value);
                    setEmail(e.target.value);
                }}
                value={email}
                placeholder="Update Email"
            />

            <button
                style={{
                    background:
                        email == '' || loading ? 'lightgrey' : '#d67953',
                    padding: '5px 15px 5px 15px',
                    borderRadius: 5,
                }}
                onClick={() =>
                    update({
                        variables: {
                            input: {
                                email: email,
                            },
                        },
                    })
                        .then((data) => {
                            console.log('[updateUser]', data);
                            setEmail('');
                        })
                        .catch((err) => {
                            console.error('[updateUser]', err);
                        })
                }
                disabled={email == '' || loading}
            >
                {loading ? <Loading /> : <p>Confirm</p>}
            </button>
        </div>
    );
}

function UpdatePassword() {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [update, { data, loading, error, reset }] = useMutation(
        MUTATION_PASSWORD_UPDATE,
        {
            errorPolicy: 'all',
        },
    );

    return (
        <div
            className="flex justify-left items-center"
            style={{
                borderBottom: '1px solid lightgrey',
                height: 70,
            }}
        >
            <input
                key="old"
                style={{
                    flex: 2.5,
                    margin: '5% 10% 5% 10%',
                    border: '2px solid orange',
                }}
                onChange={(e) => {
                    console.log(e.target.value);
                    setOldPassword(e.target.value);
                }}
                value={oldPassword}
                placeholder="Confirm Password"
            />

            <input
                key="new"
                style={{
                    flex: 2.5,
                    margin: '5% 10% 5% 10%',
                    border: '2px solid orange',
                }}
                onChange={(e) => {
                    console.log(e.target.value);
                    setNewPassword(e.target.value);
                }}
                value={newPassword}
                placeholder="New Password"
            />
            <button
                style={{
                    background:
                        oldPassword == '' || newPassword == '' || loading
                            ? 'lightgrey'
                            : '#d67953',
                    padding: '5px 15px 5px 15px',
                    borderRadius: 5,
                }}
                onClick={() =>
                    update({
                        variables: {
                            old: oldPassword,
                            new: newPassword,
                        },
                    })
                        .then((data) => {
                            console.log('[updatePassword]', data);
                            setOldPassword('');
                        })
                        .then((data) => {
                            console.log('[updatePassword]', data);
                            setNewPassword('');
                        })
                        .catch((err) => {
                            console.error('[updatePassword]', err);
                        })
                }
                disabled={oldPassword == '' || newPassword == '' || loading}
            >
                {loading ? <Loading /> : <p>Confirm</p>}
            </button>
        </div>
    );
}

function DeactivateAccount() {
    const [deleteUser, { data, loading, error, reset }] = useMutation(
        MUTATION_USER_DELETE,
        {
            errorPolicy: 'all',
        },
    );
    const router = useRouter();

    return (
        <div
            className="flex flex-row justify-left items-center"
            style={{
                borderBottom: '1px solid lightgrey',
                height: 70,
                cursor: 'pointer',
            }}
            onClick={() => {
                deleteUser();
                fetch('/api/logout', { method: 'POST' })
                    .then(async (resp) => {
                        if (resp.status != 200) {
                            throw resp.status;
                        }

                        await client.clearStore();
                        router.push('/');
                        router.refresh();
                    })
                    .catch((err) => console.error('[deactivateAccount]', err));
            }}
        >
            <div style={{ paddingLeft: 30 }}>Deactivate your account</div>
        </div>
    );
}

function Logout() {
    const router = useRouter();

    return (
        <Item
            name="Logout"
            icon={<LogoutIcon size={40} />}
            onClick={() => {
                fetch('/api/logout', { method: 'POST' })
                    .then(async (resp) => {
                        if (resp.status != 200) {
                            throw resp.status;
                        }

                        await client.clearStore();
                        router.push('/');
                        router.refresh();
                    })
                    .catch((err) => console.error(err));
            }}
        />
    );
}

function Funds() {
    const [isMarked, setIsMarked] = useState(false);

    return (
        <ExpandableItem
            name="Funds"
            icon={<MoneyBox size={40} isMarked={isMarked} />}
            onChange={(isExpanded) => setIsMarked(isExpanded)}
        >
            <Availability />
            <AddFunds />
        </ExpandableItem>
    );
}

function Availability() {
    const { loading, data, error, fetchMore } = useQuery(QUERY_GET_USER, {
        errorPolicy: 'all',
    });

    if (loading) {
        return <Loading />;
    }

    if (error) {
        console.error(error);
    }

    const user: CoreUserFieldsFragment = data?.user as any;

    return (
        <div
            className="flex flex-row justify-left items-center"
            style={{
                borderBottom: '1px solid lightgrey',
                height: 70,
            }}
        >
            <p
                className="flex justify-left items-left"
                style={{ flex: 2.4, paddingLeft: 30 }}
            >
                Availability
            </p>
            <p
                className="flex justify-left items-left"
                style={{ background: 'yellow', height: 70 }}
            >
                {user.cents?.total}
            </p>
            <p>1</p>
        </div>
    );
}

function AddFunds() {
    const [cents, setCents] = useState(0);
    const [update, { data, loading, error, reset }] = useMutation(
        MUTATION_CENTS_UPDATE,
        {
            errorPolicy: 'all',
        },
    );

    return (
        <div
            className="flex flex-row justify-left items-center"
            style={{
                borderBottom: '1px solid lightgrey',
                height: 70,
            }}
        >
            <input
                key="cents"
                className="flex justify-right items-center"
                style={{
                    flex: 5,
                    margin: '5% 10% 5% 10%',
                    border: '2px solid orange',
                }}
                onChange={(e) => {
                    console.log(e.target.value);
                    const value = parseInt(e.target.value);
                    setCents(value);
                }}
                value={cents}
                placeholder="Add # of Cents"
            />

            <button
                style={{
                    background: cents == 0 || loading ? 'lightgrey' : '#d67953',
                    padding: '5px 15px 5px 15px',
                    borderRadius: 5,
                }}
                onClick={() =>
                    update({
                        variables: {
                            amount: cents,
                        },
                    })
                        .then((data) => {
                            console.log('[updateCents]', data);
                            setCents(0);
                        })
                        .catch((err) => {
                            console.error('[updateCents]', err);
                        })
                }
                disabled={cents == 0 || loading}
            >
                {loading ? <Loading /> : <p>Confirm</p>}
            </button>
        </div>
    );
}

function Item({
    name,
    icon,
    onClick,
}: {
    name: string;
    icon: ReactNode;
    onClick: () => void;
}) {
    return (
        <div
            className="item flex flex-row justify-left items-center pl-1"
            style={{
                border: '1px solid lightgrey',
                height: 100,
                cursor: 'pointer',
            }}
            onClick={onClick}
        >
            <div className="flex flex-1 justify-center items-center">
                {icon}
            </div>
            <div className="flex" style={{ flex: 9 }}>
                <p>{name}</p>
            </div>
        </div>
    );
}

function ExpandableItem({
    name,
    icon,
    children,
    onChange,
}: {
    name: string;
    icon: ReactNode;
    children: ReactNode;
    onChange?: (isExpanded: boolean) => void;
}) {
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        if (onChange) {
            onChange(isExpanded);
        }
    }, [isExpanded]);

    return (
        <>
            <Item
                name={name}
                icon={icon}
                onClick={() => setIsExpanded(!isExpanded)}
            />
            {isExpanded ? children : null}
        </>
    );
}

export default function () {
    return (
        <>
            <Header name="More" />
            <Account />
            <Funds />
            <Logout />
        </>
    );
}
