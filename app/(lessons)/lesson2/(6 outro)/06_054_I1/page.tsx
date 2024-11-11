"use client";

import { SummaryPageTemplate } from "@/app/pages/summary-page-template";
import IMAGE from "./image.png";
import IMAGE2 from "./image2.png";
import { useContext, useState } from "react";
import { StepContainer } from "@/app/components/step-container";
import BACKGROUND1 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘23.png";
import BACKGROUND2 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘24.png";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  return (
    <>
      <SummaryPageTemplate lesson={2}>
        <div className="w-full h-full">
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
        </div>
      </SummaryPageTemplate>
      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
      <img src={step===1 ? BACKGROUND1.src : BACKGROUND2.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}

const Step1 = () => {
  return (
    <div className="relative pl-[90px]">
      <div className="flex items-center gap-1">
        <div className="animate__animated animate__flipInX absolute -left-11 -top-1 w-[60px] h-[60px] rounded-full bg-[#73210d] flex justify-center items-center">
          <span className="font-cookierun text-white -ml-1">1</span>
        </div>
        <div className="relative -ml-14 -mt-2">
          <span className="font-cookierun">한자가 만들어진 원리</span>
        </div>
      </div>

      <div className="ml-12 mt-7">
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
        <div className="animate__animated animate__flipInX absolute -left-11 -top-1 w-[60px] h-[60px]  rounded-full bg-[#73210d] flex justify-center items-center">
          <span className="font-cookierun text-white">2</span>
        </div>
        <div className="relative -ml-14 -mt-2">
          <span className="font-cookierun">단어의 짜임</span>
        </div>
      </div>
      <div className="-mt-5 -ml-14">
        <img
          src={IMAGE2.src}
          className="animate__animated animate__fadeIn relative"
        />
      </div>
      <div className="absolute top-[120px] left-[1080px]  text-[35px] tracking-tighter">
        <p className=""><span className="font-haeseo text-[40px] tracking-[-7px]">寒冷</span> : 춥고 차가움.</p>
        <p className="-mt-4"><span className="font-haeseo text-[40px] tracking-[-7px]">有無</span> : 있음과 없음.</p>
        <p className="mt-12"><span className="font-haeseo text-[40px] tracking-[-7px]">話者</span> : 말하는 사람.</p>
        <p className="-mt-4"><span className="font-haeseo text-[40px] tracking-[-7px]">休日</span> : 쉬는 날.</p>
        <p className="mt-8"><span className="font-haeseo text-[40px] tracking-[-7px]">民主</span> : 국민이 주인임.</p>
        <p className="-mt-4"><span className="font-haeseo text-[40px] tracking-[-7px]">年少</span> : 나이가 적음.</p>
        <p className="mt-7"><span className="font-haeseo text-[40px] tracking-[-7px]">投票</span> : 표를 던짐[냄].</p>
        <p className="-mt-4"><span className="font-haeseo text-[40px] tracking-[-7px]">讀書</span> : 책을 읽음.</p>
        <p className="mt-5"><span className="font-haeseo text-[40px] tracking-[-7px]">多濕</span> : 습기가 많음.</p>
        <p className="-mt-4"><span className="font-haeseo text-[40px] tracking-[-7px]">難讀</span> : 읽기가 어려움.</p>
      </div>
    </div>
  );
};
