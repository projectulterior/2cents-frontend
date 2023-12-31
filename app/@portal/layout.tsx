'use client';

import Sidebar from './_components/Sidebar';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';

const httpLink = createHttpLink({
    uri: `/api/graphql`,
    credentials: 'same-origin',
});

export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    posts: {
                        keyArgs: ['id'],
                        merge(existing = { posts: [] }, incoming) {
                            return {
                                posts: [...existing.posts, ...incoming.posts],
                                next: incoming.next,
                            };
                        },
                    },
                },
            },
            Channel: {
                keyFields: ['id'],
                fields: {
                    messages: {
                        keyArgs: false, // TODO: no longer updates on channels if false
                        merge(
                            existing = { messages: [] },
                            incoming = { messages: [], next: '' },
                            { readField },
                        ) {
                            const messages = readField('messages', existing);

                            console.log(
                                'channel messages merge',
                                existing,
                                incoming,
                            );
                            console.log(
                                'channel messages merge messages',
                                messages,
                            );
                            return {
                                messages: [
                                    ...existing.messages,
                                    ...incoming.messages,
                                ],
                                next: incoming.next,
                            };
                        },
                    },
                },
            },

            // Messages: {
            //     fields: {
            //         messages: {
            //             merge(existing = [], incoming) {
            //                 console.log('messages merge', existing, incoming);
            //                 return [...existing, ...incoming];
            //             },
            //         },
            //         next: {
            //             merge(existing, incoming) {
            //                 console.log('next merge', existing, incoming);
            //                 return incoming;
            //             },
            //         },
            //     },
            // },
        },
    }),
});

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex min-h-screen flex-row justify-center items-stretch">
            <Sidebar />
            <ApolloProvider client={client}>
                <div
                    className="flex flex-1 flex-col justify-start items-stretch"
                    style={{
                        flex: 3,
                        maxWidth: 900,
                        // minHeight: '100vh',
                        // background: 'green',
                        // overflow: 'hidden',
                        position: 'relative',
                    }}
                >
                    {children}
                </div>
                <div className="sidebar flex flex-1 flex-col">
                    <div style={{ position: 'sticky', top: 0 }}>
                        <h1>hello</h1>
                    </div>
                </div>
            </ApolloProvider>
        </main>
    );
}
