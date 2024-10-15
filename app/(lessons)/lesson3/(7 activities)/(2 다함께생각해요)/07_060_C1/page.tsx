"use client";

import { ThinkTogetherHeader } from "@/app/components/headers/think-together";
import IMAGE from "./image.png";
import IMAGE2_BEFORE from "./image2-before.png";
import IMAGE2_AFTER from "./image2-after.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useState } from "react";
import { VideoThumbnail } from "@/app/components/video-thumbnail";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { SmartButton } from "@/app/components/buttons/smart-button";
import { WritingButton } from "@/app/components/buttons/writing-button";
import { TitleContainer } from "@/app/components/title-container";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { Textarea } from "@/app/components/textarea";

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>
      <ThinkTogetherHeader
        title={
          <div className="relative">
            아래 성어의 의미를 디지털 도구 등을 활용하여 찾고, 성어를 사용하면
            어떤 효과가 있을지 써 보자.
            <div className="absolute -bottom-7 right-0 flex items-center gap-5 z-[1]">
              <SmartButton
                link="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%9D%BC%EC%84%9D%EC%9D%B4%EC%A1%B0"
                className="w-[100px]"
              />
              <WritingButton />
            </div>
          </div>
        }
      />

      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      <StepContainer step={step} maxStep={2} onStepChange={setStep} />
    </>
  );
}

const Step1 = () => {
  return (
    <>
      <ContentContainer>
        <VideoThumbnail
          thumbnail={IMAGE.src}
          video="/video/animation/3-7_60.mp4"
        />
      </ContentContainer>
    </>
  );
};

const Step2 = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ContentContainer>
        <div className="w-[1400px]">
          <div className="animate__animated animate__flipInX flex items-center gap-3">
            <img src="/ui/flower-icon-2.png" />
            <p>성어를 사용하면 어떤 효과가 있을까?</p>
          </div>

          <Textarea />
        </div>
      </ContentContainer>

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
};
