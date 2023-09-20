'use client';

import { useEffect, useRef, useState } from 'react';
import Sidebar from './_components/Sidebar';
import Header from './_components/Header';
import ProfileImage from './_components/ProfileImage';
import { useQuery } from '@apollo/client';
import { QUERY_GET_USER } from '@/gql/user';
import { CoreUserFieldsFragment } from '@/gql/__generated__/graphql';
import Loading from '@/components/Loading';
import Post from './_components/Post';
import Posts from './_components/Posts';

export default function () {
    return (
        <>
            <Header name="Home" />
            <div style={{ overflow: 'scroll' }}>
                <CreatePost />
                <PostLists />
            </div>
        </>
    );
}

function CreatePost() {
    const [content, setContent] = useState('');
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useAutosizeTextArea(textAreaRef.current, content);

    const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
        const val = evt.target?.value;

        setContent(val);
    };

    const { loading, data, error, fetchMore } = useQuery(QUERY_GET_USER, {
        variables: {},
        errorPolicy: 'all',
    });

    if (loading) {
        return <Loading />;
    }

    const user: CoreUserFieldsFragment = data?.user as any;

    return (
        <div
            className="flex flex-col justify-start items-stretch my-10"
            style={{ minHeight: 100, borderBottom: '1px solid lightgrey' }}
        >
            <div
                className="flex items-stretch"
                style={{
                    // background: 'pink',
                    height: '100%',
                    // borderBottom: '1px solid lightgrey',
                }}
            >
                <div
                    className="flex justify-start flex-col"
                    style={{ width: 75, height: 75 }}
                >
                    <ProfileImage user={user} />
                </div>
                <div className="flex flex-1 flex-col px-3">
                    <textarea
                        ref={textAreaRef}
                        className=" p-5"
                        style={{
                            display: 'block',
                            minHeight: 100,
                            resize: 'none',
                            borderRadius: 10,
                            // background: 'lightgrey',
                            border: '1px solid lightgrey',
                            overflow: 'hidden',
                        }}
                        rows={1}
                        onChange={handleChange}
                        content={content}
                        placeholder="What's your 2cents?"
                    />
                    <div className="flex justify-end p-3">
                        <button
                            style={{
                                background: '#d67953',
                                padding: '5px 15px 5px 15px',
                                borderRadius: 5,
                            }}
                        >
                            <p>Post</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Updates the height of a <textarea> when the value changes.
function useAutosizeTextArea(
    textAreaRef: HTMLTextAreaElement | null,
    value: string,
) {
    useEffect(() => {
        if (textAreaRef) {
            // We need to reset the height momentarily to get the correct scrollHeight for the textarea
            textAreaRef.style.height = '0px';
            const scrollHeight = textAreaRef.scrollHeight;

            // We then set the height directly, outside of the render loop
            // Trying to set this with state or a ref will product an incorrect value.
            textAreaRef.style.height = scrollHeight + 'px';
        }
    }, [textAreaRef, value]);
}

function PostLists() {
    return <Posts />;
}
