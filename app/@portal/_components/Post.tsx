import {
    CorePostFieldsFragment,
    CoreUserFieldsFragment,
} from '@/gql/__generated__/graphql';
import ProfileImage from './ProfileImage';
import Endorsed from '@/components/svg/Endorsed';

export default function Post({ post }: { post: CorePostFieldsFragment }) {
    const author: CoreUserFieldsFragment =
        post.author as CoreUserFieldsFragment;

    return (
        <div
            className="flex justify-start flex-row items-stretch p-5"
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
                <p className="">
                    {author.name}{' '}
                    <a style={{ fontWeight: 'bold' }}>@{author.username}</a>
                </p>
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
            </div>
        </div>
    );
}
