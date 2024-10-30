"use client";

import { ContentContainer } from "@/app/components/content-container";
import { HeaderContainer } from "@/app/components/headers/header-container";
import { TitleContainer } from "@/app/components/title-container";
import { useEffect, useState } from "react";
import { SOUND } from "@/app/utils/sound-player";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/15/중등한문_돌에 꽂힌 화살4.png";
import BACKGROUND2 from "@/app/bgpng_temp/15/중등한문_돌에 꽂힌 화살5.png";
import { StepContainer } from "@/app/components/step-container";
import { InputWithPen } from "@/app/components/input-with-pen";

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>
      <HeaderContainer>
        <img src="/header/preview_chinese_characters.png" alt="" />
      </HeaderContainer>

      <TitleContainer className="mt-10" sound="/sound/5/121-i-1.mp3">
        <p className="tracking-tighter flex items-start gap-5 break-keep">
          <img src="/ui/flower-icon.png" />
          제시된 한자 카드를 보고, 다음 활동을 해 보자.
        </p>
      </TitleContainer>

      {step === 1 && (
        <ContentContainer className="!justify-start mt-5 pl-12">
          <div className="w-full flex mt-10">
            <img src={IMAGE1.src} />
            <div className="absolute left-[50px] top-[100px] grid grid-cols-6 gap-[70px] w-full h-[90px] pr-[80px]">
              <button
                onClick={() => SOUND("/sound/5/p121_word000.mp3").play()}
              ></button>
              <button
                onClick={() => SOUND("/sound/5/p121_word001.mp3").play()}
              ></button>
              <button
                onClick={() => SOUND("/sound/5/p121_word002.mp3").play()}
              ></button>
              <button
                onClick={() => SOUND("/sound/5/p121_word003.mp3").play()}
              ></button>
              <button
                onClick={() => SOUND("/sound/5/p121_word004.mp3").play()}
              ></button>
              <button
                onClick={() => SOUND("/sound/5/p121_word005.mp3").play()}
              ></button>
            </div>
          </div>
        </ContentContainer>
      )}
      {step === 2 && <Step2 />}

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />

      <img
        src={step === 1 ? BACKGROUND1.src : BACKGROUND2.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}

const Step2 = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const [selectedAnswer, setSelectedAnswer] = useState<number[]>([]);
  const answer = [2, 5, 6, 7, 8, 9, 10, 12, 14, 15, 16, 17, 18, 19, 22];

  useEffect(() => {
    if (showAnswer) {
      setSelectedAnswer(answer);
    } else {
      setSelectedAnswer([]);
    }
  }, [showAnswer]);

  return (
    <>
      <ContentContainer className="!justify-start mt-5 pl-12">
        <img src={IMAGE2.src} />

        <div className="absolute left-[700px] top-[0px] w-[600px] h-[630px] grid grid-cols-5 grid-rows-5 gap-[10px] p-[15px]">
          {Array.from(Array(25)).map((_, i) => (
            <button
              key={i}
              className={
                selectedAnswer.includes(i)
                  ? "bg-answer bg-opacity-30 rounded-[10px]"
                  : ""
              }
              onClick={() => {
                if (showAnswer) return;
                if (selectedAnswer.includes(i)) {
                  setSelectedAnswer(selectedAnswer.filter((v) => v !== i));
                } else {
                  setSelectedAnswer([...selectedAnswer, i]);
                }
              }}
            />
          ))}
        </div>

        <InputWithPen
          answer="中"
          showAnswer={showAnswer}
          className="w-[150px] text-[50px] text-center font-haeseo bg-transparent"
          penClassName="w-[35px] left-1/2 -translate-x-1/2"
          containerClassName="absolute right-[8px] top-[90px]"
        />
        <InputWithPen
          answer="중"
          showAnswer={showAnswer}
          className="w-[150px] text-[35px] text-center bg-transparent"
          penClassName="w-[35px] left-1/2 -translate-x-1/2"
          containerClassName="absolute right-[8px] top-[250px]"
        />
        <InputWithPen
          answer="가운데"
          showAnswer={showAnswer}
          className="w-[150px] text-[35px] text-center bg-transparent"
          penClassName="w-[35px] left-1/2 -translate-x-1/2"
          containerClassName="absolute right-[8px] top-[375px]"
        />
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
};
