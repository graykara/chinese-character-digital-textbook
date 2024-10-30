"use client";

import { ContentContainer } from "@/app/components/content-container";
import { HeaderContainer } from "@/app/components/headers/header-container";
import { TitleContainer } from "@/app/components/title-container";
import { useEffect, useState } from "react";
import { SOUND } from "@/app/utils/sound-player";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/15/중등한문_돌에 꽂힌 화살4.png";
import BACKGROUND2 from "@/app/bgpng_temp/15/중등한문_돌에 꽂힌 화살5.png";
import { StepContainer } from "@/app/components/step-container";

export default function Page() {
  const [step, setStep] = useState(1);

  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(false);
  }, [step]);

  return (
    <>
      <HeaderContainer>
        <img src="/header/preview_chinese_characters.png" alt="" />
      </HeaderContainer>

      <TitleContainer
        className="mt-10"
        sound="/sound/5/121-i-1.mp3"
      >
        <p className="tracking-tighter flex items-start gap-5 break-keep">
          <img src="/ui/flower-icon.png" />
          제시된 한자 카드를 보고, 다음 활동을 해 보자.
        </p>
      </TitleContainer>

      <ContentContainer className="!justify-start mt-5 pl-12">
        {step === 1 && (
          <div className="w-full flex mt-10">
            <img src={IMAGE1.src} />
            <div className="absolute left-[50px] top-[100px] grid grid-cols-6 gap-[70px] w-full h-[90px] pr-[80px]">
              <button onClick={() => SOUND("/sound/5/p121_word000.mp3").play()}>
              </button>
              <button onClick={() => SOUND("/sound/5/p121_word001.mp3").play()}></button>
              <button onClick={() => SOUND("/sound/5/p121_word002.mp3").play()}></button>
              <button onClick={() => SOUND("/sound/5/p121_word003.mp3").play()}></button>
              <button onClick={() => SOUND("/sound/5/p121_word004.mp3").play()}></button>
              <button onClick={() => SOUND("/sound/5/p121_word005.mp3").play()}></button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="w-full flex">
            <img src={IMAGE2.src} />
          </div>
        )}
      </ContentContainer>

      {step === 2 && (
        <CheckAnswerButton
          active={showAnswer}
          onClick={() => setShowAnswer(!showAnswer)}
        />
      )}

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />

      <img
        src={step === 1 ? BACKGROUND1.src : BACKGROUND2.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
