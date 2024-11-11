"use client";

import { SoundButton2 } from "@/app/components/buttons/sound-button2";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useContext, useEffect, useState } from "react";
import { Howl } from "howler";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import BACKGROUND1 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕26.png"; //25, 26
import { CultureHeader } from "@/app/components/headers/culture-header";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  const [isReading, setIsReading] = useState(false);
  const sounds = ["/sound/5/131_story-1.mp3", "/sound/5/131_story-2.mp3"];

  const sound = new Howl({
    src: sounds[step - 1],
    onplay: () => setIsReading(true),
    onend: () => setIsReading(false),
  });
  [
    {
      text: "조선 중기 영의정을 지낸 홍서봉의 집안은 거친 밥과 나물국도 자주 거를 정도로 매우 가난하였다.",
      start: 0,
      end: 9140,
    },
    {
      text: "하루는 그의 어머니가 아랫사람을 보내 사 온 고기를 살펴보니 상해 있었다.",
      start: 9140,
      end: 15100,
    },
    {
      text: "바로 아랫사람에게 고깃간에 고기가 얼마나 남아 있었는지 묻고는 자신의 머리 장식을 판 돈으로 남은 고기를 모두 사 오게 했다.",
      start: 15100,
      end: 24898,
    },
    {
      text: "그리고 사 온 고기를 모두 담장 밑에 묻었다.",
      start: 24898,
      end: 29257,
    },
  ];
  [
    {
      text: "홍서봉의 어머니는 다른 사람들이 상한 고기를 먹고 병이 날까 염려하였던 것이다.",
      start: 0,
      end: 6924,
    },
    {
      text: "훗날 홍서봉은 이러한 어머니의 선행으로 자손들이 복을 받은 것이라며 어머니를 자랑스러워하였다.",
      start: 6924,
      end: 14889,
    },
  ];

  useEffect(() => {
    return () => {
      sound.stop();
    };
  }, []);

  return (
    <>
      <CultureHeader title={"상한 고기를 모두 사 온 까닭"} />

      <SoundButton2
        className="absolute top-[110px] left-[990px] animate__animated animate__bounceIn animate__delay-2s z-10"
        active={isReading}
        onClick={() => {
          sound.stop();
          sound.play();
        }}
      />

      <ContentContainer>
        {step === 1 && (
          <div className="absolute top-[105px] w-[1460px]">
            <div
              className={`bg-[#f4ede1] rounded-[50px] pl-10 pr-2 pt-5 -mt-4 pb-8 text-[45px] leading-[65px] tracking-tight break-keep transition-colors duration-[2000ms] ${
                isReading ? "text-reading" : ""
              }`}
            >
              조선 중기 영의정을 지낸 홍서봉의 집안은 거친 밥과 나물국도 자주
              거를 정도로 매우 가난하였다. 하루는 그의 어머니가 아랫사람을 보내
              사 온 고기를 살펴보니 상해 있었다. 바로 아랫사람에게 고깃간에
              고기가 얼마나 남아 있었는지 묻고는 자신의 머리 장식을 판 돈으로
              남은 고기를 모두 사 오게 했다. 그리고 사 온 고기를 모두 담장 밑에
              묻었다.
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="absolute top-[105px] w-[1460px]">
            <div
              className={`bg-[#f4ede1] rounded-[50px] pl-10 pr-2 pt-5 -mt-4 pb-8 text-[45px] leading-[65px] tracking-tight break-keep transition-colors duration-[2000ms] ${
                isReading ? "text-reading" : ""
              }`}
            >
              홍서봉의 어머니는 다른 사람들이 상한 고기를 먹고 병이 날까
              염려하였던 것이다. 훗날 홍서봉은 이러한 어머니의 선행으로 자손들이
              복을 받은 것이라며 어머니를 자랑스러워하였다.
            </div>
          </div>
        )}
        <div className="absolute bottom-16 mr-4 right-0">
          <img src={step === 1 ? IMAGE1.src : IMAGE2.src} />
        </div>
      </ContentContainer>

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
