"use client";

import { ContentContainer } from "@/app/components/content-container";
import { HeaderContainer } from "@/app/components/headers/header-container";
import { TitleContainer2 } from "@/app/components/title-container";
import { useState } from "react";
import { SOUND } from "@/app/utils/sound-player";
import IMAGE from "./image.png";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/5/중등한문_한자를 알면 틀리지 않는 일상 어휘4.png";
import DotConnectionQuiz from "@/app/(lessons)/lesson5/(13 activities)/(3 미리보는 본문 한자)/13_109_D1/dot-connection-quiz";
import { Button } from "@/app/components/buttons/button";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);
  const sounds = [
    "/sound/2/p043_word000.mp3",
    "/sound/2/p043_word001.mp3",
    "/sound/2/p043_word002.mp3",
    "/sound/2/p043_word003.mp3",
    "/sound/2/p043_word004.mp3",
  ];

  const quizData = {
    startDots: [
      { id: 1, x: 85, y: 34 },
      { id: 2, x: 85, y: 169 },
      { id: 3, x: 85, y: 304 },
      { id: 4, x: 85, y: 438 },
      { id: 5, x: 85, y: 572 },
    ],
    endDots: [
      { id: 6, x: 350, y: 34 },
      { id: 7, x: 350, y: 169 },
      { id: 8, x: 350, y: 304 },
      { id: 9, x: 350, y: 438 },
      { id: 10, x: 350, y: 572 },
    ],
    answers: [
      //{ startId: 1, endId: 10 },
      { startId: 2, endId: 8 },
      { startId: 3, endId: 7 },
      { startId: 4, endId: 6 },
      { startId: 5, endId: 9 },
    ],
  };

  const quizData2 = {
    startDots: [
      { id: 1, x: 85, y: 34 },
      { id: 2, x: 85, y: 169 },
      { id: 3, x: 85, y: 304 },
      { id: 4, x: 85, y: 438 },
      { id: 5, x: 85, y: 572 },
    ],
    endDots: [
      { id: 6, x: 350, y: 34 },
      { id: 7, x: 350, y: 169 },
      { id: 8, x: 350, y: 304 },
      { id: 9, x: 350, y: 438 },
      { id: 10, x: 350, y: 572 },
    ],
    answers: [
      { startId: 1, endId: 7 },
      { startId: 2, endId: 6 },
      { startId: 3, endId: 8 },
      { startId: 4, endId: 10 },
      //{ startId: 5, endId: 9 },
    ],
  };

  return (
    <>
      <HeaderContainer>
        <img src="/header/preview_chinese_characters.png" alt="" />
      </HeaderContainer>

      <TitleContainer2
        className="mt-10 flex items-start gap-4"
        sound="/sound/2/43-i.mp3"
      >
        <img src="/ui/flower-icon.png" />
        <p>
          제시된 한자 카드를 보고, 한자 조각을 짝 지어 한자를 완성하고, 그
          음·뜻을 찾아 <br/>선으로 이어 보자.
        </p>
      </TitleContainer2>

      <ContentContainer className="!justify-start -left-9">
        <img src={IMAGE.src} alt="" />
        <div className="absolute top-[45px] left-[1270px] grid grid-row-5 gap-[75px] h-[600px] bg-white text-[25px] tracking-tighter">
          <p><span className="text-red-600">식</span> 심다</p>
          <p><span className="text-red-600">사</span> 생각</p>
          <p><span className="text-red-600">휴</span> 쉬다</p>
          <p><span className="text-red-600">문</span> 묻다</p>
          <p><span className="text-red-600">안</span> 편안하다</p>
        </div>

        <Button
          className="absolute top-[30px] left-[160px] w-[220px] h-[70px] z-10"
          onClick={() => SOUND(sounds[0]).play()}
        ></Button>
        <Button
          className="absolute top-[160px] left-[160px] w-[220px] h-[70px] z-10"
          onClick={() => SOUND(sounds[1]).play()}
        ></Button>
        <Button
          className="absolute top-[295px] left-[160px] w-[220px] h-[70px] z-10"
          onClick={() => SOUND(sounds[2]).play()}
        ></Button>
        <Button
          className="absolute top-[430px] left-[160px] w-[220px] h-[70px] z-10"
          onClick={() => SOUND(sounds[3]).play()}
        ></Button>
        <Button
          className="absolute top-[565px] left-[160px] w-[220px] h-[70px] z-10"
          onClick={() => SOUND(sounds[4]).play()}
        ></Button>

        <div className="absolute left-[540px] top-[30px] w-[400px] h-[600px]">
          <DotConnectionQuiz
            startDots={quizData.startDots}
            endDots={quizData.endDots}
            answers={quizData.answers}
            showAnswer={showAnswer}
            isDebugMode
          />
        </div>

        <div className="absolute left-[910px] top-[30px] w-[400px] h-[600px]">
          <DotConnectionQuiz
            startDots={quizData2.startDots}
            endDots={quizData2.endDots}
            answers={quizData2.answers}
            showAnswer={showAnswer}
            isDebugMode
          />
        </div>
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
