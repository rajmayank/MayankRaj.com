import React from "react";
import Footer from "./Footer";

export default function PageLayout({ header, children }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[500] focus:rounded focus:bg-white focus:p-4"
      >
        Skip to content
      </a>
      {header}
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  );
}
