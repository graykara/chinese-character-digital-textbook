"use client";

import { ContentContainer } from "@/app/components/content-container";
import { HeaderContainer } from "@/app/components/headers/header-container";
import { TitleContainer2 } from "@/app/components/title-container";
import { useState } from "react";
import IMAGE_BEFORE from "./image-before.png";
import IMAGE_AFTER from "./image-after.png";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/11/중등한문_너와 나, 우리3.png";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <HeaderContainer>
        <img src="/header/preview_chinese_characters.png" alt="" />
      </HeaderContainer>

      <TitleContainer2 className="mt-10 flex items-start gap-4">
        <img src="/ui/flower-icon.png" />
        <p>제시된 한자 카드를 보고, 설명에 알맞은 단어를 한자로 써 보자.</p>
      </TitleContainer2>

      <ContentContainer className="!justify-start pt-8">
        {showAnswer ? (
          <img src={IMAGE_AFTER.src} alt="" />
        ) : (
          <img src={IMAGE_BEFORE.src} alt="" />
        )}
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
