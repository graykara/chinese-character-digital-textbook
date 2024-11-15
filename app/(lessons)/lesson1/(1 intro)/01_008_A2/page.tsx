"use client";

import { PageInfoContext } from "@/app/utils/page-info";
import { useContext } from "react";
import ReactPlayer from "react-player";
import BACKGROUND1 from "@/app/bgpng_temp/intro/1단원_왜 배워요_.png";
import { IntroTextPlayer } from "@/app/components/intro/intro-text-player";
import { IntroWhyHeader } from "@/app/components/intro/intro-why-header";

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("단원 도입");

  const sound = [
    { text: "한자는 ‘또 다른 우리의 문자’입니다.", start: 0, end: 4276 },
    {
      text: "우리는 한자를 삼국 시대 이전, 문자가 없던 시절은 물론이고 한글이 창제된 이후에도 사용하였습니다.",
      start: 4276,
      end: 13432,
    },
    {
      text: "따라서 우리 문화의 핵심은 한자로 기록되어 있고, 우리 언어생활 속 수많은 어휘  역시 한자로 이루어져 있습니다.",
      start: 13432,
      end: 22968,
    },
    {
      text: "그러므로 우리는 한자와 한문에 대한 기초적인 지식을 이해할 필요가 있습니다.",
      start: 22968,
      end: 30380,
    },
  ];

  return (
    <>
      <ReactPlayer
        url="/video/intro/1_why.mp4"
        width={1760}
        height={990}
        muted
        playing
        loop
      />

      <IntroWhyHeader className="absolute right-[100px] top-[100px]" />

      <div className="bg-white bg-opacity-50 absolute right-[100px] top-[245px] w-[1100px] rounded-[20px] pt-[25px] pb-[16px] px-[40px] pr-[57px] animate__animated animate__fadeIn animate__delay-1s">
        <IntroTextPlayer
          sound="/sound/1/8_intro/3.mp3"
          data={sound}
          textClassName="text-right leading-[80px]"
        />
      </div>

      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
