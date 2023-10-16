'use client';

import { useQuery } from '@apollo/client';
import Header from '../_components/Header';
import { QUERY_GET_USER } from '@/gql/user';
import Loading from '@/components/Loading';
import Profile from '../_components/Profile';
import { CoreUserFieldsFragment } from '@/gql/__generated__/graphql';

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

    const user: CoreUserFieldsFragment = data?.user as any;

    return (
        <>
            <Header name={user?.name ?? ''} />
            <Profile user={user} />
        </>
    );
}
