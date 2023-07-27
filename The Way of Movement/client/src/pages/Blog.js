import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { BlogArchive } from '../components/BlogArchive';
import { QUERY_POSTS } from '../utils/queries';

export default function Blog() {
    // Get the '_id' parameter from the URL using the 'useParams' hook
    const { _id } = useParams();

    // Fetch data from the GraphQL server using the 'useQuery' hook
    const { loading, error, data } = useQuery(QUERY_POSTS, {
        variables: { _id }, // Pass the '_id' as a variable to the GraphQL query
    });

    // State hook to manage the selected blog post
    const [selectedPost, setSelectedPost] = useState(null);

    // useEffect hook to update the selected blog post when data changes
    useEffect(() => {
        // Retrieve the blog posts data from the GraphQL response, or set it to an empty array if data is not available
        const blogPosts = data?.getPosts || [];
        
        // Find and set the selected post based on the '_id' parameter from the URL
        setSelectedPost(blogPosts.find(post => post._id === _id));
    }, [data, _id]); // The effect runs whenever 'data' or '_id' changes

    // Function to handle clicking on a blog post in the BlogArchive component
    const handleBlogPostClick = (postId) => {
        // Set the selected post based on the clicked blog post's ID
        setSelectedPost(data.getPosts.find((post) => post._id === postId));
    };

    // If data is loading, display a loading message
    if (loading) {
        return <div>Loading...</div>;
    }

    // If there is an error fetching the data, display an error message
    if (error) {
        return <div>Error loading content.</div>;
    }

    // Log the current '_id', 'data', 'error', and 'selectedPost' to the console for debugging purposes
    console.log('_id:', _id);
    console.log('data:', data);
    console.log('error:', error);
    console.log("SP", selectedPost);

    // Return the JSX for the Blog component
    return (
        <div className="blog-container">
            {/* Render the BlogArchive component, passing the active blog title, blogPosts data, and the click handler */}
            <BlogArchive activeBlogTitle={_id} blogPosts={data.getPosts} onBlogPostClick={handleBlogPostClick} />
            <main className="blog-content">
                {/* Conditional rendering based on whether a blog post is selected */}
                {selectedPost ? (
                    // If a post is selected, display its content using dangerouslySetInnerHTML
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
                    </div>
                ) : (
                    // If no post is selected, display a message to select a blog post
                    <p>Select a blog post from the archive to view its content.</p>
                )}
            </main>
        </div>
    );
}