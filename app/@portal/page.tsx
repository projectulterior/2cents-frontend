'use client';

import { useState } from 'react';
import Sidebar from './_components/Sidebar';
import Header from './_components/Header';

export default function () {
    return (
        <>
            <Header name="Home" />
            <CreatePost />
        </>
    );
}

function CreatePost() {
    const [content, setContent] = useState('');

    return (
        <div className="flex justify-center bg-white">
            <h1>Create Post</h1>
        </div>
    );
}
