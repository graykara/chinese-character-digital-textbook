"use client";

import { StepContainer } from "@/app/components/step-container";
import { Header } from "../components/header";
import { useEffect, useState } from "react";
import { ContentContainer } from "@/app/components/content-container";
import { Quiz } from "./components/quiz";
import IMAGE1 from "./assets/image1.png";
import IMAGE2 from "./assets/image2.png";
import IMAGE3 from "./assets/image3.png";
import IMAGE4 from "./assets/image4.png";
import ANSWER1 from "./assets/answer1.png";
import ANSWER2 from "./assets/answer2.png";
import ANSWER3 from "./assets/answer3.png";
import ANSWER4 from "./assets/answer4.png";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";

export default function Page14_1() {
  const [step, setStep] = useState(1);

  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(false);
  }, [step]);

  return (
    <>
      <Header />

      <ContentContainer>
        {step === 1 ? (
          <Quiz
            image={IMAGE1.src}
            answerContainerImage={ANSWER1.src}
            answer="다섯 줄."
            showAnswer={showAnswer}
          />
        ) : null}
        {step === 2 ? (
          <Quiz
            image={IMAGE2.src}
            answerContainerImage={ANSWER2.src}
            answer="아직 값을 모르는 수."
            showAnswer={showAnswer}
          />
        ) : null}
        {step === 3 ? (
          <Quiz
            image={IMAGE3.src}
            answerContainerImage={ANSWER3.src}
            answer="의로운 병사."
            showAnswer={showAnswer}
          />
        ) : null}
        {step === 4 ? (
          <Quiz
            image={IMAGE4.src}
            answerContainerImage={ANSWER4.src}
            answer="동쪽 지역은 높고 서쪽 지역은 낮은 상태."
            showAnswer={showAnswer}
          />
        ) : null}
      </ContentContainer>

      <StepContainer step={step} maxStep={4} onStepChange={setStep} />

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
}
