"use client";

import { ContentContainer } from "@/app/components/content-container";
import { HeaderContainer } from "@/app/components/headers/header-container";
import { TitleContainer } from "@/app/components/title-container";
import { useEffect, useState } from "react";
import EXAMPLE from "./example.png";
import LEFT from "./left.png";
import RIGHT from "./right.png";
import BLANK1 from "./blank1.png";
import BLANK2 from "./blank2.png";
import BLANK3 from "./blank3.png";
import BLANK4 from "./blank4.png";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어3.png";
import { StepContainer } from "@/app/components/step-container";
import { BuddyButton } from "@/app/components/buttons/buddy-button";
import { GroupButton } from "@/app/components/buttons/group-button";

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

      <BuddyButton className="animate__animated animate__fadeIn animate__delay-1s absolute right-[1050px] top-[232px] z-1" />
      <GroupButton className="animate__animated animate__fadeIn animate__delay-2s absolute right-[920px] top-[232px] z-1" />

      <TitleContainer className="mt-10">
        <p className="tracking-tighter flex items-start gap-5 break-keep">
          <img src="/ui/flower-icon.png" />
          제시된 한자 카드를 보고, 질문에 답하며 개인별 또는 모둠별로 왕관을
          획득해 보자.
        </p>
      </TitleContainer>

      <ContentContainer className="!justify-start mt-5 pl-12">
        <img src={EXAMPLE.src} className="mb-10" />
        <div className="flex items-center gap-10">
          <button>
            <img src={LEFT.src} />
          </button>
          <div className="w-[800px] h-[300px] flex justify-center items-center">
            {step === 1 && <img src={BLANK1.src} />}
            {step === 2 && <img src={BLANK2.src} />}
            {step === 3 && <img src={BLANK3.src} />}
            {step === 4 && <img src={BLANK4.src} />}
          </div>
          <button>
            <img src={RIGHT.src} />
          </button>
        </div>
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />

      <StepContainer maxStep={4} step={step} onStepChange={setStep} />
    </>
  );
}
