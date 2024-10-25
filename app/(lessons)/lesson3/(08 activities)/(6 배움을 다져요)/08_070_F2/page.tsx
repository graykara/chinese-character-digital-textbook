"use client";

import { StrengthenLearningWordHeader } from "@/app/components/headers/strengthen-learning-word-header";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import { InputWithPen } from "@/app/components/input-with-pen";
import { ContentContainer } from "@/app/components/content-container";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { useState } from "react";
import { SOUND } from "@/app/utils/sound-player";
import { SmartButton } from "@/app/components/buttons/smart-button";
import BACKGROUND1 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어227.png";
import { StepContainer } from "@/app/components/step-container";

export default function Page() {
  const [step, setStep] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <StrengthenLearningWordHeader
        title={
          "디지털 사전에서 검색한 결과를 보고 물음에 답해 보자."
        }
        sound=""
      />
      <div className="absolute top-[400px] right-[60px]">
        <SmartButton
          link="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%9D%BC%EC%84%9D%EC%9D%B4%EC%A1%B0"
          className="animate__animated animate__bounceIn animate__delay-1s"
        />
      </div>

      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />

      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}

const Step1 = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const answers = ["역", "바꾸다", "지", "처지"];
  const [value, setValue] = useState("");

  return (
    <>
      <ContentContainer className="!justify-start -top-[75px] left-16">
        <img src={IMAGE1.src} />
        <InputWithPen
          answer={answers[0]}
          showAnswer={showAnswer}
          className={`w-[190px] text-center bg-transparent text-[50px] tracking-tighter`}
          penClassName="-left-0 -mt-1 w-[53px]"
          containerClassName="absolute top-[445px] left-[245px] mt-1 ml-1"
        />
        <InputWithPen
          answer={answers[1]}
          showAnswer={showAnswer}
          className={`w-[190px] text-center bg-transparent text-[50px] tracking-tighter`}
          penClassName="-left-0 -mt-1 w-[53px]"
          containerClassName="absolute top-[445px] left-[540px] mt-1 ml-1"
        />
        <InputWithPen
          answer={answers[2]}
          showAnswer={showAnswer}
          className={`w-[190px] text-center bg-transparent text-[50px] tracking-tighter`}
          penClassName="-left-0 -mt-1 w-[53px]"
          containerClassName="absolute top-[445px] left-[970px] mt-1 ml-1"
        />
        <InputWithPen
          answer={answers[3]}
          showAnswer={showAnswer}
          className={`w-[190px] text-center bg-transparent text-[50px] tracking-tighter`}
          penClassName="-left-0 -mt-1 w-[53px]"
          containerClassName="absolute top-[445px] left-[1265px] mt-1 ml-1"
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
  const answer1 = ["난", "이", "어려움과 쉬움."];
  const answer2 = ["천", "지", "1. 하늘과 땅을 아울러 이르는 말.\n2. ‘세상’, ‘우주’, ‘세계’의 뜻을 이르는 말."];
  const [value, setValue] = useState("");

  return (
    <>
      <ContentContainer className="!justify-start -top-[45px] left-5">
        <img src={IMAGE2.src} />
        <InputWithPen
          answer={answer1[0]}
          showAnswer={showAnswer}
          className={`w-[80px] text-center bg-transparent text-[60px] tracking-tighter`}
          penClassName="ml-4 -mt-1 w-[53px]"
          containerClassName="absolute top-[220px] left-[310px] mt-1"
        />
        <InputWithPen
          answer={answer1[1]}
          showAnswer={showAnswer}
          className={`w-[80px] text-center bg-transparent text-[60px] tracking-tighter`}
          penClassName="ml-4 -mt-1 w-[53px]"
          containerClassName="absolute top-[220px] left-[410px] mt-1"
        />
        <InputWithPen
          answer={answer1[2]}
          showAnswer={showAnswer}
          className={`w-[730px] bg-transparent text-[60px] tracking-tighter`}
          penClassName="-ml-4 -mt-1 w-[53px]"
          containerClassName="absolute top-[205px] left-[680px] mt-1"
        />

        <InputWithPen
          answer={answer2[0]}
          showAnswer={showAnswer}
          className={`w-[80px] text-center bg-transparent text-[60px] tracking-tighter`}
          penClassName="ml-4 -mt-1 w-[53px]"
          containerClassName="absolute top-[400px] left-[310px] mt-1"
        />
        <InputWithPen
          answer={answer2[1]}
          showAnswer={showAnswer}
          className={`w-[80px] text-center bg-transparent text-[60px] tracking-tighter`}
          penClassName="ml-4 -mt-1 w-[53px]"
          containerClassName="absolute top-[400px] left-[410px] mt-1"
        />

        {!value && !showAnswer ? (
          <img
            src="/ui/textarea-pen.png"
            className="absolute pointer-events-none"
            style={{
              height: 53,
              top: 410,
              left: 665
            }}
          />
        ) : null}
        <textarea
          value={showAnswer ? answer2[2] : value}
          onChange={(e) => setValue(e.target.value)}
          className={`absolute resize-none w-[730px] left-[665px] top-[350px] pt-0 ml-3 text-[40px] leading-[62px]  bg-transparent ${showAnswer ? "text-answer" : ""
            }`}
          rows={2}
        ></textarea>
      </ContentContainer>
      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  )
}