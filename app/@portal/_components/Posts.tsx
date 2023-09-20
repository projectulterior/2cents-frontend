import { useQuery } from '@apollo/client';
import Post from './Post';
import { QUERY_GET_POSTS } from '@/gql/post';
import Loading from '@/components/Loading';
import { CorePostFieldsFragment } from '@/gql/__generated__/graphql';
import { ReactNode, useRef } from 'react';

export default function Posts({ children }: { children?: ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);

    const { loading, data, error, fetchMore } = useQuery(QUERY_GET_POSTS, {
        variables: {
            page: {
                cursor: '',
                limit: 10,
            },
        },
        errorPolicy: 'all',
    });

    if (loading) {
        return <Loading />;
    }

    if (error) {
        console.error('[Posts]', error);
    }

    const posts: CorePostFieldsFragment[] = data?.posts.posts as any;

    return (
        <div
            ref={ref}
            style={{ overflow: 'scroll' }}
            onScroll={(e) => {
                const offset = ref.current?.offsetHeight ?? 0;
                const height = e.currentTarget.scrollHeight;
                const scroll = e.currentTarget.scrollTop;

                if (offset + scroll >= height && !loading && data?.posts.next) {
                    fetchMore({
                        variables: {
                            page: { cursor: data?.posts.next, limit: 10 },
                        },
                    });
                    console.log('bottom', data?.posts.next);
                }
            }}
        >
            {children}
            <div style={{}}>
                {posts.map((post, i) => (
                    <Post key={i} post={post} />
                ))}
            </div>
        </div>
    );
}
