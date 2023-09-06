import Image from 'next/image';

export default function Loading() {
    return (
        <div>
            <Image src="/loading.gif" width={30} height={30} alt="" />
        </div>
    );
}
