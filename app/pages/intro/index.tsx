"use client";

import { VideoPlayer } from "@/app/components/video-player";

export const IntroPageTemplate = ({ video }: { video: string }) => {
  return (
    <div>
      <VideoPlayer src={video} />
    </div>
  );
};
