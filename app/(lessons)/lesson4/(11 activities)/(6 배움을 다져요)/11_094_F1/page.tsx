"use client";

import { StrengthenLearningMainContentHeader } from "@/app/components/headers/strengthen-learning-main-content-header";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import { InputWithPen } from "@/app/components/input-with-pen";
import { ContentContainer } from "@/app/components/content-container";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/5/중등한문_한자를 알면 틀리지 않는 일상 어휘11.png";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { useEffect, useState } from "react";
import { StepContainer } from "@/app/components/step-container";

export default function Page() {
  const [step, setStep] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(false);
  }, [step]);

  return (
    <>
      <StrengthenLearningMainContentHeader
        title={
          <>
            문장의 풀이 순서를 빈칸에 숫자로 써 보고, 문장을 보고 느낀 점이나
            스스로 다짐하는 말에 #기호를 붙여 정리해 보자.
          </>
        }
        sound=""
      />

      <ContentContainer className="!justify-start">
        {step === 1 && (
          <div>
            <img src={IMAGE1.src} />
          </div>
        )}
        {step === 2 && (
          <div>
            <img src={IMAGE2.src} />
          </div>
        )}
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
