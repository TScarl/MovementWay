import React from 'react';
import { Link } from 'react-router-dom';

// BlogArchive component displays a list of blog posts as links in a sidebar
// Props:
// - activeBlogTitle: The title of the currently active blog post (optional)
// - blogPosts: An array of blog posts to display in the archive
// - onBlogPostClick: Callback function to handle clicking on a blog post link

export function BlogArchive({ activeBlogTitle, blogPosts, onBlogPostClick }) {
  return (
    <div className="blog-archive">
      <h3>Blog Archive</h3>
      <ul>
        {/* Map through the blogPosts array and create a list item for each blog post */}
        {blogPosts.map((post) => (
          <li key={post._id}>
            {/* Render a Link component for each blog post to navigate to its details page */}
            {/* Set the link to `/blog/{post._id}` and call onBlogPostClick when clicked */}
            <Link to={`/blog/${post._id}`} onClick={() => onBlogPostClick(post._id)}>
              {/* Display the blog post title as the link text */}
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};