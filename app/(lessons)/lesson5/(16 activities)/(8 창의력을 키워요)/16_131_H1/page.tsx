"use client";

import IMAGE from "./image.png";
import { useEffect, useState } from "react";
import { CreativityPageTemplate } from "@/app/pages/creativity-page-template";
import { CreativityTitleHeader } from "@/app/components/headers/creativity-title-header";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { InputWithPen } from "@/app/components/input-with-pen";
import { TitleContainer } from "@/app/components/title-container";
import BACKGROUND1 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕27.png";
import { ContentContainer } from "@/app/components/content-container";
import { BuddyButton } from "@/app/components/buttons/buddy-button";
import { GroupButton } from "@/app/components/buttons/group-button";
import { OLD_TextareaWithPen } from "@/app/components/textarea/textarea-with-pen";

export default function Page() {
  const answers = [
    "박기쁨",
    "주변 사람들에게 긍정적인 에너지를 주어서",
    "박기쁨",
    "주변 사람들에게 따뜻한 긍정의\n에너지를 전하고, 진심 어린 말 한마디가\n많은 이들에게 큰 힘이 되어",
  ];
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <CreativityPageTemplate>
        <CreativityTitleHeader
          title="우리 반의 ‘선행왕’ 선정하기"
          containerClassName="-mt-5"
        />
        <TitleContainer className="-left-24 mt-6" sound="/sound/5/131-i.mp3">
          <div className="flex items-center gap-1 text-[45px] tracking-tight -mr-10">
            우리 반에서 다른 친구들을 위해 선행을 베푼 친구를 선정하고 상장을
            만들어 보자.
          </div>
        </TitleContainer>

        <ContentContainer className="-left-10 top-1">
          <img src={IMAGE.src} />

          <InputWithPen
            isExample
            answer="박기쁨"
            showAnswer={showAnswer}
            containerClassName="absolute left-[430px] top-[0px]"
            className="w-[200px] text-[35px] text-center absolute bg-transparent"
            penClassName="left-1/2 -translate-x-1/2"
          />
          <InputWithPen
            isExample
            answer="주변 사람들에게 긍정적인 에너지를 주어서"
            showAnswer={showAnswer}
            containerClassName="absolute left-[470px] top-[53px]"
            className="w-[600px] text-[35px] text-left absolute bg-transparent"
            penClassName="left-1/2 -translate-x-1/2"
          />
          <InputWithPen
            isExample
            answer="박기쁨"
            showAnswer={showAnswer}
            containerClassName="absolute right-[660px] top-[270px]"
            className="w-[200px] text-[35px] text-center absolute bg-transparent"
            penClassName="left-1/2 -translate-x-1/2"
          />
          <OLD_TextareaWithPen
            showAnswer={showAnswer}
            answer={`주변 사람들에게 따뜻한 긍정의
에너지를 전하고, 진심 어린 말 한마디가
많은 이들에게 큰 힘이 되어`}
            className={`w-[630px] text-[32px] bg-transparent ${showAnswer ? "text-example" : ""}`}
            penClassName=""
            containerClassName="!absolute left-[430px] bottom-[130px]"
            rows={3}
          />
        </ContentContainer>
      </CreativityPageTemplate>

      <BuddyButton className="animate__animated animate__fadeIn animate__delay-1s absolute right-[200px] top-[175px] w-[100px] z-1" />
      <GroupButton className="animate__animated animate__fadeIn animate__delay-2s absolute right-[70px] top-[180px] z-1" />

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
