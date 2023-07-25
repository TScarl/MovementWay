import React from 'react';
import { Link } from 'react-router-dom';

  export function BlogArchive({ activeBlogTitle, blogPosts, onBlogPostClick }) {
  return (
    <div className="blog-archive">
      <h3>Blog Archive</h3>
      <ul>
        {blogPosts.map((post) => (
          <li key={post._id}>
            <Link to={`/blog/${post._id}`} onClick={() => onBlogPostClick(post._id)}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};