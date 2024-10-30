"use client";

import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import IMAGE2_AFTER from "./image2-after.png";
import { StepContainer } from "@/app/components/step-container";
import { useState } from "react";
import { ActivityPageTemplate } from "@/app/pages/activity-page-template";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘25.png";
import BACKGROUND2 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘26.png";
import { InputWithPen } from "@/app/components/input-with-pen";
import {
  OLD_TextareaWithPen,
  TextareaWithPen,
} from "@/app/components/textarea/textarea-with-pen";

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>
      <ActivityPageTemplate lesson={2}>
        {step === 1 ? <Content1 /> : null}
        {step === 2 ? <Content2 /> : null}
      </ActivityPageTemplate>
      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
      <img src={BACKGROUND2.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}

const Content1 = () => {
  return (
    <div className="animate__animated animate__fadeIn w-full h-full flex flex-col justify-center items-start -mt-20 -ml-5">
      <img src={IMAGE1.src} />
    </div>
  );
};

const Content2 = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <>
      <div className="animate__animated animate__fadeIn h-full flex justify-center overflow-y-auto pt-20 pb-[120px]">
        <div className="relative h-fit -mt-3 -ml-12">
          {showAnswer ? (
            <img src={IMAGE2_AFTER.src} />
          ) : (
            <div className="relative">
              <img src={IMAGE2.src} />


              <InputWithPen
                containerClassName="absolute top-[345px] left-[371px] font-haeseo text-[83px]"
                className="text-center w-[130px] mt-4"
                penClassName="left-10 top-20 h-[55px]"
              />
              <InputWithPen
                containerClassName="absolute top-[345px] left-[501px] font-haeseo text-[83px]"
                className="text-center w-[130px] mt-4"
                penClassName="left-10 top-20 h-[55px]"
              />


              <InputWithPen
                containerClassName="absolute left-[500px] top-[115px]"
                className="text-center bg-transparent text-[35px] w-[550px]"
                penClassName="left-1/2 -translate-x-1/2 w-[35px]"
              />

              <InputWithPen
                containerClassName="absolute left-[770px] top-[352px]"
                className="bg-transparent text-[35px] w-[180px]"
                penClassName="w-[35px]"
              />
              <InputWithPen
                containerClassName="absolute left-[770px] top-[419px]"
                className="bg-transparent text-[35px] w-[180px]"
                penClassName="w-[35px]"
              />
              <OLD_TextareaWithPen
                containerClassName="!absolute left-[1020px] top-[350px]"
                className="bg-transparent text-[35px] w-[300px]"
                penClassName="top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[35px]"
                rows={3}
              />
            </div>
          )}
        </div>
      </div>
      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
};
