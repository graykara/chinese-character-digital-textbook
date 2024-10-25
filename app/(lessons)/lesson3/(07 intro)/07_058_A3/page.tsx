"use client";

import ReactPlayer from "react-player";
import BACKGROUND1 from "@/app/bgpng_temp/intro/heyhey.com_@ybm@_@MDCH@_main_main.html_lessonNum=3&subNum=2&pageNum=1_2.png"

export default function Page() {
  const sound = [
    { text: "이 단원에서 우리는 한자 성어을 구성하고 있는 한자의 모양·음·뜻을 익힙니다.", start: 0, end: 8840 },
    { text: "이를 바탕으로 한자 성어를 우리말로 바르게 읽고 풀이하며, 맥락에 맞게 활용하며 소통하는 방법을 배웁니다.", start: 8840, end: 18216 },
    { text: "또한 한자 성어의 유래에 담긴 삶의 지혜와 가치관을 이해하고 성어를 언어생활 속에서 다양하게 활용해 봅시다.", start: 18216, end: 28708 },
  ];

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
