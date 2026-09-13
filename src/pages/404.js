import React from "react";
import { Link } from "gatsby";
import Seo from "../components/common/Seo";
import background from "../assets/images/404-bg.gif";

export default function NotFoundPage() {
  return (
    <main
      className="relative flex min-h-screen items-center justify-center bg-zinc-950 bg-cover bg-center px-6 text-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgb(0 0 0 / .65), rgb(0 0 0 / .8)), url(${background})`,
      }}
    >
      <div className="max-w-reading">
        <h1 className="text-section">
          Have you tried refreshing the page again?
        </h1>
        <p className="mt-6 text-body">
          Go{" "}
          <Link to="/" className="brand-link inline-block py-3">
            home
          </Link>
        </p>
      </div>
    </main>
  );
}
export const Head = () => (
  <Seo
    title="Page not found"
    pathname="/404/"
    meta={[{ name: "robots", content: "noindex" }]}
  />
);
