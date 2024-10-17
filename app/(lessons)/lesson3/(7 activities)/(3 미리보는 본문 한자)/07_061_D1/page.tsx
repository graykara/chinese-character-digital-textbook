"use client";

import { BuddyButton } from "@/app/components/buttons/buddy-button";
import { ContentContainer } from "@/app/components/content-container";
import { HeaderContainer } from "@/app/components/headers/header-container";
import { TitleContainer } from "@/app/components/title-container";
import { useEffect, useState } from "react";
import HOW_BADGE from "./how-badge.png";
import TASK_BADGE from "./task-badge.png";
import IMAGE2 from "./image2.png";
import IMAGE3 from "./image3.png";
import { StepContainer } from "@/app/components/step-container";
import { FlippableCard } from "@/app/components/flippable-card/flippable-card";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/7/중등한문_언어생활 속의 성어14.png"
import BACKGROUND2 from "@/app/bgpng_temp/7/중등한문_언어생활 속의 성어15.png"
import BACKGROUND3 from "@/app/bgpng_temp/7/중등한문_언어생활 속의 성어16.png"

export default function Page() {
  const [step, setStep] = useState(1);

  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(false);
  }, [step]);

  return (
    <>
      <HeaderContainer>
        <img src="/header/preview_chinese_characters.png" alt="" />
      </HeaderContainer>

      <TitleContainer className="mt-10">
        <p className="flex items-start -mr-10 gap-5 tracking-tighter">
          <img src="/ui/flower-icon.png" />
          과제를 풀고 비밀번호의 마지막 숫자를 획득하여 방을 탈출해 보자.
        </p>
      </TitleContainer>

      <ContentContainer className="!justify-start pt-[75px]">
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
      </ContentContainer>


      {/* Step 2,3에서만 정답 확인 버튼 보이기 */}
      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />

      <StepContainer maxStep={3} step={step} onStepChange={setStep} />
      {/* <img src={BACKGROUND3.src} className="absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
}

const Step1 = () => {
  return (
    <div className="px-[50px]">
      <header className="mb-5">
        <img src={HOW_BADGE.src} />
      </header>

      <div className="flex gap-5 text-[55px] leading-tight tracking-tighter break-keep mt-10">
        <span className="text-[#408ac9] font-bold">1</span>
        빙고 판에 나온 한자 중 과제에 해당하는 한자에 빗금을 친다.
      </div>
      <div className="flex gap-5 text-[55px] leading-tight tracking-tighter break-keep mt-5">
        <span className="text-[#408ac9] font-bold">2</span>
        모든 과제를 해결하였을 때 빙고 판에 보이는 숫자를 비밀번호 칸에 쓴다.
      </div>
    </div>
  );
};

const Step2 = () => {
  return (
    <div className="px-[50px]">
      <header className="mb-5">
        <img src={TASK_BADGE.src} />
      </header>

      <img src={IMAGE2.src} />
    </div>
  );
};

const Step3 = () => {
  const answers = ["7"];
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <>
      <div className="overflow-hidden -mt-[45px]">
        <img src={IMAGE3.src} />
      </div>
    </>
  );
};
