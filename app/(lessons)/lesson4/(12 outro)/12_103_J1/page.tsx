"use client";

import IMAGE from "./image.png";
import { useState } from "react";
import { ActivityPageTemplate } from "@/app/pages/activity-page-template";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/12/중등한문_나에게 힘이 되는 글36.png";
import { HeaderContainer } from "@/app/components/headers/header-container";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ActivityPageTemplate lesson={2}>
        <div className="w-full h-full flex flex-col justify-start items-center overflow-y-scroll">
          <header className="mb-10">
            <h1 className="text-[60px] text-[#5e4141] font-bold text-center">
              성찰 일기 작성하기
            </h1>
            <HeaderContainer
              sound="/sound/4/103_001.mp3"
              className="text-center text-[35px] animate__animated animate__flipInX"
            >
              Ⅳ단원에서 배운 문장을 하나 골라, 문장에 담긴 교훈을 <br />
              일주일간 내 삶에 적용해 보고 성찰 일기를 작성해 보자.
            </HeaderContainer>
          </header>
          <img src={IMAGE.src} className="w-full" />
        </div>
      </ActivityPageTemplate>

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
