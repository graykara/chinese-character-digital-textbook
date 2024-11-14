"use client";

import { ContentContainer } from "@/app/components/content-container";
import { HeaderContainer } from "@/app/components/headers/header-container";
import { TitleContainer2 } from "@/app/components/title-container";
import { useState } from "react";
import { SOUND } from "@/app/utils/sound-player";
import IMAGE from "./image.png";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/11/중등한문_너와 나, 우리3.png";
import { InputWithPen } from "@/app/components/input-with-pen";
import { Button } from "@/app/components/buttons/button";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);
  const answers = ["長", "短", "去", "來"];

  return (
    <>
      <HeaderContainer>
        <img src="/header/preview_chinese_characters.png" alt="" />
      </HeaderContainer>

      <TitleContainer2 className="mt-10 flex items-start gap-4 text-[55px] tracking-tighter" sound="/sound/4/91-i.mp3">
        <img src="/ui/flower-icon.png" />
        <p>제시된 한자 카드를 보고, 설명에 알맞은 단어를 한자로 써 보자.</p>
      </TitleContainer2>

      <ContentContainer className="!justify-start pt-5 left-16">
        <img src={IMAGE.src} alt="" />
        <div className="absolute left-[250px] top-[75px] grid grid-cols-4 gap-[120px] w-[860px] h-[90px]">
          <Button onClick={() => SOUND("/sound/4/p091_word000.mp3").play()}>
          </Button>
          <Button onClick={() => SOUND("/sound/4/p091_word001.mp3").play()}></Button>
          <Button onClick={() => SOUND("/sound/4/p091_word002.mp3").play()}></Button>
          <Button onClick={() => SOUND("/sound/4/p091_word003.mp3").play()}>
          </Button>
        </div>

        <InputWithPen
          answer={answers[0]}
          showAnswer={showAnswer}
          className="text-center w-[120px] h-[120px] mt-4 bg-transparent"
          penClassName="left-[33px] top-[75px] h-[55px]"
          containerClassName="absolute top-[435px] left-[340px] font-haeseo text-[75px]"
        />
        <InputWithPen
          answer={answers[1]}
          showAnswer={showAnswer}
          className="text-center w-[120px] h-[120px] mt-4 bg-transparent"
          penClassName="left-[33px] top-[75px] h-[55px]"
          containerClassName="absolute top-[435px] left-[444px] font-haeseo text-[75px]"
        />

        <InputWithPen
          answer={answers[2]}
          showAnswer={showAnswer}
          className="text-center w-[120px] h-[120px] mt-4 bg-transparent"
          penClassName="left-[33px] top-[75px] h-[55px]"
          containerClassName="absolute top-[435px] left-[1062px] font-haeseo text-[75px]"
        />
        <InputWithPen
          answer={answers[3]}
          showAnswer={showAnswer}
          className="text-center w-[120px] h-[120px] mt-4 bg-transparent"
          penClassName="left-[33px] top-[75px] h-[55px]"
          containerClassName="absolute top-[435px] left-[1166px] font-haeseo text-[75px]"
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
