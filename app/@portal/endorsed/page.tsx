'use client';

import { useQuery } from '@apollo/client';
import Header from '../_components/Header';
import { QUERY_GET_USER } from '@/gql/user';
import Loading from '@/components/Loading';
import Profile from '../_components/Profile';
import Posts from '../_components/Posts';

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
            <Header name="Endorsed" />
            <Posts />
        </>
    );
}
