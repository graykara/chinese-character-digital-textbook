"use client";

import { ThinkTogetherHeader } from "@/app/components/headers/think-together";
import IMAGE from "./image.png";
import IMAGE2 from "./image2.png";
import IMAGE3 from "./image3.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useContext, useState } from "react";
import { PageInfoContext } from "@/app/utils/page-info";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { BuddyButton } from "@/app/components/buttons/buddy-button";

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("다 함께 생각해");

  const [step, setStep] = useState(1);

  return (
    <>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      <StepContainer step={step} maxStep={2} onStepChange={setStep} />
    </>
  );
}

const Step1 = () => {
  return (
    <>
      <ThinkTogetherHeader title="그림과 기호를 보고 무엇을 의미하는지 말해 보자." />

      <ContentContainer>
        <img src={IMAGE.src} />
      </ContentContainer>

      <ExampleAnswerButton />
    </>
  );
};

const Step2 = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ThinkTogetherHeader title={
        <>글자가 없는 세상에 살고 있다고 가정하고 아래의 문장을 간단한 그림이나 기호로 표현해 보자.
        <BuddyButton className="absolute left-[600px] top-[85px]" />
        </>} />

      <ContentContainer className="!justify-start mt-20">
        <img src={IMAGE2.src} />
        {showAnswer ? (
          <img src={IMAGE3.src} className="absolute top-[280px]" />
        ) : null}
      </ContentContainer>

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
};
