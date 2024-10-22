"use client";

import { SoundButton2 } from "@/app/components/buttons/sound-button2";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useEffect, useState } from "react";
import { Howl } from "howler";
import IMAGE2 from "./image2.png";
import BACKGROUND1 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕25.png";
import BACKGROUND2 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕26.png";
import { CultureHeader } from "@/app/components/headers/culture-header";

export default function Page() {
  const [step, setStep] = useState(1);

  const [isReading, setIsReading] = useState(false);
  const sounds = ["/sound/5/113_story-1.mp3", "/sound/5/113_story-2.mp3"];

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

      <SoundButton2
        className="absolute top-[110px] left-[980px] animate__animated animate__bounceIn animate__delay-2s z-10"
        active={isReading}
        onClick={() => sound.play()}
      />

      <ContentContainer>
        {step === 1 && (
          <div className="relative w-[1460px]">
            <div
              className={`bg-[#f4ede1] rounded-[50px] px-14 pt-8 pb-8 text-[45px] leading-[70px] tracking-[-1.5px] break-keep transition-colors duration-[2000ms] ${
                isReading ? "text-reading" : ""
              }`}
            >
              「해탐노화도(<span className="font-haeseo">蟹貪蘆花圖</span>)」는
              그 뜻을 풀이하면 ‘갈대꽃을 탐하는 그림‘이다. 갈대의 한자는 노(
              <span className="font-haeseo">蘆</span>)인데, 이 글자의 중국
              발음이 과거 급제자에게 임금이 내려 주는 고기인 ‘려(
              <span className="font-haeseo">鯉</span>)‘와 비슷하다. 즉 ‘갈대를
              붙들고 늘어지는 게처럼 과거에 꼭 합격하라‘는 의미가 담겨 있다.
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="-mt-[330px] w-[1460px]">
            <img src={IMAGE2.src} />
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
