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
import BACKGROUND1 from "@/app/bgpng_temp/3/중등한문_그려서 만든 한자2.png"
import BACKGROUND2 from "@/app/bgpng_temp/3/중등한문_그려서 만든 한자3.png"

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("다 함께 생각해요");

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

      <ContentContainer className="absolute left-[40px] bottom-[100px]">
        <img src={IMAGE.src} />
      </ContentContainer>

      <ExampleAnswerButton active={false} onClick={() => {}} />
      <img src={BACKGROUND1.src} className="absolute left-0 top-0 opacity-30 pointer-events-none" />
    </>
  );
};

const Step2 = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ThinkTogetherHeader title={
        <>글자가 없는 세상에 살고 있다고 가정하고 아래의 문장을 간단한 그림이나 기호로 표현해 보자.
        <BuddyButton className="absolute left-[800px] top-[70px]" />
        </>} />

      <ContentContainer className="!justify-start mt-20 mb-[100px]">
        <img src={IMAGE2.src} className="absolute top-[35px] left-[20px]"/>
        {showAnswer ? (
          <img src={IMAGE3.src} className="absolute top-[280px]" />
        ) : null}
      </ContentContainer>

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      {/* <img src={BACKGROUND2.src} className="absolute left-0 top-0 opacity-30 pointer-events-none" /> */}
    </>
  );
};
