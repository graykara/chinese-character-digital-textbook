"use client";

import { PageInfoContext } from "@/app/utils/page-info";
import { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("단원도입");

  const [muted, setMuted] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMuted(false);
    }, 100);
  }, []);
  return (
    <>
      <ReactPlayer
        url="/video/intro/2_intro.mp4"
        width={1760}
        height={990}
        muted={muted}
        playing
        controls
      />
    </>
  );
}
