"use client";

import { StrengthenLearningMainContentHeader } from "@/app/components/headers/strengthen-learning-main-content-header";
import { useState } from "react";
import IMAGE1 from "./bg_1.png";
import IMAGE2 from "./bg_2.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { InputWithPen } from "@/app/components/input-with-pen";
import { TextareaWithPen } from "@/app/components/textarea/textarea-with-pen";
import { WritingButton } from "@/app/components/buttons/writing-button";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/14/중등한문_사람만 귀한가요17.png";
import BACKGROUND2 from "@/app/bgpng_temp/14/중등한문_사람만 귀한가요18.png";

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
  const answers = ["사람", "만물", "만물", "사람", "사람", "만물"];

  return (
    <>
      <StrengthenLearningMainContentHeader
        title="본문의 내용을 바탕으로 다음 빈칸을 완성해 보자."
        sound="/sound/5/118-i-1.mp3"
      />
      <ContentContainer className="!justify-start -top-[65px] left-[90px]">
        <img src={IMAGE1.src} />
        <InputWithPen
          answer={answers[0]}
          showAnswer={showAnswer}
          className="text-[45px] text-center w-[140px] bg-transparent"
          penClassName="left-1/2 -translate-x-1/2 -mt-1 w-[54px]"
          containerClassName="absolute  left-[530px]"
        />
        <InputWithPen
          answer={answers[1]}
          showAnswer={showAnswer}
          className="text-[45px] text-center w-[140px] bg-transparent"
          penClassName="left-1/2 -translate-x-1/2 -mt-1 w-[54px]"
          containerClassName="absolute left-[940px]"
        />
        <InputWithPen
          answer={answers[2]}
          showAnswer={showAnswer}
          className="text-[45px] text-center w-[140px] bg-transparent"
          penClassName="left-1/2 -translate-x-1/2 -mt-1 w-[54px]"
          containerClassName="absolute top-[135px] left-[530px]"
        />
        <InputWithPen
          answer={answers[3]}
          showAnswer={showAnswer}
          className="text-[45px] text-center w-[140px] bg-transparent"
          penClassName="left-1/2 -translate-x-1/2 -mt-1 w-[54px]"
          containerClassName="absolute top-[135px] left-[940px]"
        />
        <InputWithPen
          answer={answers[4]}
          showAnswer={showAnswer}
          className="text-[45px] text-center w-[140px] bg-transparent"
          penClassName="left-1/2 -translate-x-1/2 -mt-1 w-[54px]"
          containerClassName="absolute top-[275px] left-[530px]"
        />
        <InputWithPen
          answer={answers[5]}
          showAnswer={showAnswer}
          className="text-[45px] text-center w-[140px] bg-transparent"
          penClassName="left-1/2 -translate-x-1/2 -mt-1 w-[54px]"
          containerClassName="absolute top-[275px] left-[780px]"
        />
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
  const answer = "네, 각각의 입장에서 보면 각자가 소중할 수 있지만 함께 살아가는 입장에서 보면 모두가 소중하기 때문입니다.";
  const [value, setValue] = useState("");
  return (
    <>
      <StrengthenLearningMainContentHeader
        title={
          <p className="tracking-tighter -mr-20">
            가상 인터뷰의 내용에서 홍대용의 마지막 말에 들어갈 내용을 써 보자.
          </p>
        }
        sound="/sound/5/118-i-2.mp3"
        className="w-[1600px]"
      />
      <WritingButton className="animate__animated animate__fadeIn animate__delay-1s absolute top-[145px] right-[85px] flex items-center gap-5 z-1" />


      <ContentContainer className="!justify-start -top-[75px] left-[50px] -mb-20">
        <img src={IMAGE2.src} />
        <TextareaWithPen
          answer={answer}
          showAnswer={showAnswer}
          containerClassName={`absolute resize-none w-[390px] left-[335px] top-[325px] pt-1 ml-5 text-[35px] tracking-tighter break-keep leading-[45px] bg-transparent ${showAnswer ? "text-example " : ""}`}
          penClassName="h-[40px] top-[320px] left-[360px]"
          rows={4}
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
