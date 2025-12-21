import React from "react";
import PropTypes from "prop-types";
import {
  FaFileLines,
  FaSquareJs,
  FaPython,
  FaAws,
  FaDocker,
  FaDrone,
  FaHeart,
  FaVideo,
  FaReact,
  FaRss,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

/**
 * Custom SVG icons that can't be replaced with Font Awesome
 */
const customIcons = {
  headerName: (
    <svg viewBox="0 0 140 80" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <text
        textAnchor="start"
        x="10"
        y="30"
        className="text text-stroke"
        clipPath="url(#text1)"
      >
        Mayank
      </text>
      <text
        textAnchor="start"
        x="10"
        y="70"
        className="text text-stroke"
        clipPath="url(#text2)"
      >
        Raj
      </text>
      <text
        textAnchor="start"
        x="10"
        y="30"
        className="text text-stroke --stroke-2"
        clipPath="url(#text1)"
      >
        Mayank
      </text>
      <text
        textAnchor="start"
        x="10"
        y="70"
        className="text text-stroke --stroke-2"
        clipPath="url(#text2)"
      >
        Raj
      </text>
      <defs>
        <clipPath id="text1">
          <text textAnchor="start" x="10" y="30" className="text">
            Mayank
          </text>
        </clipPath>
        <clipPath id="text2">
          <text textAnchor="start" x="10" y="70" className="text">
            Raj
          </text>
        </clipPath>
      </defs>
    </svg>
  ),
};

/**
 * Font Awesome icon mapping
 * All icons from react-icons/fa6 for consistency
 */
const iconMap = {
  resume: FaFileLines,
  javascript: FaSquareJs,
  python: FaPython,
  aws: FaAws,
  docker: FaDocker,
  drone: FaDrone,
  heart: FaHeart,
  videocall: FaVideo,
  react: FaReact,
  rss: FaRss,
  outboundLink: FaArrowUpRightFromSquare,
};

/**
 * Icon component for rendering Font Awesome icons and custom SVGs
 * Migrated from custom SVGs to react-icons for better tree-shaking and maintenance
 */
const Icon = ({ name, className = "", style = {}, ...props }) => {
  // Handle custom SVG icons
  if (customIcons[name]) {
    return React.cloneElement(customIcons[name], {
      ...props,
      className: className,
      style: {
        ...customIcons[name].props.style,
        ...style,
      },
    });
  }

  // Handle Font Awesome icons
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.error(`Icon "${name}" does not exist.`);
    return null;
  }

  return <IconComponent className={className} style={style} {...props} />;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Icon;
