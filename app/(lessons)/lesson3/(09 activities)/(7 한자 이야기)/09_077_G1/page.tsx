"use client";

import { SoundButton2 } from "@/app/components/buttons/sound-button2";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useContext, useEffect, useState } from "react";
import { Howl } from "howler";
import IMAGE2 from "./bg_2.png";
import BACKGROUND1 from "@/app/bgpng_temp/9/중등한문_이야기가 담긴 성어129.png"; //128, 129
import { CultureHeader } from "@/app/components/headers/culture-header";
import { PageInfoContext } from "@/app/utils/page-info";

const sound1 = new Howl({
  src: "/sound/3/77_story_1.mp3"
});

const sound2 = new Howl({
  src: "/sound/3/77_story_2.mp3"
});

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  const [isReading, setIsReading] = useState(false);

  useEffect(() => {
    sound1.on("play", () => setIsReading(true));
    sound1.on("end", () => setIsReading(false));
    sound1.on("stop", () => setIsReading(false));

    sound2.on("play", () => setIsReading(true));
    sound2.on("end", () => setIsReading(false));
    sound2.on("stop", () => setIsReading(false));
  }, []);

  [
    {
      text: "이 그림은 조선 시대 화가 김홍도의 「해탐노화도(蟹貪蘆花圖)」로 ‘게가 갈대꽃을 탐한다.’ 라는 뜻이다.",
      start: 0,
      end: 8326,
    },
    {
      text: "김홍도가 과거를 보러 가는 선비에게 그려 주었다고 전한다.",
      start: 8326,
      end: 13424,
    },
    {
      text: "「해탐노화도」에서 갈 대를 뜻하는 ‘노(蘆)’ 자가 임금이 과거 급제자에게 내려 주는 고기를 뜻하는 ‘여(臚)’ 자와 중국 발음이 같아 ‘갈대를 꼭 붙들고 늘어진 게처럼 과거에 합격하라.’라는 뜻을 담고 있다.",
      start: 13424,
      end: 28396,
    },
    {
      text: "‘해룡왕처야횡행(海龍王處也橫行)’은 ‘바다 용왕님 계신 곳에서도, 옆으로 걷는다네.’라는 뜻이야.",
      start: 28396,
      end: 36690,
    },
    {
      text: "과거에 합격해서 신하가 되면 指鹿爲馬와 같은 상황에 부닥쳐도, 옆으로 걷는 게의 천성처럼 소신껏 행동하라는 의미야.",
      start: 36690,
      end: 47072,
    },
  ];

  return (
    <>
      <CultureHeader title={"어떤 권력에도 굴하지 않는 신하의 걸음"} />

      <SoundButton2
        className="absolute top-[110px] left-[1220px] animate__animated animate__bounceIn animate__delay-2s z-10"
        active={isReading}
        onClick={() => {
          if (isReading) {
            sound1.stop();
            sound2.stop();
          } else {
            if (step === 1) sound1.play();
            else sound2.play();
          }
        }}
      />

      <ContentContainer>
        {step === 1 && (
          <div className="absolute top-[50px] w-[1460px]">
            <div
              className={`bg-[#f4ede1] rounded-[50px] pl-14 pr-10 py-7 -mt-4 text-[55px] leading-[80px] tracking-tight break-keep transition-colors duration-[2000ms] ${isReading ? "text-reading" : ""
                }`}
            >
              이 그림은 조선 시대 화가 김홍도의 「해탐노화도(
              <span className="font-haeseo leading-tight tracking-[-8px]">
                蟹貪蘆花圖
              </span>
              )」로 ‘게가 갈대꽃을 탐한다.’라는 뜻이다. 김홍도가 과거를 보러 가는 선비에게 그려 주었다고 전한다. 「해탐노화도」에서 갈대를 뜻하는 ‘노(
              <span className="font-haeseo leading-tight tracking-[-8px]">
                蘆
              </span>
              )’ 자가 임금이 과거 급제자에게 내려 주는 고기를 뜻하는 ‘여(
              <span className="font-haeseo leading-tight tracking-[-8px]">
                臚
              </span>
              )’ 자와 중국 발음이 같아 ‘갈대를 꼭 붙들고 늘어진 게처럼 과거에 합격하라.’라는 뜻을 담고 있다.
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="absolute top-[105px] w-[1460px]">
            <img src={IMAGE2.src} className="ml-[95px] mt-[15px]" />
          </div>
        )}
      </ContentContainer>

      <StepContainer maxStep={2} />
      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
