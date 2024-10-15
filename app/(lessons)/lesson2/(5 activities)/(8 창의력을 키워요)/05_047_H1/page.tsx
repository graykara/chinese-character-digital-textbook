"use client";

import IMAGE from "./image.png";
import IMAGE2 from "./image2.png";
import { useEffect, useState } from "react";
import { CreativityPageTemplate } from "@/app/pages/creativity-page-template";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { TitleContainer } from "@/app/components/title-container";
import { StepContainer } from "@/app/components/step-container";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    setShowAnswer(false);
  }, [step]);

  return (
    <>
      <CreativityPageTemplate>
        <TitleContainer className="!mx-0">
          <div className="flex items-center gap-4">
            <img src="/ui/flower-icon-2.png" />
            다음 단어의 뜻을 조사하고 차이점을 발표해 보자.
          </div>
        </TitleContainer>

        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
      </CreativityPageTemplate>

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
    </>
  );
}

const Step1 = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <>
      <div className="relaitve h-full flex justify-end items-end pr-5">
        <img src={IMAGE.src} />
      </div>
      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
};

const Step2 = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <>
      <div className="relaitve h-full flex justify-end items-end pr-5">
        <img src={IMAGE2.src} />
      </div>
      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
};
