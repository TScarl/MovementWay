import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { BlogArchive } from '../components/BlogArchive';
import { QUERY_POSTS } from '../utils/queries';

export default function Blog() {
    const { _id } = useParams();

    const { loading, error, data } = useQuery(QUERY_POSTS, {
        variables: { _id },
    });

    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        const blogPosts = data?.getPosts || [];
        setSelectedPost(blogPosts.find(post => post._id));
    }, [data]);

    const handleBlogPostClick = (postId) => {
        setSelectedPost(data.getPosts.find((post) => post._id === postId));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading content.</div>;
    }

    console.log('_id:', _id);
    console.log('data:', data);
    console.log('error:', error);
    console.log("SP", selectedPost);

    return (
        <div className="blog-container">
            <BlogArchive activeBlogTitle={_id} blogPosts={data.getPosts} onBlogPostClick={handleBlogPostClick} />
            <main className="blog-content">
                {selectedPost ? (
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
                    </div>
                ) : (
                    <p>Select a blog post from the archive to view its content.</p>
                )}
            </main>
        </div>
    );
}