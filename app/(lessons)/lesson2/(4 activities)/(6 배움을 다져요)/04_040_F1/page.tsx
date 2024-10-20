"use client";

import { StrengthenLearningMainContentHeader } from "@/app/components/headers/strengthen-learning-main-content-header";
import { useState } from "react";
import IMAGE1_BEFORE from "./image1-before.png";
import IMAGE1_AFTER from "./image1-after.png";
import { ContentContainer } from "@/app/components/content-container";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/4/중등한문_합쳐서 만든 한자20.png"

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);

  const sounds = [
    "000",
    "001",
    "002",
    "003",
    "004",
    "005",
    "006",
    "007",
    "008",
    "009",
  ].map((sound) => `/sound/2/p040_word${sound}.mp3`);

  return (
    <>
      <StrengthenLearningMainContentHeader
        title="사다리 타기를 하고 서로 만나는 한자를 결합하였을 때 완성되는 한자를 써 보자."
        sound="/sound/2/40-i-1.mp3"
      />

      <ContentContainer className="!justify-start">
        <div className="relative">
          {showAnswer ? (
            <img src={IMAGE1_AFTER.src} />
          ) : (
            <img src={IMAGE1_BEFORE.src} />
          )}

          <div className="absolute left-[25px] top-0 grid grid-cols-5 gap-x-[80px] gap-y-[330px]">
            {sounds.map((sound) => (
              <button
                key={sound}
                className="w-[150px] h-[50px]"
                onClick={() => SOUND(sound).play()}
              />
            ))}
          </div>
        </div>
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      <img src={BACKGROUND1.src} className="absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
