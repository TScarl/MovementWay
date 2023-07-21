// import React from 'react';
// import { useQuery } from '@apollo/client';
// import { OnThisPage } from '../../components/OnThisPage';
// import { BlogArchive } from '../../components/BlogArchive';
// import { GET_BLOG_CONTENT_BY_TITLE } from '../../utils/queries';

// export default function Movement101({ title }) {
//     const { loading, error, data } = useQuery(GET_BLOG_CONTENT_BY_TITLE, {
//         variables: { title },
//       });
    
//       if (loading) {
//         return <div>Loading...</div>;
//       }
    
//       if (error) {
//         console.error(error);
//         return <div>Error loading content.</div>;
//       }
    
//       const { postsbyPage } = data;
//       const blogData = postsbyPage && postsbyPage.length > 0 ? postsbyPage[0] : null;
//       const { content, sections } = blogData || {};

//     //   const title = 'Movement101';

//     return (
//         <div className="blog-container">
//                   <BlogArchive activePostId={title} />

//             <main className="blog-content">
//                 <div dangerouslySetInnerHTML={{ __html: content }} />
//                 <Movement101 title={title} />
//             </main>
//             <aside>
//                 <OnThisPage sections={sections} />
//             </aside>
//         </div>
//     );
// }