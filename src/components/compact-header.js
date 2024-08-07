import React from "react";

export default function CompactHeader({
  title,
  category = null,
  date = null,
  bgUrl = "images/blog_covers/abstract_yellow.jpg",
  mood = null,
  readingTime = null,
}) {
  let categoryOrDate = null;
  if (category || date) {
    categoryOrDate = (
      <div className="merged-bg-container meta-data">
        <span className="">
          {category}
          <br />
          {date} {readingTime ? `| ${readingTime}` : ""}
        </span>
      </div>
    );
  }

  return (
    <header
      className="compact"
      style={{ backgroundImage: `url(${bgUrl})`, "--mood": mood }} // Corrected backgroundImage property
    >
      <div className="compact-header-container">
        <svg
          style={{ visibility: "hidden", position: "absolute" }}
          width="0"
          height="0"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>

        <div className="text-container">
          <div className="merged-bg-container title">
            <span className=""> {title} </span>
          </div>
          <br />
          {categoryOrDate}
        </div>
      </div>
    </header>
  );
}
