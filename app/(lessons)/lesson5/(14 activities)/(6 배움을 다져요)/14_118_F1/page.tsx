"use client";

import { StrengthenLearningMainContentHeader } from "@/app/components/headers/strengthen-learning-main-content-header";
import { Children, useState } from "react";
import IMAGE1 from "./bg_1.png";
import IMAGE2 from "./bg_2.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/14/중등한문_사람만 귀한가요17.png";
import BACKGROUND2 from "@/app/bgpng_temp/14/중등한문_사람만 귀한가요18.png";

export default function Page() {
  const [step, setStep] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);

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
  const answer1 = ["누런 소가 더 일을 잘합니다"];
  const answer2 = [
    "누런 소가 나으면 저 소가 못한 것이 되는데 아무리 가축이라도 이 말을 듣게 되면 불평하는 마음이 생길 것 같아 그랬습니다.",
  ];

  return (
    <>
      <StrengthenLearningMainContentHeader
        title="본문의 내용을 바탕으로 다음 빈칸을 완성해 보자."
        sound=""
      />
      <ContentContainer className="!justify-start -top-[90px] left-7">
        <img src={IMAGE1.src} />
        <div className="w-[1300px] relative grid grid-cols-[1fr__350px] gap-[100px]"></div>
      </ContentContainer>

      <ExampleAnswerButton
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
  const answer = [
    "누런 소가 일을 더 잘한다는 말을 들으면 검은 소가 섭섭할까봐 귓속말로 말했습니다.",
  ];
  return (
    <>
      <StrengthenLearningMainContentHeader
        title={
          "가상 인터뷰의 내용에서 홍대용의 마지막 말에 들어갈 내용을 써 보자."
        }
        sound=""
      />
      <ContentContainer className="!justify-start -top-[50px] left-9">
        <img src={IMAGE2.src} />
        <div className="w-[1300px] relative grid grid-cols-[1fr__350px] gap-[100px]"></div>
      </ContentContainer>
      <img
        src={BACKGROUND2.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
};
