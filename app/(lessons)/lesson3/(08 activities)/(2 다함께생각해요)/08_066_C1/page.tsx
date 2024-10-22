"use client";

import { ThinkTogetherHeader } from "@/app/components/headers/think-together";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import IMAGE3 from "./image3.png";
import { ContentContainer } from "@/app/components/content-container";
import { useState } from "react";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어2.png";
import { StepContainer } from "@/app/components/step-container";

export default function Page() {
  const [step, setStep] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ThinkTogetherHeader
        title="대화를 읽고 ㉠~㉢에 들어갈 말을 찾아 써 보자."
        subTitle={
          <p className="tracking-tighter">
            * ㉡, ㉢에 들어갈 성어의 뜻은 부록의 어휘 풀이에서 찾을 수 있습니다.
          </p>
        }
      />

      <ContentContainer>
        {step === 1 && <img src={IMAGE1.src} />}
        {step === 2 && <img src={IMAGE2.src} />}
        {step === 3 && <img src={IMAGE3.src} />}
      </ContentContainer>
      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />

      <StepContainer maxStep={3} step={step} onStepChange={setStep} />

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
}
