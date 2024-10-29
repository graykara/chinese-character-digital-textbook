"use client";

import { StrengthenLearningWordHeader } from "@/app/components/headers/strengthen-learning-word-header";
import IMAGE1 from "./bg_1.png";
import { InputWithPen } from "@/app/components/input-with-pen";
import { ContentContainer } from "@/app/components/content-container";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { useState } from "react";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕24.png";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);
  const answers = ["浮", "聞", "集", "活"];

  return (
    <>
      <StrengthenLearningWordHeader
        title={
          "주어진 풀이를 참고하여 ①~④에 알맞은 한자를 써 넣어 단어를 완성해 보자."
        }
        sound="/sound/5/130-i.mp3"
      />

      <ContentContainer className="!justify-start -top-[38px] left-[90px]">
        <img src={IMAGE1.src} />
        <InputWithPen
          answer={answers[0]}
          showAnswer={showAnswer}
          className={`w-[80px] text-center bg-transparent font-haeseo text-[65px] tracking-tighter`}
          penClassName="ml-5 -mt-1 h-[50px]"
          containerClassName="absolute top-[15px] left-[75px] -mt-1 ml-1"
        />
        <InputWithPen
          answer={answers[1]}
          showAnswer={showAnswer}
          className={`w-[80px] text-center bg-transparent font-haeseo text-[65px] tracking-tighter`}
          penClassName="ml-5 -mt-1 h-[50px]"
          containerClassName="absolute top-[120px] left-[505px] -mt-1 ml-1"
        />
        <InputWithPen
          answer={answers[2]}
          showAnswer={showAnswer}
          className={`w-[80px] text-center bg-transparent font-haeseo text-[65px] tracking-tighter`}
          penClassName="ml-5 -mt-1 h-[50px]"
          containerClassName="absolute top-[445px] left-[180px] -mt-1 ml-1"
        />
        <InputWithPen
          answer={answers[3]}
          showAnswer={showAnswer}
          className={`w-[80px] text-center bg-transparent font-haeseo text-[65px] tracking-tighter`}
          penClassName="ml-5 -mt-1 h-[50px]"
          containerClassName="absolute top-[445px] left-[505px] -mt-1 ml-1"
        />
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
