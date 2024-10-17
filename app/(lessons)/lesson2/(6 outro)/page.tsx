"use client";

import { SummaryPageTemplate } from "@/app/pages/summary-page-template";
import IMAGE from "./image.png";
import { PageInfoContext } from "@/app/utils/page-info";
import { useContext } from "react";
import BACKGROUND1 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘28.png"

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("정리하기");

  return (
    <>
    <SummaryPageTemplate lesson={1}>
      <div className="w-full h-full">
        <div className="relative pl-[90px]">
          <div className="animate__animated animate__flipInX absolute left-0 top-0 w-[65px] h-[65px] rounded-full bg-[#73210d] flex justify-center items-center">
            <span className="font-cookierun text-white -ml-1">1</span>
          </div>
          <div className="animate__animated animate__flipInX absolute left-0 top-[260px] w-[65px] h-[65px] rounded-full bg-[#73210d] flex justify-center items-center">
            <span className="font-cookierun text-white">2</span>
          </div>
          <div className="animate__animated animate__flipInX absolute left-0 top-[520px] w-[65px] h-[65px] rounded-full bg-[#73210d] flex justify-center items-center">
            <span className="font-cookierun text-white">3</span>
          </div>
          <img
            src={IMAGE.src}
            className="animate__animated animate__fadeIn relative top-2"
          />
        </div>
      </div>
    </SummaryPageTemplate>
    <img src={BACKGROUND1.src} className="absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
