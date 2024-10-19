"use client";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function Page() {
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMuted(false);
    }, 100);
  }, []);
  return (
    <>
      <ReactPlayer
        url="/video/intro/4_intro.mp4"
        width={1760}
        height={990}
        muted={muted}
        playing
        controls
      />
    </>
  );
}
