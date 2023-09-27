'use client';

import { useEffect, useRef, useState } from 'react';
import Header from '../_components/Header';
import ProfileImage from '../_components/ProfileImage';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_GET_USER } from '@/gql/user';
import {
    ContentType,
    CorePostFieldsFragment,
    CorePostFieldsFragmentDoc,
    CoreUserFieldsFragment,
    Visibility,
} from '@/gql/__generated__/graphql';
import Loading from '@/components/Loading';
import Posts from '../_components/Posts';
import { MUTATION_CREATE_POST } from '@/gql/post';
import Emoji from '../_components/Emoji';

export default function () {
    return (
        <>
            <Header name="Home" />
            <Posts>
                <CreatePost />
            </Posts>
        </>
    );
}

function CreatePost() {
    const [content, setContent] = useState('');
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useAutosizeTextArea(textAreaRef.current, content);

    const [create, { data, loading, error, reset }] = useMutation(
        MUTATION_CREATE_POST,
        {
            errorPolicy: 'all',
            update(cache, { data }) {
                cache.modify({
                    fields: {
                        posts(existing = []) {
                            const newPostRef = cache.writeFragment({
                                data: data?.postCreate as CorePostFieldsFragment,
                                fragment: CorePostFieldsFragmentDoc,
                                fragmentName: 'CorePostFields',
                            });
                            return {
                                posts: [newPostRef, ...existing.posts],
                                next: existing.next,
                            };
                        },
                    },
                });
            },
        },
    );

    const handleCreate = () =>
        create({
            variables: {
                input: {
                    content: content,
                    contentType: ContentType.Text,
                    visibility: Visibility.Public,
                },
            },
        })
            .then((data) => {
                console.log('[createPost]', data);
                // reset();
                setContent('');
            })
            .catch((err) => {
                console.error('[createPost]', err);
            });

    return (
        <div
            className="flex flex-col justify-start items-stretch px-3 mt-10"
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
                    <Profile />
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
                        onKeyDown={(e) => {
                            if (e.key == 'Enter' && !content) {
                                e.preventDefault();
                            }

                            if (e.key == 'Enter' && !e.shiftKey && content) {
                                e.preventDefault();
                                handleCreate();
                            }
                        }}
                        onChange={(e) => {
                            console.log('onChange', e.target.value);
                            setContent(e.target.value);
                        }}
                        value={content}
                        placeholder="What's your 2cents?"
                    />
                    <div className="flex justify-between p-3">
                        <Emoji
                            onSelect={(emoji) =>
                                setContent((content) => content + emoji)
                            }
                        />
                        <button
                            style={{
                                background:
                                    content == '' || loading
                                        ? 'lightgrey'
                                        : '#d67953',
                                padding: '5px 15px 5px 15px',
                                borderRadius: 5,
                            }}
                            onClick={handleCreate}
                            disabled={content == '' || loading}
                        >
                            {loading ? <Loading /> : <p>Post</p>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Updates the height of a <textarea> when the value changes.
export function useAutosizeTextArea(
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

function Profile() {
    const { loading, data, error, fetchMore } = useQuery(QUERY_GET_USER, {
        variables: {},
        errorPolicy: 'all',
    });

    if (loading) {
        return <Loading />;
    }

    const user: CoreUserFieldsFragment = data?.user as any;

    return <ProfileImage user={user} />;
}
