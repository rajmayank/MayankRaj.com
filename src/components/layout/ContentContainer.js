import React from "react";

const widths = {
  reading: "max-w-reading",
  wide: "max-w-wide",
  full: "max-w-none",
};

export default function ContentContainer({
  children,
  width = "reading",
  as: Component = "div",
  className = "",
  ...props
}) {
  return (
    <Component
      className={`mx-auto w-full px-5 sm:px-8 ${widths[width] || widths.reading} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
