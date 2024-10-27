"use client";

import IMAGE from "./image.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useState } from "react";
import { InputWithPen } from "@/app/components/input-with-pen";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { SOUND } from "@/app/utils/sound-player";
import { StrengthenLearningMainContentHeader } from "@/app/components/headers/strengthen-learning-main-content-header";
import { WritingButton } from "@/app/components/buttons/writing-button";
import BACKGROUND1 from "@/app/bgpng_temp/11/중등한문_너와 나, 우리28.png";


export default function Page() {
  const answer = "다른 사람에게 존중 받기 위해서는 내가 먼저 존중해야 한다.";
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <>
      <StrengthenLearningMainContentHeader
        title="문장의 의미를 생각해 보고, 질문에 답해 보자."
        sound=""
      />
      
      <WritingButton
        className="animate__animated animate__fadeIn animate__delay-1s absolute top-[205px] left-[1220px] z-1" />

      <ContentContainer className="!justify-start left-10 -top-12">
        <img src={IMAGE.src} />
        <InputWithPen
              answer={answer}
              showAnswer={showAnswer}
              className="text-answer text-[45px] tracking-tighter w-[1210px] bg-transparent"
              penClassName="w-[46px] -mt-0 -ml-2"
              containerClassName="absolute left-[190px] top-[180px]"
            />
      </ContentContainer>


      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
