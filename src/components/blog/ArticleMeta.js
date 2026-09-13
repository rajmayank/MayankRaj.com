import React from "react";

export default function ArticleMeta({ date, dateISO, category }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-meta">
      {date && <time dateTime={dateISO}>{date}</time>}
      {date && category && <span aria-hidden="true">·</span>}
      {category && <span>{category}</span>}
    </div>
  );
}
