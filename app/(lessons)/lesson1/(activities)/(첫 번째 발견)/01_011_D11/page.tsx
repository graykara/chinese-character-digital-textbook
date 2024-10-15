"use client";

import { ReadingButton } from "@/app/components/buttons/reading-button";
import HEADER from "../assets/header.png";

export default function Page13() {
  return (
    <>
      <header className="pt-5 animate__animated animate__fadeIn">
        <img src={HEADER.src} />
      </header>

      <div className="w-[1600px] h-full mx-auto flex flex-col justify-center items-center">
        <div className="relative">
          <div className="absolute -top-28 right-0">
            <ReadingButton active={false} onClick={() => {}} />
          </div>
          <div className="border-8 rounded-3xl border-[#20a5c5] w-[1600px] text-[52px] p-10 leading-[72px] tracking-tighter">
            한글 창제 이전은 물론, 그 이후에도 우리는 한자를 표기 수단으로
            사용하였다.
            <br />
            수천 년 동안 한자와 한문으로 생각과 감정을 표현하고 기록해 온
            것이다.
            <br />
            자연스럽게 지금의 우리 언어생활 속 에 는 한자로 이루어진 말들이
            많아졌다.
          </div>
        </div>
      </div>
    </>
  );
}
