"use client";

import IMAGE from "./image.png";
import { StepContainer } from "@/app/components/step-container";
import { useState } from "react";
import { ActivityPageTemplate } from "@/app/pages/activity-page-template";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘25.png";
import BACKGROUND2 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘26.png";
import { ContentContainer } from "@/app/components/content-container";

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>
      <ActivityPageTemplate lesson={5}>
        <Content1 />
      </ActivityPageTemplate>
      {/* <img src={BACKGROUND2.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
}

const Content1 = () => {
  return (
    <ContentContainer className="!justify-start">
      <img src={IMAGE.src} />
    </ContentContainer>
  );
};

const Content2 = () => {
  const answers = [" "];
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <>
      <div className="h-full flex justify-center overflow-y-auto pt-20 pb-[120px]">
        <div className="relative h-fit -mt-14 -ml-6">
          <img src={IMAGE2.src} />
        </div>
      </div>
      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
};
