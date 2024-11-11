"use client";

import { StrengthenLearningMainContentHeader } from "@/app/components/headers/strengthen-learning-main-content-header";
import { useState } from "react";
import IMAGE1 from "./bg_1.png";
import IMAGE2 from "./bg_2.png";
import { ContentContainer } from "@/app/components/content-container";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { StepContainer } from "@/app/components/step-container";
import { SOUND } from "@/app/utils/sound-player";
import { InputWithPen } from "@/app/components/input-with-pen";
import BACKGROUND1 from "@/app/bgpng_temp/7/중등한문_언어생활 속의 성어121.png";

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>
      <StrengthenLearningMainContentHeader
        title={"성어의 풀이 순서를 빈칸에 숫자로 써 보자."}
        sound="/sound/3/64-i-1.mp3"
      />
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      <StepContainer step={step} maxStep={2} onStepChange={setStep} />
    </>
  );
}

const Step1 = () => {
  const answers = ["1", "2", "3", "4"];
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ContentContainer className="!justify-start -top-[90px] left-7">
        <img src={IMAGE1.src} className="ml-[10px] mt-20" />
        <button className="absolute top-[260px] h-[100px] w-[560px] bg-transparent z-10" onClick={() => SOUND("/sound/3/p064_word000.mp3").play()}></button>
        <div
          className="w-[610px] absolute grid grid-cols-4 left-1/2 -translate-x-1/2 gap-[3px] top-[240px] ml-[35px] text-[90px]"
          // onClick={() => SOUND("/sound/3/64_001.mp3").play()}
        >
          <span className="font-haeseo">馬</span>
          <span className="font-haeseo">耳</span>
          <span className="font-haeseo">東</span>
          <span className="font-haeseo">風</span>
        </div>
        <InputWithPen
          answer={answers[0]}
          showAnswer={showAnswer}
          className="text-[80px] text-center w-[100px] bg-transparent"
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[150px] left-[478px]"
        />
        <InputWithPen
          answer={answers[1]}
          showAnswer={showAnswer}
          className="text-[80px] text-center w-[100px] bg-transparent"
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[150px] left-[630px]"
        />
        <InputWithPen
          answer={answers[2]}
          showAnswer={showAnswer}
          className="text-[80px] text-center w-[100px] bg-transparent"
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[150px] left-[782px]"
        />
        <InputWithPen
          answer={answers[3]}
          showAnswer={showAnswer}
          className="text-[80px] text-center w-[100px] bg-transparent"
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[150px] left-[934px]"
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
  const answers = ["2", "1", "4", "3"];
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ContentContainer className="!justify-start -top-[90px] left-7">
        <img src={IMAGE2.src} className="ml-[10px] mt-20" />
        <button className="absolute top-[260px] h-[100px] w-[560px] bg-transparent z-10" onClick={() => SOUND("/sound/3/p064_word001.mp3").play()}></button>
        <div
          className="w-[610px] absolute grid grid-cols-4 left-1/2 -translate-x-1/2 gap-[3px] top-[240px] ml-[35px] text-[90px]"
          // onClick={() => SOUND("/sound/3/64_002.mp3").play()}
        >
          <span className="font-haeseo">坐</span>
          <span className="font-haeseo">井</span>
          <span className="font-haeseo">觀</span>
          <span className="font-haeseo">天</span>
        </div>
        <InputWithPen
          answer={answers[0]}
          showAnswer={showAnswer}
          className="text-[80px] text-center w-[100px] bg-transparent"
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[151px] left-[477px]"
        />
        <InputWithPen
          answer={answers[1]}
          showAnswer={showAnswer}
          className="text-[80px] text-center w-[100px] bg-transparent"
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[151px] left-[629px]"
        />
        <InputWithPen
          answer={answers[2]}
          showAnswer={showAnswer}
          className="text-[80px] text-center w-[100px] bg-transparent"
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[151px] left-[780px]"
        />
        <InputWithPen
          answer={answers[3]}
          showAnswer={showAnswer}
          className="text-[80px] text-center w-[100px] bg-transparent"
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[151px] left-[933px]"
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
