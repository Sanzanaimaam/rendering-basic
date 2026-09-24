import React from 'react';
import Post from '../components/posts';

const PostPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()

    return (
        <div>
            <h2>post: {posts.length}</h2>
            <div className=' grid grid-cols-3 gap-4'>
                {
                    posts.map(api => (
                        <Post key={api.id} post={api}></Post>
                    ))
                }
            </div>
        </div>
    );
};

export default PostPage;