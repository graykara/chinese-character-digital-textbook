"use client";

import { ThinkTogetherHeader } from "@/app/components/headers/think-together";
import IMAGE from "./image.png";
import IMAGE2 from "./image2.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useState } from "react";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { InputWithPen } from "@/app/components/input-with-pen";
import BACKGROUND1 from "@/app/bgpng_temp/14/중등한문_사람만 귀한가요2.png";
import BACKGROUND2 from "@/app/bgpng_temp/14/중등한문_사람만 귀한가요3.png";
import { WritingButton } from "@/app/components/buttons/writing-button";

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>
      <ThinkTogetherHeader
        title={<p className="-ml-2">다음과 같이 동물을 구분하였을 때 각 동물이 겪을 수 있는 문제점을 생각하여 써 보자.</p>}
        sound=""
      />

      <WritingButton
        className="animate__animated animate__fadeIn animate__delay-1s absolute top-[255px] left-[560px] z-1" />

      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      <StepContainer step={step} maxStep={2} onStepChange={setStep} />
    </>
  );
}

const Step1 = () => {
  return (
    <>
      <ContentContainer className="-top-12 left-4">
        <img src={IMAGE.src} />
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
  const answers = [
    "인간에 대한 학대, 유기",
    "무분별한 실험으로 인한 동물의 생명 경시",
    "불법 포획으로 인한 멸종 위기"
  ];
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");

  return (
    <>
      <ContentContainer className="-top-16 -left-10">
        <img src={IMAGE2.src} />

        {!value1 && !showAnswer ? (
          <img
            src="/ui/textarea-pen.png"
            className="absolute pointer-events-none"
            style={{
              height: 50,
              top: 110,
              left: 250
            }}
          />
        ) : null}
        <textarea
          value={showAnswer ? answers[0] : value1}
          onChange={(e) => setValue1(e.target.value)}
          className={`absolute resize-none w-[320px] left-[250px] top-[105px] text-[40px] leading-[72px] tracking-tighter break-keep bg-transparent pl-6 py-1  ${showAnswer ? "text-example" : ""
            }`}
          rows={6}
        ></textarea>

        {!value2 && !showAnswer ? (
          <img
            src="/ui/textarea-pen.png"
            className="absolute pointer-events-none"
            style={{
              height: 50,
              top: 110,
              left: 645
            }}
          />
        ) : null}
        <textarea
          value={showAnswer ? answers[1] : value2}
          onChange={(e) => setValue2(e.target.value)}
          className={`absolute resize-none w-[320px] left-[645px] top-[105px] text-[40px] leading-[72px] tracking-tighter break-keep bg-transparent pl-6 py-1  ${showAnswer ? "text-example" : ""
            }`}
          rows={6}
        ></textarea>

        {!value3 && !showAnswer ? (
          <img
            src="/ui/textarea-pen.png"
            className="absolute pointer-events-none"
            style={{
              height: 50,
              top: 110,
              left: 1040
            }}
          />
        ) : null}
        <textarea
          value={showAnswer ? answers[2] : value3}
          onChange={(e) => setValue3(e.target.value)}
          className={`absolute resize-none w-[320px] left-[1040px] top-[105px] text-[40px] leading-[72px] tracking-tighter break-keep bg-transparent pl-6 py-1  ${showAnswer ? "text-example" : ""
            }`}
          rows={6}
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
