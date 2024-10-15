"use client";

import { ReadingButton } from "@/app/components/buttons/reading-button";
import { Header } from "../components/header";

export default function Page15() {
  return (
    <>
      <Header />

      <div className="w-[1600px] h-full mx-auto flex flex-col justify-center items-center">
        <div className="relative">
          <div className="absolute -top-28 right-0">
            <ReadingButton active={false} onClick={() => {}} />
          </div>
          <div className="border-8 rounded-3xl border-[#d74e1e] w-[1500px] text-[52px] p-10 leading-[72px] tracking-tighter">
            우리의 역사와 사상을 비롯한 대부분의 전통문화는 한자로 기록되어
            <br />
            전해진다. 따라서 우리의 역사와 문화를 이해하고 재창조하기 위해
            한자와
            <br />
            한문을 익히고 활용할 수 있는 역량을 길러야 한다.
          </div>
        </div>
      </div>
    </>
  );
}
