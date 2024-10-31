"use client";

import ReactPlayer from "react-player";
import BACKGROUND1 from "@/app/bgpng_temp/intro/4단원_왜 배워요_.png";
import { IntroWhyHeader } from "@/app/components/intro/intro-why-header";
import { IntroTextPlayer } from "@/app/components/intro/intro-text-player";

export default function Page() {
  const sound = [
    {
      text: "한문 기록에는 선인들의 경험과 지혜가 담겨 감동과 가르침을 주는 글이 많습니다.",
      start: 0,
      end: 8302,
    },
    {
      text: "지금을 살아가는 우리는 이러한 기록을 읽으며 진한 감동과 깨달음, 새로운 생각과 창의적인 발상을 얻을 수 있습니다.",
      start: 8302,
      end: 18790,
    },
    {
      text: "또한 다양성이 강조되는 요즘의 사회에서 겪게 되는 여러 갈등을 해결하고, 서로를 존중하며 다른 사람과 더불어 살아가는 지혜를 배울 수 있습니다.",
      start: 18790,
      end: 32261,
    },
  ];

  return (
    <>
      <ReactPlayer
        url="/video/intro/4_why.mp4"
        width={1760}
        height={990}
        muted
        playing
      />

      <IntroWhyHeader className="absolute left-[100px] top-[100px]" />

      <div className="bg-white bg-opacity-50 absolute left-[100px] top-[245px] w-[1125px] rounded-[20px] pt-[25px] pb-[16px] px-[35px] animate__animated animate__fadeIn animate__delay-1s">
        <IntroTextPlayer
          sound="/sound/4/88_intro/3.mp3"
          data={sound}
          textClassName="text-left leading-[80px]"
        />
      </div>

      <img
        src={BACKGROUND1.src}
        className="absolute debug left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
