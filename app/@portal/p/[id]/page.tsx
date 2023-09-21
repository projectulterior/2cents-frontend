'use client';

import Header from '../../_components/Header';

export default function ({ params }: { params: { id: string } }) {
    const { loading, data, error, fetchMore } = useQuery(QUERY_GET_POST, {
        variables: {
            id: params.id,
        },
        errorPolicy: 'all',
    });

    if (loading) {
        return <Loading />;
    }

    const post: CorePostFieldsFragment = data?.post as any;

    return (
        <>
            <Header name="Post" isBack />
            <div style={{}}>
                <Post post={post} />
            </div>
        </>
    );
}

import {
    CorePostFieldsFragment,
    CoreUserFieldsFragment,
} from '@/gql/__generated__/graphql';
import ProfileImage from '../../_components/ProfileImage';
import Endorsed from '@/components/svg/Endorsed';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import Loading from '@/components/Loading';
import { QUERY_GET_POST } from '@/gql/post';

const MAX_CONTENT_LENGTH = 1000;

function Post({ post }: { post: CorePostFieldsFragment }) {
    const author: CoreUserFieldsFragment =
        post.author as CoreUserFieldsFragment;

    return (
        <Link
            href={`/p/${post.id}`}
            className="post flex justify-start flex-row items-stretch p-5"
            style={{ borderBottom: '1px solid lightgrey' }}
        >
            <div
                className="flex justify-start flex-col"
                style={{ width: 75, height: 75 }}
            >
                <ProfileImage user={author} />
            </div>
            <div
                className="flex flex-col px-3"
                style={{
                    flex: 9,
                    // background: 'pink',
                }}
            >
                <Link href={`/u/${author.id}`}>
                    <p className="hover">
                        {author.name}{' '}
                        <a style={{ fontWeight: 'bold' }}>@{author.username}</a>
                    </p>
                </Link>
                <p className="py-5">{post.content}</p>
                <div
                    className="flex flex-row items-center"
                    // style={{ background: 'yellow' }}
                >
                    <div className="flex flex-row justify-start items-center px-3">
                        <Endorsed key={post.id} isMarked size={40} />
                        <p>30</p>
                    </div>
                    <div className="flex flex-row justify-start items-center px-3">
                        <Endorsed key={post.id} isMarked size={40} />
                        <p>30</p>
                    </div>
                </div>
                <div>
                    <h1>Comments</h1>
                </div>
            </div>
        </Link>
    );
}
