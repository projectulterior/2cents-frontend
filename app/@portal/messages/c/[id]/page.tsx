'use client';

import Header from '@/app/@portal/_components/Header';
import Loading from '@/components/Loading';
import {
    CoreChannelFieldsFragment,
    CoreMessageFieldsFragment,
} from '@/gql/__generated__/graphql';
import { QUERY_GET_CHANNEL } from '@/gql/channel';
import { useQuery } from '@apollo/client';
import Messages from '../../_components/Messages';

export default function ({ params }: { params: { id: string } }) {
    const { loading, data, error, fetchMore } = useQuery(QUERY_GET_CHANNEL, {
        variables: {
            id: params.id,
            messagesPage: {
                cursor: '',
                limit: 10,
            },
        },
        errorPolicy: 'all',
    });

    if (loading) {
        return <Loading />;
    }

    const channel: CoreChannelFieldsFragment = data?.channel as any;
    const messages: CoreMessageFieldsFragment[] = channel.messages
        ?.messages as any;

    return (
        <>
            <Header name="Channel" isBack />
            <Messages channelID={params.id} messages={messages} />
        </>
    );
}
