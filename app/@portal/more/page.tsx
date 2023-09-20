'use client';

import './styles.css';
import Header from '../_components/Header';
import MoneyBox from '@/components/svg/MoneyBox';
import SecurityKey from '@/components/svg/SecurityKey';
import LogoutIcon from '@/components/svg/LogoutIcon';
import { ReactNode, useState } from 'react';
import { useRouter } from 'next/navigation';

function Account() {
    return (
        <ExpandableItem name="Account" icon={<SecurityKey size={40} />}>
            <h1>Expanded</h1>
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
    return (
        <ExpandableItem name="Funds" icon={<MoneyBox size={40} />}>
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
}: {
    name: string;
    icon: ReactNode;
    children: ReactNode;
}) {
    const [isExpanded, setIsExpected] = useState(false);

    return (
        <>
            <Item
                name={name}
                icon={icon}
                onClick={() => setIsExpected(!isExpanded)}
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
