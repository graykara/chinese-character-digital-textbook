"use client";

import ReactPlayer from "react-player";
import BACKGROUND1 from "@/app/bgpng_temp/intro/heyhey.com_@ybm@_@MDCH@_main_main.html_lessonNum=3&subNum=2&pageNum=1_2.png"

export default function Page() {
  return (
    <>
      <ReactPlayer
        url="/video/intro/3_what.mp4"
        width={1760}
        height={990}
        muted
        playing
      />
      <img src={BACKGROUND1.src} className="absolute left-0 top-0 w-[1760px] opacity-25 pointer-events-none" />
    </>
  );
}
