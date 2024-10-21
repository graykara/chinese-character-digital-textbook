"use client";

import { CreativityPageTemplate } from "@/app/pages/creativity-page-template";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import { CreativityTitleHeader } from "@/app/components/headers/creativity-title-header";
import { StepContainer } from "@/app/components/step-container";
import { useState } from "react";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>
      <CreativityTitleHeader
        title="뜻 세워 계획 짜기"
        containerClassName="absolute left-1/2 -translate-x-1/2 top-[150px] z-10"
      />
      <CreativityPageTemplate>
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
      </CreativityPageTemplate>

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
    </>
  );
}

const Step1 = () => (
  <div className="relative -left-2 top-20">
    <img src={IMAGE1.src} />
  </div>
);

const Step2 = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <div className="relative -left-2 top-20">
        <img src={IMAGE2.src} />
      </div>
      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
};
