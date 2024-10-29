"use client";

import { ThinkTogetherHeader } from "@/app/components/headers/think-together";
import IMAGE from "./image.png";
import IMAGE2 from "./bg_3.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useState } from "react";
import { VideoThumbnail_big } from "@/app/components/video-thumbnail";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { TextareaWithPen } from "@/app/components/textarea/textarea-with-pen";
import BACKGROUND1 from "@/app/bgpng_temp/13/중등한문_귀에 대고 말한 까닭2.png";
import BACKGROUND2 from "@/app/bgpng_temp/13/중등한문_귀에 대고 말한 까닭3.png";

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>
      <ThinkTogetherHeader
        title={<p className="-ml-2">이야기를 읽고 농부가 황희에게 귓속말한 까닭을 써 보자.</p>}
        sound="/sound/5/108-i.mp3"
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
      <ContentContainer className="-mt-10">
        <VideoThumbnail_big
          thumbnail={IMAGE.src}
          video="/video/animation/5-13_108.mp4"
        />
      </ContentContainer>
      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
};

const Step2 = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const answer = "누런 소가 일을 더 잘한다는 말을 들으면 검은 소가 섭섭할까봐 귓속말로 말했습니다.";
  const [value, setValue] = useState("");

  return (
    <>
      <ContentContainer className="!justify-start -mt-5">
        <img src={IMAGE2.src} />

        <TextareaWithPen
          answer={answer}
          showAnswer={showAnswer}
          containerClassName={`absolute resize-none w-[1000px] left-[260px] top-[370px] px-8 text-[45px] leading-[64px] tracking-tighter break-keep bg-transparent py-1  ${showAnswer ? "text-example" : ""}`}
          penClassName="h-[54px] top-[370px] left-[260px]"
          rows={4}
        />

      </ContentContainer>

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      <img
        src={BACKGROUND2.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
};
