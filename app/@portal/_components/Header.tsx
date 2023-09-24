import Back from '@/app/_components/Back';
import { ReactNode } from 'react';

export default function ({
    name,
    isBack,
    children,
}: {
    name: string;
    isBack?: boolean;
    children?: ReactNode;
}) {
    return (
        <div
            className="flex justify-start items-center p-10 bg-white"
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 99999,
                borderBottom: '1px solid lightgrey',
            }}
        >
            {isBack ? <Back /> : null}
            <p className="text-2xl font-bold px-5">{name}</p>
            {children}
        </div>
    );
}
