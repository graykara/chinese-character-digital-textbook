"use client";

import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import IMAGE_BEFORE from "./image-before.png";
import IMAGE_AFTER from "./image-after.png";
import { useState } from "react";
import { CreativityPageTemplate } from "@/app/pages/creativity-page-template";
import { CreativityTitleHeader } from "@/app/components/headers/creativity-title-header";
import { HeaderContainer } from "@/app/components/headers/header-container";
import { InputWithPen } from "@/app/components/input-with-pen";
import BACKGROUND1 from "@/app/bgpng_temp/4/중등한문_합쳐서 만든 한자25.png";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <CreativityPageTemplate>
        <header className="relative width-[1000px] left-[450px] -top-5 text-[50px]">
          <CreativityTitleHeader
            title="만들자! 나만의 창의 한자"
            className="tracking-[-0.5px]"
          ></CreativityTitleHeader>
        </header>

        <HeaderContainer className="ml-[85px] -mt-5 text-[50px] tracking-[-0.5px]">
          회의 또는 형성의 원리를 활용하여 나만의 한자를 만들고 발표해 보자.
        </HeaderContainer>

        <div className="w-[1223px] ml-[140px] mt-[20px]">
          {showAnswer ? (
            <img src={IMAGE_AFTER.src} />
          ) : (
            <img src={IMAGE_BEFORE.src} />
          )}
        </div>
      </CreativityPageTemplate>

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

      {/* <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
}
