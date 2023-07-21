import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { OnThisPage } from '../../components/OnThisPage';
import { BlogArchive } from '../../components/BlogArchive';
import { GET_BLOG_CONTENT_BY_TITLE } from '../../utils/queries';

export default function BlogContent() {
    const { title } = useParams();

    const { loading, error, data } = useQuery(GET_BLOG_CONTENT_BY_TITLE, {
        variables: { title },
    });

    const sectionRefs = useRef({});

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.error(error);
        return <div>Error loading content.</div>;
    }

    const { getPosts } = data;
    const blogData = getPosts && getPosts.length > 0 ? getPosts[0] : null;
    const { sections } = blogData || {};

    console.log('title:', title);
    console.log('data:', data);
    console.log('error:', error);

    return (
        <div className="blog-container">
            <BlogArchive activePostId={title} />
            <main className="blog-content">
                {sections &&
                    sections.map((section, index) => (
                        <div key={index} ref={(el) => (sectionRefs.current[`section${index + 1}Ref`] = el)}>
                            <h2 dangerouslySetInnerHTML={{ __html: section.title }} />
                            <div dangerouslySetInnerHTML={{ __html: section.content }} />
                        </div>
                    ))}
            </main>
            <aside>
                <OnThisPage sections={Object.values(sectionRefs.current)} />
            </aside>
        </div>
    );
}

