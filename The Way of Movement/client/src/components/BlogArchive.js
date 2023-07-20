import React from 'react';
import { Link } from 'react-router-dom';

export function BlogArchive({ activeBlogTitle }) {
    // destined for the DB
    const blogPosts = [
        { id: 1, title: 'Movement101' },
        { id: 2, title: 'MovementNutrition' },

    ];

    return (
        <div className="blog-archive">
            <h3>Blog Archive</h3>
            <ul>
                {/* maps through all of the blogs */}
                {blogPosts.map((blog) => (
                    <li key={blog.id}>
                        {/* link to the blogs page and displays blog.title in the URL */}
            <Link to={`/blog/${blog.title}`} className={blog.title === activeBlogTitle ? 'active' : ''}>
              {blog.title}
            </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};