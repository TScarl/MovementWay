import React from 'react';

export function BlogArchive({ activePostId }) {
    const blogPosts = [
        { id: 1, title: 'Movement101' },
        { id: 2, title: 'MovementNutrition' },

    ];

    return (
        <div className="blog-archive">
            <h3>Blog Archive</h3>
            <ul>
                {blogPosts.map((post) => (
                    <li key={post.id}>
                        <a href={`/blog/${post.id}`} className={post.id === activePostId ? 'active' : ''}>
                            {post.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};