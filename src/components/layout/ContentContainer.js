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
  const containerClass = `content-container ${
    maxWidth !== "default" ? `content-container--${maxWidth}` : ""
  } ${className}`.trim();

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
