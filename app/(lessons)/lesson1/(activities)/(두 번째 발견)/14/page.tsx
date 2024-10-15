"use client";

import { ReadingButton } from "@/app/components/buttons/reading-button";
import { Header } from "../components/header";

export default function Page14() {
  return (
    <>
      <Header />

      <div className="w-[1600px] h-full mx-auto flex flex-col justify-center items-center">
        <div className="relative">
          <div className="absolute -top-28 right-0">
            <ReadingButton active={false} onClick={() => {}} />
          </div>
          <div className="border-8 rounded-3xl border-[#e44d74] w-[1500px] text-[52px] p-10 leading-[72px] tracking-tighter">
            교과 학습 시간에 만나는 대부분의 어휘는 한자어이다. 따라서 한자를
            알면 어휘의 뜻을 쉽고 명확하게 이해할 수 있다.
          </div>
        </div>
      </div>
    </>
  );
}
