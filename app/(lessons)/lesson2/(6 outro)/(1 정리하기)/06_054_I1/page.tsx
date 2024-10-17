"use client";

import { SummaryPageTemplate } from "@/app/pages/summary-page-template";
import IMAGE from "./image.png";
import IMAGE2 from "./image2.png";
import { useState } from "react";
import { StepContainer } from "@/app/components/step-container";
import BACKGROUND1 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘23.png"
import BACKGROUND2 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘24.png"

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>
      <SummaryPageTemplate lesson={1}>
        <div className="w-full h-full">
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
        </div>
      </SummaryPageTemplate>
      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
      <img src={BACKGROUND1.src} className="absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}

const Step1 = () => {
  return (
    <div className="relative pl-[90px]">
      <div className="flex items-center gap-5">
        <div className="animate__animated animate__flipInX absolute left-0 top-0 w-[65px] h-[65px] rounded-full bg-[#73210d] flex justify-center items-center">
          <span className="font-cookierun text-white -ml-1">1</span>
        </div>
        <span className="font-cookierun">한자가 만들어진 원리</span>
      </div>

      <div className="ml-20 mt-5">
        <img
          src={IMAGE.src}
          className="animate__animated animate__fadeIn relative top-2"
        />
      </div>
    </div>
  );
};

const Step2 = () => {
  return (
    <div className="relative pl-[90px]">
      <div className="flex items-center gap-5">
        <div className="animate__animated animate__flipInX absolute left-0 top-0 w-[65px] h-[65px] rounded-full bg-[#73210d] flex justify-center items-center">
          <span className="font-cookierun text-white -ml-1">2</span>
        </div>
        <span className="font-cookierun">단어의 짜임</span>
      </div>
      <div className="-mt-10">
        <img
          src={IMAGE2.src}
          className="animate__animated animate__fadeIn relative top-2"
        />
      </div>
    </div>
  );
};
