"use client";

import { StrengthenLearningWordHeader } from "@/app/components/headers/strengthen-learning-word-header";
import IMAGE1 from "./bg_1.png";
import { InputWithPen } from "@/app/components/input-with-pen";
import { ContentContainer } from "@/app/components/content-container";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { useState } from "react";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/15/중등한문_돌에 꽂힌 화살21.png";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);
  const answers = ["왕", "복", "부", "흥", "갱", "신", "경", "신"];

  return (
    <>
      <StrengthenLearningWordHeader
        title={"한자 카드를 참고하여 문장의 의미에 맞는 한자의 음을 써 보자."}
        sound="/sound/5/124-i-3.mp3"
      />

      <ContentContainer className="!justify-start -top-[75px] left-[100px]">
        <img src={IMAGE1.src} />
        {/* <InputWithPen
          answer={answers[0]}
          showAnswer={showAnswer}
          className={`w-[60px] text-center bg-transparent text-[45px] tracking-tighter`}
          penClassName="ml-3 -mt-1 h-[40px]"
          containerClassName="absolute top-[52px] left-[740px] -mt-1 ml-1"
        /> */}
        <InputWithPen
          answer={answers[1]}
          showAnswer={showAnswer}
          className={`w-[60px] text-center bg-transparent text-[45px] tracking-tighter`}
          penClassName="ml-3 -mt-1 h-[40px]"
          containerClassName="absolute top-[52px] left-[809px] -mt-1 ml-1"
        />

        <InputWithPen
          answer={answers[2]}
          showAnswer={showAnswer}
          className={`w-[60px] text-center bg-transparent text-[45px] tracking-tighter`}
          penClassName="ml-3 -mt-1 h-[40px]"
          containerClassName="absolute top-[158px] left-[928px] -mt-1 ml-1"
        />
        {/* <InputWithPen
          answer={answers[3]}
          showAnswer={showAnswer}
          className={`w-[60px] text-center bg-transparent text-[45px] tracking-tighter`}
          penClassName="ml-3 -mt-1 h-[40px]"
          containerClassName="absolute top-[158px] left-[997px] -mt-1 ml-1"
        /> */}

        <InputWithPen
          answer={answers[4]}
          showAnswer={showAnswer}
          className={`w-[60px] text-center bg-transparent text-[45px] tracking-tighter`}
          penClassName="ml-3 -mt-1 h-[40px]"
          containerClassName="absolute top-[355px] left-[889px] -mt-1 ml-1"
        />
        {/* <InputWithPen
          answer={answers[5]}
          showAnswer={showAnswer}
          className={`w-[60px] text-center bg-transparent text-[45px] tracking-tighter`}
          penClassName="ml-3 -mt-1 h-[40px]"
          containerClassName="absolute top-[355px] left-[958px] -mt-1 ml-1"
        /> */}

        <InputWithPen
          answer={answers[6]}
          showAnswer={showAnswer}
          className={`w-[60px] text-center bg-transparent text-[45px] tracking-tighter`}
          penClassName="ml-3 -mt-1 h-[40px]"
          containerClassName="absolute top-[462px] left-[929px] -mt-1 ml-1"
        />
        {/* <InputWithPen
          answer={answers[7]}
          showAnswer={showAnswer}
          className={`w-[60px] text-center bg-transparent text-[45px] tracking-tighter`}
          penClassName="ml-3 -mt-1 h-[40px]"
          containerClassName="absolute top-[462px] left-[998px] -mt-1 ml-1"
        /> */}
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      {/* <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      /> */}
    </>
  );
}
