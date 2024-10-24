"use client";

import { SoundButton2 } from "@/app/components/buttons/sound-button2";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useEffect, useState } from "react";
import { Howl } from "howler";
import IMAGE2 from "./bg_2.png";
import BACKGROUND1 from "@/app/bgpng_temp/9/중등한문_이야기가 담긴 성어129.png"; //128, 129
import { CultureHeader } from "@/app/components/headers/culture-header";

export default function Page() {
  const [step, setStep] = useState(1);

  const [isReading, setIsReading] = useState(false);
  const sounds = ["/sound/3/77_story.mp3", ""];

  const sound = new Howl({
    src: sounds[step - 1],
    onplay: () => setIsReading(true),
    onend: () => setIsReading(false),
  });

  useEffect(() => {
    return () => {
      sound.stop();
    };
  }, []);

  return (
    <>
      <CultureHeader title={"어떤 권력에도 굴하지 않는 신하의 걸음"} />

      {step === 1 && (
        <SoundButton2
          className="absolute top-[110px] left-[1220px] animate__animated animate__bounceIn animate__delay-2s z-10"
          active={isReading}
          onClick={() => sound.play()}
        />
      )}

      <ContentContainer>
        {step === 1 && (
          <div className="absolute top-[50px] w-[1460px]">
            <div
              className={`bg-[#f4ede1] rounded-[50px] pl-14 pr-10 py-7 -mt-4 text-[55px] leading-[80px] tracking-tight break-keep transition-colors duration-[2000ms] ${isReading ? "text-reading" : ""
                }`}
            >
              이 그림은 조선 시대 화가 김홍도의 「해탐노화도(<span className="font-haeseo leading-tight tracking-[-8px]">蟹貪蘆花圖</span>)」로 ‘게가 갈대꽃을 탐한다.’라는 뜻이다. 김홍도가 과거를 보러 가는 선비에게 그려주었다고 전한다. 「해탐노화도」에서 갈대를 뜻하는 ‘노(<span className="font-haeseo leading-tight tracking-[-8px]">蘆</span>)’ 자가 임금이 과거 급제자에게 내려 주는 고기를 뜻하는 ‘여(<span className="font-haeseo leading-tight tracking-[-8px]">臚</span>)’ 자와 중국 발음이 같아 ‘갈대를 꼭 붙들고 늘어진 게처럼 과거에 합격하라.’라는 뜻을 담고 있다.
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="absolute top-[105px] w-[1460px]">
            <img src={IMAGE2.src} className="ml-[95px] mt-[15px]" />
          </div>
        )}
      </ContentContainer>

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
