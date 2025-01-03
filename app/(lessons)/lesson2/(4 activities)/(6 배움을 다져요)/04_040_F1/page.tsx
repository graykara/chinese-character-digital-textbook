"use client";

import { StrengthenLearningMainContentHeader } from "@/app/components/headers/strengthen-learning-main-content-header";
import { useState } from "react";
import IMAGE from "./image.png";
import { ContentContainer } from "@/app/components/content-container";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/4/중등한문_합쳐서 만든 한자20.png";
import { InputWithPen } from "@/app/components/input-with-pen";
import { Button } from "@/app/components/buttons/button";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);
  const answers = ["問", "林", "好", "名", "明"];

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
          <img src={IMAGE.src} />

          <div className="absolute left-[25px] -top-[10px] grid grid-cols-5 gap-x-[95px] gap-y-[305px]">
            {sounds.map((sound, index) => (
              <Button
                key={sound}
                className="w-[150px] h-[70px] bg-white flex justify-center items-center"
                onClick={() => SOUND(sound).play()}
              >
                <span className="font-haeseo text-[55px]">
                  {characters[index]}
                </span>
              </Button>
            ))}
          </div>

          <InputWithPen
            answer={answers[0]}
            showAnswer={showAnswer}
            className="text-center w-[80px] h-[80px] mt-0 bg-transparent"
            penClassName="left-4 h-[45px]"
            containerClassName="absolute top-[420px] left-[60px] font-haeseo text-[80px]"
          />
          <InputWithPen
            answer={answers[1]}
            showAnswer={showAnswer}
            className="text-center w-[80px] h-[80px] mt-0 bg-transparent"
            penClassName="left-4 h-[45px]"
            containerClassName="absolute top-[420px] left-[280px] font-haeseo text-[80px]"
          />
          <InputWithPen
            answer={answers[2]}
            showAnswer={showAnswer}
            className="text-center w-[80px] h-[80px] mt-0 bg-transparent"
            penClassName="left-4 h-[45px]"
            containerClassName="absolute top-[420px] left-[503px] font-haeseo text-[80px]"
          />
          <InputWithPen
            answer={answers[3]}
            showAnswer={showAnswer}
            className="text-center w-[80px] h-[80px] mt-0 bg-transparent"
            penClassName="left-4 h-[45px]"
            containerClassName="absolute top-[420px] left-[722px] font-haeseo text-[80px]"
          />
          <InputWithPen
            answer={answers[4]}
            showAnswer={showAnswer}
            className="text-center w-[80px] h-[80px] mt-0 bg-transparent"
            penClassName="left-4 h-[45px]"
            containerClassName="absolute top-[420px] left-[942px] font-haeseo text-[80px]"
          />


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
