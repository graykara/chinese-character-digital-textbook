"use client";

import { BuddyButton } from "@/app/components/buttons/buddy-button";
import { ContentContainer } from "@/app/components/content-container";
import { HeaderContainer } from "@/app/components/headers/header-container";
import { TitleContainer } from "@/app/components/title-container";
import { useEffect, useState } from "react";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import { StepContainer } from "@/app/components/step-container";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/3/중등한문_그려서 만든 한자4.png"

export default function Page() {
  const [step, setStep] = useState(1);

  const [showAnswer, setShowAnswer] = useState(false);
  const answer1 = ["불", "물", "사람", "문", "비"];
  const answer2 = ["달", "양", "아들", "나무", "물고기"];
  const [selectedAnswer, setSelectedAnswer] = useState(answer1);

  useEffect(() => {
    setShowAnswer(false);
    if (step === 1) {
      setSelectedAnswer(answer1);
    } else {
      setSelectedAnswer(answer2);
    }
  }, [step]);

  return (
    <>
      <HeaderContainer>
        <img src="/header/preview_chinese_characters.png" alt="" />
      </HeaderContainer>

      {/* <TitleContainer className="mt-10"> */}
      <TitleContainer className="mt-10 ml-[175px]">
        <p>
          고대 한자가 의미하는 뜻을 한 단어로 써 보고 자신과 친구의 생각을
          비교해 보자.
        </p>
        <BuddyButton className="absolute bottom-3 left-[280px]" />
      </TitleContainer>

      <ContentContainer className="!justify-start pt-4 -left-10">
        <div className="relative">
          {step === 1 && <img src={IMAGE1.src} alt="" />}
          {step === 2 && <img src={IMAGE2.src} alt="" />}

          <div className="absolute left-[130px] top-[230px] grid grid-cols-5 gap-[24px]">
            <input
              key={(step - 1) * 5 + 1}
              className="bg-transparent text-center w-[145px] h-[140px] text-[55px]"
            />
            <input
              key={(step - 1) * 5 + 2}
              className="bg-transparent text-center w-[145px] h-[140px] text-[55px]"
            />
            <input
              key={(step - 1) * 5 + 3}
              className="bg-transparent text-center w-[145px] h-[140px] text-[55px]"
            />
            <input
              key={(step - 1) * 5 + 4}
              className="bg-transparent text-center w-[145px] h-[140px] text-[55px]"
            />
            <input
              key={(step - 1) * 5 + 5}
              className="bg-transparent text-center w-[145px] h-[140px] text-[55px]"
            />
          </div>

          <div className="absolute left-[130px] top-[420px] grid grid-cols-5 gap-[24px]">
            <input
              value={showAnswer ? selectedAnswer[0] : ""}
              className="bg-transparent text-center w-[145px] h-[140px] text-[55px] text-answer"
              readOnly
            />
            <input
              value={showAnswer ? selectedAnswer[1] : ""}
              className="bg-transparent text-center w-[145px] h-[140px] text-[55px] text-answer"
              readOnly
            />
            <input
              value={showAnswer ? selectedAnswer[2] : ""}
              className="bg-transparent text-center w-[145px] h-[140px] text-[55px] text-answer"
              readOnly
            />
            <input
              value={showAnswer ? selectedAnswer[3] : ""}
              className="bg-transparent text-center w-[145px] h-[140px] text-[55px] text-answer"
              readOnly
            />
            <input
              value={showAnswer ? selectedAnswer[4] : ""}
              className="bg-transparent text-center w-[145px] h-[140px] text-[55px] text-answer"
              readOnly
            />
          </div>
        </div>
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
      {/* <img src={BACKGROUND1.src} className="absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
}
