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

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {},
            },
        },
    }),
});

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex min-h-screen flex-row justify-center items-stretch">
            <Sidebar />
            <ApolloProvider client={client}>
                <div
                    className="flex flex-col items-stretch"
                    style={{
                        flex: 3,
                        maxWidth: 1000,
                        // background: 'black',
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    {children}
                </div>
                <div className="sidebar flex flex-1 flex-col">
                    <h1>hello</h1>
                </div>
            </ApolloProvider>
        </main>
    );
}
