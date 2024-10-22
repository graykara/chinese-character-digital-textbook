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
      <CultureHeader title={"같지만 다른 표현, 한·중·일 성어 엿보기"} />

      <SoundButton2
        className="absolute top-[110px] left-[980px] animate__animated animate__bounceIn animate__delay-2s z-10"
        active={isReading}
        onClick={() => sound.play()}
      />

      <ContentContainer>
        {step === 1 && (
          <div className="relative -top-[95px] w-[1460px]">
            <div
              className={`bg-[#f4ede1] rounded-[50px] px-14 pt-8 pb-8 text-[45px] leading-[70px] tracking-[-1.5px] break-keep transition-colors duration-[2000ms] ${
                isReading ? "text-reading" : ""
              }`}
            >
              한·중·일 삼국은 지리적으로 매우 가깝고 ‘한자 문화권’이라는
              공통점이 있는 만큼 성어를 사용하는 문화 역시 비슷하다. 다만 각
              나라의 문화적 특성, 한자 사용의 차이에 따라 성어를 표현하는 방식이
              다르게 나타나기도 한다. 이는 ‘결심이 굳지 못 함.’을 뜻하는
              성어에서도 확인해 볼 수 있다.
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
