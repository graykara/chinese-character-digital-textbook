"use client";

import { ThinkTogetherHeader } from "@/app/components/headers/think-together";
import IMAGE from "./image.png";
import IMAGE2_BEFORE from "./image2-before.png";
import IMAGE2_AFTER from "./image2-after.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useState } from "react";
import { VideoThumbnail_big } from "@/app/components/video-thumbnail";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { InputWithPen } from "@/app/components/input-with-pen";
import BACKGROUND1 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘2.png";
import BACKGROUND2 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘3.png";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";

export default function Page() {
  const [step, setStep] = useState(1);

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
  return (
    <>
      <ThinkTogetherHeader title="나에게 힘이 되었던 말을 써 보자." />

      <ContentContainer className="!justify-start">
        <div className="bg-[#f2efec] p-5 rounded-3xl w-[1400px] h-[300px]"></div>
      </ContentContainer>

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      {/* <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
};

const Step2 = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ThinkTogetherHeader title="학급 친구들과 함께 ‘힘이 되는 말’ 세 가지를 뽑아 보자." />

      <ContentContainer className="!justify-start">
        <div className="bg-[#f2efec] p-5 rounded-3xl w-[1400px] h-[500px]"></div>
      </ContentContainer>

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      {/* <img src={BACKGROUND2.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
};
