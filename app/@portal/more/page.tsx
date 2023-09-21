'use client';

import './styles.css';
import Header from '../_components/Header';
import MoneyBox from '@/components/svg/MoneyBox';
import SecurityKey from '@/components/svg/SecurityKey';
import LogoutIcon from '@/components/svg/LogoutIcon';
import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from 'postcss';

function Account() {
    const [isMarked, setIsMarked] = useState(false);
    const [email, setEmail] = useState('');

    return (
        <ExpandableItem
            name="Account"
            icon={<SecurityKey size={40} isMarked={isMarked} />}
            onChange={(isExpanded) => setIsMarked(isExpanded)}
        >
            <div
                className="flex flex-row justify-left items-center"
                style={{
                    borderBottom: '1px solid lightgrey',
                    height: 70,
                }}
            >
                <p
                    className="flex justify-center items-center"
                    style={{ flex: 3, paddingLeft: 30 }}
                >
                    Change email address
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
                <p
                    className="flex justify-center items-center"
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
