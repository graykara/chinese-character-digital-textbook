"use client";

import { ReadingButton } from "@/app/components/buttons/reading-button";
import { ContentContainer } from "@/app/components/content-container";
import { CultureHeader } from "@/app/components/headers/culture-header";
import { StepContainer } from "@/app/components/step-container";
import { useEffect, useState } from "react";
import { Howl } from "howler";
import IMAGE2 from "./image2.png";
import BACKGROUND1 from "@/app/bgpng_temp/3/중등한문_그려서 만든 한자35.png";
import BACKGROUND2 from "@/app/bgpng_temp/3/중등한문_그려서 만든 한자36.png";

export default function Page() {
  const [step, setStep] = useState(1);

  const [isReading, setIsReading] = useState(false);

  const sound = new Howl({
    src: "/sound/2/33_story.mp3",
    onplay: () => setIsReading(true),
    onend: () => setIsReading(false),
  });
  const sounds = [
    new Howl({ src: "/sound/2/31/1.mp3" }),
    new Howl({ src: "/sound/2/31/2.mp3" }),
    new Howl({ src: "/sound/2/31/3.mp3" }),
    new Howl({ src: "/sound/2/31/4.mp3" }),
    new Howl({ src: "/sound/2/31/5.mp3" }),
  ];

  useEffect(() => {
    sound.stop();
  }, [step]);

  useEffect(() => {
    return () => {
      sound.stop();
    };
  }, []);

  return (
    <>
      <CultureHeader title="갖은자 이야기" />

      <ContentContainer> 
        {step === 1 && (
          <div className="relative -top-[50px] w-[1460px]">
            <ReadingButton
              className="absolute right-0 -top-[100px]"
              active={isReading}
              onClick={() => sound.play()}
            />
            <div
              className={`bg-[#f4ede1] rounded-[50px] px-24 pt-12 pb-8 text-[55px] leading-[82px] tracking-[-1.5px] break-keep transition-colors duration-[2000ms] ${
                isReading ? "text-reading" : ""
              }`}
            >
              오늘날에는 아라비아 숫자를 주로 사용하지만, 예전에는 한자로 숫자를 적었다. 그런데 ‘
              <span className="font-haeseo">一</span>
              ’은 ‘<span className="font-haeseo">八</span>’을 제외한 거의 모든 숫자로 위조할 수 있고, ‘<span className="font-haeseo">二</span>’는
              ‘<span className="font-haeseo">三</span>’, ‘
              <span className="font-haeseo">四</span>’, ‘
              <span className="font-haeseo">五</span>’ 등 더 큰 숫자로 쉽게 꾸며낼 수 있다. 이를 막기 위해 쓰는 한자가 ‘갖은자’로, 보통 쓰는 숫자 한자와 음은 같지만 획이 복잡하다.
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="relative -mt-20">
            <img src={IMAGE2.src} />

            <div className="absolute top-0 left-[50px] grid grid-cols-5">
              {sounds.map((sound, index) => (
                <button
                  key={index}
                  className="w-[150px] h-[200px]"
                  onClick={() => sound.play()}
                />
              ))}
            </div>
          </div>
        )}
      </ContentContainer>

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
      <img src={BACKGROUND2.src} className="absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
