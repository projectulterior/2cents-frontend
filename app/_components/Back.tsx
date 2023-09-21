'use client';

import BackArrow from '@/components/svg/BackArrow';
import { useRouter } from 'next/navigation';

export default function Back() {
    const router = useRouter();

    return (
        <div
            className="flex justify-center items-center"
            style={{
                cursor: 'pointer',
            }}
            onClick={() => router.back()}
        >
            <BackArrow size={40} />
        </div>
    );
}
