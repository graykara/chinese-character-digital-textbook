"use client";

import { VideoPlayer } from "@/app/components/video-player";
import { useEffect, useState } from "react";

export default function Page() {
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMuted(false);
    }, 100);
  }, []);
  return (
    <>
      <VideoPlayer src="/video/intro/4_intro.mp4" />
    </>
  );
}
