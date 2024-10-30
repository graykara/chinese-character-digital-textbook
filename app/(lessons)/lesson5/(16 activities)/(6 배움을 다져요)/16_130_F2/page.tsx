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

  const sounds = [
    "/sound/5/p130_word005.mp3", //(부)0
    "/sound/5/p130_word006.mp3", //(력)1
    "/sound/5/p130_word007.mp3", //(상)2
    "/sound/5/p130_word008.mp3", //(견)3
    "/sound/5/p130_word009.mp3", //(문)4
    "/sound/5/p130_word010.mp3", //(신)5
    "/sound/5/p130_word011.mp3", //(결)6
    "/sound/5/p130_word012.mp3", //(집)7
    "/sound/5/p130_word013.mp3", //(운)8
    "/sound/5/p130_word014.mp3", //(생)9
    "/sound/5/p130_word015.mp3", //(활)10
    "/sound/5/p130_word016.mp3", //(부)11
  ]
  return (
    <>
      <StrengthenLearningWordHeader
        title={
          "주어진 풀이를 참고하여 ①~④에 알맞은 한자를 써 넣어 단어를 완성해 보자."
        }
        sound="/sound/5/130-i-4.mp3"
      />

      <ContentContainer className="!justify-start -top-[38px] left-[90px]">
        <img src={IMAGE1.src} />

        <div className="absolute left-[64px] top-[10px] grid grid-cols-5 gap-[0px] w-[540px] h-[90px] bg-transparent z-10">
          <button onClick={() => SOUND(sounds[0]).play()}>
          </button>
          <button onClick={() => SOUND(sounds[2]).play()}></button>
          <div></div>
          <div></div>
          <button onClick={() => SOUND(sounds[3]).play()}></button>
        </div>

        <div className="absolute left-[64px] top-[118px] grid grid-cols-5 gap-[0px] w-[540px] h-[90px] bg-transparent z-10">
          <button onClick={() => SOUND(sounds[1]).play()}>
          </button>
          <div></div>
          <div></div>
          <button onClick={() => SOUND(sounds[5]).play()}></button>
          <button onClick={() => SOUND(sounds[4]).play()}></button>
        </div>

        <div className="absolute left-[64px] top-[334px] grid grid-cols-5 gap-[0px] w-[540px] h-[90px] bg-transparent z-10">
          <div></div>
          <button onClick={() => SOUND(sounds[8]).play()}>
          </button>
          <div></div>
          <div></div>
          <button onClick={() => SOUND(sounds[9]).play()}></button>
        </div>

        <div className="absolute left-[64px] top-[442px] grid grid-cols-5 gap-[0px] w-[540px] h-[90px] bg-transparent z-10">
          <button onClick={() => SOUND(sounds[6]).play()}>
          </button>
          <button onClick={() => SOUND(sounds[7]).play()}>
          </button>
          <div></div>
          <button onClick={() => SOUND(sounds[11]).play()}></button>
          <button onClick={() => SOUND(sounds[10]).play()}></button>
        </div>

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
