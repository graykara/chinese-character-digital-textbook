"use client";

import IMAGE from "./image.png";
import { useState } from "react";
import { CreativityPageTemplate } from "@/app/pages/creativity-page-template";
import { CreativityTitleHeader } from "@/app/components/headers/creativity-title-header";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { TitleContainer } from "@/app/components/title-container";
import BACKGROUND1 from "@/app/bgpng_temp/9/중등한문_이야기가 담긴 성어130.png";
import { ContentContainer } from "@/app/components/content-container";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);
  const answers = ["指非爲非", "지비위비", "(지) 가리키다, (비) 아니다, (위) 하다, (비)아니다", "아닌 것을 가리켜 아니라고 함.", "성격이 소심하여 마음에 안들어도 잘 표현하지 못하는 경우가 많다. 아닌 것을 아니라고 말할 용기를 가져야 함."]
  
  return (
    <>
      <CreativityPageTemplate>
        <CreativityTitleHeader
          title="‘나만의 한자 성어’ 만들기"
          containerClassName="w-[620px] -mt-5"
        />
        <TitleContainer
          className="ml-[85px] mt-2"
          sound="">
          <div className="flex items-center gap-1 text-[50px] tracking-[-1px] ml-[65px] leading-[70px] -mr-20">
            이 단원에서 배운 성어를 활용하여 아래의 예시처럼 나만의 성어를 만들고 발표해 보자.
          </div>
        </TitleContainer>

        <div className="ml-[220px] mt-3">
          <img src={IMAGE.src} />
          <div className="absolute top-[240px] left-[490px] font-haeseo">朝一暮二</div>
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
