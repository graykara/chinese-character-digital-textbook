"use client";

import { SummaryPageTemplate } from "@/app/pages/summary-page-template";
import IMAGE from "./image.png";
import IMAGE2 from "./image2.png";
import { useState } from "react";
import { StepContainer } from "@/app/components/step-container";
import BACKGROUND1 from "@/app/bgpng_temp/12/중등한문_나에게 힘이 되는 글34.png";
import BACKGROUND2 from "@/app/bgpng_temp/12/중등한문_나에게 힘이 되는 글35.png";

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>
      <SummaryPageTemplate lesson={4}>
        <div className="w-full h-full">
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
        </div>
      </SummaryPageTemplate>
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
    <div className="relative pl-[90px]">
      <div className="flex items-center gap-1">
        <div className="animate__animated animate__flipInX absolute -left-11 -top-1 w-[60px] h-[60px] rounded-full bg-[#e94f39] flex justify-center items-center">
          <span className="font-cookierun text-white -ml-1">11</span>
        </div>
        <div className="relative -ml-14 -mt-2">
          <span className="font-cookierun text-[#7e1700]">
            너와 나, 우리
          </span>
        </div>
      </div>

      <div className="-ml-14 -mt-9">
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
        <div className="animate__animated animate__flipInX absolute -left-11 -top-1 w-[60px] h-[60px]  rounded-full bg-[#e94f39] flex justify-center items-center">
          <span className="font-cookierun text-white">11</span>
        </div>
        <div className="relative -ml-14 -mt-2">
          <span className="font-cookierun text-[#7e1700]">나에게 힘이 되는 글</span>
        </div>
      </div>
      <div className="mt-[70px] -ml-[60px]">
        <img
          src={IMAGE2.src}
          className="animate__animated animate__fadeIn relative"
        />
      </div>
    </div>
  );
};
