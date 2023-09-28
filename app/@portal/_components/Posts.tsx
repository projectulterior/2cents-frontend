import { useQuery } from '@apollo/client';
import Post from './Post';
import { QUERY_GET_POSTS } from '@/gql/post';
import Loading from '@/components/Loading';
import { CorePostFieldsFragment } from '@/gql/__generated__/graphql';
import { ReactNode, useEffect, useRef, useState } from 'react';

export default function Posts({
    id,
    children,
}: {
    id?: string;
    children?: ReactNode;
}) {
    const { loading, data, error, fetchMore } = useQuery(QUERY_GET_POSTS, {
        variables: {
            id: id,
            page: {
                cursor: '',
                limit: 10,
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

            // console.log({
            //     scroll,
            //     offset,
            //     height,
            // });
        }

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (
            scroll.offset + scroll.scroll >= scroll.height &&
            !loading &&
            data?.posts.next
        ) {
            fetchMore({
                variables: {
                    page: { cursor: data?.posts.next, limit: 10 },
                },
            });
            console.log('next', data?.posts.next);
        }
    }, [loading, scroll]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        // console.error('[Posts]', error);
    }

    const posts: CorePostFieldsFragment[] = data?.posts.posts as any;

    return (
        <div>
            {children}
            {posts.map((post, i) => (
                <Post key={i} post={post} />
            ))}
        </div>
    );
}
