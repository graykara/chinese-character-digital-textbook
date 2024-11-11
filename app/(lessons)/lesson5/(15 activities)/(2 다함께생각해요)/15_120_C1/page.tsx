"use client";

import { ThinkTogetherHeader } from "@/app/components/headers/think-together";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useState } from "react";
import { VideoThumbnail_big } from "@/app/components/video-thumbnail";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { InputWithPen } from "@/app/components/input-with-pen";
import BACKGROUND1 from "@/app/bgpng_temp/15/중등한문_돌에 꽂힌 화살2.png";
import BACKGROUND2 from "@/app/bgpng_temp/15/중등한문_돌에 꽂힌 화살3.png";

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>
      <ThinkTogetherHeader
        title={
          <p className="-ml-3 -mr-20">빈칸에 들어갈 단어를 써 보고, 어떤 일에 집중했던 자신의 경험을 써 보자.</p>
        }
        sound="/sound/5/120-i.mp3"
        subTitle={
          <p className="-ml-10 mt-4 text-[40px] tracking-tighter"><span className="text-[#FF9001] text-[40px]">*</span> 빈칸에 들어갈 단어의 뜻은 부록의 어휘 풀이에서 찾을 수 있습니다.</p>
        }
      />

      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      <StepContainer step={step} maxStep={2} onStepChange={setStep} />
    </>
  );
}

const Step1 = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const answer = [
    "정", "신", "정", "신"
  ];
  return (
    <>
      <ContentContainer className="top-1 left-9">
        <img src={IMAGE1.src} />
        <InputWithPen
          answer={answer[0]}
          showAnswer={showAnswer}
          className={`text-[40px] text-center tracking-tighter w-[50px] mt-1 bg-transparent`}
          penClassName="ml-[9px] -mt-0 h-[35px]"
          containerClassName="absolute top-[300px] left-[337px] -mt-1"
        />
        <InputWithPen
          answer={answer[1]}
          showAnswer={showAnswer}
          className={`text-[40px] text-center tracking-tighter w-[50px] mt-1 bg-transparent`}
          penClassName="ml-[9px] -mt-0 h-[35px]"
          containerClassName="absolute top-[300px] left-[396px] -mt-1"
        />

        <InputWithPen
          answer={answer[2]}
          showAnswer={showAnswer}
          className={`text-[40px] text-center tracking-tighter w-[50px] mt-1 bg-transparent`}
          penClassName="ml-[9px] -mt-0 h-[35px]"
          containerClassName="absolute top-[315px] left-[855px] -mt-[5px]"
        />
        <InputWithPen
          answer={answer[3]}
          showAnswer={showAnswer}
          className={`text-[40px] text-center tracking-tighter w-[50px] mt-1 bg-transparent`}
          penClassName="ml-[9px] -mt-0 h-[35px]"
          containerClassName="absolute top-[315px] left-[912px] -mt-[5px]"
        />
      </ContentContainer>
      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
};

const Step2 = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const answer = [
    "시험 기간 중 짧은 쉬는 시간에 주위가 시끄러웠지만 집중하여 공부했다.", "짧은 시간이지만 집중해서 전보다 좋은 성적을 받을 수 있었다."
  ];

  return (
    <>
      <ContentContainer className="!justify-start pt-2 left-14">
        <img src={IMAGE2.src} />
          <InputWithPen
            answer={answer[0]}
            showAnswer={showAnswer}
            className="text-[38px] w-[1000px] h-[80px] tracking-tighter bg-transparent"
            penClassName="h-[50px]"
            containerClassName="absolute top-[35px] left-[346px]"
            isExample
          />
          <InputWithPen
            answer={answer[1]}
            showAnswer={showAnswer}
            className="text-[38px] w-[1178px] h-[80px] tracking-tighter bg-transparent"
            penClassName="h-[50px]"
            containerClassName="absolute top-[155px] left-[168px]"
            isExample
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
