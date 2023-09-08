'use client';

import Endorsed from '@/components/svg/Endorsed';
import Home from '@/components/svg/Home';
import Logo from '@/components/svg/Logo';
import Messages from '@/components/svg/Messages';
import More from '@/components/svg/More';
import Notifications from '@/components/svg/Notifications';
import Profile from '@/components/svg/Profile';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

type Tab = {
    name: string;
    path: string;
    icon: ReactNode;
};

export default function Sidebar() {
    const pathname = usePathname();

    const size = 50;

    const tabs: Tab[] = [
        {
            name: 'Home',
            path: '/',
            icon: <Home size={size} isMarked={pathname == '/'} />,
        },
        {
            name: 'Notifications',
            path: '/notifications',
            icon: (
                <Notifications
                    size={size}
                    isMarked={pathname == '/notifications'}
                />
            ),
        },
        {
            name: 'Messages',
            path: '/messages',
            icon: <Messages size={size} isMarked={pathname == '/messages'} />,
        },
        {
            name: 'Endorsed',
            path: '/endorsed',
            icon: <Endorsed size={size} isMarked={pathname == '/endorsed'} />,
        },
        {
            name: 'Profile',
            path: '/profile',
            icon: <Profile size={size} isMarked={pathname == '/profile'} />,
        },
        {
            name: 'More',
            path: '/more',
            icon: <More size={size} isMarked={pathname == '/more'} />,
        },
    ];

    return (
        <div className="sidebar flex flex-1 flex-col items-end">
            <div
                className="flex flex-col items-stretch px-10"
                style={{
                    justifyContent: 'center',
                    alignItems: 'stretch',
                }}
            >
                <Link
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 50,
                    }}
                    href={'/'}
                >
                    <Logo size={100} />
                </Link>

                {tabs.map((tab, i) => (
                    <Link
                        key={i}
                        className="flex flex-row justify-between items-center p-2 hover:bg-gray-100 rounded-lg"
                        href={tab.path}
                    >
                        <div className="flex flex-1">{tab.icon}</div>
                        <p
                            className="flex px-5"
                            style={{ flex: 3, fontSize: 20 }}
                        >
                            {tab.name}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
