"use client";

import { VideoPlayer } from "@/app/components/video-player";
import { PageInfoContext } from "@/app/utils/page-info";
import { useContext, useEffect, useState } from "react";

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("단원 도입");

  const [muted, setMuted] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMuted(false);
    }, 100);
  }, []);
  return (
    <>
      <VideoPlayer src="/video/intro/1_intro.mp4" />
    </>
  );
}
