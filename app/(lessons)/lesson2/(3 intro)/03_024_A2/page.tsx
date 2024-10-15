"use client";

import { PageInfoContext } from "@/app/utils/page-info";
import { useContext } from "react";
import ReactPlayer from "react-player";

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("단원도입");
  
  return (
    <>
      <ReactPlayer
        url="/video/intro/2_why.mp4"
        width={1760}
        height={990}
        muted
        playing
      />
    </>
  );
}
