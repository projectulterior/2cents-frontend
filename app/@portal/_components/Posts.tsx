import Post from './Post';

export default function Posts({}: {}) {
    const POST: any = {
        id: 'hello',
        content: 'very very very very very very very very long',
        author: { name: 'Soung Bae Kim', username: 'sbkim1' },
    };

    return (
        <div style={{}}>
            <Post post={POST} />
            <Post post={POST} />
            <Post post={POST} />
            <Post post={POST} />
            <Post post={POST} />
            <Post post={POST} />
            <Post post={POST} />
            <Post post={POST} />
        </div>
    );
}
