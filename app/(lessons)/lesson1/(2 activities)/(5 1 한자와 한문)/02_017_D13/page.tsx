"use client";

import { ExerciseHeader } from "@/app/components/exercise-header";
import { HeaderContainer } from "@/app/components/headers/header-container";
import HEADER from "./header.png";
import IMAGE_BEFORE from "./image.png";
import IMAGE_AFTER from "./image_after.png";
import { PageInfoContext } from "@/app/utils/page-info";
import { useState } from "react";
import { useContext } from "react";
import { InputWithPen } from "@/app/components/input-with-pen";
import { TextareaWithPen } from "@/app/components/textarea/textarea-with-pen";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import BACKGROUND from "@/app/bgpng_temp/2/중등한문_한자,얼마나 알아10.png"

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("한자와 한문");

  return (
    <>
      <HeaderContainer className="mt-10" sound="/sound/1/17-i2.mp3">
        <img src={HEADER.src} alt="header" />
      </HeaderContainer>

      <ExerciseHeader text="내 이름을 한자로 쓰고 그 뜻을 사용하여 이름의 의미를 써보자." />

      <div className="w-[1400px] h-full mx-auto flex justify-center items-center ">

        <img
          src={showAnswer ? IMAGE_AFTER.src : IMAGE_BEFORE.src}
          className="absolute translate-x-2 -translate-y-5" />

        <div className="relative w-[850px] mb-[450px]">
          <div className="relative top-2">

            <InputWithPen
              showAnswer={showAnswer}
              className="text-center w-[195px] text-[30px] tracking-tighter bg-transparent"
              penClassName="h-[48px] -left-1 -mt-2"
              containerClassName="absolute resize-none left-[55px] top-5"
              isExample
            />
            <TextareaWithPen
              showAnswer={showAnswer}
              containerClassName={`absolute resize-none w-[380px] -left-[50px] top-[155px] text-center text-[30px] leading-[65px] tracking-tighter break-keep bg-transparent }`}
              penClassName="h-[48px] top-[155px] -left-[45px]"
              rows={2}
            />

            <InputWithPen
              showAnswer={showAnswer}
              className="text-center w-[110px] text-[70px] font-haeseo tracking-tighter bg-transparent"
              penClassName="h-[48px] top-[47px] left-1/2 -translate-x-1/2"
              containerClassName="absolute resize-none left-[478px] -top-1"
              isExample
            />
            <InputWithPen
              showAnswer={showAnswer}
              className="text-center w-[205px] text-[70px] font-haeseo tracking-tighter bg-transparent"
              penClassName="h-[48px] top-[47px] left-1/2 -translate-x-1/2"
              containerClassName="absolute resize-none left-[652px] -top-1"
              isExample
            />
            <InputWithPen
              showAnswer={showAnswer}
              className="text-center w-[205px] text-[70px] font-haeseo tracking-tighter bg-transparent"
              penClassName="h-[48px] top-[47px] left-1/2 -translate-x-1/2"
              containerClassName="absolute resize-none left-[925px] -top-1"
              isExample
            />

            <InputWithPen
              showAnswer={showAnswer}
              className="text-center w-[110px] text-[60px] tracking-tighter bg-transparent"
              penClassName="h-[48px] top-[40px] left-1/2 -translate-x-1/2"
              containerClassName="absolute resize-none left-[478px] top-[113px]"
              isExample
            />
            <InputWithPen
              showAnswer={showAnswer}
              className="text-center w-[205px] text-[60px] tracking-tighter bg-transparent"
              penClassName="h-[48px] top-[40px] left-1/2 -translate-x-1/2"
              containerClassName="absolute resize-none left-[652px] top-[113px]"
              isExample
            />
            <InputWithPen
              showAnswer={showAnswer}
              className="text-center w-[205px] text-[60px] tracking-tighter bg-transparent"
              penClassName="h-[48px] top-[40px] left-1/2 -translate-x-1/2"
              containerClassName="absolute resize-none left-[925px] top-[113px]"
              isExample
            />

            <InputWithPen
              showAnswer={showAnswer}
              className="text-center w-[205px] text-[60px] tracking-tighter bg-transparent"
              penClassName="h-[48px] top-[40px] left-1/2 -translate-x-1/2"
              containerClassName="absolute resize-none left-[652px] top-[222px]"
              isExample
            />
            <InputWithPen
              showAnswer={showAnswer}
              className="text-center w-[205px] text-[60px] tracking-tighter bg-transparent"
              penClassName="h-[48px] top-[40px] left-1/2 -translate-x-1/2"
              containerClassName="absolute resize-none left-[925px] top-[222px]"
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
