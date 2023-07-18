import React from 'react';
import { Link } from 'react-router-dom';

export function BlogArchive({ activePostTitle }) {
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
            <Link to={`/blog/${post.title}`} className={post.title === activePostTitle ? 'active' : ''}>
              {post.title}
            </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};