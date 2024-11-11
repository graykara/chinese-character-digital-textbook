"use client";

import { ContentContainer } from "@/app/components/content-container";
import { HeaderContainer } from "@/app/components/headers/header-container";
import { TitleContainer } from "@/app/components/title-container";
import { useContext, useEffect, useState } from "react";
import IMAGE from "./bg_1.png";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/13/중등한문_귀에 대고 말한 까닭4.png";
import DotConnectionQuiz from "./dot-connection-quiz";
import { InputWithPen } from "@/app/components/input-with-pen";
import { SOUND } from "@/app/utils/sound-player";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  const [showAnswer, setShowAnswer] = useState(false);
  const sounds = [
    "/sound/5/109_word000.mp3",
    "/sound/5/109_word001.mp3",
    "/sound/5/109_word002.mp3",
    "/sound/5/109_word003.mp3",
    "/sound/5/109_word004.mp3",
    "/sound/5/109_word005.mp3",
    "/sound/5/109_word006.mp3",
    "/sound/5/109_word007.mp3",
  ];

  useEffect(() => {
    setShowAnswer(false);
  }, [step]);

  const quizData = {
    startDots: [
      { id: 1, x: 76, y: 65 },
      { id: 2, x: 276, y: 65 },
      { id: 3, x: 479, y: 65 },
      { id: 4, x: 678, y: 65 },
    ],
    endDots: [
      { id: 5, x: 76, y: 159 },
      { id: 6, x: 276, y: 159 },
      { id: 7, x: 479, y: 159 },
      { id: 8, x: 678, y: 159 },
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

      <ContentContainer className="!justify-start mt-6 left-0 pl-20 w-[1540px]">
        <div className="relative w-full flex">
          <img src={IMAGE.src} />

            <button
              className="absolute top-[45px] left-[55px] w-[80px] h-[80px] z-10 bg-transparent"
              onClick={() => SOUND(sounds[0]).play()}
            ></button>
            <button
              className="absolute top-[45px] left-[215px] w-[80px] h-[80px] z-10 bg-transparent"
              onClick={() => SOUND(sounds[1]).play()}
            ></button>
            <button
              className="absolute top-[45px] left-[375px] w-[80px] h-[80px] z-10 bg-transparent"
              onClick={() => SOUND(sounds[2]).play()}
            ></button>
            <button
              className="absolute top-[45px] left-[535px] w-[80px] h-[80px]  z-10 bg-transparent"
              onClick={() => SOUND(sounds[3]).play()}
            ></button>

            <button
              className="absolute top-[310px] left-[55px] w-[80px] h-[80px] z-10 bg-transparent"
              onClick={() => SOUND(sounds[4]).play()}
            ></button>
            <button
              className="absolute top-[310px] left-[215px] w-[80px] h-[80px] z-10 bg-transparent"
              onClick={() => SOUND(sounds[5]).play()}
            ></button>
            <button
              className="absolute top-[310px] left-[375px] w-[80px] h-[80px] z-10 bg-transparent"
              onClick={() => SOUND(sounds[6]).play()}
            ></button>
            <button
              className="absolute top-[310px] left-[535px] w-[80px] h-[80px]  z-10 bg-transparent"
              onClick={() => SOUND(sounds[7]).play()}
            ></button>

          <div className="absolute right-0 top-[150px] w-[750px] h-[230px] overflow-hidden">
            <DotConnectionQuiz
              startDots={quizData.startDots}
              endDots={quizData.endDots}
              answers={quizData.answers}
              showAnswer={showAnswer}
            />
          </div>

          <InputWithPen
            answer="저"
            showAnswer={showAnswer}
            containerClassName="absolute left-[725px] -top-[2px] "
            className=" w-[122px] text-[33px] text-center bg-transparent"
            penClassName="w-[35px] left-1/2 -translate-x-1/2"
          />
          <InputWithPen
            answer="같다"
            showAnswer={showAnswer}
            containerClassName="absolute left-[924px] -top-[2px] "
            className=" w-[122px] text-[33px] text-center bg-transparent"
            penClassName="w-[35px] left-1/2 -translate-x-1/2"
          />
          <InputWithPen
            answer="낫다"
            showAnswer={showAnswer}
            containerClassName="absolute left-[1128px] -top-[2px] "
            className=" w-[122px] text-[33px] text-center bg-transparent"
            penClassName="w-[35px] left-1/2 -translate-x-1/2"
          />
          <InputWithPen
            answer="있다"
            showAnswer={showAnswer}
            containerClassName="absolute left-[1328px] -top-[2px] "
            className=" w-[122px] text-[33px] text-center bg-transparent"
            penClassName="w-[35px] left-1/2 -translate-x-1/2"
          />

          <InputWithPen
            answer="다르다"
            showAnswer={showAnswer}
            containerClassName="absolute left-[725px] top-[455px] "
            className=" w-[122px] text-[33px] text-center bg-transparent"
            penClassName="w-[35px] left-1/2 -translate-x-1/2"
          />
          <InputWithPen
            answer="이"
            showAnswer={showAnswer}
            containerClassName="absolute left-[924px] top-[455px] "
            className=" w-[122px] text-[33px] text-center bg-transparent"
            penClassName="w-[35px] left-1/2 -translate-x-1/2"
          />
          <InputWithPen
            answer="못하다"
            showAnswer={showAnswer}
            containerClassName="absolute left-[1128px] top-[455px] "
            className=" w-[122px] text-[33px] text-center bg-transparent"
            penClassName="w-[35px] left-1/2 -translate-x-1/2"
          />
          <InputWithPen
            answer="없다"
            showAnswer={showAnswer}
            containerClassName="absolute left-[1328px] top-[455px] "
            className=" w-[122px] text-[33px] text-center bg-transparent"
            penClassName="w-[35px] left-1/2 -translate-x-1/2"
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
