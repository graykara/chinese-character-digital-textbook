"use client";

import { ThinkTogetherHeader } from "@/app/components/headers/think-together";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useState } from "react";
import { VideoThumbnail_big } from "@/app/components/video-thumbnail";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { InputWithPen } from "@/app/components/input-with-pen";
import BACKGROUND1 from "@/app/bgpng_temp/15/중등한문_돌에 꽂힌 화살2.png";
import BACKGROUND2 from "@/app/bgpng_temp/15/중등한문_돌에 꽂힌 화살3.png";

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>
      <ThinkTogetherHeader
        title="빈칸에 들어갈 단어를 써 보고, 어떤 일에 집중했던 자신의 경험을 써 보자."
        subTitle={
          <p className="text-[40px] relative -left-10">
            <span className="mr-4">*</span>
            빈칸에 들어갈 단어의 뜻은 부록의 어휘 풀이에서 찾을 수 있습니다.
          </p>
        }
      />

      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      <StepContainer step={step} maxStep={2} onStepChange={setStep} />
    </>
  );
}

const Step1 = () => {
  return (
    <>
      <ContentContainer>
        <img src={IMAGE1.src} />
      </ContentContainer>
      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
};

const Step2 = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const answer = [
    "누런 소가 일을 더 잘한다는 말을 들으면 검은 소가 섭섭할까봐 귓속말로 말했습니다.",
  ];

  return (
    <>
      <ContentContainer className="!justify-start pt-2">
        {/* {showAnswer ? (
          <img src={IMAGE2_AFTER.src}/>
        ) : (
          <img src={IMAGE2_BEFORE.src} />
        )} */}
        <img src={IMAGE2.src} />
        <div className="absolute top-[310px] left-[290px]">
          <InputWithPen
            answer={answer}
            showAnswer={showAnswer}
            className="text-example w-[960px] h-[80px] text-[45px] tracking-tighter bg-transparent"
            penClassName="left-0 -translate-x-1/2"
            containerClassName="relative top-16"
          />
        </div>
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
