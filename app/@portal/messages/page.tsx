import Link from 'next/link';
import Header from '../_components/Header';
import Channels from './_components/Channels';
import Plus from '@/components/svg/Plus';

export default function () {
    return (
        <>
            <Header name="Messages">
                <div>
                    <Link href={'/messages/new'}>
                        <Plus size={25} />
                    </Link>
                </div>
            </Header>
            <Channels />
        </>
    );
}
