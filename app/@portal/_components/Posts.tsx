import { useQuery } from '@apollo/client';
import Post from './Post';
import { QUERY_GET_POSTS } from '@/gql/post';
import Loading from '@/components/Loading';
import { CorePostFieldsFragment } from '@/gql/__generated__/graphql';
import { ReactNode, useEffect, useRef, useState } from 'react';

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

    const [height, setHeight] = useState(0);
    const [scroll, setScroll] = useState(0);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        function scroll(e: any) {
            const offset = ref.current?.scrollTop ?? 0;
            const height = ref.current?.scrollHeight ?? 0;
            const scrollY = e.currentTarget.scrollY;

            setHeight(height);
            setScroll(scrollY);
            setOffset(offset);

            console.log({ offset, height, scrollY });
            console.log('ref', offset + scrollY, height);
        }

        window.addEventListener('scroll', scroll);
        return () => window.removeEventListener('scroll', scroll);
    }, []);

    useEffect(() => {
        if (offset + scroll >= height - 1500 && !loading && data?.posts.next) {
            fetchMore({
                variables: {
                    page: { cursor: data?.posts.next, limit: 10 },
                },
            });
            console.log('next', data?.posts.next);
        }
    }, [loading, offset, height, scroll]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        console.error('[Posts]', error);
    }

    const posts: CorePostFieldsFragment[] = data?.posts.posts as any;

    return (
        <div ref={ref} style={{ overflow: 'auto' }}>
            {children}
            <div style={{}}>
                {posts.map((post, i) => (
                    <Post key={i} post={post} />
                ))}
            </div>
        </div>
    );
}
