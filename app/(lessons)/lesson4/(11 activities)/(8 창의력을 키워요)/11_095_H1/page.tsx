"use client";

import IMAGE from "./image.png";
import IMAGE_AFTER from "./image-after.png";
import { useState } from "react";
import { CreativityPageTemplate } from "@/app/pages/creativity-page-template";
import { CreativityTitleHeader } from "@/app/components/headers/creativity-title-header";
import { TitleContainer } from "@/app/components/title-container";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/11/중등한문_너와 나, 우리33.png";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);
  const answer = "나와 다른 사람의 생각이 다를 수 있다는 것을 알고 상대방의 입장에서 생각해 본다.\n다른 친구를 괴롭히는 모습을 보면 방관하지 않고 직접 돕거나 적극 알린다.\n신체적 폭력 뿐 아니라 언어 폭력도 폭력임을 명심한다."
  return (
    <>
      <CreativityPageTemplate>
        <CreativityTitleHeader
          title="학교 폭력 예방 포스터 만들기"
          containerClassName="-mt-5"
        />
        <TitleContainer
          className="ml-[85px] mt-6"
          sound="/sound/4/95-i.mp3">
          <div className="flex items-center gap-1 text-[48px] tracking-[-3.5px] ml-[40px]">
            학교 폭력을 예방하는 방법을 생각해 보고 학교 폭력 예방 포스터를 만들어 보자.
          </div>
        </TitleContainer>

        <div className="flex items-center gap-1 text-[40px] tracking-tight ml-32 mt-5">
          <img src="/ui/flower-icon-2.png" width={38} height={38} />
          <p>학교 폭력을 예방하는 방법을 써 보자.</p>
        </div>
        <div className="w-[1310px] ml-[180px]">
          <img src={IMAGE.src} className="" />
        </div>

        <div className="flex items-center gap-1 text-[40px] tracking-tight ml-32 mt-3">
          <img src="/ui/flower-icon-2.png" width={38} height={38} />
          <p>위의 내용과 한문 문장을 활용하여 학교 폭력 예방 포스터를 만들어 보자.</p>
        </div>
        <div className="mx-auto -translate-x-10">
          <img src={!showAnswer ? "" : IMAGE_AFTER.src} />
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