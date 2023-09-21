'use client';

import { useQuery } from '@apollo/client';
import Header from '../../_components/Header';
import Profile from '../../_components/Profile';
import { QUERY_GET_USER } from '@/gql/user';
import Loading from '@/components/Loading';

export default function ({ params }: { params: { id: string } }) {
    const { loading, data, error, fetchMore } = useQuery(QUERY_GET_USER, {
        variables: { id: params.id },
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
        </>
    );
}
