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
import { QUERY_GET_USER } from '@/gql/user';
import { MUTATION_USER_UPDATE } from '@/gql/user';
import {
    CoreUserFieldsFragment,
    CoreUserFieldsFragmentDoc,
} from '@/gql/__generated__/graphql';
import Loading from '@/components/Loading';
import { create } from 'domain';
import { Content } from 'next/font/google';

function Account() {
    const [isMarked, setIsMarked] = useState(false);

    return (
        <ExpandableItem
            name="Account"
            icon={<SecurityKey size={40} isMarked={isMarked} />}
            onChange={(isExpanded) => setIsMarked(isExpanded)}
        >
            <UpdateEmail />
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
                    Change password
                </p>
                <input
                    key="email"
                    className="flex justify-center items-center"
                    style={{
                        flex: 5,
                        margin: '5% 10% 5% 10%',
                        border: '2px solid orange',
                    }}
                />
            </div>
            <div
                className="flex flex-row justify-left items-center"
                style={{
                    borderBottom: '1px solid lightgrey',
                    height: 70,
                }}
            >
                <div style={{ paddingLeft: 30 }}>Deactivate your account</div>
            </div>
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
            <p
                className="flex justify-left items-left"
                style={{ flex: 2.4, paddingLeft: 30 }}
            >
                Change email address
            </p>
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

function Logout() {
    const router = useRouter();

    return (
        <Item
            name="Logout"
            icon={<LogoutIcon size={40} />}
            onClick={() => {
                fetch('/api/logout', { method: 'POST' })
                    .then((resp) => {
                        if (resp.status != 200) {
                            throw resp.status;
                        }

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
            <h1>Expanded</h1>
        </ExpandableItem>
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
