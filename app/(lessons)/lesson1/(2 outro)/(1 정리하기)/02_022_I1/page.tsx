"use client";

import { SummaryPageTemplate } from "@/app/pages/summary-page-template";
import IMAGE from "./image.png";
import { PageInfoContext } from "@/app/utils/page-info";
import { useContext } from "react";
import BACKGROUND1 from "@/app/bgpng_temp/2/중등한문_한자,얼마나 알아30.png"

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  

  return (
    <>
      <SummaryPageTemplate lesson={2}>
        <div className="w-full h-full mt-4 ml-4">
          <div className="relative pl-[75px]">
            <div className="animate__animated animate__flipInX absolute left-0 top-0 w-[65px] h-[65px] rounded-full bg-[#73210d] flex justify-center items-center">
              <span className="font-cookierun text-white -ml-1">1</span>
            </div>
            <div className="animate__animated animate__flipInX absolute left-0 top-[265px] w-[65px] h-[65px] rounded-full bg-[#73210d] flex justify-center items-center">
              <span className="font-cookierun text-white">2</span>
            </div>
            <div className="animate__animated animate__flipInX absolute left-0 top-[525px] w-[65px] h-[65px] rounded-full bg-[#73210d] flex justify-center items-center">
              <span className="font-cookierun text-white">3</span>
            </div>
            <img
              src={IMAGE.src}
              className="animate__animated animate__fadeIn relative top-2"
            />
          </div>
        </div>
      </SummaryPageTemplate>
      <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
