import React from "react";
import PropTypes from "prop-types";

/**
 * Responsive flex container that adjusts width according to screen size
 * Houses primary content like bio section, blog listings, and blog content
 *
 * Supports both SCSS classes (default) and Tailwind utility alternatives
 */
const ContentContainer = ({
  children,
  maxWidth = "default",
  className = "",
  as = "div",
  useTailwind = false,
  ...props
}) => {
  const Component = as;

  let containerClass;

  if (useTailwind) {
    // Tailwind utility class alternatives
    const tailwindClasses = {
      default: "tw-content-container",
      narrow: "tw-content-container-narrow",
      wide: "tw-content-container-wide",
      full: "tw-content-container-full",
    };
    containerClass = `${
      tailwindClasses[maxWidth] || tailwindClasses.default
    } ${className}`.trim();
  } else {
    // Original SCSS classes (preserved for backward compatibility)
    containerClass = `content-container ${
      maxWidth !== "default" ? `content-container--${maxWidth}` : ""
    } ${className}`.trim();
  }

  return (
    <Component className={containerClass} {...props}>
      {children}
    </Component>
  );
};

ContentContainer.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.oneOf(["default", "narrow", "wide", "full"]),
  className: PropTypes.string,
  as: PropTypes.string,
  useTailwind: PropTypes.bool,
};

export default ContentContainer;
