import './Post.css';
import {
    CorePostFieldsFragment,
    CoreUserFieldsFragment,
} from '@/gql/__generated__/graphql';
import ProfileImage from './ProfileImage';
import Endorsed from '@/components/svg/Endorsed';
import Link from 'next/link';

const MAX_CONTENT_LENGTH = 1000;

export default function Post({ post }: { post: CorePostFieldsFragment }) {
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
                <p className="py-5" style={{ whiteSpace: 'pre-line' }}>
                    {(post.content?.length ?? 0) < MAX_CONTENT_LENGTH
                        ? post.content
                        : post.content?.slice(0, MAX_CONTENT_LENGTH) + ' ...'}
                </p>
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
            </div>
        </Link>
    );
}
