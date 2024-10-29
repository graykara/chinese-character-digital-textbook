"use client";

import { StrengthenLearningMainContentHeader } from "@/app/components/headers/strengthen-learning-main-content-header";
import { useState } from "react";
import IMAGE1_BEFORE from "./image1-before.png";
import IMAGE1_AFTER from "./image1-after.png";
import { ContentContainer } from "@/app/components/content-container";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/4/중등한문_합쳐서 만든 한자20.png";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);

  const characters = [
    "日",
    "女",
    "木",
    "夕",
    "口",
    "門",
    "木",
    "子",
    "口",
    "月",
  ];
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
        title={
          <p className="text-[45px] tracking-[-0.5px] -mr-20">
            사다리 타기를 하고 서로 만나는 한자를 결합하였을 때 완성되는 한자를
            써 보자.
          </p>
        }
        sound="/sound/2/40-i-1.mp3"
        className="w-[1600px] mr-0"
      />

      <ContentContainer className="!justify-start -top-16 -left-5">
        <div className="relative">
          {showAnswer ? (
            <img src={IMAGE1_AFTER.src} />
          ) : (
            <img src={IMAGE1_BEFORE.src} />
          )}

          <div className="absolute left-[25px] -top-[10px] grid grid-cols-5 gap-x-[95px] gap-y-[305px]">
            {sounds.map((sound, index) => (
              <button
                key={sound}
                className="w-[150px] h-[70px] bg-white flex justify-center items-center"
                onClick={() => SOUND(sound).play()}
              >
                <span className="font-haeseo text-[55px]">
                  {characters[index]}
                </span>
              </button>
            ))}
          </div>
        </div>
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
