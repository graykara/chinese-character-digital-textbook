"use client";

import { StrengthenLearningMainContentHeader } from "@/app/components/headers/strengthen-learning-main-content-header";
import { Children, useState } from "react";
import IMAGE1 from "./bg_1.png";
import IMAGE2 from "./bg_2.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { InputWithPen } from "@/app/components/input-with-pen";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕22.png";
import BACKGROUND2 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕23.png";

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
  const answers = ["集","官","庭","如","雲"];

  return (
    <>
      <StrengthenLearningMainContentHeader
        title={<p className="tracking-tighter">풀이에 맞도록 한자 카드를 배열하여 써 보자.</p>}
        sound="/sound/5/130-i-1.mp3"
      />

      <ContentContainer className="!justify-start -top-[20px] left-4">
        <img src={IMAGE1.src} />
        <InputWithPen
          answer={answers[0]}
          showAnswer={showAnswer}
          className="font-haeseo text-[105px] text-center w-[140px] bg-transparent"
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[230px] left-[485px]"
        />
        <InputWithPen
          answer={answers[1]}
          showAnswer={showAnswer}
          className="font-haeseo text-[105px] text-center w-[140px] bg-transparent"
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[230px] left-[685px]"
        />
        <InputWithPen
          answer={answers[2]}
          showAnswer={showAnswer}
          className="font-haeseo text-[105px] text-center w-[140px] bg-transparent"
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[230px] left-[885px]"
        />
        <InputWithPen
          answer={answers[3]}
          showAnswer={showAnswer}
          className="font-haeseo text-[105px] text-center w-[140px] bg-transparent"
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[230px] left-[1085px]"
        />
        <InputWithPen
          answer={answers[4]}
          showAnswer={showAnswer}
          className="font-haeseo text-[105px] text-center w-[140px] bg-transparent"
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[230px] left-[1285px]"
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
  const answers = ["배려","공감","관심","도움"];
  const answer = [
    "누런 소가 일을 더 잘한다는 말을 들으면 검은 소가 섭섭할까봐 귓속말로 말했습니다.",
  ];
  return (
    <>
      <StrengthenLearningMainContentHeader
        title={<p className="tracking-tighter">‘나눔’하면 연상되는 단어를 써서 의미망을 완성해 보자.</p>}
        sound="/sound/5/130-i-3.mp3"
      />
      <ContentContainer className="!justify-start -top-[90px] left-1">
        <img src={IMAGE2.src} />
        <InputWithPen
          answer={answers[0]}
          showAnswer={showAnswer}
          className={`text-[55px] text-center w-[200px] bg-transparent ${showAnswer ? "text-example" : ""}`}
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[20px] left-[990px]"
        />
        <InputWithPen
          answer={answers[1]}
          showAnswer={showAnswer}
          className={`text-[55px] text-center w-[200px] bg-transparent ${showAnswer ? "text-example" : ""}`}
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[455px] left-[320px]"
        />
        <InputWithPen
          answer={answers[2]}
          showAnswer={showAnswer}
          className={`text-[55px] text-center w-[200px] bg-transparent ${showAnswer ? "text-example" : ""}`}
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[455px] left-[660px]"
        />
        <InputWithPen
          answer={answers[3]}
          showAnswer={showAnswer}
          className={`text-[55px] text-center w-[200px] bg-transparent ${showAnswer ? "text-example" : ""}`}
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[455px] left-[990px]"
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
