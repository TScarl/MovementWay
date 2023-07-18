import React, { useState, useEffect } from 'react';

export function OnThisPage({ sections }) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop - sectionHeight / 2) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  const links = sections.map((section) => {
    const isActive = section.id === activeSection;

    return (
      <li key={section.id}>
        <a href={`#${section.id}`} className={isActive ? 'active' : ''}>
          {section.title}
        </a>
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