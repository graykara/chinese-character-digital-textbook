"use client";

import { PageInfoContext } from "@/app/utils/page-info";
import { useContext } from "react";
import ReactPlayer from "react-player";
import BACKGROUND1 from "@/app/bgpng_temp/intro/2단원_무엇을 배워요_.png";

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("단원도입");

  const sound = [
    { text: "이 단원에서는 한자가 어떻게 만들어졌는지를 학습합니다.", start: 0, end: 6304 },
    { text: "더불어 우리가 자주 쓰는 단어에 사용된 한자의 뜻과 단어의 짜임을 살펴보며 어휘의 뜻을 정확히 파악하고 맥락에 맞게 활용하며 소통하는 방법을 배웁니다.", start: 6304, end: 20314 },
    { text: "또한 우리가 어휘의 뜻을 정확히 알지 못하여 잘못 사용하기 쉬운 어휘를 일상용어 속에서 알아보고, 교과 학습 용어도 한자 낱자를 알고 익히면 더 효율적이고 정확히 알 수 있다는 점을 학습해 봅시다.", start: 20314, end: 37720 },
  ];

  return (
    <>
      <ReactPlayer
        url="/video/intro/2_what.mp4"
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
