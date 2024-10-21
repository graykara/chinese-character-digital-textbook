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
  const asnwers = ["家畜", "同行", "劣惡"];

  return (
    <>
      <StrengthenLearningWordHeader
        title={"한자 카드를 참고하여 문장의 의미에 맞는 한자의 음을 써 보자."}
        sound=""
      />

      <ContentContainer className="!justify-start -top-[50px] left-16">
        <img src={IMAGE1.src} />
      </ContentContainer>

      <CheckAnswerButton
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
