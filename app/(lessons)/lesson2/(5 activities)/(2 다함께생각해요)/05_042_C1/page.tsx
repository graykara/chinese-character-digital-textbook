"use client";

import { ThinkTogetherHeader } from "@/app/components/headers/think-together";
import IMAGE from "./image.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useState } from "react";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { VideoThumbnail } from "@/app/components/video-thumbnail";
import { Textarea } from "@/app/components/textarea";
import { SmartButton } from "@/app/components/buttons/smart-button";

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>
      <ThinkTogetherHeader
        title="대화에서 틀린 말을 모두 찾아 바르게 고치고 디지털 도구를 활용하여 그 뜻을 찾아보자."
        subTitle={
          <div className="animate__animated animate__fadeIn flex items-center mt-20">
            <p className="text-[#df865a] absolute -left-[36px] text-[30px]">
              *
            </p>
            <p className="text-[40px]">
              바르게 고친 단어의 뜻은 부록의 어휘 풀이에서 찾을 수 있습니다.
            </p>
            <SmartButton link="https://stdict.korean.go.kr/main/main.do" />
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
      <ContentContainer className="!justify-start py-2">
        <VideoThumbnail
          thumbnail={IMAGE.src}
          video="/video/animation/2-4_34.mp4"
          width={850}
          height={460}
        />
      </ContentContainer>
    </>
  );
};

const Step2 = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [answer, setAnswer] = useState("");

  return (
    <>
      <ContentContainer>
        <Textarea
          value={
            showAnswer
              ? "합쳐서 표현하고 싶은 한자들을 새롭게 만들어 내면 "
              : answer
          }
          onChange={(e) => setAnswer(e)}
          className={`${showAnswer ? "text-example" : ""}`}
        />
      </ContentContainer>

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
};
