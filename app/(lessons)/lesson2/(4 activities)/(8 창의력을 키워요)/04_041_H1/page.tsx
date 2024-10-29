"use client";

import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import IMAGE_BEFORE from "./image-before.png";
import IMAGE_AFTER from "./image-after.png";
import { useState } from "react";
import { CreativityPageTemplate } from "@/app/pages/creativity-page-template";
import { CreativityTitleHeader } from "@/app/components/headers/creativity-title-header";
import { TitleContainer } from "@/app/components/title-container";
import { ContentContainer } from "@/app/components/content-container";

// import { HeaderContainer } from "@/app/components/headers/header-container";
import { InputWithPen } from "@/app/components/input-with-pen";
import BACKGROUND1 from "@/app/bgpng_temp/4/중등한문_합쳐서 만든 한자25.png";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <CreativityPageTemplate>
        <CreativityTitleHeader
          title="만들자! 나만의 창의 한자"
          containerClassName="-mt-5"
        />
        <TitleContainer 
          className="ml-[85px] mt-2"
          sound="/sound/2/41-i.mp3">
          <div className="flex items-center gap-1 text-[50px] tracking-[-0.5px]">
          회의 또는 형성의 원리를 활용하여 나만의 한자를 만들고 발표해 보자.
          </div>
        </TitleContainer>

        <div className="w-[1223px] ml-[140px] mt-[20px]">
            <img src={showAnswer ? IMAGE_AFTER.src : IMAGE_BEFORE.src} />
        </div>
      </CreativityPageTemplate>
      
      {/* 체크표시 기능 넣어주세요. */}

      <InputWithPen
        //answer={answers[0]}
        showAnswer={showAnswer}
        className="text-[50px] text-center w-[80px] bg-transparent"
        penClassName="left-3 w-[55px] top-[35px]"
        containerClassName="absolute top-[835px] left-[478px]"
      />
      <InputWithPen
        //answer={answers[0]}
        showAnswer={showAnswer}
        className="text-[50px] text-center w-[110px] bg-transparent"
        penClassName="left-7 w-[55px] top-[35px]"
        containerClassName="absolute top-[835px] left-[650px]"
      />

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />

      <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
