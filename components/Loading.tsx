import Image from 'next/image';

export default function Loading() {
    return (
        <div className="flex flex-1 justify-center items-center">
            <Image src="/loading.gif" width={30} height={30} alt="" />
        </div>
    );
}
