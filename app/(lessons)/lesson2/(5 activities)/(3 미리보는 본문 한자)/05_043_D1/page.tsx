"use client";

import { BuddyButton } from "@/app/components/buttons/buddy-button";
import { ContentContainer } from "@/app/components/content-container";
import { HeaderContainer } from "@/app/components/headers/header-container";
import { TitleContainer } from "@/app/components/title-container";
import { useState } from "react";
import IMAGE from "./image.png";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <HeaderContainer>
        <img src="/header/preview_chinese_characters.png" alt="" />
      </HeaderContainer>

      <TitleContainer className="mt-10 flex items-start gap-5">
        <img src="/ui/flower-icon.png" />
        <p className="tracking-tight">
          제시된 한자 카드를 보고, 한자 조각을 짝 지어 한자를 완성하고, 그
          음·뜻을 찾아 선으로 이어 보자.
        </p>
      </TitleContainer>

      <ContentContainer className="!justify-start">
        <img src={IMAGE.src} alt="" />
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
}
