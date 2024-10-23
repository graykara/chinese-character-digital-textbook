"use client";

import { StrengthenLearningMainContentHeader } from "@/app/components/headers/strengthen-learning-main-content-header";
import { useState } from "react";
import IMAGE1 from "./bg_1.png";
import IMAGE2 from "./bg_2.png";
import IMAGE3 from "./bg_3.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/9/중등한문_이야기가 담긴 성어123.png"; //121, 122, 123
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { InputWithPen } from "@/app/components/input-with-pen";
import { WritingButton } from "@/app/components/buttons/writing-button";

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
  const answers = ["1", "2", "3", "4"];
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <StrengthenLearningMainContentHeader
        title={"성어의 풀이 순서를 빈칸에 숫자로 써 보자."}
        sound=""
      />
      <ContentContainer className="!justify-start -top-[90px] left-7">
        <img src={IMAGE1.src} className="mx-20 mt-20" />
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
          containerClassName="absolute top-[150px] left-[480px]"
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
          containerClassName="absolute top-[150px] left-[780px]"
        />
        <InputWithPen
          answer={answers[3]}
          showAnswer={showAnswer}
          className="text-[80px] text-center w-[100px] bg-transparent"
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[150px] left-[930px]"
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
      <StrengthenLearningMainContentHeader
        title={"성어의 풀이 순서를 빈칸에 숫자로 써 보자."}
        sound=""
      />
      <ContentContainer className="!justify-start -top-[90px] left-7">
        <img src={IMAGE2.src} className="ml-[10px] mt-20" />
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
          containerClassName="absolute top-[150px] left-[480px]"
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
          containerClassName="absolute top-[150px] left-[780px]"
        />
        <InputWithPen
          answer={answers[3]}
          showAnswer={showAnswer}
          className="text-[80px] text-center w-[100px] bg-transparent"
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[150px] left-[930px]"
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

const Step3 = () => {
  const answers = ["조고에게 이것은 사슴이라고 말했을 것 같다. 그 이유는 자신의 편을 가르기위해 남을 속이는 행동이 잘못되었기 때문이다."];
  const [showAnswer, setShowAnswer] = useState(false);
  const [value, setValue] = useState("");

  return (
    <>
      <StrengthenLearningMainContentHeader
        title={
          <p>성어 ‘<span className="font-haeseo text-[60px] leading-[50px] tracking-[-8px]">指鹿爲馬</span>’의 유래에 등장하는 인물들을 떠올려 보고<br />아래 질문에 답해 보자.</p>
        }
        sound=""
      />

      <div className="absolute top-[275px] left-[750px] flex items-center gap-5">
        <WritingButton />
      </div>

      <ContentContainer className="!justify-start left-16 top-4">
        <img src={IMAGE3.src} className="" />
        <div className="w-[1180px] absolute gap-[3px] -top-[5px] ml-[75px]">
          <p className="text-[55px] tracking-tighter leading-tight">만약 자신이 당시의 현장에 있다면 조고의 질문에 뭐라고 대답할 것인가? 또한 그 이유는 무엇인가?</p>
        </div>
        {!value && !showAnswer ? (
          <img
            src="/ui/textarea-pen.png"
            className="absolute pointer-events-none"
            style={{
              height: 48,
              top: 177,
              left: 130
            }}
          />
        ) : null}
        <textarea
          value={showAnswer ? answers[0] : value}
          onChange={(e) => setValue(e.target.value)}
          className={`absolute resize-none w-[1200px] left-[100px] top-[160px] pt-3 ml-24 text-[45px] tracking-tighter leading-[70px] bg-transparent ${showAnswer ? "text-example tracking-tighter break-keep" : ""
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