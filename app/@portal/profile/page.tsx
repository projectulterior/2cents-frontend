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
                    minHeight: '150px',
                    height: '30vh',
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

            <Info user={user} />
        </div>
    );
}

function Info({ user }: { user: CoreUserFieldsFragment }) {
    return (
        <div className="flex p-10" style={{ position: 'relative' }}>
            <div
                className="flex flex-col justify-center items-stretch bg-yellow-100"
                style={{ flex: 2 }}
            >
                <div className="flex justify-center" style={{ height: 120 }}>
                    <div
                        style={{
                            width: '30%',
                            aspectRatio: 1 / 1,
                            position: 'absolute',
                            borderRadius: '1000px',
                            borderWidth: 5,
                            top: '-50%',
                            // top: -300,
                            overflow: 'hidden',
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
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-1 flex-col justify-center items-start">
                        <p className="text-3xl font-semibold p-2">
                            @{user.username}
                        </p>
                        <p className="p-2" style={{ color: 'grey' }}>
                            {user.bio}
                        </p>
                    </div>
                    <div className="flex flex-1 flex-col justify-center items-center">
                        <p>Online</p>
                    </div>
                </div>
            </div>
            <div
                className="flex flex-1 flex-col justify-center items-center"
                style={{ flex: 3 }}
            >
                <p>Cypress, CA</p>
                <p>Joined September 2023</p>
                <p>pornhub.com/sbk</p>
            </div>
        </div>
    );
}
