import React from 'react';

export function OnThisPage({ sections }) {

  if (!sections || sections.length === 0) {
    return <div>No sections available.</div>;
  }

  const links = sections.map((section) => {
    // const isActive = section.title === activeSection;

    return (
      <li key={section.id}>
        {/* The link is an anchor link that points to the section using the section's 'title' as the anchor */}
        <a href={`#${section.title}`} /*className={isActive ? 'active' : ''}*/>
          {section.title}
        </a>
      </li>
    );
  });

  // The component renders a navigation menu ('On This Page') containing the list of links to different sections on the page
  // If the 'sections' prop is not provided or if it is an empty array, a message indicating no sections available is displayed

  return (
    <nav className="on-this-page">
      <h3>On This Page</h3>
      {/* The list of links for each section */}
      <ul>{links}</ul>
    </nav>
  );
}

  // const [activeSection, setActiveSection] = useState('');

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  //     let currentSection = '';

  //     if (sections && Array.isArray(sections)) {
  //       sections.forEach((section) => {
  //         if (section && section.offsetTop && section.offsetHeight && section.title) {

  //           if (scrollPosition >= section.offsetTop - section.offsetHeight / 2) {
  //             currentSection = section.title;
  //       }
  //     }
  //   });
  // }

  //     setActiveSection(currentSection);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [sections]);