"use client";

import { ContentContainer } from "@/app/components/content-container";
import { HeaderContainer } from "@/app/components/headers/header-container";
import { TitleContainer } from "@/app/components/title-container";
import { useEffect, useState } from "react";
import EXAMPLE from "./example.png";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import { StepContainer } from "@/app/components/step-container";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘4.png"

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

      <TitleContainer className="mt-10">
        <p className="tracking-tight flex items-start gap-5">
          <img src="/ui/flower-icon.png" />
          제시된 한자 카드를 보고, 설명에 해당하는 한자를 써 보자.
        </p>
      </TitleContainer>

      <ContentContainer className="!justify-start pt-8">
        <div className="w-full flex justify-center">
          <img src={EXAMPLE.src} />
        </div>
        <div className="relative w-full pb-20">
          {step === 1 && (
            <div className="relative mt-10">
              <img src={IMAGE1.src} alt="" />
            </div>
          )}
          {step === 2 && (
            <div className="relative mt-10">
              <img src={IMAGE2.src} alt="" />
            </div>
          )}
        </div>
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
      <img src={BACKGROUND1.src} className="absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
