import React from "react";
import { Footer } from './components/footer'
import { Header } from './components/header';
// navigation component is within header component


// The Layout component receives a 'children' prop, which represents the content to be rendered inside the layout.
// In React, the 'children' prop allows you to pass arbitrary JSX elements as children of a component.
export default function Layout({ children }) {
    return (
        <>
        <Header />
        {children}
        <Footer />
      </>
    );
  }
