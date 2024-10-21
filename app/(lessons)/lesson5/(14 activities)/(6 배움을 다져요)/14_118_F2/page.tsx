"use client";

import { StrengthenLearningWordHeader } from "@/app/components/headers/strengthen-learning-word-header";
import IMAGE1 from "./bg_1.png";
import { InputWithPen } from "@/app/components/input-with-pen";
import { ContentContainer } from "@/app/components/content-container";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { useState } from "react";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/14/중등한문_사람만 귀한가요21.png";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);
  const asnwers = ["家畜", "同行", "劣惡"];

  return (
    <>
      <StrengthenLearningWordHeader
        title={
          <p className="-mr-20">
            한자 카드를 결합하여 아래의 설명에 해당하는 단어를 만들어 보자.
          </p>
        }
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
