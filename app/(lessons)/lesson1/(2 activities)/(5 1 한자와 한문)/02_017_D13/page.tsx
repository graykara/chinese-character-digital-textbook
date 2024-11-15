"use client";

import { ExerciseHeader } from "@/app/components/exercise-header";
import { HeaderContainer } from "@/app/components/headers/header-container";
import HEADER from "./header.png";
import IMAGE from "./image.png";
import { PageInfoContext } from "@/app/utils/page-info";
import { useState } from "react";
import { useContext } from "react";
import { InputWithPen } from "@/app/components/input-with-pen";
import { TextareaWithPen } from "@/app/components/textarea/textarea-with-pen";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import BACKGROUND from "@/app/bgpng_temp/2/중등한문_한자,얼마나 알아10.png"

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <HeaderContainer className="mt-10" sound="/sound/1/17-i2.mp3">
        <img src={HEADER.src} alt="header" />
      </HeaderContainer>

      <ExerciseHeader
        text="내 이름을 한자로 쓰고 그 뜻을 사용하여 이름의 의미를 써보자."
        sound="/sound/1/17-i2.mp3"
        className="mt-4"
      />

      <div className="w-[1400px] h-full mx-auto flex justify-center items-center ">

        <img
          src={IMAGE.src}
          className="absolute translate-x-[117px] -translate-y-[30px]" />

        <div className="relative w-[850px] mb-[467px]">
          <div className="relative top-2">

            <InputWithPen
              answer="金"
              showAnswer={showAnswer}
              className="text-center w-[110px] text-[70px] font-haeseo tracking-tighter bg-transparent"
              penClassName="h-[48px] top-[50px] left-1/2 -translate-x-1/2"
              containerClassName="absolute resize-none -left-[135px] -top-2"
              isExample
            />
            <InputWithPen
              answer="大"
              showAnswer={showAnswer}
              className="text-center w-[205px] text-[70px] font-haeseo tracking-tighter bg-transparent"
              penClassName="h-[48px] top-[50px] left-1/2 -translate-x-1/2"
              containerClassName="absolute resize-none left-[39px] -top-2"
              isExample
            />
            <InputWithPen
              answer="成"
              showAnswer={showAnswer}
              className="text-center w-[205px] text-[70px] font-haeseo tracking-tighter bg-transparent"
              penClassName="h-[48px] top-[50px] left-1/2 -translate-x-1/2"
              containerClassName="absolute resize-none left-[312px] -top-2"
              isExample
            />

            <InputWithPen
              answer="김"
              showAnswer={showAnswer}
              className="text-center w-[110px] text-[60px] tracking-tighter bg-transparent"
              penClassName="h-[48px] top-[40px] left-1/2 -translate-x-1/2"
              containerClassName="absolute resize-none -left-[135px] top-[110px]"
              isExample
            />
            <InputWithPen
              answer="대"
              showAnswer={showAnswer}
              className="text-center w-[205px] text-[60px] tracking-tighter bg-transparent"
              penClassName="h-[48px] top-[40px] left-1/2 -translate-x-1/2"
              containerClassName="absolute resize-none left-[39px] top-[110px]"
              isExample
            />
            <InputWithPen
              answer="성"
              showAnswer={showAnswer}
              className="text-center w-[205px] text-[60px] tracking-tighter bg-transparent"
              penClassName="h-[48px] top-[40px] left-1/2 -translate-x-1/2"
              containerClassName="absolute resize-none left-[312px] top-[110px]"
              isExample
            />

            <InputWithPen
              answer="크다"
              showAnswer={showAnswer}
              className="text-center w-[205px] text-[60px] tracking-tighter bg-transparent"
              penClassName="h-[48px] top-[40px] left-1/2 -translate-x-1/2"
              containerClassName="absolute resize-none left-[39px] top-[219px]"
              isExample
            />
            <InputWithPen
              answer="이루다"
              showAnswer={showAnswer}
              className="text-center w-[205px] text-[60px] tracking-tighter bg-transparent"
              penClassName="h-[48px] top-[40px] left-1/2 -translate-x-1/2"
              containerClassName="absolute resize-none left-[312px] top-[219px]"
              isExample
            />

            <InputWithPen
              answer="김대성"
              showAnswer={showAnswer}
              className="text-center w-[195px] text-[30px] tracking-tighter bg-transparent"
              penClassName="h-[48px] -mt-1"
              containerClassName="absolute resize-none left-[752px] top-4"
              isExample
            />
            <TextareaWithPen
              answer="‘크게 이루다’라는 뜻으로, 큰 인물이 되라고 지은 이름이래"
              showAnswer={showAnswer}
              containerClassName={`absolute resize-none w-[400px] left-[640px] top-[155px] text-center text-[30px] leading-[65px] tracking-tighter break-keep bg-transparent text-example}`}
              penClassName="h-[48px] top-[155px] left-[650px]"
              rows={2}
              isExample
            />

          </div>
        </div>
      </div>

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      <img src={BACKGROUND.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>

  );
}
