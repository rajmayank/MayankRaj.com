import React, { useEffect, useRef, useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";

export default function ShowcaseCard({
  item,
  image,
  playing,
  staticCard = false,
}) {
  const ref = useRef(null);
  const video = useRef(null);
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (staticCard || item.type !== "video") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) setLoaded(true);
      },
      { rootMargin: "0px 500px", threshold: 0 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [staticCard, item.type]);
  useEffect(() => {
    if (!video.current) return;
    if (playing && inView) video.current.play().catch(() => {});
    else video.current.pause();
  }, [playing, inView]);
  return (
    <figure
      ref={ref}
      className={`relative shrink-0 overflow-hidden rounded-lg bg-zinc-900 text-white ${staticCard ? "aspect-video w-full" : "showcase-card mx-2 h-[150px] w-[250px] md:h-[250px] md:w-[450px]"}`}
    >
      {item.type === "video" ? (
        <video
          ref={video}
          className="absolute inset-0 size-full object-cover"
          loop
          muted
          playsInline
          preload="none"
          src={loaded ? item.video : undefined}
          poster={item.poster}
          aria-hidden="true"
        ></video>
      ) : (
        image && (
          <GatsbyImage
            image={image}
            alt=""
            className="h-full w-full"
            imgStyle={{ objectPosition: "bottom" }}
            loading="lazy"
          />
        )
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
      <figcaption
        className={`absolute inset-x-0 bottom-0 py-4 pl-4 pr-10 md:py-5 md:pl-6 md:pr-12 ${staticCard ? "" : "showcase-caption"}`}
      >
        <p className="mb-1 text-sm leading-snug text-white md:text-base">
          {item.subheading}
        </p>
        <h3 className="text-xl font-semibold leading-tight md:text-3xl">
          {item.heading}
        </h3>
      </figcaption>
      <p className="absolute inset-y-0 right-0 flex items-center justify-center border-l border-pink-200 bg-rose-100 px-1 text-xs font-semibold uppercase tracking-wider text-rose-950 [writing-mode:vertical-rl] md:px-2 md:text-sm">
        {item.banner}
      </p>
    </figure>
  );
}
