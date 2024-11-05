"use client";

import { ThinkTogetherHeader } from "@/app/components/headers/think-together";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import IMAGE_BG from "./bg_2.png";
import IMAGE_DIM from "./bg_2-1.png";
import { ContentContainer } from "@/app/components/content-container";
import { useState } from "react";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/10/중등한문_이야기가 담긴 성어22.png";
import BACKGROUND2 from "@/app/bgpng_temp/10/중등한문_이야기가 담긴 성어23.png";
import { StepContainer } from "@/app/components/step-container";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);
  // const [step, setStep] = useState(1);

  return (
    <>
      <ThinkTogetherHeader
        title={<p className="-ml-2">성어 성격 유형 검사를 풀어 보자.</p>}
        sound="/sound/3/78-i.mp3"
      />

      <ContentContainer>
        {/* <img src={step === 1 ? IMAGE1.src : IMAGE2.src} className="ml-5 -mt-24"/> */}
        <img src={IMAGE2.src} className="ml-5 -mt-24"/>
      </ContentContainer>

      {/* <StepContainer maxStep={2} step={step} onStepChange={setStep} /> */}
      <img
        src={BACKGROUND2.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
