'use client';

import Loading from '@/components/Loading';
import { CoreChannelFieldsFragment } from '@/gql/__generated__/graphql';
import { QUERY_GET_CHANNELS } from '@/gql/channel';
import { useQuery } from '@apollo/client';

export default function Channels() {
    const { loading, data, error, fetchMore } = useQuery(QUERY_GET_CHANNELS, {
        variables: {
            page: {
                cursor: '',
                limit: 10,
            },
            messagesPage: {
                cursor: '',
                limit: 1,
            },
        },
        errorPolicy: 'all',
    });

    if (loading) {
        return <Loading />;
    }

    if (error) {
        console.error(error);
    }

    const channels: any[] = data?.channels.channels as any;

    return channels ? (
        <div>
            {channels.map((channel, i) => (
                <Channel key={i} channel={channel} />
            ))}
        </div>
    ) : (
        <NoChannels />
    );
}

function NoChannels() {
    return (
        <div className="flex justify-center items-center m-10">
            <p>No Messages</p>
        </div>
    );
}

function Channel({ channel }: { channel: CoreChannelFieldsFragment }) {
    return <div></div>;
}
