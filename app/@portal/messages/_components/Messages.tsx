'use client';

import {
    ContentType,
    CoreMessageFieldsFragment,
    CoreMessageFieldsFragmentDoc,
    CoreUserFieldsFragment,
} from '@/gql/__generated__/graphql';
import { useRef, useState } from 'react';
import { useAutosizeTextArea } from '../../(home)/page';
import Emoji from '../../_components/Emoji';
import { useMutation } from '@apollo/client';
import { MUTATION_CREATE_MESSAGE } from '@/gql/channel';
import ProfileImage from '../../_components/ProfileImage';

export default function Messages({
    channelID,
    messages,
}: {
    channelID: string;
    messages: CoreMessageFieldsFragment[];
}) {
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
            <div className="flex flex-1 flex-col-reverse justify-start items-stretch">
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
            <NewMessage onSend={() => Promise.resolve(channelID)} />
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

export function NewMessage({
    onSend,
}: {
    onSend: (message: string) => Promise<string>;
}) {
    const [create, { data, loading, error, reset }] = useMutation(
        MUTATION_CREATE_MESSAGE,
        {
            errorPolicy: 'all',
            update(cache, { data }) {
                cache.modify({
                    fields: {
                        messages(existing = {}) {
                            const newMessageRef = cache.writeFragment({
                                data: data?.messageCreate as CoreMessageFieldsFragment,
                                fragment: CoreMessageFieldsFragmentDoc,
                                fragmentName: 'CoreMessageFields',
                            });
                            return {
                                messages: {},
                                ...existing,
                            };
                        },
                    },
                });
            },
        },
    );

    const [content, setContent] = useState('');
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useAutosizeTextArea(textAreaRef.current, content);

    return (
        <div
            className="flex flex-row justify-center items-stretch"
            style={{
                borderBottom: '1px solid lightgrey',
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
            <div className="flex flex-1 flex-col">
                <textarea
                    ref={textAreaRef}
                    className="p-1"
                    style={{
                        display: 'block',
                        resize: 'none',
                        borderRadius: 2,
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
                                .then((channelID: string) =>
                                    create({
                                        variables: {
                                            input: {
                                                channelID: channelID,
                                                content: content,
                                                contentType: ContentType.Text,
                                            },
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
