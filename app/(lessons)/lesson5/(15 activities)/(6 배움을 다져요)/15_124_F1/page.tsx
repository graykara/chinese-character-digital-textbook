"use client";

import { StrengthenLearningMainContentHeader } from "@/app/components/headers/strengthen-learning-main-content-header";
import { useContext, useState } from "react";
import IMAGE1 from "./bg_1.png";
import IMAGE1_after from "./bg_1_after.png";
import IMAGE2 from "./bg_2.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { WritingButton } from "@/app/components/buttons/writing-button";
import { GroupButton } from "@/app/components/buttons/group-button";
import { InputWithPen } from "@/app/components/input-with-pen";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/15/중등한문_돌에 꽂힌 화살19.png";
import BACKGROUND2 from "@/app/bgpng_temp/15/중등한문_돌에 꽂힌 화살20.png";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);
  const [showAnswer, setShowAnswer] = useState(false);

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
  const answer1 = ["누런 소가 더 일을 잘합니다"];
  const answer2 = [
    "누런 소가 나으면 저 소가 못한 것이 되는데 아무리 가축이라도 이 말을 듣게 되면 불평하는 마음이 생길 것 같아 그랬습니다.",
  ];

  return (
    <>
      <StrengthenLearningMainContentHeader
        title={"풀이에서 틀린 부분을 찾아 바르게 고쳐 보자."}
        sound="/sound/5/124-i-1.mp3"
      />
      <ContentContainer className="!justify-start -top-[40px] left-[95px]">
        <img src={!showAnswer ? IMAGE1.src : IMAGE1_after.src} />
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
  const answers = [
    "긴급한 상황에서 정신을 집중하여 화살을 쏘았기 때문에",
    "어떤 일을 할 때 늘 최선을 다하는 마음가짐과 태도를 지녀야 한다.",
  ];
  return (
    <>
      <StrengthenLearningMainContentHeader
        title={"본문의 내용을 바탕으로 질문의 답을 쓰고 발표해 보자."}
        sound="/sound/5/124-i-2.mp3"
      />

      <WritingButton className="animate__animated animate__fadeIn animate__delay-2s absolute top-[205px] left-[1400px] flex items-center gap-5" />
      <GroupButton className="animate__animated animate__fadeIn animate__delay-2s absolute top-[205px] left-[1520px] flex items-center gap-5" />

      <ContentContainer className="!justify-start -top-[40px] left-[75px]">
        <img src={IMAGE2.src} />
        <InputWithPen
          answer={answers[0]}
          showAnswer={showAnswer}
          className={`text-[45px] tracking-tighter w-[1200px] mt-1 bg-transparent ${showAnswer ? "text-example " : ""}`}
          penClassName="-ml-3 -mt-1 w-[45px]"
          containerClassName="absolute top-[85px] left-[190px] "
        />
        <InputWithPen
          answer={answers[1]}
          showAnswer={showAnswer}
          className={`text-[45px] tracking-tighter w-[1200px] mt-1 bg-transparent ${showAnswer ? "text-example " : ""}`}
          penClassName="-ml-3 -mt-1 w-[45px]"
          containerClassName="absolute top-[275px] left-[200px] "
        />
      </ContentContainer>

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
