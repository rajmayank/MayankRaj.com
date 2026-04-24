import React, { useEffect } from "react";
import PropTypes from "prop-types";

import Seo from "./Seo";

const RedirectPage = ({
  to,
  title,
  description,
  delayMs = 150,
  linkLabel = "Continue",
}) => {
  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      window.location.replace(to);
    }, delayMs);

    return () => window.clearTimeout(timeoutId);
  }, [delayMs, to]);

  return (
    <main className="mx-auto flex min-h-[40vh] w-full max-w-container-md flex-col items-center justify-center px-6 text-center font-primary">
      <h1 className="text-[2.4rem] font-semibold leading-tight text-front">
        Redirecting...
      </h1>
      <p className="mt-4 max-w-[42rem] text-[1.7rem] leading-[1.6] text-front-muted">
        {description}
      </p>
      <p className="mt-8 text-[1.6rem]">
        <a
          href={to}
          className="font-medium text-accent underline hover:no-underline"
        >
          {linkLabel}
        </a>
      </p>
    </main>
  );
};

RedirectPage.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  delayMs: PropTypes.number,
  linkLabel: PropTypes.string,
};

export const buildRedirectHead = ({ title, description, to }) => (
  <Seo title={title} description={description}>
    <meta httpEquiv="refresh" content={`0;url=${to}`} />
    <meta name="robots" content="noindex" />
    <link rel="canonical" href={to} />
  </Seo>
);

export default RedirectPage;
