"use client";

import { StrengthenLearningMainContentHeader } from "@/app/components/headers/strengthen-learning-main-content-header";
import { useState } from "react";
import IMAGE1 from "./bg_1.png";
import IMAGE2 from "./bg_2.png";
import IMAGE3 from "./bg_3.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/10/중등한문_이야기가 담긴 성어220.png";
import BACKGROUND2 from "@/app/bgpng_temp/10/중등한문_이야기가 담긴 성어221.png";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { InputWithPen } from "@/app/components/input-with-pen";
import { WritingButton } from "@/app/components/buttons/writing-button";

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>
      <StrengthenLearningMainContentHeader
        title={"성어의 풀이 순서를 빈칸에 숫자로 써 보자."}
        sound="/sound/3/82-i-1.mp3"
      />
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      <StepContainer step={step} maxStep={2} onStepChange={setStep} />
    </>
  );
}

const Step1 = () => {
  const answers = ["2", "1", "3"];
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ContentContainer className="!justify-start -top-[90px] left-7">
        <img src={IMAGE1.src} className="-ml-12 mt-20" />
        <button className="absolute top-[300px] left-[500px] w-[450px] h-[100px] bg-transparent border-none cursor-pointer z-10" onClick={() => SOUND("/sound/3/80/1.mp3").play()}></button>
        <div className="w-[610px] absolute grid grid-cols-4 left-1/2 -translate-x-1/2 gap-[50px] top-[285px] ml-[70px] text-[90px]">
          <span className="font-haeseo">背</span>
          <span className="font-haeseo">水</span>
          <span className="font-haeseo">陣</span>
        </div>
        <InputWithPen
          answer={answers[0]}
          showAnswer={showAnswer}
          className="text-[80px] text-center w-[100px] bg-transparent"
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[165px] left-[510px]"
        />
        <InputWithPen
          answer={answers[1]}
          showAnswer={showAnswer}
          className="text-[80px] text-center w-[100px] bg-transparent"
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[165px] left-[675px]"
        />
        <InputWithPen
          answer={answers[2]}
          showAnswer={showAnswer}
          className="text-[80px] text-center w-[100px] bg-transparent"
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[165px] left-[845px]"
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
  const answers = ["1", "2", "4", "3"];
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ContentContainer className="!justify-start -top-[90px] left-0">
        <img src={IMAGE2.src} className="ml-[10px] mt-20" />
        <button className="absolute top-[280px] left-[450px] w-[600px] h-[100px] bg-transparent border-none cursor-pointer z-10" onClick={() => SOUND("/sound/3/80/3.mp3").play()}>
          </button>
        <div className="w-[650px] absolute grid grid-cols-4 left-1/2 -translate-x-1/2 gap-[10px] top-[265px] ml-[30px] text-[90px]">
          <span className="font-haeseo">三</span>
          <span className="font-haeseo">人</span>
          <span className="font-haeseo">成</span>
          <span className="font-haeseo">虎</span>
        </div>
        <InputWithPen
          answer={answers[0]}
          showAnswer={showAnswer}
          className="text-[80px] text-center w-[100px] bg-transparent"
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[162px] left-[455px]"
        />
        <InputWithPen
          answer={answers[1]}
          showAnswer={showAnswer}
          className="text-[80px] text-center w-[100px] bg-transparent"
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[162px] left-[620px]"
        />
        <InputWithPen
          answer={answers[2]}
          showAnswer={showAnswer}
          className="text-[80px] text-center w-[100px] bg-transparent"
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[162px] left-[790px]"
        />
        <InputWithPen
          answer={answers[3]}
          showAnswer={showAnswer}
          className="text-[80px] text-center w-[100px] bg-transparent"
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[162px] left-[955px]"
        />
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