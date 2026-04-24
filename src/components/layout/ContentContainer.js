import React from "react";
import PropTypes from "prop-types";

/**
 * Responsive flex container that adjusts width according to screen size
 * Houses primary content like bio section, blog listings, and blog content
 */
const ContentContainer = ({
  children,
  maxWidth = "default",
  className = "",
  as = "div",
  ...props
}) => {
  const Component = as;
  const tailwindClasses = {
    default:
      "mx-auto w-full px-2.5 sm:max-w-container-sm md:max-w-container-md lg:max-w-container-lg xl:max-w-container-xl",
    narrow:
      "mx-auto w-full px-2.5 sm:max-w-container-narrow-sm md:max-w-container-narrow-md lg:max-w-container-narrow-lg xl:max-w-container-narrow-xl",
    wide:
      "mx-auto w-full px-2.5 sm:max-w-container-wide-sm md:max-w-container-wide-md lg:max-w-container-wide-lg xl:max-w-container-wide-xl",
    full: "mx-auto w-full px-2.5 max-w-full",
  };

  const containerClass = `${tailwindClasses[maxWidth] || tailwindClasses.default} ${className}`.trim();

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
};

export default ContentContainer;
