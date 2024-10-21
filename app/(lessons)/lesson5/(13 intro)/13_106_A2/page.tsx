"use client";

import ReactPlayer from "react-player";

export default function Page() {
  return (
    <>
      <ReactPlayer
        url="/video/intro/5_why.mp4"
        width={1760}
        height={990}
        muted
        playing
      />
    </>
  );
}
