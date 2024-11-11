"use client";

import { SummaryPageTemplate } from "@/app/pages/summary-page-template";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import IMAGE3 from "./image3.png";
import IMAGE4 from "./image4.png";
import { useContext, useState } from "react";
import { StepContainer } from "@/app/components/step-container";
import BACKGROUND1 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕29.png";
import BACKGROUND2 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕30.png";
import BACKGROUND3 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕31.png";
import BACKGROUND4 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕32.png";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  return (
    <>
      <SummaryPageTemplate lesson={5}>
        <div className="w-full h-full">
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <Step4 />}
        </div>
      </SummaryPageTemplate>
      <StepContainer maxStep={4} step={step} onStepChange={setStep} />
      <img src={
        step === 1 ? BACKGROUND1.src :
        step === 2 ? BACKGROUND2.src :
        step === 3 ? BACKGROUND3.src :
        step === 4? BACKGROUND4.src : ""
        } className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}

const Step1 = () => {
  return (
    <div className="relative pl-[90px]">
      <div className="flex items-center gap-1">
        <div className="animate__animated animate__flipInX absolute -left-11 -top-1 w-[60px] h-[60px] rounded-full bg-[#e94f39] flex justify-center items-center">
          <span className="font-cookierun text-white -ml-1">13</span>
        </div>
        <div className="relative -ml-14 -mt-2">
          <span className="font-cookierun text-[#7e1700]">
            귀에 대고 말한 까닭
          </span>
        </div>
      </div>

      <div className="-ml-[55px] mt-[20px]">
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
        <div className="animate__animated animate__flipInX absolute -left-11 -top-1 w-[60px] h-[60px] rounded-full bg-[#e94f39] flex justify-center items-center">
          <span className="font-cookierun text-white -ml-1">14</span>
        </div>
        <div className="relative -ml-14 -mt-2">
          <span className="font-cookierun text-[#7e1700]">사람만 귀한가요</span>
        </div>
      </div>

      <div className="-ml-[37px] mt-[10px]">
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
        <div className="animate__animated animate__flipInX absolute -left-11 -top-1 w-[60px] h-[60px] rounded-full bg-[#e94f39] flex justify-center items-center">
          <span className="font-cookierun text-white -ml-1">15</span>
        </div>
        <div className="relative -ml-14 -mt-2">
          <span className="font-cookierun text-[#7e1700]">돌에 꽂힌 화살</span>
        </div>
      </div>

      <div className="-ml-[41px] mt-[30px]">
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
        <div className="animate__animated animate__flipInX absolute -left-11 -top-1 w-[60px] h-[60px] rounded-full bg-[#e94f39] flex justify-center items-center">
          <span className="font-cookierun text-white -ml-1">16</span>
        </div>
        <div className="relative -ml-14 -mt-2">
          <span className="font-cookierun text-[#7e1700]">
            제주 거상 김만덕
          </span>
        </div>
      </div>

      <div className="-ml-[44px] mt-[30px]">
        <img
          src={IMAGE4.src}
          className="animate__animated animate__fadeIn relative top-2"
        />
      </div>
    </div>
  );
};
