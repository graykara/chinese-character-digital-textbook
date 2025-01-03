"use client";

import { ThinkTogetherHeader } from "@/app/components/headers/think-together";
import IMAGE from "./image.png";
import IMAGE2_BEFORE from "./image2-before.png";
import IMAGE2_AFTER from "./image2-after.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useContext, useState } from "react";
import { VideoThumbnail_big } from "@/app/components/video-thumbnail";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { InputWithPen } from "@/app/components/input-with-pen";
import BACKGROUND1 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘2.png";
import BACKGROUND2 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘3.png";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  return (
    <>
      <ThinkTogetherHeader
        title={<p className="-ml-2">다음 글을 읽고 빈칸에 들어갈 말을 써 보자.</p>}
        sound="/sound/2/48-i.mp3" 
      />

      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      <StepContainer maxStep={2} />
    </>
  );
}

const Step1 = () => {
  return (
    <>
      <ContentContainer>
        <VideoThumbnail_big
          thumbnail={IMAGE.src}
          video="/video/animation/2-6_48.mp4"
        />
      </ContentContainer>
      <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
};

const Step2 = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const answer = ["제", "사"];

  return (
    <>
      <ContentContainer className="!justify-start pt-10">
        {/* {showAnswer ? (
          <img src={IMAGE2_AFTER.src}/>
        ) : (
          <img src={IMAGE2_BEFORE.src} />
        )} */}
        <img src={IMAGE2_BEFORE.src} />
        <div className="absolute right-[275px] top-[270px] grid grid-cols-2 gap-4">
          <InputWithPen
            answer={answer[0]}
            showAnswer={showAnswer}
            className="text-center w-[80px] h-[80px] text-[60px] bg-transparent"
            penClassName="left-1/2 -translate-x-1/2 -mt-1"
            containerClassName="relative top-0"
          />
          <InputWithPen
            answer={answer[1]}
            showAnswer={showAnswer}
            className="text-center w-[80px] h-[80px] text-[60px] bg-transparent"
            penClassName="left-1/2 -translate-x-1/2 -mt-1"
            containerClassName="relative top-0"
          />
        </div>
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      {/* <img src={BACKGROUND2.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
};
