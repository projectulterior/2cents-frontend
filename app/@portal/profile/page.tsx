'use client';

import { useQuery } from '@apollo/client';
import Header from '../_components/Header';
import { QUERY_GET_USER } from '@/gql/user';
import { CoreUserFieldsFragment } from '@/gql/__generated__/graphql';
import Loading from '@/components/Loading';

export default function () {
    const { loading, data, error, fetchMore } = useQuery(QUERY_GET_USER, {
        variables: {},
        errorPolicy: 'all',
    });

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <Header name={data?.user.name} />
            <Profile user={data?.user as any} />
        </>
    );
}

function Profile({ user }: { user: CoreUserFieldsFragment }) {
    return (
        <div style={{ background: 'pink' }}>
            <h1>@{user.username}</h1>
            <p>{user.bio}</p>
        </div>
    );
}
