"use client";

import IMAGE_BEFORE from "./image-before.png";
import IMAGE_AFTER from "./image-after.png";
import { useState } from "react";
import { CreativityPageTemplate } from "@/app/pages/creativity-page-template";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/11/중등한문_너와 나, 우리33.png";
import { CreativityTitleHeader } from "@/app/components/headers/creativity-title-header";

export default function Page() {
  return (
    <>
      <CreativityTitleHeader
        title="학교 폭력 예방 포스터 만들기"
        containerClassName="absolute left-1/2 -translate-x-1/2 top-[150px] z-10"
      />

      <CreativityPageTemplate>
        <Step1 />
      </CreativityPageTemplate>
      <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}

const Step1 = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <>
      <div className="relative h-full flex items-start left-[100px] top-[80px]">
        {showAnswer ? (
          <img src={IMAGE_AFTER.src} />
        ) : (
          <img src={IMAGE_BEFORE.src} />
        )}
      </div>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      
    </>
  );
};
