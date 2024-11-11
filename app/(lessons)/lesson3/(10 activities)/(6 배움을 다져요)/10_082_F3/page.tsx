"use client";

import { StrengthenLearningWordHeader } from "@/app/components/headers/strengthen-learning-word-header";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import { InputWithPen } from "@/app/components/input-with-pen";
import { ContentContainer } from "@/app/components/content-container";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { useContext, useState } from "react";
import { SOUND } from "@/app/utils/sound-player";
import { SmartButton } from "@/app/components/buttons/smart-button";
import BACKGROUND1 from "@/app/bgpng_temp/10/중등한문_이야기가 담긴 성어224.png";
import { StepContainer } from "@/app/components/step-container";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <StrengthenLearningWordHeader
        title={
          <p className="tracking-wide">디지털 도구를 이용하여 밑줄 친 한자의 여러 가지 뜻을 찾아 써 보자.</p>
        }
        sound="/sound/3/82-i-3.mp3"
      />
      <div><p className="ml-[280px] -mt-9 text-[45px] text-[#1b1b1b] tracking-normal break-keep leading-[55px] "><span className="text-answer text-[55px]">*</span> 부록의 미니 자전을 이용해도 좋습니다.</p></div>
      
      <SmartButton
        link="https://hanja.dict.naver.com/"
        className="animate__animated animate__bounceIn animate__delay-2s absolute top-[278px] right-[164px]" 
        />

      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}

      <StepContainer maxStep={2} />

      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}

const Step1 = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const answers = ["더욱", "이롭다", "좋다", "착하다"];

  return (
    <>
      <ContentContainer className="!justify-start top-12 -left-6">
        <img src={IMAGE1.src} />
        <InputWithPen
          answer={answers[0]}
          showAnswer={showAnswer}
          className={`w-[400px] text-center bg-transparent text-[50px] tracking-tighter`}
          penClassName="-left-0 -mt-1 w-[53px]"
          containerClassName="absolute top-[250px] left-[385px] mt-1 ml-1"
        />
        <InputWithPen
          answer={answers[1]}
          showAnswer={showAnswer}
          className={`w-[400px] text-center bg-transparent text-[50px] tracking-tighter`}
          penClassName="-left-0 -mt-1 w-[53px]"
          containerClassName="absolute top-[250px] left-[900px] mt-1 ml-1"
        />
        <InputWithPen
          answer={answers[2]}
          showAnswer={showAnswer}
          className={`w-[400px] text-center bg-transparent text-[50px] tracking-tighter`}
          penClassName="-left-0 -mt-1 w-[53px]"
          containerClassName="absolute top-[345px] left-[385px] mt-1 ml-1"
        />
        <InputWithPen
          answer={answers[3]}
          showAnswer={showAnswer}
          className={`w-[400px] text-center bg-transparent text-[50px] tracking-tighter`}
          penClassName="-left-0 -mt-1 w-[53px]"
          containerClassName="absolute top-[345px] left-[900px] mt-1 ml-1"
        />
      </ContentContainer>
      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  )
}
const Step2 = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const answers = ["갚다","알리다"];

  return (
    <>
       <ContentContainer className="!justify-start top-12 -left-6">
        <img src={IMAGE2.src} />
        <InputWithPen
          answer={answers[0]}
          showAnswer={showAnswer}
          className={`w-[400px] text-center bg-transparent text-[50px] tracking-tighter`}
          penClassName="-left-0 -mt-1 w-[53px]"
          containerClassName="absolute top-[250px] left-[385px] mt-1 ml-1"
        />
        <InputWithPen
          answer={answers[1]}
          showAnswer={showAnswer}
          className={`w-[400px] text-center bg-transparent text-[50px] tracking-tighter`}
          penClassName="-left-0 -mt-1 w-[53px]"
          containerClassName="absolute top-[250px] left-[900px] mt-1 ml-1"
        />

      </ContentContainer>
      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  )
}