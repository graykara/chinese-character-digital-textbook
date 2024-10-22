"use client";

import { StrengthenLearningMainContentHeader } from "@/app/components/headers/strengthen-learning-main-content-header";
import { useState } from "react";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어22.png";
import BACKGROUND2 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어23.png";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";

export default function Page() {
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
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <StrengthenLearningMainContentHeader
        title={"성어와 의미가 통하는 우리말 속담을 디지털 도구로 찾아 써보자. "}
        sound=""
      />
      <ContentContainer className="!justify-start -top-[90px] left-7">
        <img src={IMAGE1.src} />
        <div className="w-[1300px] relative grid grid-cols-[1fr__350px] gap-[100px]"></div>
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
};

const Step2 = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <StrengthenLearningMainContentHeader
        title={"성어와 의미가 통하는 우리말 속담을 디지털 도구로 찾아 써보자. "}
        sound=""
      />
      <ContentContainer className="!justify-start -top-[90px] left-7">
        <img src={IMAGE2.src} />
        <div className="w-[1300px] relative grid grid-cols-[1fr__350px] gap-[100px]"></div>
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
};

const Step3 = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <StrengthenLearningMainContentHeader
        title={" 풀이 순서가 같은 두 개의 성어를 찾아 ○표 해 보자."}
        sound=""
      />
      <ContentContainer className="!justify-start -top-[50px] left-9">
        <img src={IMAGE3.src} />
        <div className="w-[1300px] relative grid grid-cols-[1fr__350px] gap-[100px]"></div>
      </ContentContainer>

      <CheckAnswerButton
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
