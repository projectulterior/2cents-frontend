import { CoreUserFieldsFragment } from '@/gql/__generated__/graphql';
import Image from 'next/image';
import Link from 'next/link';
import { CSSProperties } from 'react';

export default function ProfileImage({
    user,
    style,
}: {
    user: CoreUserFieldsFragment;
    style?: CSSProperties;
}) {
    return (
        <Link
            href={`/u/${user.id}`}
            className="flex flex-row justify-start items-stretch"
            style={{
                flex: 1,
                position: 'relative',
                width: '100%',
                // height: '100%',
                ...style,
            }}
        >
            <div
                style={{
                    height: '100%',
                    aspectRatio: 1 / 1,
                    borderRadius: '1000px',
                    position: 'absolute',
                    borderWidth: 5,
                    overflow: 'hidden',
                    background: 'grey',
                }}
            >
                <Image
                    style={{
                        objectFit: 'cover',
                    }}
                    fill={true}
                    priority={true}
                    src={user.profile ? user.profile : '/me.jpg'}
                    alt=""
                />
            </div>
        </Link>
    );
}
