"use client";

import { StrengthenLearningMainContentHeader } from "@/app/components/headers/strengthen-learning-main-content-header";
import { useState } from "react";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import { ContentContainer } from "@/app/components/content-container";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘17.png";
import { StepContainer } from "@/app/components/step-container";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";

export default function Page() {
  const [step, setStep] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <StrengthenLearningMainContentHeader
        title="문장의 의미를 생각해 보고 어떨 때, 누구에게 하면 좋을지 적어 보자."
        sound=""
      />

      <ContentContainer className="!justify-start -mt-8">
        {step === 1 && (
          <div className="relative">
            <img src={IMAGE1.src} />
          </div>
        )}
        {step === 2 && (
          <div className="relative">
            <img src={IMAGE2.src} />
          </div>
        )}
      </ContentContainer>

      {step === 2 && (
        <ExampleAnswerButton
          active={showAnswer}
          onClick={() => setShowAnswer(!showAnswer)}
        />
      )}

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
      <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
