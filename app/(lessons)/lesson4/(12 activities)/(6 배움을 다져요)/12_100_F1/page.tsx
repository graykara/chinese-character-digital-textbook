"use client";

import { StrengthenLearningMainContentHeader } from "@/app/components/headers/strengthen-learning-main-content-header";
import { useState } from "react";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import { ContentContainer } from "@/app/components/content-container";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/12/중등한문_나에게 힘이 되는 글25.png"; //24, 25
import { StepContainer } from "@/app/components/step-container";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { GroupButton } from "@/app/components/buttons/group-button";

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
      <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}

const Step1 = () => {
  return (
    <>
      <StrengthenLearningMainContentHeader
        title={<p className="tracking-[-6px]">문장의 의미를 생각해 보고 어떨 때, 누구에게 하면 좋을지 적어 보자.</p>}
        sound=""
      />
      
      <GroupButton className="animate__animated animate__fadeIn animate__delay-2s absolute top-[210px] left-[1550px] flex items-center gap-5" />

      <ContentContainer className="!justify-start left-8 -mt-20">
        <div className="relative mt-20">
          <img src={IMAGE1.src} />
        </div>
      </ContentContainer>
    </>
  );
}

const Step2 = () => {
  const answers = [
    "열심히 했지만 좋은 결과를 얻지 못해 꿈을 포기하려고 하는 친구", 
    "네가 포기만 하지 않는다면, 시간이 좀 걸리더라도 언젠가는 꿈을 이룰 수 있을거야.",
    "실수를 자책하는 친구",
    "이번 실수로 인해 새롭게 알게 된 게 있잖아.\n이렇게 성장하는 거야!"];
  const [showAnswer, setShowAnswer] = useState(false);
  const [value, setValue] = useState("");

  return (
    <>
      <StrengthenLearningMainContentHeader
        title={<p className="tracking-[-6px]">문장의 의미를 생각해 보고 어떨 때, 누구에게 하면 좋을지 적어 보자.</p>}
        sound=""
      />

      <div className="absolute top-[210px] left-[1550px] flex items-center gap-5">
        <GroupButton />
      </div>

      <ContentContainer className="!justify-start left-8 -mt-20">
        <div className="relative ml-1">
          <img src={IMAGE2.src} />
        </div>

        {!value && !showAnswer ? (
          <img
            src="/ui/textarea-pen.png"
            className="absolute pointer-events-none"
            style={{
              height: 48,
              top: 20,
              left: 710
            }}
          />
        ) : null}
        <textarea
          value={showAnswer ? answers[0] : value}
          onChange={(e) => setValue(e.target.value)}
          className={`absolute resize-none w-[220px] left-[710px] top-[20px] pt-1 ml-5 text-[35px] tracking-tighter break-keep leading-[42px] bg-transparent ${showAnswer ? "text-example tracking-tighter break-keep" : ""
            }`}
          rows={5}
        ></textarea>

        {!value && !showAnswer ? (
          <img
            src="/ui/textarea-pen.png"
            className="absolute pointer-events-none"
            style={{
              height: 48,
              top: 20,
              left: 1010
            }}
          />
        ) : null}
        <textarea
          value={showAnswer ? answers[1] : value}
          onChange={(e) => setValue(e.target.value)}
          className={`absolute resize-none w-[380px] left-[1010px] top-[20px] pt-1 ml-5 pr-1 text-[35px] tracking-tighter break-keep leading-[42px] bg-transparent ${showAnswer ? "text-example tracking-tighter break-keep" : ""
            }`}
          rows={5}
        ></textarea>

{!value && !showAnswer ? (
          <img
            src="/ui/textarea-pen.png"
            className="absolute pointer-events-none"
            style={{
              height: 48,
              top: 320,
              left: 710
            }}
          />
        ) : null}
        <textarea
          value={showAnswer ? answers[2] : value}
          onChange={(e) => setValue(e.target.value)}
          className={`absolute resize-none w-[220px] left-[710px] top-[320px] pt-1 ml-5 text-[35px] tracking-tighter break-keep leading-[42px] bg-transparent ${showAnswer ? "text-example tracking-tighter break-keep" : ""
            }`}
          rows={5}
        ></textarea>

        {!value && !showAnswer ? (
          <img
            src="/ui/textarea-pen.png"
            className="absolute pointer-events-none"
            style={{
              height: 48,
              top: 320,
              left: 1010
            }}
          />
        ) : null}
        <textarea
          value={showAnswer ? answers[3] : value}
          onChange={(e) => setValue(e.target.value)}
          className={`absolute resize-none w-[380px] left-[1010px] top-[320px] pt-1 ml-5 pr-1 text-[35px] tracking-tighter break-keep leading-[42px] bg-transparent ${showAnswer ? "text-example tracking-tighter break-keep" : ""
            }`}
          rows={5}
        ></textarea>

      </ContentContainer>

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />


    </>
  );
};
