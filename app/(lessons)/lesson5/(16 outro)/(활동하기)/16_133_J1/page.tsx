"use client";

import { SoundButton2 } from "@/app/components/buttons/sound-button2";
import IMAGE_BEFORE from "./bg_2_before.png";
import IMAGE_AFTER from "./bg_2_after.png";
import IMAGE_1 from "./way.png";
import IMAGE_2 from "./wayText.png";
import { useEffect, useState } from "react";
import { ActivityPageTemplate } from "@/app/pages/activity-page-template";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { HeaderContainer } from "@/app/components/headers/header-container";
import BACKGROUND1 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕33.png";

const sound = new Howl({
  src: "/sound/5/133-2.mp3",
});

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [isReading, setIsReading] = useState(false);

  useEffect(() => {
    sound.on("play", () => setIsReading(true));
    sound.on("end", () => setIsReading(false));
    sound.on("stop", () => setIsReading(false));
  }, []);

  return (
    <>
      <ActivityPageTemplate lesson={5}>
        <div className="relative w-full h-full flex flex-col justify-start items-center overflow-y-scroll">
          <header className="mb-10">
            <h1 className="text-[60px] text-[#da722c] font-bold text-center tracking-tight">
              나의 기업 운영 계획서 및 명함 만들기
            </h1>
            <HeaderContainer
              sound="/sound/5/133-1.mp3"
              className="w-[1150px] text-center text-[35px] animate__animated animate__flipInX tracking-tighter break-keep"
            >
              거상 김만덕은 자신이 가진 부를 어려운 사람에게 나눠 주는 나눔의 정신을 보여 주었다. 만약 한 기업의 경영자가 되어 사회 공헌 사업을 펼친다면 어떻게 나눔을 베풀 수 있을지 나의 기업 운영 계획서와 기업의 가치를 담은 명함을 만들어 보자.
            </HeaderContainer>
          </header>

          <div className="ml-20 -mt-2">
            <img src={IMAGE_1.src} className="" />
            <img src={IMAGE_2.src} className="mt-6 mb-10" />
          </div>
          <img src={
            showAnswer ? IMAGE_AFTER.src : IMAGE_BEFORE.src
          } className="w-[1210px] -ml-5 mt-10" />

          <SoundButton2
            className="absolute top-[285px] left-[385px] animate__animated animate__bounceIn animate__delay-1s"
            active={isReading}
            onClick={() => {
              if (isReading) sound.stop();
              else sound.play();
            }}
          />

        </div>
      </ActivityPageTemplate>

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />

      <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
