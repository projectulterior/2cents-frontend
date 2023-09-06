'use client';

import { useQuery } from '@apollo/client';
import Header from '../_components/Header';
import { QUERY_GET_USER } from '@/gql/user';

export default function () {
    const { loading, data, error, fetchMore } = useQuery(QUERY_GET_USER, {
        variables: {},
        errorPolicy: 'all',
    });

    return (
        <>
            <Header name="Profile" />
            <h1>{data?.user.id}</h1>
        </>
    );
}
