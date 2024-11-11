"use client";

import { ThinkTogetherHeader } from "@/app/components/headers/think-together";
import IMAGE from "./image.png";
import IMAGE2 from "./image2.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useContext, useState } from "react";
import { VideoThumbnail } from "@/app/components/video-thumbnail";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { SmartButton } from "@/app/components/buttons/smart-button";
import { WritingButton } from "@/app/components/buttons/writing-button";
import { TitleContainer } from "@/app/components/title-container";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { TextareaWithPen } from "@/app/components/textarea/textarea-with-pen";
import BACKGROUND1 from "@/app/bgpng_temp/7/중등한문_언어생활 속의 성어12.png";
import BACKGROUND2 from "@/app/bgpng_temp/7/중등한문_언어생활 속의 성어13.png";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  return (
    <>
      <ThinkTogetherHeader
        title={
          <p className="-ml-2 text-[55px] leading-[66px] tracking-[-3px]">아래 성어의 의미를 디지털 도구 등을 활용하여 찾고, 성어를 사용하면 어떤 효과가 있을지 써 보자.</p>
        }
        sound="/sound/3/60-i-1.mp3"
        subTitle={
          <div className="absolute top-5 -right-16 flex items-center gap-5">
          </div>
        }
      />
      <SmartButton
        link="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%9D%BC%EC%84%9D%EC%9D%B4%EC%A1%B0"
        className="animate__animated animate__fadeIn animate__delay-2s absolute right-[314px] top-[236px] z-1 w-[100px]"
      />
      <WritingButton
        className="animate__animated animate__fadeIn animate__delay-1s absolute right-[184px] top-[262px] z-1" />

      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      <StepContainer maxStep={2} />
    </>
  );
}

const Step1 = () => {
  return (
    <>
      <ContentContainer className="!justify-start top-5">
        <VideoThumbnail
          thumbnail={IMAGE.src}
          video="/video/animation/3-7_60.mp4"
          height={480}
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
  const answer =
    "성어는 짧은 말 속에 많은 의미를 담고 있어서 대화의 상황을 압축적이고 효과적으로 전달할 수 있다.";
  const [showAnswer, setShowAnswer] = useState(false);
  const [value, setValue] = useState("");

  return (
    <>
      <ContentContainer className="!justify-start top-[95px] -left-12">
        <TitleContainer
          className=""
          sound="/sound/3/60-i-2.mp3">
          <p className="text-[50px] tracking-tighter flex items-start gap-2">
            <img src="/ui/flower-icon-2.png" width="40px" />
            성어를 사용하면 어떤 효과가 있을까?
          </p>
        </TitleContainer>

        <img src={IMAGE2.src} className="absolute translate-x-16 translate-y-20" />
        <TextareaWithPen
          answer={answer}
          showAnswer={showAnswer}
          containerClassName={`absolute resize-none w-[1200px] left-[210px] top-[105px] text-[50px] leading-[65px] tracking-tighter break-keep bg-transparent pl-1 py-1  ${showAnswer ? "text-example" : ""}`}
          penClassName="h-[54px] top-[105px] left-[215px]"
          rows={3}
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
