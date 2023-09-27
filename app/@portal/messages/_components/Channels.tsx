'use client';

import Loading from '@/components/Loading';
import {
    CoreChannelFieldsFragment,
    CoreMessageFieldsFragment,
    CoreUserFieldsFragment,
} from '@/gql/__generated__/graphql';
import { QUERY_GET_CHANNELS } from '@/gql/channel';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import ProfileImage from '../../_components/ProfileImage';
import { Message } from './Messages';

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

    return channels.length ? (
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
    const members: CoreUserFieldsFragment[] = channel.members as any;
    const messages: CoreMessageFieldsFragment[] = channel.messages
        ?.messages as any;

    const others: CoreUserFieldsFragment[] = members.filter(
        (member) => !member.isMe,
    );

    return (
        <Link
            className="hoverable flex flex-row justify-start items-center p-2"
            href={`/messages/c/${channel.id}`}
        >
            <ChannelImage members={others} />
            <div className="flex flex-1 flex-col">
                <ChannelName members={others} />
                <Message message={messages[0]} />
            </div>
        </Link>
    );
}

function ChannelImage({ members }: { members: CoreUserFieldsFragment[] }) {
    return (
        <div
            className="flex flex-col justify-center items-center"
            // style={{ background: 'pink' }}
        >
            {members.map((member, i) => (
                <div
                    key={i}
                    className="flex flex-col justify-center items-center"
                >
                    <div
                        className="flex justify-start flex-col items-center "
                        style={{ width: 50, height: 50 }}
                    >
                        <ProfileImage user={member} />
                    </div>
                </div>
            ))}
        </div>
    );
}

function ChannelName({ members }: { members: CoreUserFieldsFragment[] }) {
    return (
        <div>
            {names(members).map((name, i) => (
                <div key={i}>
                    <p>{name}</p>
                </div>
            ))}
        </div>
    );
}

export function names(members: CoreUserFieldsFragment[]): string[] {
    const others: CoreUserFieldsFragment[] = members.filter(
        (member) => !member.isMe,
    );

    return others.map((member, i) =>
        member.name ? member.name : `@${member.username}`,
    );
}
