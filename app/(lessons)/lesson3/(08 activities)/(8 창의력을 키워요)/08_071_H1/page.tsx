"use client";

import IMAGE_BEFORE from "./image_before.png";
import IMAGE_AFTER from "./image_after.png";
import { useState } from "react";
import { CreativityPageTemplate } from "@/app/pages/creativity-page-template";
import { CreativityTitleHeader } from "@/app/components/headers/creativity-title-header";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { TitleContainer } from "@/app/components/title-container";
import BACKGROUND1 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어230.png";
import { ContentContainer } from "@/app/components/content-container";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <CreativityPageTemplate>
        <CreativityTitleHeader
          title="4단 만화로 그리는 성어"
          containerClassName="-mt-5 -translate-x-[65px]"
        />
        <TitleContainer
          className="ml-[85px] mt-2"
          sound="">
          <div className="flex items-center gap-1 text-[40px] tracking-[-0.5px] ml-[165px]">
            학습한 성어 두 개 이상을 담아낸 내용으로 4단 만화를 그려 보자.
          </div>
        </TitleContainer>

        <div className="ml-5 mt-6">
          <img src={!showAnswer ? IMAGE_BEFORE.src : IMAGE_AFTER.src} />
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
