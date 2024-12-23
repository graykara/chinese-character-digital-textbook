"use client";

import { SummaryPageTemplate } from "@/app/pages/summary-page-template";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import IMAGE3 from "./image3.png";
import IMAGE4 from "./image4.png";
import { useContext, useState } from "react";
import { StepContainer } from "@/app/components/step-container";
import BACKGROUND1 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘23.png";
import BACKGROUND2 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘24.png";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  return (
    <>
      <SummaryPageTemplate lesson={3}>
        <div className="w-full h-full">
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <Step4 />}
        </div>
      </SummaryPageTemplate>
      <StepContainer maxStep={4} />
      <img src={step === 1 ? BACKGROUND1.src : BACKGROUND2.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}

const Step1 = () => {
  return (
    <div className="relative pl-[90px]">
      <div className="flex items-center gap-1">
        <div className="animate__animated animate__flipInX absolute -left-11 -top-1 w-[60px] h-[60px] rounded-full bg-[#73210d] flex justify-center items-center">
          <span className="font-cookierun text-white -ml-1">7</span>
        </div>
        <div className="relative -ml-14 -mt-2">
          <span className="font-cookierun">언어생활 속의 성어</span>
          <span className="ml-4 inline-block w-12 h-12 font-cookierun text-4xl text-[#e53b38] border-[6px] border-[#e53b38] rounded-full px-2">1</span>
        </div>
      </div>

      <div className="-ml-14 mt-0">
        <img
          src={IMAGE1.src}
          className="animate__animated animate__fadeIn relative top-2"
        />
      </div>
    </div>
  );
};

const Step2 = () => {
  return (
    <div className="relative pl-[90px]">
      <div className="flex items-center gap-1">
        <div className="animate__animated animate__flipInX absolute -left-11 -top-1 w-[60px] h-[60px] rounded-full bg-[#73210d] flex justify-center items-center">
          <span className="font-cookierun text-white -ml-1">8</span>
        </div>
        <div className="relative -ml-14 -mt-2">
          <span className="font-cookierun">언어생활 속의 성어</span>
          <span className="ml-4 inline-block w-12 h-12 font-cookierun text-4xl text-[#e53b38] border-[6px] border-[#e53b38] rounded-full px-2">2</span>
        </div>
      </div>

      <div className="-ml-14 mt-0">
        <img
          src={IMAGE2.src}
          className="animate__animated animate__fadeIn relative top-2"
        />
      </div>
    </div>
  );
};

const Step3 = () => {
  return (
    <div className="relative pl-[90px]">
      <div className="flex items-center gap-1">
        <div className="animate__animated animate__flipInX absolute -left-11 -top-1 w-[60px] h-[60px] rounded-full bg-[#73210d] flex justify-center items-center">
          <span className="font-cookierun text-white -ml-1">9</span>
        </div>
        <div className="relative -ml-14 -mt-2">
          <span className="font-cookierun">이야기가 담긴 성어</span>
          <span className="ml-4 inline-block w-12 h-12 font-cookierun text-4xl text-[#e53b38] border-[6px] border-[#e53b38] rounded-full px-2">1</span>
        </div>
      </div>

      <div className="-ml-14 mt-0">
        <img
          src={IMAGE3.src}
          className="animate__animated animate__fadeIn relative top-2"
        />
      </div>
    </div>
  );
};

const Step4 = () => {
  return (
    <div className="relative pl-[90px]">
      <div className="flex items-center gap-1">
        <div className="animate__animated animate__flipInX absolute -left-11 -top-1 w-[60px] h-[60px] rounded-full bg-[#73210d] flex justify-center items-center">
          <span className="font-cookierun text-white -ml-1">10</span>
        </div>
        <div className="relative -ml-14 -mt-2">
          <span className="font-cookierun">이야기가 담긴 성어</span>
          <span className="ml-4 inline-block w-12 h-12 font-cookierun text-4xl text-[#e53b38] border-[6px] border-[#e53b38] rounded-full px-2">2</span>
        </div>
      </div>

      <div className="-ml-14 mt-0">
        <img
          src={IMAGE4.src}
          className="animate__animated animate__fadeIn relative top-2"
        />
      </div>
    </div>
  );
};
