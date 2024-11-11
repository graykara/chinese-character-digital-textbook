"use client";

import { SoundButton2 } from "@/app/components/buttons/sound-button2";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useContext, useEffect, useState } from "react";
import { Howl } from "howler";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import BACKGROUND1 from "@/app/bgpng_temp/11/중등한문_너와 나, 우리32.png"; //31, 32
import { CultureHeader } from "@/app/components/headers/culture-header";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  const [isReading, setIsReading] = useState(false);

  const sound1 = new Howl({
    src: "/sound/4/95_story-1.mp3",
    onplay: () => setIsReading(true),
    onend: () => setIsReading(false),
    onstop: () => setIsReading(false),
  });
  [
    { text: "중국 춘추 시대의 제나라 때, 군주인 경공의 暴政(폭정)으로 백성 모두 고통이 극심했다.", start: 0, end: 7670 },
    { text: "그러던 어느 겨울에 사흘 동안 눈이 쉼 없이 내리자, 경공은 여우 털로 만든 가볍고 따뜻한 옷을 입고 설경의 아름다움에 취한 채 재상인 안자에게 말했다.", start: 7670, end: 20180 },
    { text: "“異常(이상)한 일이로다. 사흘 동안 내린 눈이 땅을 온통 뒤덮었는데 조금도 춥지 않구나.”", start: 20180, end: 28786 },
  ];
  const sound2 = new Howl({
    src: "/sound/4/95_story-2.mp3",
    onplay: () => setIsReading(true),
    onend: () => setIsReading(false),
    onstop: () => setIsReading(false),
  });
  [
    { text: "그 말에 왕의 털옷을 보고 안자가 다음과 같이 말했다.", start: 0, end: 5338 },
    { text: "“옛날의 어진 군주들은 자기가 배부를 때 백성들의 굶주림을 알고, 자기가 따뜻할 때 백성들의 추움을 알며, 자기가 편안할 때 백성의 수고로움을 알았다고 하는데, 지금 왕께서는 다른 사람을 전혀 생각하지 않으시는군요.”", start: 5338, end: 26204 },
    { text: "이 말을 들은 경공은 부끄러워 아무 말도 못 했다.", start: 26204, end: 31294 },
  ];

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
        className="absolute left-[1080px] top-[112px] animate__animated animate__bounceIn animate__delay-1s z-10"
        active={isReading}
        onClick={() => (step === 1 ? sound1.play() : sound2.play())}
      />

      <ContentContainer>
        {step === 1 && (
          <div className="relative -top-[95px] w-[1460px]">
            <div
              className={`bg-[#f4ede1] rounded-[50px] px-14 pt-6 -mt-4 pb-8 text-[50px] leading-[80px] tracking-tighter break-keep transition-colors duration-[2000ms] ${isReading ? "text-reading" : ""
                }`}
            >
              중국 춘추 시대의 제나라 때, 군주인 경공의{" "}
              <span className="font-haeseo text-[54px] leading-tight">暴政</span>(폭정)으로
              <br />
              백성 모두 고통이 극심했다. 그러던 어느 겨울에 사흘 동안 눈이
              <br />쉼 없이 내리자, 경공은 여우 털로 만든 가볍고 따뜻한 옷을
              입고
              <br />
              설경의 아름다움에 취한 채 재상인 안자에게 말했다.
              <br />“<span className="font-haeseo text-[54px] leading-tight tracking-[-8px]">異常</span>(이상)한 일이로다.
              사흘 동안 내린 눈이 땅을 온통 뒤덮었는데
              <br />
              조금도 춥지 않구나.”
            </div>

            <img
              src={IMAGE1.src}
              className="absolute right-1 -bottom-[210px]"
            />
          </div>
        )}
        {step === 2 && (
          <div className="relative -top-[95px] w-[1460px]">
            <div
              className={`bg-[#f4ede1] rounded-[50px] px-14 pt-6 -mt-4 pb-8 text-[50px] leading-[80px] tracking-tighter break-keep transition-colors duration-[2000ms] ${isReading ? "text-reading" : ""
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
              className="absolute right-6 -bottom-[180px]"
            />
          </div>
        )}
      </ContentContainer>

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
      <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
