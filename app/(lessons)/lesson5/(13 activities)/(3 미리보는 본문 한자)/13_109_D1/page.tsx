"use client";

import { ContentContainer } from "@/app/components/content-container";
import { HeaderContainer } from "@/app/components/headers/header-container";
import { TitleContainer } from "@/app/components/title-container";
import { ReactNode, useEffect, useRef, useState } from "react";
import IMAGE from "./bg_1.png";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/13/중등한문_귀에 대고 말한 까닭4.png";
import {
  Line,
  LineDrawingStartPoint,
} from "@/app/components/line-drawing/line-drawing-start-point";
import { LineDrawingEndPoint } from "@/app/components/line-drawing/line-drawing-end-point";
import DotConnectionQuiz from "./dot-connection-quiz";

export default function Page() {
  const [step, setStep] = useState(1);

  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(false);
  }, [step]);

  const quizData = {
    startDots: [
      { id: 1, x: 80, y: 62 },
      { id: 2, x: 279, y: 62 },
      { id: 3, x: 480, y: 62 },
      { id: 4, x: 678, y: 62 },
    ],
    endDots: [
      { id: 5, x: 80, y: 157 },
      { id: 6, x: 279, y: 157 },
      { id: 7, x: 480, y: 157 },
      { id: 8, x: 678, y: 157 },
    ],
    answers: [
      { startId: 1, endId: 6 },
      { startId: 2, endId: 5 },
      { startId: 3, endId: 7 },
      { startId: 4, endId: 8 },
    ],
  };

  return (
    <>
      <HeaderContainer>
        <img src="/header/preview_chinese_characters.png" alt="" />
      </HeaderContainer>

      <TitleContainer className="mt-10" sound="/sound/5/109-i-1.mp3">
        <p className="tracking-tighter flex items-start gap-5 break-keep">
          <img src="/ui/flower-icon.png" />
          제시된 한자 카드를 보고, 한자의 뜻을 찾아 적은 뒤 뜻이 서로 상대되는
          것 끼리 선으로 이어 보자.
        </p>
      </TitleContainer>

      <ContentContainer className="!justify-start mt-5 pl-12">
        <div className="relative w-full flex">
          <img src={IMAGE.src} />

          <div className="absolute right-0 top-[150px] w-[750px] h-[230px] overflow-hidden">
            <DotConnectionQuiz
              startDots={quizData.startDots}
              endDots={quizData.endDots}
              answers={quizData.answers}
              showAnswer={showAnswer}
            />
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
