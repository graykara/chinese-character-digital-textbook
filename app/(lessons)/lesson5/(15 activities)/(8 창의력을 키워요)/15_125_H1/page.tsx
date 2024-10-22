"use client";

import IMAGE1 from "./image1.png";
import { useEffect, useState } from "react";
import { CreativityPageTemplate } from "@/app/pages/creativity-page-template";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { InputWithPen } from "@/app/components/input-with-pen";
import { TitleContainer } from "@/app/components/title-container";
import { StepContainer } from "@/app/components/step-container";
import BACKGROUND1 from "@/app/bgpng_temp/15/중등한문_돌에 꽂힌 화살24.png";
import BACKGROUND2 from "@/app/bgpng_temp/15/중등한문_돌에 꽂힌 화살25.png";
import { ContentContainer } from "@/app/components/content-container";

export default function Page() {
  const answers1 = [
    "낮말은 새가 듣고 밤말은 쥐가 듣는다.",
    "일아무도 안 듣는데서라도 말조심을 해야한다.",
  ];
  const answers2 = [
    "스토리보드 작성하기.",
    "필요한 역할 분담하기.",
    "각 장면을 내용에 맞게 촬영하기.",
    "영상 완성하여 발표하기.",
  ];
  const [showAnswer, setShowAnswer] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    setShowAnswer(false);
  }, [step]);

  return (
    <>
      <CreativityPageTemplate>
        <TitleContainer className="ml-4 mt-4">
          <div className="flex items-center gap-4">
            <img src="/ui/flower-icon-2.png" />
            질문에 답하며 자신의 공부 집중도를 확인해 보자.
          </div>
        </TitleContainer>
        <ContentContainer>
          <img src={IMAGE1.src} />
        </ContentContainer>
      </CreativityPageTemplate>

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />

      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
