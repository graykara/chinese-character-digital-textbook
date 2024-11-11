"use client";

import IMAGE from "./image.png";
import { useState } from "react";
import { CreativityPageTemplate } from "@/app/pages/creativity-page-template";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { TextareaWithPen } from "@/app/components/textarea/textarea-with-pen";
import { TitleContainer } from "@/app/components/title-container";
import BACKGROUND1 from "@/app/bgpng_temp/14/중등한문_사람만 귀한가요22.png";
import { ContentContainer } from "@/app/components/content-container";
import { BuddyButton } from "@/app/components/buttons/buddy-button";
import { GroupButton } from "@/app/components/buttons/group-button";

export default function Page() {
  const answers = [
    "무분별한 개발로 인한 동물의 서식지 파괴",
    "야생 동물의 멸종 위기 발생",
    "무분별한 개발을 막기 위한 법을 제정하고, 사람들의 인식 제고를 위한 캠페인 활동을 한다.",
  ];
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <CreativityPageTemplate>
        <TitleContainer 
          className="left-5 mt-14"
          sound="/sound/5/119-i.mp3">
          <div className="flex items-center gap-1 text-[40px] tracking-tight -mr-10">
            <img src="/ui/flower-icon-2.png" width={38} height={38} />
            생태계가 파괴되고 있는 사례를 찾아 써 보고 이 문제를 해결할 수 있는
            대안을 토론해 보자.
          </div>
        </TitleContainer>

        <ContentContainer className="-top-7 -left-14">
          <img src={IMAGE.src} />
          <TextareaWithPen
          answer={answers[0]}
          showAnswer={showAnswer}
          containerClassName={`absolute resize-none w-[320px] left-[185px] top-[280px] text-[40px] leading-[63px] tracking-tighter break-keep bg-transparent pl-6 mb-1 ${showAnswer ? "text-example" : ""}`}
          penClassName="h-[50px] top-[280px] left-[200px]"
          rows={6}
        />
        <TextareaWithPen
          answer={answers[1]}
          showAnswer={showAnswer}
          containerClassName={`absolute resize-none w-[320px] left-[572px] top-[280px] text-[40px] leading-[63px] tracking-tighter break-keep bg-transparent pl-6 mb-1  ${showAnswer ? "text-example" : ""}`}
          penClassName="h-[50px] top-[280px] left-[587px]"
          rows={6}
        />
        <TextareaWithPen
          answer={answers[2]}
          showAnswer={showAnswer}
          containerClassName={`absolute resize-none w-[320px] left-[960px] top-[280px] text-[40px] leading-[63px] tracking-tighter break-keep bg-transparent pl-6 mb-1  ${showAnswer ? "text-example" : ""}`}
          penClassName="h-[50px] top-[280px] left-[975px]"
          rows={6}
        />
        </ContentContainer>
      </CreativityPageTemplate>

      <BuddyButton className="animate__animated animate__fadeIn animate__delay-1s absolute right-[232px] top-[175px] w-[100px] z-1" />
      <GroupButton className="animate__animated animate__fadeIn animate__delay-1s absolute right-[95px] top-[180px] z-1" />

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
