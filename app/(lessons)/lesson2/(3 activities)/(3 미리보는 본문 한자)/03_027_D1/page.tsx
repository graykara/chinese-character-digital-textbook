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
import BACKGROUND1 from "@/app/bgpng_temp/3/중등한문_그려서 만든 한자4.png";
import { InputWithPen } from "@/app/components/input-with-pen";

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
      <HeaderContainer sound="/sound/2/27-i.mp3">
        <img src="/header/preview_chinese_characters.png" alt="" />
      </HeaderContainer>

      {/* <TitleContainer className="mt-10"> */}
      <TitleContainer className="mt-10 ml-[175px]">
        <p>
          고대 한자가 의미하는 뜻을 한 단어로 써 보고 자신과 친구의 생각을
          비교해 보자.
        </p>
        <BuddyButton className="animate__animated animate__fadeIn animate__delay-1s absolute bottom-3 left-[280px] z-1" />
      </TitleContainer>

      <ContentContainer className="!justify-start pt-4 -left-10">
        <div className="relative">
          {step === 1 && <img src={IMAGE1.src} alt="" />}
          {step === 2 && <img src={IMAGE2.src} alt="" />}

          <div className="absolute left-[130px] top-[230px] grid grid-cols-5 gap-[24px]">
            {Array.from(Array(5)).map((_, index) => (
              <InputWithPen
                key={(step - 1) * 5 + index}
                className="bg-transparent text-center w-[145px] h-[140px] text-[55px]"
                penClassName="left-1/2 -translate-x-1/2"
              />
            ))}
          </div>

          <div className="absolute left-[130px] top-[420px] grid grid-cols-5 gap-[24px]">
            {Array.from(Array(5)).map((_, index) => (
              <InputWithPen
                key={(step - 1) * 5 + index}
                answer={selectedAnswer[index]}
                showAnswer={showAnswer}
                className="bg-transparent text-center w-[145px] h-[140px] text-[55px] text-answer"
                penClassName="left-1/2 -translate-x-1/2"
              />
            ))}
          </div>
        </div>
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
      {/* <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
}
