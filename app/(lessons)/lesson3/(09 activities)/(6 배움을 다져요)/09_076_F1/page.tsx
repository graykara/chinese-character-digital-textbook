"use client";

import { StrengthenLearningMainContentHeader } from "@/app/components/headers/strengthen-learning-main-content-header";
import { useContext, useState } from "react";
import IMAGE1 from "./bg_1.png";
import IMAGE2 from "./bg_2.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/9/중등한문_이야기가 담긴 성어121.png";
import BACKGROUND2 from "@/app/bgpng_temp/9/중등한문_이야기가 담긴 성어122.png";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { InputWithPen } from "@/app/components/input-with-pen";
import { PageInfoContext } from "@/app/utils/page-info";
import { Button } from "@/app/components/buttons/button";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  return (
    <>
      <StrengthenLearningMainContentHeader
        title={"성어의 풀이 순서를 빈칸에 숫자로 써 보자."}
        sound="/sound/3/76-i-1.mp3"
      />
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      <StepContainer maxStep={2} />
    </>
  );
}

const Step1 = () => {
  const answers = ["1", "2", "3", "4"];
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ContentContainer className="!justify-start -top-[90px] left-7">
        <div className="relative inline-block">
          <img src={IMAGE1.src} className="ml-[11px] mt-[80px]" />
          <Button className="absolute top-[250px] left-[150px] w-[600px] h-[100px] bg-transparent border-none cursor-pointer z-10" onClick={() => SOUND("/sound/3/74/4.mp3").play()}>
          </Button>
        </div>
        <div className="w-[610px] absolute grid grid-cols-4 left-1/2 -translate-x-1/2 gap-[3px] top-[240px] ml-[35px] text-[90px]">
          <span className="font-haeseo">朝</span>
          <span className="font-haeseo">三</span>
          <span className="font-haeseo">暮</span>
          <span className="font-haeseo">四</span>
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
        <div className="relative inline-block">
          <img src={IMAGE2.src} className="ml-[10px] mt-[80px]" />
          <Button className="absolute top-[250px] left-[150px] w-[600px] h-[100px] bg-transparent border-none cursor-pointer z-10" onClick={() => SOUND("/sound/3/74/3.mp3").play()}>
          </Button>
        </div>

        <div className="w-[610px] absolute grid grid-cols-4 left-1/2 -translate-x-1/2 gap-[3px] top-[240px] ml-[35px] text-[90px]">
          <span className="font-haeseo">漁</span>
          <span className="font-haeseo">父</span>
          <span className="font-haeseo">之</span>
          <span className="font-haeseo">利</span>
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
        src={BACKGROUND2.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
};