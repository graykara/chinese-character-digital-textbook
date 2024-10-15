"use client";

import { StrengthenLearningWordHeader } from "@/app/components/headers/strengthen-learning-word-header";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import IMAGE3 from "./image3.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useState } from "react";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { InputWithPen } from "@/app/components/input-with-pen";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { SOUND } from "@/app/utils/sound-player";

export default function Page() {
  return (
    <>
      <StrengthenLearningWordHeader
        title="단어의 뜻을 생각하며 풀이 순서를 적고, 각각의 한자가 들어간 다른 단어를 찾아 한글로 써 보자."
        sound=""
      />

      <Step1 />
    </>
  );
}

const Step1 = () => {
  const answers = ["쉬는 날.", "산과 숲.", "넓고 큰 바다."];
  const [showAnswer, setShowAnswer] = useState(false);

  const sounds = [
    "/sound/2/40_011.mp3",
    "/sound/2/40_012.mp3",
    "/sound/2/40_013.mp3",
    "/sound/2/40_014.mp3",
    "/sound/2/40_001.mp3",
    "/sound/2/40_015.mp3",
  ];

  return (
    <>
      <ContentContainer className="!justify-start">
        <div className="relative">
          <div className="grid grid-cols-3 gap-10">
            <img src={IMAGE1.src} />
            <img src={IMAGE2.src} />
            <img src={IMAGE3.src} />
          </div>
        </div>
      </ContentContainer>

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
};
