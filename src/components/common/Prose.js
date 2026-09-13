import React from "react";

export default function Prose({
  as: Component = "div",
  className = "",
  ...props
}) {
  return (
    <Component
      className={`prose min-w-0 max-w-none text-left ${className}`}
      {...props}
    />
  );
}
