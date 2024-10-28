"use client";

import { ThinkTogetherHeader } from "@/app/components/headers/think-together";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./bgTextArea.png";
import { ContentContainer } from "@/app/components/content-container";
import { useState } from "react";
import { InputWithPen } from "@/app/components/input-with-pen";
import { TextareaWithPen } from "@/app/components/textarea/textarea-with-pen";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/9/중등한문_이야기가 담긴 성어13.png";
import BACKGROUND2 from "@/app/bgpng_temp/9/중등한문_이야기가 담긴 성어14.png";
import { StepContainer } from "@/app/components/step-container";
import { TitleContainer } from "@/app/components/title-container";
import { VideoThumbnail_big } from "@/app/components/video-thumbnail";
import { SmartButton } from "@/app/components/buttons/smart-button";

export default function Page() {
  const [step, setStep] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ThinkTogetherHeader
        title={
          <p className="-ml-2 text-[55px] leading-[66px] tracking-[-2.5px]">다음 대화를 통해 ‘고사’의 뜻을 알아보고, 디지털 도구로 ‘오십보백보<span className="font-haeseo text-[60px] tracking-[-10px]">(五十步百步)</span>’의 유래를 찾아 그 내용을 정리해 보자.</p>
        }
        sound=""
        subTitle={
          <div className="absolute top-5 -right-16 flex items-center gap-5">
          </div>
        }
      />

      <SmartButton
        link="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%98%A4%EC%8B%AD%EB%B3%B4%EB%B0%B1%EB%B3%B4"
        className="animate__animated animate__bounceIn animate__delay-2s absolute right-[260px] top-[280px] z-10 w-[100px]"
      />

      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
      <img
        src={step === 1 ? BACKGROUND1.src : BACKGROUND2.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}

const Step1 = () => {
  return (
    <>

      <ContentContainer className="-top-8">
        <VideoThumbnail_big
          thumbnail={IMAGE1.src}
          video=""
          width={890}
          height={480}
        />
      </ContentContainer>
    </>
  );
};

const Step2 = () => {
  const answers = [
    "예시 답안",
    "예시 답안"
  ];
  const [showAnswer, setShowAnswer] = useState(false);
  const [value, setValue] = useState("");
  return (
    <>

      <ContentContainer className="!justify-start top-[85px] -left-12">
        <TitleContainer
          className=""
          sound="">
          <p className="text-[50px] tracking-tight flex items-start gap-2">
            <img src="/ui/flower-icon-2.png" width="40px" />
            내가 찾은 오십보백보(五十步百步)’의 유래
          </p>
        </TitleContainer>


        <img src={IMAGE2.src} className="absolute translate-x-16 translate-y-20" />

        <InputWithPen
          answer={answers[0]}
          showAnswer={showAnswer}
          className="w-[1010px] h-[80px] pt-3 pb-0 text-[50px] tracking-tighter bg-transparent"
          penClassName="left-0 mt-0 h-[54px]"
          containerClassName="absolute left-[400px] top-[90px]"
          isExample
        />

        <TextareaWithPen
          answer={answers[1]}
          showAnswer={showAnswer}
          containerClassName={`absolute resize-none w-[1010px] left-[400px] top-[170px] text-[50px] leading-[65px] tracking-tighter break-keep bg-transparent py-1  ${showAnswer ? "text-example" : ""}`}
          penClassName="h-[54px] top-[170px] left-[400px]"
          rows={3}
        />

      </ContentContainer>

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />



    </>
  );
};
