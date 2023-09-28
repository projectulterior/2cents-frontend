'use client';

import Header from '@/app/@portal/_components/Header';
import Loading from '@/components/Loading';
import {
    CoreChannelFieldsFragment,
    CoreMessageFieldsFragment,
    CoreUserFieldsFragment,
} from '@/gql/__generated__/graphql';
import { QUERY_GET_CHANNEL } from '@/gql/channel';
import { useQuery } from '@apollo/client';
import Messages, { NewMessage } from '../../_components/Messages';
import { names } from '../../_components/Channels';
import { useEffect, useState } from 'react';

export default function ({ params }: { params: { id: string } }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [scrollHeight, setScrollHeight] = useState(0);

    const { loading, data, error, fetchMore } = useQuery(QUERY_GET_CHANNEL, {
        variables: {
            id: params.id,
            messagesPage: {
                cursor: '',
                limit: 50,
            },
        },
        errorPolicy: 'all',
    });

    type Scroll = { scroll: number; height: number; offset: number };
    const [scroll, setScroll] = useState<Scroll>({
        scroll: -1,
        offset: -1,
        height: 0,
    });

    useEffect(() => {
        function onScroll(e: any) {
            const scroll = e.currentTarget.scrollY;
            const offset = e.currentTarget.innerHeight;
            const height = document.body.scrollHeight;

            setScroll({
                height,
                scroll,
                offset,
            });

            console.log({
                scroll,
                offset,
                height,
            });
        }

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const channel: CoreChannelFieldsFragment = data?.channel as any;
        const next: string = channel?.messages?.next as any;
        if (
            scroll.scroll <= 0 &&
            // scroll.scroll + scroll.offset >= scroll.height &&
            !loading &&
            next &&
            isLoaded
        ) {
            console.log('useEffect next', next);

            setScrollHeight(document.body.scrollHeight);
            fetchMore({
                variables: {
                    id: params.id,
                    messagesPage: {
                        cursor: next,
                        limit: 30,
                    },
                },
            });
        }
    }, [loading, scroll, isLoaded]);

    useEffect(() => {
        console.log('offset', document.body.scrollHeight - scrollHeight);
        if (!loading) {
            if (scrollHeight) {
                window.scrollTo({
                    top: document.body.scrollHeight - scrollHeight,
                });
                setScrollHeight(0);
            }
        }
    }, [data]);

    if (loading) {
        return <Loading />;
    }

    const channel: CoreChannelFieldsFragment = data?.channel as any;
    const members: CoreUserFieldsFragment[] = channel.members as any;
    const messages: CoreMessageFieldsFragment[] = channel.messages
        ?.messages as any;

    console.log('messsages', messages);

    return (
        <>
            <Header
                name={names(members).reduce(
                    (previous, current, i, array) => `${previous} ${current}`,
                )}
                isBack
            />
            {/* <button
                onClick={() => {
                    console.log('fetchMore', channel.messages?.next);
                    fetchMore({
                        variables: {
                            page: {
                                cursor: channel.messages.next,
                                limit: 10,
                            },
                        },
                    });
                }}
            >
                more
            </button> */}
            <Messages
                channelID={params.id}
                messages={messages}
                onLoaded={() => setIsLoaded(true)}
            />
        </>
    );
}
