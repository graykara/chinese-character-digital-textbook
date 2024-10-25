"use client";

import { StrengthenLearningMainContentHeader } from "@/app/components/headers/strengthen-learning-main-content-header";
import { useState } from "react";
import IMAGE1 from "./bg_1.png";
import IMAGE2 from "./bg_2.png";
import IMAGE3 from "./bg_3.png";
import { ContentContainer } from "@/app/components/content-container";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND3 from "@/app/bgpng_temp/10/중등한문_이야기가 담긴 성어222.png";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { InputWithPen } from "@/app/components/input-with-pen";
import { WritingButton } from "@/app/components/buttons/writing-button";

export default function Page() {
  const [step, setStep] = useState(1);
  const answers = ["배수진을 치고 한나라 군사들이 도망칠 수 없는 상황을 만들어서 전력을 다해 싸우게 한 것이 비결이다."];
  const [showAnswer, setShowAnswer] = useState(false);
  const [value, setValue] = useState("");
  return (
    <>
      <StrengthenLearningMainContentHeader
        title={"성어의 유래를 떠올려 보고 질문에 답해 보자."}
        sound=""
      />

      <div className="absolute top-[210px] left-[1200px] flex items-center gap-5">
        <WritingButton className="animate__animated animate__fadeIn animate__delay-1s" />
      </div>
      
      <ContentContainer className="!justify-start -top-[65px] left-9">
        <img src={IMAGE3.src} />
        <div className="w-[1180px] absolute gap-[3px] -top-[5px] ml-[150px]">
          <p className="text-[50px] tracking-tighter leading-tight break-keep">‘<span className="font-haeseo tracking-[-8px]">背水陣</span>’의 고사에서 한신은 적은 숫자로 많은 숫자의 적군을 물리치게 된다. 그 비결은 무엇이라고 생각하는가?</p>
        </div>
        {!value && !showAnswer ? (
          <img
            src="/ui/textarea-pen.png"
            className="absolute pointer-events-none"
            style={{
              height: 55,
              top: 232,
              left: 220
            }}
          />
        ) : null}
        <textarea
          value={showAnswer ? answers[0] : value}
          onChange={(e) => setValue(e.target.value)}
          className={`absolute resize-none w-[1150px] left-[125px] top-[215px] pt-3 ml-24 text-[50px] leading-[74px] bg-transparent ${showAnswer ? "text-answer break-keep" : ""
            }`}
          rows={2}
        ></textarea>
      </ContentContainer>

      <CheckAnswerButton
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