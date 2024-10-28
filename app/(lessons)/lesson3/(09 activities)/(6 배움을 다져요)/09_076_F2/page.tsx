"use client";

import { StrengthenLearningMainContentHeader } from "@/app/components/headers/strengthen-learning-main-content-header";
import { useState } from "react";
import IMAGE3 from "./bg_3.png";
import { ContentContainer } from "@/app/components/content-container";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND3 from "@/app/bgpng_temp/9/중등한문_이야기가 담긴 성어123.png";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { TextareaWithPen } from "@/app/components/textarea/textarea-with-pen";
import { WritingButton } from "@/app/components/buttons/writing-button";

export default function Page() {
  const answers = ["조고에게 이것은 사슴이라고 말했을 것 같다. 그 이유는 자신의 편을 가르기위해 남을 속이는 행동이 잘못되었기 때문이다."];
  const [showAnswer, setShowAnswer] = useState(false);
  const [value, setValue] = useState("");

  return (
    <>
      <StrengthenLearningMainContentHeader
        title={
          <p>성어 ‘<span className="font-haeseo text-[60px] leading-[50px] tracking-[-8px]">指鹿爲馬</span>’의 유래에 등장하는 인물들을 떠올려 보고<br />아래 질문에 답해 보자.</p>
        }
        sound=""
      />

      <div className="absolute top-[275px] left-[750px] flex items-center gap-5">
        <WritingButton className="animate__animated animate__fadeIn animate__delay-1s" />
      </div>

      <ContentContainer className="!justify-start left-16 top-4">
        <img src={IMAGE3.src} className="" />
        <div className="w-[1180px] absolute gap-[3px] -top-[5px] ml-[75px]">
          <p className="text-[55px] tracking-tighter leading-tight">만약 자신이 당시의 현장에 있다면 조고의 질문에 뭐라고 대답할 것인가? 또한 그 이유는 무엇인가?</p>
        </div>

        <TextareaWithPen
          answer={answers[0]}
          showAnswer={showAnswer}
          containerClassName={`absolute resize-none w-[1200px] left-[100px] top-[170px] pt-0 pb-0 ml-24 text-[45px] tracking-tighter leading-[70px] bg-transparent ${showAnswer ? "text-example tracking-tighter break-keep" : ""}`}
          penClassName="h-[48px] top-[177px] left-[130px]"
          rows={2}
        />

      </ContentContainer>

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      <img
        src={BACKGROUND3.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}