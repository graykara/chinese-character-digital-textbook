"use client";

import { SoundButton2 } from "@/app/components/buttons/sound-button2";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useEffect, useState } from "react";
import { Howl } from "howler";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import BACKGROUND1 from "@/app/bgpng_temp/5/중등한문_한자를 알면 틀리지 않는 일상 어휘14.png";
import BACKGROUND2 from "@/app/bgpng_temp/5/중등한문_한자를 알면 틀리지 않는 일상 어휘15.png";
import { CultureHeader } from "@/app/components/headers/culture-header";

export default function Page() {
  const [step, setStep] = useState(1);

  const [isReading, setIsReading] = useState(false);

  const sound1 = new Howl({
    src: "/sound/4/95_story-1.mp3",
    onplay: () => setIsReading(true),
    onend: () => setIsReading(false),
    onstop: () => setIsReading(false),
  });
  const sound2 = new Howl({
    src: "/sound/4/95_story-2.mp3",
    onplay: () => setIsReading(true),
    onend: () => setIsReading(false),
    onstop: () => setIsReading(false),
  });

  useEffect(() => {
    sound1.stop();
    sound2.stop();
    return () => {
      sound1.stop();
      sound2.stop();
    };
  }, [step]);

  return (
    <>
      <CultureHeader title={"다른 사람의 처지에서 생각하기"} />
      <SoundButton2
        className="absolute left-[1100px] top-[112px] animate__animated animate__bounceIn animate__delay-1s z-10"
        active={isReading}
        onClick={() => (step === 1 ? sound1.play() : sound2.play())}
      />

      <ContentContainer className="!justify-start pt-12">
        {step === 1 && (
          <div className="relative -top-[10px] w-[1460px]">
            <div
              className={`bg-[#f4ede1] rounded-[50px] px-10 py-8 text-[48px] leading-[82px] tracking-[-1.5px] break-keep transition-colors duration-[2000ms] ${
                isReading ? "text-reading" : ""
              }`}
            >
              중국 춘추 시대의 제나라 때, 군주인 경공의{" "}
              <span className="font-haeseo">暴政</span>(폭정)으로
              <br />
              백성 모두 고통이 극심했다. 그러던 어느 겨울에 사흘 동안 눈이
              <br />쉼 없이 내리자, 경공은 여우 털로 만든 가볍고 따뜻한 옷을
              입고
              <br />
              설경의 아름다움에 취한 채 재상인 안자에게 말했다.
              <br />“<span className="font-haeseo">異常</span>(이상)한 일이로다.
              사흘 동안 내린 눈이 땅을 온통 뒤덮었는데
              <br />
              조금도 춥지 않구나.”
            </div>

            <img
              src={IMAGE1.src}
              className="absolute right-0 -bottom-[200px]"
            />
          </div>
        )}
        {step === 2 && (
          <div className="relative -top-[10px] w-[1460px]">
            <div
              className={`bg-[#f4ede1] rounded-[50px] px-10 py-8 text-[48px] leading-[82px] tracking-[-1.5px] break-keep transition-colors duration-[2000ms] ${
                isReading ? "text-reading" : ""
              }`}
            >
              그 말에 왕의 털옷을 보고 안자가 다음과 같이 말했다.
              <br />
              “옛날의 어진 군주들은 자기가 배부를 때 백성들의 굶주림을 알고,
              자기가
              <br />
              따뜻할 때 백성들의 추움을 알며, 자기가 편안할 때 백성의 수고로움을
              <br />
              알았다고 하는데, 지금 왕께서는 다른 사람을 전혀 생각하지
              않으시는군요.”
              <br />이 말을 들은 경공은 부끄러워 아무 말도 못 했다.
            </div>
            <img
              src={IMAGE2.src}
              className="absolute right-0 -bottom-[250px]"
            />
          </div>
        )}
      </ContentContainer>

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
      <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
