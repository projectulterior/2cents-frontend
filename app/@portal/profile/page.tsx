'use client';

import { useQuery } from '@apollo/client';
import Header from '../_components/Header';
import { QUERY_GET_USER } from '@/gql/user';
import { CoreUserFieldsFragment } from '@/gql/__generated__/graphql';
import Loading from '@/components/Loading';
import Image from 'next/image';

export default function () {
    const { loading, data, error, fetchMore } = useQuery(QUERY_GET_USER, {
        variables: {},
        errorPolicy: 'all',
    });

    if (loading) {
        return <Loading />;
    }

    const user: any = data?.user;

    return (
        <>
            <Header name={user.name} />
            <Profile user={user} />
        </>
    );
}

function Profile({ user }: { user: CoreUserFieldsFragment }) {
    return (
        <div style={{ background: 'pink' }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    maxHeight: '300px',
                    height: '100vh',
                    width: '100%',
                    position: 'relative',
                }}
            >
                <Image
                    style={{
                        objectFit: 'cover',
                    }}
                    fill={true}
                    priority={true}
                    src={user.cover ? user.cover : '/no-cover.png'}
                    alt=""
                />
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '30%',
                    aspectRatio: 1 / 1,
                    position: 'relative',
                    borderRadius: '1000px',
                    borderWidth: 5,
                    overflow: 'hidden',
                    top: -150,
                    left: 75,
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
            <p className="text-3xl font-semibold">@{user.username}</p>
            <p className="" style={{ color: 'grey' }}>
                {user.bio}
            </p>
        </div>
    );
}
