"use client";

import { ReadingButton } from "@/app/components/buttons/reading-button";
import { Header } from "../components/header";

export default function Page16() {
  return (
    <>
      <Header />

      <div className="w-[1600px] h-full mx-auto flex flex-col justify-center items-center">
        <div className="relative">
          <div className="absolute -top-28 right-0">
            <ReadingButton active={false} onClick={() => {}} />
          </div>
          <div className="border-8 rounded-3xl border-[#804f3d] w-[1500px] text-[52px] p-10 leading-[72px] tracking-tighter">
            한자 문화권이란 한자를 사용했거나, 지금도 사용하고 있는 나라와
            지역을 말한다. 우리나라·중국·일본·베트남 등이 대표적이며, 한자
            문화권의 인구는 전 세계 인구의 25%나 된다.
          </div>
        </div>
      </div>
    </>
  );
}
