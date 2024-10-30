"use client";

import { StrengthenLearningWordHeader } from "@/app/components/headers/strengthen-learning-word-header";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useState } from "react";
import { InputWithPen } from "@/app/components/input-with-pen";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/11/중등한문_너와 나, 우리29.png";
import BACKGROUND2 from "@/app/bgpng_temp/11/중등한문_너와 나, 우리30.png";

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>
      <StrengthenLearningWordHeader
        title="다음 설명을 보고 문장의 구조를 살펴보자."
        sound="/sound/4/94-i-3.mp3"
      />

      <ContentContainer className="!justify-start !items-start left-[160px] -top-12">
        {step === 1 && (
          <div>
            <img src={IMAGE1.src} />
          </div>
        )}
        {step === 2 && (
          <div>
            <img src={IMAGE2.src} />
          </div>
        )}
      </ContentContainer>

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
      <img src={
        step === 1 ? BACKGROUND1.src :
        step === 2 ? BACKGROUND2.src : ""
       } className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
