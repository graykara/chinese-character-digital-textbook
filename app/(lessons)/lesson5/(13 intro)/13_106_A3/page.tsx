"use client";

import { PageInfoContext } from "@/app/utils/page-info";
import { useContext } from "react";
import ReactPlayer from "react-player";
import BACKGROUND1 from "@/app/bgpng_temp/intro/5단원_무엇을 배워요_.png";
import { IntroTextPlayer } from "@/app/components/intro/intro-text-player";
import { IntroWhatHeader } from "@/app/components/intro/intro-what-header";

export default function Page() {
  const sound = [
    {
      text: "이 단원에서 우리는 존중과 배려, 생태와 환경, 인간의 다양한 모습을 풍성하게 담은 흥미로운 한문 문장을 만나 보겠습니다.",
      start: 0,
      end: 12440,
    },
    {
      text: "이 과정에서 한문 문장을 우리말로 바르게 읽고 풀이하는 방법을 배우며, 글에 담긴 지은이의 의도를 파악하고 글을 이해하고 감상하는 능력을 기르게 됩니다.",
      start: 12440,
      end: 26150,
    },
    {
      text: "또한 자신의 모습을 성찰하고 타인과 더불어 살아가는 데 필요한 마음을 키우는 다양한 활동을 해 봅시다.",
      start: 26150,
      end: 35552,
    },
  ];

  return (
    <>
      <ReactPlayer
        url="/video/intro/5_what.mp4"
        width={1760}
        height={990}
        muted
        playing
      />

      <IntroWhatHeader className="absolute right-[100px] top-[130px]" />

      <div className="bg-white bg-opacity-50 absolute right-[100px] top-[245px] w-[1160px] h-[675px] overflow-y-auto rounded-[20px] pt-[25px] pb-[10px] pl-[50px] pr-[40px] animate__animated animate__fadeIn animate__delay-1s">
        <IntroTextPlayer
          sound="/sound/5/106_intro/5.mp3"
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
