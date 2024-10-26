"use client";

import { ThinkTogetherHeader } from "@/app/components/headers/think-together";
import IMAGE1 from "./bg_2.png";
import IMAGE2 from "./bg_3.png";
import IMAGE3 from "./bg_4.png";
import { ContentContainer } from "@/app/components/content-container";
import { useState } from "react";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { InputWithPen } from "@/app/components/input-with-pen";
import BACKGROUND1 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어22.png";
import BACKGROUND2 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어23.png";
import BACKGROUND3 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어24.png";
import { StepContainer } from "@/app/components/step-container";

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>
      <ThinkTogetherHeader
        title={<p className="-ml-2 text-[50px]">대화를 읽고 ㉠~㉢에 들어갈 말을 찾아 써 보자.</p>}
        sound=""
        subTitle={
          <p className="-ml-[42px] -mt-1 text-[48px] text-[#1b1b1b] tracking-tight break-keep leading-[55px] "><span className="text-[#df865a] text-[45px] -mr-1">*</span> ㉡, ㉢에 들어갈 성어의 뜻은 부록의 어휘 풀이에서 찾을 수 있습니다.</p>
        }
      />

      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}

      <StepContainer maxStep={3} step={step} onStepChange={setStep} />
      <img
        src={step === 1 ? BACKGROUND1.src
          : step === 2 ? BACKGROUND2.src
            : step === 3 ? BACKGROUND3.src
              : ""
        }
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}

const Step1 = () => {
  const answer = "금"
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <>
      <ContentContainer className="-mt-10">
        <img src={IMAGE1.src} className="ml-[25px] -mt-[70px]" />
        <InputWithPen
          answer={answer}
          showAnswer={showAnswer}
          className="text-center w-[1090px] h-[80px] ml-[90px] pt-3 pb-0 text-[50px] bg-transparent"
          penClassName="left-24 mt-1 h-[55px]"
          containerClassName="absolute bottom-[130px]"
        />
      </ContentContainer>
      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
};

const Step2 = () => {
  const answer = "풍전등화(風前燈火)";
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <>
      <ContentContainer className="-mt-10">
        <img src={IMAGE2.src} className="ml-[25px] -mt-[113px]" />
        <InputWithPen
          answer={answer}
          showAnswer={showAnswer}
          className="text-center w-[1090px] h-[80px] ml-[90px] pt-3 pb-0 text-[50px] bg-transparent"
          penClassName="left-24 mt-1 h-[55px]"
          containerClassName="absolute bottom-[130px]"
        />
      </ContentContainer>
      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
};

const Step3 = () => {
  const answer = "우이독경(牛耳讀經)";
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <>
      <ContentContainer className="-mt-10">
        <img src={IMAGE3.src} className="ml-[25px] -mt-[113px]" />
        <InputWithPen
          answer={answer}
          showAnswer={showAnswer}
          className="text-center w-[1090px] h-[80px] ml-[90px] pt-3 pb-0 text-[50px] bg-transparent"
          penClassName="left-24 mt-1 h-[55px]"
          containerClassName="absolute bottom-[130px]"
        />
      </ContentContainer>
      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
};