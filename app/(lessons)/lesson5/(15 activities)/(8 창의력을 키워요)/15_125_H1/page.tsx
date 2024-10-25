"use client";

import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import { useEffect, useState } from "react";
import { CreativityPageTemplate } from "@/app/pages/creativity-page-template";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { InputWithPen } from "@/app/components/input-with-pen";
import { TitleContainer } from "@/app/components/title-container";
import { StepContainer } from "@/app/components/step-container";
import BACKGROUND1 from "@/app/bgpng_temp/15/중등한문_돌에 꽂힌 화살24.png";
import BACKGROUND2 from "@/app/bgpng_temp/15/중등한문_돌에 꽂힌 화살25.png";
import { ContentContainer } from "@/app/components/content-container";

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>
      <CreativityPageTemplate>
        <TitleContainer 
          className="left-5 mt-14"
          sound="">
          <div className="flex items-center gap-1 text-[40px] tracking-tight -mr-10">
            <img src="/ui/flower-icon-2.png" width={38} height={38} />
            질문에 답하며 자신의 공부 집중도를 확인해 보자.
          </div>
        </TitleContainer>

        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {/* <ContentContainer className="-top-7 -left-14">
          <img src={IMAGE1.src} />
        </ContentContainer> */}
      </CreativityPageTemplate>

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
      <img src={step === 1 ? BACKGROUND1.src : BACKGROUND2.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}

const Step1 = () => (
  <div className="relative left-[170px] top-[10px]">
    <img src={IMAGE1.src} />
  </div>
);

const Step2 = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const answers = ["구체적인 계획 없이 공부한다.", "나의 진로에 필요한 공부를 생각해 보고 목표와 계획을 구체적으로 세운다."]
  return (
    <>
      <div className="relative left-[175px] top-[30px]">
        <img src={IMAGE2.src} />
      </div>

      <InputWithPen
        answer={answers[0]}
        showAnswer={showAnswer}
        className="text-[45px] w-[1000px] bg-transparent"
        penClassName="left-0 w-[60px] top-[30px]"
        containerClassName="absolute top-[180px] left-[500px]"
        isExample
      />

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
};

