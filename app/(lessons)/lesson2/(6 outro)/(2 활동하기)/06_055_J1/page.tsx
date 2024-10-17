"use client";

import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import { StepContainer } from "@/app/components/step-container";
import { useState } from "react";
import { ActivityPageTemplate } from "@/app/pages/activity-page-template";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘25.png"
import BACKGROUND2 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘26.png"

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>
      <ActivityPageTemplate lesson={1}>
        {step === 1 ? <Content1 /> : null}
        {step === 2 ? <Content2 /> : null}
      </ActivityPageTemplate>
      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
      <img src={BACKGROUND1.src} className="absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}

const Content1 = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-start mt-10">
      <img src={IMAGE1.src} />
    </div>
  );
};

const Content2 = () => {
  return (
    <div className="h-full flex justify-center overflow-y-auto py-20">
      <div className="relative h-fit">
        <img src={IMAGE2.src} />
      </div>
    </div>
  );
};
