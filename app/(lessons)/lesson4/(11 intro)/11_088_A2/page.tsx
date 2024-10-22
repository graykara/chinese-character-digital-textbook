"use client";

import ReactPlayer from "react-player";
import BACKGROUND1 from "@/app/bgpng_temp/intro/2단원_왜 배워요_.png";

export default function Page() {
  return (
    <>
      <ReactPlayer
        url="/video/intro/4_why.mp4"
        width={1760}
        height={990}
        muted
        playing
      />
      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
