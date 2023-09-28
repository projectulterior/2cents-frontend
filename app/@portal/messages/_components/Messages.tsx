'use client';

import {
    ContentType,
    CoreMessageFieldsFragment,
    CoreMessageFieldsFragmentDoc,
    CoreUserFieldsFragment,
} from '@/gql/__generated__/graphql';
import { useEffect, useRef, useState } from 'react';
import { useAutosizeTextArea } from '../../(home)/page';
import Emoji from '../../_components/Emoji';
import { useMutation } from '@apollo/client';
import { MUTATION_CREATE_MESSAGE } from '@/gql/channel';
import ProfileImage from '../../_components/ProfileImage';

export default function Messages({
    channelID,
    messages,
    onLoaded,
}: {
    channelID: () => Promise<string>;
    messages: CoreMessageFieldsFragment[];
    onLoaded?: () => void;
}) {
    const endRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'instant' });
        // window.scrollTo({ top: document.body.scrollHeight });
        if (onLoaded) {
            onLoaded();
        }
    }, []); // this could a problem if it scrolls on pagination

    var groups: CoreMessageFieldsFragment[][] = [];
    for (let i = 0; i < messages.length; i++) {
        const current: CoreMessageFieldsFragment = messages[i];
        const sender: CoreUserFieldsFragment = current.sender as any;

        var group: CoreMessageFieldsFragment[] = [];
        group.push(current);

        var createdAt: Date = new Date(current.createdAt as string);
        for (let j = i + 1; j < messages.length; j++) {
            const message: CoreMessageFieldsFragment = messages[j];
            const messenger: CoreUserFieldsFragment = message.sender as any;

            const date: Date = new Date(message.createdAt as string);
            if (
                sender.id != messenger.id ||
                Math.abs(createdAt.getUTCMinutes() - date.getUTCMinutes()) > 3
            ) {
                break;
            }
            group.push(message);
            i++;
            createdAt = date;
        }
        groups.push(group);
    }

    return (
        <>
            <div className="flex flex-1 flex-col-reverse justify-end items-stretch">
                <div ref={endRef} />
                {groups.map((group, i) => {
                    const sender: CoreUserFieldsFragment = group[0]
                        .sender as any;
                    return (
                        <div
                            key={i}
                            className="flex justify-start p-3"
                            style={{
                                flexDirection: sender.isMe
                                    ? 'row-reverse'
                                    : 'row',
                            }}
                        >
                            <div className="flex flex-col justify-end items-center">
                                <div
                                    className="flex flex-col justify-center items-center"
                                    style={{
                                        width: 40,
                                        height: 40,
                                    }}
                                >
                                    <ProfileImage user={sender} />
                                </div>
                            </div>
                            <div
                                className="flex flex-col-reverse items-start"
                                style={{
                                    alignItems: sender.isMe
                                        ? 'flex-end'
                                        : 'flex-start',
                                }}
                            >
                                {group.map((message, i) => {
                                    return (
                                        <Message key={i} message={message} />
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
            <NewMessage onSend={channelID} />
        </>
    );
}

export function Message({ message }: { message: CoreMessageFieldsFragment }) {
    const sender: CoreUserFieldsFragment = message.sender as any;

    return (
        <div className="flex justify-start p-1">
            <p
                className="flex justify-center items-center p-2"
                style={{
                    borderRadius: 10,
                    background: sender.isMe ? 'lightgrey' : '#d67953',
                    whiteSpace: 'pre-line',
                    color: sender.isMe ? 'black' : 'white',
                }}
            >
                {message.content}
            </p>
        </div>
    );
}

type ChannelID = string;

export function NewMessage({
    onSend,
}: {
    onSend: (message: string) => Promise<ChannelID>;
}) {
    const [create, { data, loading, error, reset }] = useMutation(
        MUTATION_CREATE_MESSAGE,
        { errorPolicy: 'all' },
    );

    const [content, setContent] = useState('');
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useAutosizeTextArea(textAreaRef.current, content);

    return (
        <div
            className="flex flex-row justify-center items-stretch mt-2"
            style={{
                position: 'sticky',
                bottom: 0,
                width: '100%',
                background: 'white',
            }}
        >
            <Emoji
                style={{ bottom: 50, left: 0 }}
                onSelect={(emoji) => setContent((content) => content + emoji)}
            />
            <div className="flex flex-1 flex-col m-1">
                <textarea
                    ref={textAreaRef}
                    className="p-1 px-2"
                    style={{
                        display: 'block',
                        resize: 'none',
                        borderRadius: 10,
                        // background: 'lightgrey',
                        border: '1px solid lightgrey',
                        overflow: 'hidden',
                    }}
                    rows={1}
                    onKeyDown={(e) => {
                        if (e.key == 'Enter' && !content) {
                            e.preventDefault();
                        }

                        if (e.key == 'Enter' && !e.shiftKey && content) {
                            e.preventDefault();
                            onSend(content)
                                .then((channelID: ChannelID) =>
                                    create({
                                        variables: {
                                            input: {
                                                channelID: channelID,
                                                content: content,
                                                contentType: ContentType.Text,
                                            },
                                        },
                                        update(cache, { data }) {
                                            const ok = cache.modify({
                                                id: cache.identify({
                                                    __typename: 'Channel',
                                                    id: channelID,
                                                }),
                                                fields: {
                                                    messages(
                                                        existing = {},
                                                        { readField },
                                                    ) {
                                                        const messages: any[] =
                                                            readField(
                                                                'messages',
                                                                existing,
                                                            ) as any;

                                                        const newMessageRef =
                                                            cache.writeFragment(
                                                                {
                                                                    data: data?.messageCreate as CoreMessageFieldsFragment,
                                                                    fragment:
                                                                        CoreMessageFieldsFragmentDoc,
                                                                    fragmentName:
                                                                        'CoreMessageFields',
                                                                },
                                                            );
                                                        existing.messages = [
                                                            newMessageRef,
                                                            ...messages,
                                                        ];
                                                    },
                                                },
                                            });
                                            console.log('cache ok', ok);
                                        },
                                    }),
                                )
                                .then((data) => {
                                    console.log('sent message', data);
                                })
                                .catch((err) => {
                                    console.error('[createPost]', err);
                                });
                            setContent('');
                        }
                    }}
                    onChange={(e) => {
                        console.log('onChange', e.target.value);
                        setContent(e.target.value);
                    }}
                    value={content}
                    placeholder="Aa"
                />
            </div>
        </div>
    );
}
