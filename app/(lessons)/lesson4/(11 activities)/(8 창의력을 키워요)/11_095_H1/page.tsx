"use client";

import IMAGE_BEFORE from "./image-before.png";
import IMAGE_AFTER from "./image-after.png";
import HEADER from "./header.png";
import { useState } from "react";
import { CreativityPageTemplate } from "@/app/pages/creativity-page-template";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { InputWithPen } from "@/app/components/input-with-pen";
import { TitleContainer } from "@/app/components/title-container";
import BACKGROUND1 from "@/app/bgpng_temp/5/중등한문_한자를 알면 틀리지 않는 일상 어휘16.png";
import BACKGROUND2 from "@/app/bgpng_temp/5/중등한문_한자를 알면 틀리지 않는 일상 어휘17.png";
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
      {/* <img src={BACKGROUND2.src} className="absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
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
