"use client";

import { ContentContainer } from "@/app/components/content-container";
import { HeaderContainer } from "@/app/components/headers/header-container";
import { TitleContainer } from "@/app/components/title-container";
import { useEffect, useState } from "react";
import { SOUND } from "@/app/utils/sound-player";
import EXAMPLE from "./example.png";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어3.png";
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

      <TitleContainer className="mt-10" sound="/sound/3/79-i.mp3">
        <p className="tracking-tighter flex items-start gap-5 break-keep">
          <img src="/ui/flower-icon.png" />
          제시된 한자 카드를 보고, 도형으로 가려진 한자의 음과 뜻을 맞혀 보자.
        </p>
      </TitleContainer>

      <ContentContainer className="!justify-start mt-5 pl-12">
        <img src={EXAMPLE.src} className="mb-10" />
        <div className="absolute left-[50px] top-[50px] grid grid-cols-8 gap-[30px] w-full h-[90px] bg-transparent pr-[50px]">
          <button
            onClick={() => SOUND("/sound/3/p079_word000.mp3").play()}
          ></button>
          <button
            onClick={() => SOUND("/sound/3/p079_word001.mp3").play()}
          ></button>
          <button
            onClick={() => SOUND("/sound/3/p079_word002.mp3").play()}
          ></button>
          <button
            onClick={() => SOUND("/sound/3/p079_word003.mp3").play()}
          ></button>
          <button
            onClick={() => SOUND("/sound/3/p079_word004.mp3").play()}
          ></button>
          <button
            onClick={() => SOUND("/sound/3/p079_word005.mp3").play()}
          ></button>
          <button
            onClick={() => SOUND("/sound/3/p079_word006.mp3").play()}
          ></button>
          <button
            onClick={() => SOUND("/sound/3/p079_word007.mp3").play()}
          ></button>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex justify-center items-center">
            {step === 1 && (
              <div className="relative">
                <img src={IMAGE1.src} />

                {showAnswer && (
                  <>
                    <div className="text-answer absolute left-[13px] bottom-0 flex text-[40px]">
                      <p className="w-[90px]">은</p>은혜
                    </div>
                    <div className="text-answer absolute left-[345px] bottom-0 flex text-[40px]">
                      <p className="w-[90px]">선</p>좋다
                    </div>
                    <div className="text-answer absolute left-[675px] bottom-0 flex text-[40px]">
                      <p className="w-[90px]">결</p>맺다
                    </div>
                  </>
                )}
              </div>
            )}
            {step === 2 && (
              <div className="relative">
                <img src={IMAGE2.src} />

                {showAnswer && (
                  <>
                    <div className="text-answer absolute left-[13px] bottom-0 flex text-[40px]">
                      <p className="w-[100px]">보</p>갚다
                    </div>
                    <div className="text-answer absolute left-[355px] bottom-0 flex text-[40px]">
                      <p className="w-[100px]">익</p>더욱
                    </div>
                    <div className="text-answer absolute left-[700px] bottom-0 flex text-[40px]">
                      <p className="w-[85px]">호</p>호랑이
                    </div>
                    <div className="text-answer absolute left-[1045px] bottom-0 flex text-[40px]">
                      <p className="w-[85px]">성</p>이루다
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
    </>
  );
}
