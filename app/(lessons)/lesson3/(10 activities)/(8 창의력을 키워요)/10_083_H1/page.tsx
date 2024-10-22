"use client";

import IMAGE from "./image.png";
import { useState } from "react";
import { CreativityPageTemplate } from "@/app/pages/creativity-page-template";
import { CreativityTitleHeader } from "@/app/components/headers/creativity-title-header";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { TitleContainer } from "@/app/components/title-container";
import BACKGROUND1 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕27.png";
import { ContentContainer } from "@/app/components/content-container";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <CreativityPageTemplate>
        <header className="relative width-[1000px] left-[450px] -top-5 text-[50px]">
          <CreativityTitleHeader title="성어 프레젠테이션 발표 대회" />
        </header>

        <ContentContainer className="!items-start">
          {/* <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full text-center">
            학습한 성어 두 개 이상을 담아낸 내용으로 4단 만화를 그려 보자.
          </div> */}

          <img src={IMAGE.src} />
        </ContentContainer>
      </CreativityPageTemplate>

      {/* <StepContainer maxStep={2} step={step} onStepChange={setStep} /> */}

      <TitleContainer className="ml-4 mt-4">
        <div className="flex items-center gap-4">
          <img src="/ui/flower-icon-2.png" />
          다음 단어의 뜻을 조사하고 차이점을 발표해 보자.
        </div>
      </TitleContainer>

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
