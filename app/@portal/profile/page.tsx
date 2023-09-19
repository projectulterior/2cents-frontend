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

    if (error) {
        console.error(error);
    }

    const user: any = data?.user;

    return (
        <>
            <Header name={user.name} />
            <Profile user={user} />
            <Numbers user={user} />
        </>
    );
}

function Profile({ user }: { user: CoreUserFieldsFragment }) {
    return (
        <div
            style={{
                position: 'relative',
                // background: 'pink',
                marginBottom: 50,
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    maxHeight: '300px',
                    minHeight: '200px',
                    height: '20vw',
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
                    src={user.cover ? user.cover : '/cover.avif'}
                    alt=""
                />
            </div>
            <Info user={user} />
            <div
                className="flex flex-row"
                style={{
                    position: 'absolute',
                    height: '70%',
                    width: '100%',
                    top: 0,
                    left: 0,
                }}
            >
                <div
                    className="flex flex-1 flex-col justify-start items-stretch"
                    style={{
                        position: 'relative',
                        height: '100%',
                        top: '50%',
                        left: '3%',
                    }}
                >
                    <div
                        className="flex flex-1 flex-row justify-start items-stretch"
                        style={{
                            position: 'relative',
                            width: '100%',
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
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-1 flex-col justify-start items-start">
                            <p className="text-2xl font-semibold p-2">
                                @{user.username}
                            </p>
                            <p className="p-2" style={{ color: 'grey' }}>
                                {user.bio} // TODO: fix when really long
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex-1" />
            </div>
        </div>
    );
}

function Info({ user }: { user: CoreUserFieldsFragment }) {
    return (
        <div className="flex p-10" style={{ position: 'relative' }}>
            <div
                className="flex flex-col justify-center items-stretch"
                style={{ flex: 2 }}
            ></div>
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

function Numbers({ user }: { user: CoreUserFieldsFragment }) {
    return (
        <div className="flex flex-row justify-around items-center">
            <div>
                <p>10 Following</p>
            </div>
            <div>
                <p>10 Followers</p>
            </div>
            <div>
                <p>10 Posts</p>
            </div>
        </div>
    );
}
