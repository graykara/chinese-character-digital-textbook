"use client";

import { PageInfoContext } from "@/app/utils/page-info";
import { useContext } from "react";
import ReactPlayer from "react-player";
import BACKGROUND1 from "@/app/bgpng_temp/intro/2단원_왜 배워요_.png";
import { IntroWhyHeader } from "@/app/components/intro/intro-why-header";
import { IntroTextPlayer } from "@/app/components/intro/intro-text-player";

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("단원 도입");

  const sound = [
    {
      text: "한자는 사물의 모양을 본뜬 그림에서 시작하여 오랜 세월을 거쳐 그 모양이 변해서 지금의 형태가 되었습니다.",
      start: 0,
      end: 10454,
    },
    {
      text: "또한 눈에 보이지 않는 생각이나 개념을 점과 선으로 나타내거나, 둘 이상의 한자를 합쳐 새로운 한자를 만들기도 하였습니다.",
      start: 10454,
      end: 21522,
    },
    {
      text: "이러한 한자의 형성 과정을 이해하면 한자의 모양·음·뜻을 보다 효과적으로 익힐 수 있습니다.",
      start: 21522,
      end: 30424,
    },
    {
      text: "나아가 일상의 많은 한자 어휘를 쉽게 이해하여 문해력 향상에도 큰 도움이 됩니다.",
      start: 30424,
      end: 38922,
    },
  ];

  return (
    <>
      <ReactPlayer
        url="/video/intro/2_why.mp4"
        width={1760}
        height={990}
        muted
        playing
      />

      <IntroWhyHeader className="absolute left-[100px] top-[100px]" />

      <div className="bg-white bg-opacity-50 absolute left-[100px] top-[245px] w-[1100px] h-[675px] overflow-y-auto rounded-[20px] pt-[25px] pb-[10px] pl-[30px] pr-[47px] animate__animated animate__fadeIn animate__delay-1s">
        <IntroTextPlayer
          sound="/sound/2/24_intro/3.mp3"
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
