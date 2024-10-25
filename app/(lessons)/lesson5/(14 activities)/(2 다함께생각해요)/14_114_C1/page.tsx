"use client";

import { ThinkTogetherHeader } from "@/app/components/headers/think-together";
import IMAGE from "./image.png";
import IMAGE2 from "./image2.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useState } from "react";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { InputWithPen } from "@/app/components/input-with-pen";
import BACKGROUND1 from "@/app/bgpng_temp/14/중등한문_사람만 귀한가요2.png";
import BACKGROUND2 from "@/app/bgpng_temp/14/중등한문_사람만 귀한가요3.png";
import { WritingButton } from "@/app/components/buttons/writing-button";

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>
      <ThinkTogetherHeader
        title={
          "다음과 같이 동물을 구분하였을 때 각 동물이 겪을 수 있는 문제점을 생각하여 써 보자."
        }
      />

      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      <StepContainer step={step} maxStep={2} onStepChange={setStep} />
    </>
  );
}

const Step1 = () => {
  return (
    <>
      <ContentContainer>
        <img src={IMAGE.src} />
      </ContentContainer>
      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
};

const Step2 = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const answer = [
    "누런 소가 일을 더 잘한다는 말을 들으면 검은 소가 섭섭할까봐 귓속말로 말했습니다.",
  ];

  return (
    <>
      <ContentContainer className="">
        <img src={IMAGE2.src} />
      </ContentContainer>

      <WritingButton
        className="animate__animated animate__fadeIn animate__delay-1s absolute top-[50px] left-[100px] z-1" />

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      <img
        src={BACKGROUND2.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
};
