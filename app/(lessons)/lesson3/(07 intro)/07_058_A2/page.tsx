"use client";

import ReactPlayer from "react-player";
import BACKGROUND1 from "@/app/bgpng_temp/intro/heyhey.com_@ybm@_@MDCH@_main_main.html_lessonNum=3&subNum=2&pageNum=1_1.png";
import { IntroWhyHeader } from "@/app/components/intro/intro-why-header";
import { IntroTextPlayer } from "@/app/components/intro/intro-text-player";

export default function Page() {
  const sound = [
    {
      text: "한자 성어는 예전부터 널리 쓰여 특별한 뜻을 나타내는 한자 어구를 말합니다.",
      start: 0,
      end: 7500,
    },
    {
      text: "한자 성어는 사람들이 많이 쓰는 말이나 선현이 남긴 언행이 숙어처럼 굳어지거나, 특별한 이야기나 사건의 특징 등을 정리하여 만들어졌습니다.",
      start: 7500,
      end: 20090,
    },
    {
      text: "우리는 일상생활에서 의사소통을 위해 맥락에 맞는 한자 성어를 사용하여 언어생활을 풍성하게 할 수 있습니다.",
      start: 20090,
      end: 29348,
    },
    {
      text: "또한 한자 성어의 유래를 익혀 그 성어에 내재된 삶의 지혜와 교훈·가치관 등을 이해할 수 있습니다.",
      start: 29348,
      end: 39418,
    },
  ];

  return (
    <>
      <ReactPlayer
        url="/video/intro/3_why.mp4"
        width={1760}
        height={990}
        muted
        playing
      />

      <IntroWhyHeader className="absolute left-[100px] top-[100px]" />

      <div className="bg-white bg-opacity-50 absolute left-[100px] top-[245px] w-[1100px] h-[675px] overflow-y-auto rounded-[20px] pt-[25px] pb-[10px] pl-[30px] pr-[47px] animate__animated animate__fadeIn animate__delay-1s">
        <IntroTextPlayer
          sound="/sound/3/58_intro/3.mp3"
          data={sound}
          textClassName="text-left leading-[80px]"
        />
      </div>

      <img
        src={BACKGROUND1.src}
        className="absolute debug left-0 top-0 w-[1760px] opacity-25 pointer-events-none"
      />
    </>
  );
}
