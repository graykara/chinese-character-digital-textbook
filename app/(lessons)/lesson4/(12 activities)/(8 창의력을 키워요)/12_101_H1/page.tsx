"use client";

import { CreativityPageTemplate } from "@/app/pages/creativity-page-template";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import { CreativityTitleHeader } from "@/app/components/headers/creativity-title-header";
import { TitleContainer } from "@/app/components/title-container";
import { StepContainer } from "@/app/components/step-container";
import { useState } from "react";
import { InputWithPen } from "@/app/components/input-with-pen";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/12/중등한문_나에게 힘이 되는 글31.png";
import BACKGROUND2 from "@/app/bgpng_temp/12/중등한문_나에게 힘이 되는 글32.png";

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>

      <CreativityPageTemplate>
        <CreativityTitleHeader
          title="뜻 세워 계획 짜기"
          containerClassName="-mt-5"
        />
        <TitleContainer
          className="ml-[85px] mt-6"
          sound="/sound/4/101-i.mp3">
          <div className="flex items-center gap-1 text-[45px] tracking-[-2px] -ml-[70px] -mr-20">
            내가 시간과 노력을 들여서 이루고 싶은 것을 생각해 보고 구체적인 계획을 쓰고 발표해 보자.
          </div>
        </TitleContainer>

        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
      </CreativityPageTemplate>

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
      <img src={step === 1 ? BACKGROUND1.src : BACKGROUND2.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}

const Step1 = () => (
  <div className="relative left-[210px] top-[70px]">
    <img src={IMAGE1.src} />
  </div>
);

const Step2 = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const answers = ["독서 토론 모임 운영하기", "정기적인 모임을 연다.", "도서를 선정할 때는 투표나 제안 등으로 결정한다.", "토론할 때 발언 기회를 균등하게 말할 수 있도록 진행자를 정한다."]
  return (
    <>
      <div className="relative left-[120px] top-[105px]">
        <img src={IMAGE2.src} />
        <InputWithPen
          answer={answers[0]}
          showAnswer={showAnswer}
          className="w-[1080px] pl-7 text-[40px] tracking-tighter bg-transparent"
          penClassName="h-[60px] left-0 -mt-2"
          containerClassName="absolute resize-none left-[130px] top-[35px]"
          isExample
        />
        <InputWithPen
          answer={answers[1]}
          showAnswer={showAnswer}
          className="w-[1080px] pl-14 pt-3 text-[40px] tracking-tighter bg-transparent"
          penClassName="h-[60px] left-7 -mt-2"
          containerClassName="absolute resize-none left-[130px] top-[106px]"
          isExample
        />
        <InputWithPen
          answer={answers[2]}
          showAnswer={showAnswer}
          className="w-[1080px] pl-14 pt-3 text-[40px] tracking-tighter bg-transparent"
          penClassName="h-[60px] left-7 -mt-2"
          containerClassName="absolute resize-none left-[130px] top-[178px]"
          isExample
        />
        <InputWithPen
          answer={answers[3]}
          showAnswer={showAnswer}
          className="w-[1080px] pl-14 pt-3 text-[40px] tracking-tighter bg-transparent"
          penClassName="h-[60px] left-7 -mt-2"
          containerClassName="absolute resize-none left-[130px] top-[251px]"
          isExample
        />
      </div>

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
};
