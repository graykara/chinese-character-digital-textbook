"use client";

import { ThinkTogetherHeader } from "@/app/components/headers/think-together";
import IMAGE from "./image.png";
import IMAGE2 from "./image2.png";
import IMAGE3 from "./image3.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useContext, useState } from "react";
import { PageInfoContext } from "@/app/utils/page-info";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { BuddyButton } from "@/app/components/buttons/buddy-button";
import BACKGROUND1 from "@/app/bgpng_temp/3/중등한문_그려서 만든 한자2.png";
import BACKGROUND2 from "@/app/bgpng_temp/3/중등한문_그려서 만든 한자3.png";
import { InputWithPen } from "@/app/components/input-with-pen";

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("다 함께 생각해요");

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
  const answers = ["좌회전", "전화", "카페", "유턴"];
  return (
    <>
      <ThinkTogetherHeader
        title={
          <p className="-ml-2">
            그림과 기호를 보고 무엇을 의미하는지 말해 보자.
          </p>
        }
        sound="/sound/2/26-i-1.mp3"
      />

      <ContentContainer className="absolute left-[35px] bottom-[85px]">
        <img src={IMAGE.src} />

        <InputWithPen
          answer={answers[0]}
          showAnswer={showAnswer}
          className="text-center w-[195px] text-[50px] tracking-tighter bg-transparent "
          penClassName="h-[50px] top-[33px] left-1/2 -translate-x-1/2"
          containerClassName="absolute resize-none left-[274px] bottom-[168px]"
          isExample
        />

        <InputWithPen
          answer={answers[1]}
          showAnswer={showAnswer}
          className="text-center w-[195px] text-[50px] tracking-tighter bg-transparent "
          penClassName="h-[50px] top-[33px] left-1/2 -translate-x-1/2"
          containerClassName="absolute resize-none left-[526px] bottom-[168px]"
          isExample
        />

        <InputWithPen
          answer={answers[2]}
          showAnswer={showAnswer}
          className="text-center w-[195px] text-[50px] tracking-tighter bg-transparent "
          penClassName="h-[50px] top-[33px] left-1/2 -translate-x-1/2"
          containerClassName="absolute resize-none left-[780px] bottom-[168px]"
          isExample
        />

        <InputWithPen
          answer={answers[3]}
          showAnswer={showAnswer}
          className="text-center w-[195px] text-[50px] tracking-tighter bg-transparent "
          penClassName="h-[50px] top-[33px] left-1/2 -translate-x-1/2"
          containerClassName="absolute resize-none left-[1030px] bottom-[168px]"
          isExample
        />

      </ContentContainer>

      <ExampleAnswerButton active={false} onClick={() => setShowAnswer(!showAnswer)} />
      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
};

const Step2 = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ThinkTogetherHeader
        title={
          <p className="-ml-3 text-[52px] leading-[60px] tracking-[-0.5px]">
            글자가 없는 세상에 살고 있다고 가정하고 아래의 문장을 간단한
            그림이나 기호로 표현해 보자.
          </p>
        }
        sound="/sound/2/26-i-2.mp3"
      />

      <BuddyButton className="animate__animated animate__fadeIn animate__delay-1s absolute left-[800px] top-[245px] z-1" />

      <ContentContainer className="!justify-start mt-0 mb-[100px]">
        <img src={IMAGE2.src} className="absolute top-[30px] left-[70px]" />
        {showAnswer ? (
          <img src={IMAGE3.src} className="absolute top-[210px] left-[390px]" />
        ) : null}
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
