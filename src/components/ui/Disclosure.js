import React from "react";

export default function Disclosure({ children }) {
  return (
    <details className="group border-b border-subtle py-2">
      <summary className="min-h-11 cursor-pointer py-2 font-semibold text-accent">
        <span className="group-open:hidden">Read more</span>
        <span className="hidden group-open:inline">Read less</span>
      </summary>
      <div className="pt-4">{children}</div>
    </details>
  );
}
