import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// creates style to be used on the active section
const StyledLink = styled.a`
&.active {
  background-color: var(--secondary);
  color: var(--light);
}
`;

export function OnThisPage({ sections }) {
  const [activeSection, setActiveSection] = useState('');

  // Effect to highlight the blog section that the user has scrolled to (not working currently).
  useEffect(() => {
    const handleScroll = () => {
      // Detects the current scroll position on the page.
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      // sets the section title to be highlighted
      let currentSection = '';

      // Iterates through each section to find the active one based on scroll position.
      sections.forEach((section) => {
        // uses the top of the current section to define which section user is in
        const sectionTop = section.offsetTop;
        // discerns the height of a section (from top to bottom)
        const sectionHeight = section.offsetHeight;

        // Sets the new current section if the user has scrolled more than half way to a new section.
        if (scrollPosition >= sectionTop - sectionHeight / 2) {
          currentSection = section.title;
        }
      });

      // Updates the active section state with the currentSection.
      setActiveSection(currentSection);
    };

    // the window listens for scrolling and applies the handleScroll function
    window.addEventListener('scroll', handleScroll);

    return () => {
    // removes the previous section title
    window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  // maps all of the sections and uses the section.title to highlight the active/displayed section
  const links = sections.map((section) => {
    const isActive = section.title === activeSection;

    return (
      // Uses the section's id as the key to identify the section in the list.
      <li key={section.id}>
        {/* Applies style to the section title. section.title is displayed in the url. isActive checks which section is active */}
        <StyledLink href={`#${section.title}`} className={isActive ? 'active' : ''}>
          {section.title}
        </StyledLink>
      </li>
    );
  });

  return (
    <nav className="on-this-page">
      <h3>On This Page</h3>
      <ul>{links}</ul>
    </nav>
  );
}