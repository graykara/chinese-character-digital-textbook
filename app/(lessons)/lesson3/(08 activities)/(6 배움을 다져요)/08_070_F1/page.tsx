"use client";

import { StrengthenLearningMainContentHeader } from "@/app/components/headers/strengthen-learning-main-content-header";
import { useState } from "react";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import IMAGE3 from "./image3.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어223.png"; //223, 224, 225
import BACKGROUND2 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어224.png"; //223, 224, 225
import BACKGROUND3 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어225.png"; //223, 224, 225
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { SmartButton } from "@/app/components/buttons/smart-button";

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      <StepContainer step={step} maxStep={3} onStepChange={setStep} />
    </>
  );
}

const Step1 = () => {
  const answers = ["엎친 데 덮치다.\n엎친 놈 꼭뒤 차기."];
  const [showAnswer, setShowAnswer] = useState(false);
  const [value, setValue] = useState("");

  return (
    <>
      <StrengthenLearningMainContentHeader
        title={"성어와 의미가 통하는 우리말 속담을 디지털 도구로 찾아 써보자. "}
        sound=""
      />
      <div className="absolute top-[280px] left-[1455px] z-10">
        <SmartButton
          link="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%9D%BC%EC%84%9D%EC%9D%B4%EC%A1%B0"
          className="w-[148px]"
        />
      </div>
      <ContentContainer className="!justify-start top-[30px] ">
        <img src={IMAGE1.src} />
        {!value && !showAnswer ? (
          <img
            src="/ui/textarea-pen.png"
            className="absolute pointer-events-none"
            style={{
              height: 55,
              top: 155,
              left: 365
            }}
          />
        ) : null}
        <textarea
          value={showAnswer ? answers[0] : value}
          onChange={(e) => setValue(e.target.value)}
          className={`absolute resize-none w-[820px] text-center left-[330px] top-[150px] pt-3 ml-3 text-[50px] tracking-tight leading-[70px] bg-transparent ${showAnswer ? "text-answer" : ""
            }`}
          rows={2}
        ></textarea>
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
  const answers = ["고생 끝에 낙이 온다."];
  const [showAnswer, setShowAnswer] = useState(false);
  const [value, setValue] = useState("");

  return (
    <>
      <StrengthenLearningMainContentHeader
        title={"성어와 의미가 통하는 우리말 속담을 디지털 도구로 찾아 써보자. "}
        sound=""
      />
      <div className="absolute top-[280px] left-[1455px] z-10">
        <SmartButton
          link="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%9D%BC%EC%84%9D%EC%9D%B4%EC%A1%B0"
          className="w-[148px]"
        />
      </div>
      <ContentContainer className="!justify-start top-[30px] ">
        <img src={IMAGE2.src} />
        {!value && !showAnswer ? (
          <img
            src="/ui/textarea-pen.png"
            className="absolute pointer-events-none"
            style={{
              height: 55,
              top: 155,
              left: 365
            }}
          />
        ) : null}
        <textarea
          value={showAnswer ? answers[0] : value}
          onChange={(e) => setValue(e.target.value)}
          className={`absolute resize-none w-[820px] text-center left-[330px] top-[150px] pt-3 ml-3 text-[50px] tracking-tight leading-[70px] bg-transparent ${showAnswer ? "text-answer" : ""
            }`}
          rows={2}
        ></textarea>
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

const Step3 = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <StrengthenLearningMainContentHeader
        title={" 풀이 순서가 같은 두 개의 성어를 찾아 ○표 해 보자."}
        sound=""
      />
      <ContentContainer className="!justify-start top-[10px] left-0">
        <img src={IMAGE3.src} />
        <div className="w-[1300px] relative grid grid-cols-[1fr__350px] gap-[100px]"></div>
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      <img
        src={BACKGROUND3.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
};
