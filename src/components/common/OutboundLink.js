import React from "react";

export default function OutboundLink({
  href,
  children,
  onClick,
  target,
  rel,
  ...props
}) {
  const handleClick = (event) => {
    onClick?.(event);
    if (!event.defaultPrevented && typeof window.gtag === "function") {
      window.gtag("event", "click", {
        event_category: "outbound",
        event_label: href,
        transport_type: "beacon",
      });
    }
  };
  return (
    <a
      {...props}
      href={href}
      target={target}
      rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
