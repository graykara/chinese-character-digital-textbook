"use client";

import { ThinkTogetherHeader } from "@/app/components/headers/think-together";
import IMAGE from "./image.png";
import IMAGE2 from "./bgTextArea.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useContext, useState } from "react";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { InputWithPen } from "@/app/components/input-with-pen";
import { VideoThumbnail } from "@/app/components/video-thumbnail";
import { Textarea } from "@/app/components/textarea";
import { SmartButton } from "@/app/components/buttons/smart-button";
import BACKGROUND1 from "@/app/bgpng_temp/5/중등한문_한자를 알면 틀리지 않는 일상 어휘2.png";
import BACKGROUND2 from "@/app/bgpng_temp/5/중등한문_한자를 알면 틀리지 않는 일상 어휘3.png";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  return (
    <>
      <ThinkTogetherHeader
        title={
          <p className="-ml-2 text-[52px] leading-[60px] tracking-[-2.5px]">대화에서 틀린 말을 모두 찾아 바르게 고치고 디지털 도구를 활용하여<br/>그 뜻을 찾아보자.</p>
        }
        sound="/sound/2/42-i.mp3"
        subTitle={
          <div className="animate__animated animate__fadeIn flex items-center -mt-10">
            <p className="-ml-[42px] mt-1 text-[40px] text-[#1b1b1b] tracking-tighter break-keep leading-[55px] "><span className="text-[#df865a] text-[45px] -mr-1">*</span> 바르게 고친 단어의 뜻은 부록의 어휘 풀이에서 찾을 수 있습니다.</p>

            <SmartButton
              link="https://stdict.korean.go.kr/main/main.do"
              className="animate__animated animate__bounceIn animate__delay-2s ml-3"
            />

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
      <ContentContainer className="!justify-start py-2 -top-5">
        <VideoThumbnail
          thumbnail={IMAGE.src}
          video="/video/animation/2-5_42.mp4"
          width={860}
          height={460}
        />
      </ContentContainer>
      <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
};

const Step2 = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const answers = [
    "금새",
    "금세",
    "지금 바로. ‘금시에’가 줄어든 말.",
    "심여",
    "심혈",
    "마음과 힘을 아울러 이르는 말.",
    "문안",
    "무난",
    "별로 어려움이 없음.",
  ];
  const [selectedAnswer, setAnswer] = useState(answers);

  return (
    <>
      <ContentContainer>
        <img src={IMAGE2.src} className="absolute top-3 left-[85px]" />
        <InputWithPen
          answer={answers[0]}
          showAnswer={showAnswer}
          className="text-[50px] text-center w-[200px] mt-4 bg-transparent"
          penClassName="left-0 -translate-x-1/2"
          containerClassName="absolute top-[105px] left-[200px]"
        />
        <InputWithPen
          answer={answers[1]}
          showAnswer={showAnswer}
          className="text-[50px] text-center w-[220px] mt-4 bg-transparent"
          penClassName="left-4 -translate-x-1/2"
          containerClassName="absolute top-[105px] left-[525px]"
        />
        <InputWithPen
          answer={answers[2]}
          showAnswer={showAnswer}
          className="text-[47px] tracking-[-3px] w-[560px] mt-4 bg-transparent"
          penClassName="left-10 -translate-x-1/2"
          containerClassName="absolute top-[107px] left-[820px]"
        />
        <InputWithPen
          answer={answers[3]}
          showAnswer={showAnswer}
          className="text-[50px] text-center w-[200px] mt-4 bg-transparent"
          penClassName="left-0 -translate-x-1/2"
          containerClassName="absolute top-[183px] left-[200px]"
        />
        <InputWithPen
          answer={answers[4]}
          showAnswer={showAnswer}
          className="text-[50px] text-center w-[220px] mt-4 bg-transparent"
          penClassName="left-4 -translate-x-1/2"
          containerClassName="absolute top-[183px] left-[525px]"
        />
        <InputWithPen
          answer={answers[5]}
          showAnswer={showAnswer}
          className="text-[47px] tracking-[-3px] w-[560px] mt-4 bg-transparent"
          penClassName="left-10 -translate-x-1/2"
          containerClassName="absolute top-[183px] left-[820px]"
        />
        <InputWithPen
          answer={answers[6]}
          showAnswer={showAnswer}
          className="text-[50px] text-center w-[200px] mt-4 bg-transparent"
          penClassName="left-0 -translate-x-1/2"
          containerClassName="absolute top-[255px] left-[200px]"
        />
        <InputWithPen
          answer={answers[7]}
          showAnswer={showAnswer}
          className="text-[50px] text-center w-[220px] mt-4 bg-transparent"
          penClassName="left-4 -translate-x-1/2"
          containerClassName="absolute top-[255px] left-[525px]"
        />
        <InputWithPen
          answer={answers[8]}
          showAnswer={showAnswer}
          className="text-[47px] tracking-[-3px] w-[560px] mt-4 bg-transparent"
          penClassName="left-10 -translate-x-1/2"
          containerClassName="absolute top-[257px] left-[820px]"
        />
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      <img src={BACKGROUND2.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
};
