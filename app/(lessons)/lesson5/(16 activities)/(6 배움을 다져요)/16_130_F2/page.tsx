"use client";

import { StrengthenLearningWordHeader } from "@/app/components/headers/strengthen-learning-word-header";
import IMAGE1 from "./bg_1.png";
import BUTTON_FRONT from "./button1.png";
import { ContentContainer } from "@/app/components/content-container";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { useEffect, useState } from "react";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕24.png";
import { clickSound } from "@/app/utils/click-sound";
import { FlippableCard } from "@/app/components/flippable-card/flippable-card";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);
  const answers = ["浮", "聞", "集", "活"];
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);
  const [showAnswer4, setShowAnswer4] = useState(false);

  useEffect(() => {
    if (showAnswer) {
      setShowAnswer1(true);
      setShowAnswer2(true);
      setShowAnswer3(true);
      setShowAnswer4(true);
    } else {
      setShowAnswer1(false);
      setShowAnswer2(false);
      setShowAnswer3(false);
      setShowAnswer4(false);
    }
  }, [showAnswer]);

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

        {/* <FlippableCard
          width={100}
          height={100}
          className="absolute top-[5px] left-[69px]"
          text={answers[0]}
          backClassName="border-[3px] border-[#927e64] bg-[#ecdac4]"
          frontClassName="border-[3px] border-[#927e64] bg-[#ecdac4]"
          contentClassName="font-haeseo text-[55px] text-black !font-normal"
          flipIconClassName="top-[-10px] right-[-10px] !w-[30px] grayscale-[100%]"
          iconClassName="grayscale-[100%]"
        /> */}

        {!showAnswer1 ? <button
          className="z-10 absolute -top-[2.5px] left-[59px]"
          onClick={() => { clickSound.play(); setShowAnswer1(true) }}>
          <img src={BUTTON_FRONT.src} />
        </button> : <div className="absolute w-[120px] h-[120px] font-haeseo text-[55px] font-normal flex justify-center items-center -top-[2.5px] left-[59px]">{answers[0]}</div>}
        {!showAnswer2 ? <button
          className="z-10 absolute top-[104px] left-[489px]"
          onClick={() => { clickSound.play(); setShowAnswer2(true) }}>
          <img src={BUTTON_FRONT.src} />
        </button> : <div className="absolute w-[120px] h-[120px] font-haeseo text-[55px] font-normal flex justify-center items-center top-[104px] left-[489px]">{answers[1]}</div>}
        {!showAnswer3 ? <button
          className="z-10 absolute top-[427px] left-[166px]"
          onClick={() => { clickSound.play(); setShowAnswer3(true) }}>
          <img src={BUTTON_FRONT.src} />
        </button> : <div className="absolute w-[120px] h-[120px] font-haeseo text-[55px] font-normal flex justify-center items-center top-[427px] left-[166px]">{answers[2]}</div>}
        {!showAnswer4 ? <button
          className="z-10 absolute top-[427px] left-[489px]"
          onClick={() => { clickSound.play(); setShowAnswer4(true) }}>
          <img src={BUTTON_FRONT.src} />
        </button> : <div className="absolute w-[120px] h-[120px] font-haeseo text-[55px] font-normal flex justify-center items-center top-[427px] left-[489px]">{answers[3]}</div>}

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
