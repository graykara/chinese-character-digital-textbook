"use client";

import { PageInfoContext } from "@/app/utils/page-info";
import { useContext } from "react";
import ReactPlayer from "react-player";
import BACKGROUND1 from "@/app/bgpng_temp/intro/5단원_왜 배워요_.png";
import { IntroTextPlayer } from "@/app/components/intro/intro-text-player";
import { IntroWhyHeader } from "@/app/components/intro/intro-why-header";

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("단원 도입");

  const sound = [
    {
      text: "한문에는 선인들의 삶의 태도와 지혜, 사상과 감정 및 가치관이 생생하게 담겨 있습니다.",
      start: 0,
      end: 7816,
    },
    {
      text: "위대한 업적을 이룬 위인의 발자취, 격조 있는 철학적 사고, 의미 있고 정겨운 삶을 산 인물의 일화들은 우리에게 큰 영감과 가르침을 줍니다.",
      start: 7816,
      end: 20630,
    },
    {
      text: "우리 선조의 깊은 통찰이 담긴 글, 재치 넘치는 이야기를 통해 올바른 가치관을 함양하고 미래 사회를 살아가는 데 필요한 역량을 키울 수 있습니다.",
      start: 20630,
      end: 33671,
    },
  ];

  return (
    <>
      <ReactPlayer
        url="/video/intro/5_why.mp4"
        width={1760}
        height={990}
        muted
        playing
      />

      <IntroWhyHeader className="absolute left-[100px] top-[100px]" />

      <div className="bg-white bg-opacity-50 absolute left-[100px] top-[245px] w-[1160px] h-[675px] overflow-y-auto rounded-[20px] pt-[25px] pb-[10px] pl-[35px] pr-[20px] animate__animated animate__fadeIn animate__delay-1s">
        <IntroTextPlayer
          sound="/sound/5/106_intro/3.mp3"
          data={sound}
          textClassName="text-left leading-[80px]"
        />
      </div>

      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
