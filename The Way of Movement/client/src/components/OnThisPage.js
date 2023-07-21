import React from 'react';

export function OnThisPage({ sections }) {
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

  if (!sections || sections.length === 0) {
    return <div>No sections available.</div>;
  }

  const links = sections.map((section) => {
    // const isActive = section.title === activeSection;

    return (
      <li key={section.id}>
        <a href={`#${section.title}`} //className={isActive ? 'active' : ''}
        >
          {section.title}
        </a>
      </li >
    );
  });

  return (
    <nav className="on-this-page">
      <h3>On This Page</h3>
      <ul>{links}</ul>
    </nav>
  );
}