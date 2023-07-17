import React from "react";
import { Footer } from './components/footer'
import { Header } from './components/header';
// navigation component is within header component

export default function Layout({ children }) {
    return (
        <>
        <Header />
        {children}
        <Footer />
      </>
    );
  }
