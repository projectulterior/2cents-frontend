'use client';

import { useEffect, useRef, useState } from 'react';
import Header from '../../_components/Header';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_SEARCH_USERS } from '@/gql/user';
import Loading from '@/components/Loading';
import {
    ContentType,
    CoreChannelFieldsFragment,
    CoreMessageFieldsFragment,
    CoreMessageFieldsFragmentDoc,
    CoreUserFieldsFragment,
    Visibility,
} from '@/gql/__generated__/graphql';
import ProfileImage from '../../_components/ProfileImage';
import Emoji from '../../_components/Emoji';
import Profile from '@/components/svg/Profile';
import { useAutosizeTextArea } from '../../(home)/page';
import {
    MUTATION_CREATE_CHANNEL,
    MUTATION_CREATE_MESSAGE,
    QUERY_GET_CHANNEL_BY_MEMBERS,
} from '@/gql/channel';
import { client } from '../../layout';
import { Message, NewMessage } from '../_components/Messages';

export default function () {
    const [members, setMembers] = useState<CoreUserFieldsFragment[]>([]);

    const { loading, data, error, refetch } = useQuery(
        QUERY_GET_CHANNEL_BY_MEMBERS,
        {
            variables: {
                members: members.map((user, i) => user.id),
                messagesPage: {
                    cursor: '',
                    limit: 10,
                },
            },
            // errorPolicy: 'all',
        },
    );

    useEffect(() => {
        refetch({ members: members.map((user) => user.id) });
    }, [members]);

    const channel: CoreChannelFieldsFragment = data?.channelByMembers as any;

    const ensureChannel = async (): Promise<string> => {
        if (!channel) {
            const resp = await client.mutate({
                mutation: MUTATION_CREATE_CHANNEL,
                variables: {
                    input: { memberIDs: members.map((member) => member.id) },
                    messagesPage: { cursor: '', limit: 10 },
                },
                errorPolicy: 'all',
            });

            const ch: CoreChannelFieldsFragment = resp.data
                ?.channelCreate as any;
            return ch.id;
        }

        return channel.id;
    };

    const messages: CoreMessageFieldsFragment[] =
        channel?.messages?.messages ?? ([] as any);

    console.log('messages here', messages);

    return (
        <>
            <Header name="New Message" isBack />
            <Members onChange={(members) => setMembers(members)} />
            <div className="flex flex-1 flex-col justify-start items-stretch">
                {messages.map((message, i) => {
                    const sender: CoreUserFieldsFragment =
                        message.sender as any;
                    return (
                        <div
                            key={i}
                            className="flex justify-start items-stretch"
                            style={{
                                flexDirection: sender.isMe
                                    ? 'row-reverse'
                                    : 'row',
                            }}
                        >
                            <div
                                className="flex justify-start flex-col"
                                style={{ width: 40, height: 40 }}
                            >
                                <ProfileImage user={sender} />
                            </div>
                            <Message message={message} />
                        </div>
                    );
                })}
            </div>
            <NewMessage onSend={ensureChannel} />
        </>
    );
}

function Members({
    onChange,
}: {
    onChange: (members: CoreUserFieldsFragment[]) => void;
}) {
    const [members, setMembers] = useState<CoreUserFieldsFragment[]>([]);

    useEffect(() => {
        onChange(members);
    }, [members]);

    return (
        <div className="flex flex-col justify-center items-stretch my-5">
            <Search
                placeholder="Add Member"
                onSelected={(member) => {
                    setMembers([...members, member]);
                }}
            />
            {members.map((member, i) => (
                <div
                    key={i}
                    className="flex flex-1 justify-start items-center mx-3 my-1"
                >
                    <div
                        className="flex justify-start flex-col"
                        style={{ width: 40, height: 40 }}
                    >
                        <ProfileImage user={member} />
                    </div>
                    <p className="p-3">
                        {member.name} @{member.username}
                    </p>
                    <p
                        className="flex justify-center items-center px-5"
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                            members.splice(i, 1);
                            setMembers([...members]);
                        }}
                    >
                        X
                    </p>
                </div>
            ))}
        </div>
    );
}

function Search({
    onSelected,
    placeholder,
}: {
    onSelected: (user: CoreUserFieldsFragment) => void;
    placeholder: string;
}) {
    const [query, setQuery] = useState('');

    const { loading, data, error, fetchMore } = useQuery(QUERY_SEARCH_USERS, {
        variables: { query: query, page: { cursor: '', limit: 10 } },
        errorPolicy: 'all',
    });

    const users: CoreUserFieldsFragment[] = data?.searchUsers.users as any;

    return (
        <>
            <input
                className="flex justify-center items-center p-2 px-5"
                style={{ background: 'lightgrey', borderRadius: 5 }}
                placeholder={placeholder}
                onChange={(e) => setQuery(e.target.value)}
                value={query}
            />
            <div style={{ position: 'relative' }}>
                <div
                    className="flex flex-1 flex-col justify-start items-stretch bg-white"
                    style={{
                        position: 'absolute',
                        background: 'pink',
                        marginTop: 10,
                        zIndex: 999,
                        width: '100%',
                    }}
                >
                    {loading
                        ? null
                        : users.map((user, i) => (
                              <div
                                  key={i}
                                  className="flex flex-row justify-start items-center"
                                  style={{
                                      position: 'relative',
                                      cursor: 'pointer',
                                      height: '5vh',
                                      width: '100%',
                                      background: 'green',
                                  }}
                                  onClick={() => {
                                      onSelected(user);
                                      setQuery('');
                                  }}
                              >
                                  <div
                                      className="flex justify-start flex-col"
                                      style={{
                                          margin: 3,
                                          width: 40,
                                          height: 40,
                                      }}
                                  >
                                      <ProfileImage user={user} />
                                  </div>
                                  <p>
                                      {user.name} @{user.username}
                                  </p>
                              </div>
                          ))}
                </div>
            </div>
        </>
    );
}
