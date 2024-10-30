import { CSSProperties, PropsWithChildren, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

interface Props extends PropsWithChildren {
  id?: string;
  className?: string;
  style?: CSSProperties;
  disableScroll?: boolean;
  isPlaying?: boolean;
}

export const SoundText = ({
  id,
  children,
  className = "",
  style,
  disableScroll = false,
  isPlaying = false,
}: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const {
    ref: scrollRef,
    inView,
    entry,
  } = useInView({
    threshold: 1,
    delay: 100,
  });

  useEffect(() => {
    if (isPlaying && !disableScroll && !inView) {
      entry?.target?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  }, [isPlaying, disableScroll, inView]);

  return (
    <span
      id={id}
      ref={ref}
      data-type="sound-text"
      className={`z-[2] relative transition-colors duration-1000 ${className} ${isPlaying ? "text-reading" : ""}`}
      style={style}
    >
      <span ref={scrollRef}>{children}</span>
    </span>
  );
};
