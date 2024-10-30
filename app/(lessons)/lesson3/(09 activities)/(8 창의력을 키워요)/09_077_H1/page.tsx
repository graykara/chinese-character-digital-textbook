"use client";

import IMAGE_BEFORE from "./image-before.png";
import IMAGE_AFTER from "./image-after.png";
import { useState } from "react";
import { CreativityPageTemplate } from "@/app/pages/creativity-page-template";
import { CreativityTitleHeader } from "@/app/components/headers/creativity-title-header";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { TitleContainer } from "@/app/components/title-container";
import BACKGROUND1 from "@/app/bgpng_temp/9/중등한문_이야기가 담긴 성어130.png";
import { InputWithPen } from "@/app/components/input-with-pen";
import {
  OLD_TextareaWithPen,
  TextareaWithPen,
} from "@/app/components/textarea/textarea-with-pen";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <CreativityPageTemplate>
        <CreativityTitleHeader
          title="‘나만의 한자 성어’ 만들기"
          containerClassName="w-[620px] -mt-5"
        />
        <TitleContainer className="ml-[85px] mt-2" sound="/sound/3/77-i.mp3">
          <div className="flex items-center gap-1 text-[50px] tracking-[-1px] ml-[65px] leading-[70px] -mr-20">
            이 단원에서 배운 성어를 활용하여 아래의 예시처럼 나만의 성어를
            만들고 발표해 보자.
          </div>
        </TitleContainer>

        <div className="ml-[220px] mt-3">
          {!showAnswer ? (
            <div className="relative">
              <img src={IMAGE_BEFORE.src} />

              <InputWithPen
                containerClassName="absolute left-[880px] top-[25px]"
                className="w-[220px] text-[40px] text-center bg-transparent"
                penClassName="w-[30px]"
              />
              <InputWithPen
                containerClassName="absolute left-[880px] top-[110px]"
                className="w-[220px] text-[40px] text-center bg-transparent"
                penClassName="w-[30px]"
              />
              <OLD_TextareaWithPen
                containerClassName="!absolute left-[856px] top-[185px]"
                className="w-[260px] text-[25px] bg-transparent"
                penClassName="w-[30px] top-1/2 -translate-y-1/2"
                rows={3}
              />
              <OLD_TextareaWithPen
                containerClassName="!absolute left-[856px] top-[290px]"
                className="w-[260px] text-[25px] bg-transparent"
                penClassName="w-[30px] top-1/2 -translate-y-1/2"
                rows={2}
              />
              <OLD_TextareaWithPen
                containerClassName="!absolute left-[856px] top-[365px]"
                className="w-[260px] text-[25px] bg-transparent"
                penClassName="w-[30px] top-1/2 -translate-y-1/2"
                rows={4}
              />
            </div>
          ) : (
            <img src={IMAGE_AFTER.src} />
          )}
          {/* <div className="absolute top-[240px] left-[490px] font-haeseo">
            朝一暮二
          </div> */}
        </div>
      </CreativityPageTemplate>

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />

      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
