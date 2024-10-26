"use client";

import { ThinkTogetherHeader } from "@/app/components/headers/think-together";
import IMAGE from "./image.png";
import IMAGE2 from "./bg_3.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useState } from "react";
import { VideoThumbnail_big } from "@/app/components/video-thumbnail";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { InputWithPen } from "@/app/components/input-with-pen";
import BACKGROUND1 from "@/app/bgpng_temp/13/중등한문_귀에 대고 말한 까닭2.png";
import BACKGROUND2 from "@/app/bgpng_temp/13/중등한문_귀에 대고 말한 까닭3.png";

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>
      <ThinkTogetherHeader
        title={<p className="-ml-2">이야기를 읽고 농부가 황희에게 귓속말한 까닭을 써 보자.</p>}
        sound=""
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
        {/* {showAnswer ? (
          <img src={IMAGE2_AFTER.src}/>
        ) : (
          <img src={IMAGE2_BEFORE.src} />
        )} */}
        <img src={IMAGE2.src} />
        {/* <div className="absolute top-[310px] left-[290px]">
          <InputWithPen
            answer={answer}
            showAnswer={showAnswer}
            className="w-[960px] h-[80px] text-[45px] tracking-tighter bg-transparent"
            penClassName="left-0 -translate-x-1/2"
            containerClassName="relative top-16"
            isExample
          />
        </div> */}

        {!value && !showAnswer ? (
          <img
            src="/ui/textarea-pen.png"
            className="absolute pointer-events-none"
            style={{
              height: 54,
              top: 370,
              left: 260
            }}
          />
        ) : null}
        <textarea
          value={showAnswer ? answer : value}
          onChange={(e) => setValue(e.target.value)}
          className={`absolute resize-none w-[1000px] left-[260px] top-[370px] text-[45px] leading-[64px] tracking-tighter break-keep bg-transparent py-1  ${showAnswer ? "text-example" : ""
            }`}
          rows={4}
        ></textarea>

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
