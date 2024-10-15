"use client";

import ReactPlayer from "react-player";

export const IntroPageTemplate = ({ video }: { video: string }) => {
  return (
    <div>
      <ReactPlayer src={video} />
    </div>
  );
};
