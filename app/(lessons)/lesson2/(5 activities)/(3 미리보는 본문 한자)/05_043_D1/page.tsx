"use client";

import { BuddyButton } from "@/app/components/buttons/buddy-button";
import { ContentContainer } from "@/app/components/content-container";
import { HeaderContainer } from "@/app/components/headers/header-container";
import { TitleContainer2 } from "@/app/components/title-container";
import { useState } from "react";
import IMAGE from "./image.png";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/5/중등한문_한자를 알면 틀리지 않는 일상 어휘4.png";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);
  const sounds = [
    "/sound/2/p043_word000.mp3",
    "/sound/2/p043_word001.mp3",
    "/sound/2/p043_word002.mp3",
    "/sound/2/p043_word003.mp3",
    "/sound/2/p043_word004.mp3",
  ]
  return (
    <>
      <HeaderContainer>
        <img src="/header/preview_chinese_characters.png" alt="" />
      </HeaderContainer>

      <TitleContainer2 className="mt-10 flex items-start gap-4" sound="/sound/2/43-i.mp3">
        <img src="/ui/flower-icon.png" />
        <p>
          제시된 한자 카드를 보고, 한자 조각을 짝 지어 한자를 완성하고, 그
          음·뜻을 찾아 선으로 이어 보자.
        </p>
      </TitleContainer2>

      <ContentContainer className="!justify-start -left-9">
        <img src={IMAGE.src} alt="" />
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
