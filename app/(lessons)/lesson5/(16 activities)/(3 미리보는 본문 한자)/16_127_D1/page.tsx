"use client";

import { ContentContainer } from "@/app/components/content-container";
import { HeaderContainer } from "@/app/components/headers/header-container";
import { TitleContainer } from "@/app/components/title-container";
import { useContext, useEffect, useState } from "react";
import { SOUND } from "@/app/utils/sound-player";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕3.png";
import BACKGROUND2 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕4.png";
import { StepContainer } from "@/app/components/step-container";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  const [showAnswer, setShowAnswer] = useState(false);
  const answers = ["餘", "取", "活", "男", "如"];

  useEffect(() => {
    setShowAnswer(false);
  }, [step]);

  return (
    <>
      <HeaderContainer>
        <img src="/header/preview_chinese_characters.png" alt="" />
      </HeaderContainer>

      <TitleContainer
        className="mt-10"
        sound="/sound/5/127-i.mp3">
        <p className="tracking-[-5px] text-[54px] flex items-start gap-3 break-keep">
          <img src="/ui/flower-icon.png" />
          제시된 한자 카드를 보고, 사다리를 타고 내려갔을 때 완성되는 한자를 써 보자.
        </p>
      </TitleContainer>

      <ContentContainer className="!justify-start -mt-5 pl-12">
        {step === 1 && (
          <div className="w-full flex mt-[130px] -ml-3">
            <img src={IMAGE1.src} />
            <div className="absolute left-[50px] top-[165px] grid grid-cols-5 gap-[60px] w-[1400px] h-[90px]">
              <button onClick={() => SOUND("/sound/5/p124_word004.mp3").play()}>
              </button>
              <button onClick={() => SOUND("/sound/5/p124_word005.mp3").play()}></button>
              <button onClick={() => SOUND("/sound/5/p124_word006.mp3").play()}></button>
              <button onClick={() => SOUND("/sound/5/p124_word007.mp3").play()}></button>
              <button onClick={() => SOUND("/sound/5/p124_word008.mp3").play()}></button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="mt-8 -ml-12">
            <img src={IMAGE2.src} />

            <InputWithPen
              answer={answers[0]}
              showAnswer={showAnswer}
              className="text-center w-[60px] h-[60px] mt-0 bg-transparent"
              penClassName="left-[9px] h-[45px]"
              containerClassName="absolute top-[620px] left-[460px] font-haeseo text-[55px]"
            />
            <InputWithPen
              answer={answers[1]}
              showAnswer={showAnswer}
              className="text-center w-[60px] h-[60px] mt-0 bg-transparent"
              penClassName="left-[9px] h-[45px]"
              containerClassName="absolute top-[620px] left-[590px] font-haeseo text-[55px]"
            />
            <InputWithPen
              answer={answers[2]}
              showAnswer={showAnswer}
              className="text-center w-[60px] h-[60px] mt-0 bg-transparent"
              penClassName="left-[9px] h-[45px]"
              containerClassName="absolute top-[620px] left-[720px] font-haeseo text-[55px]"
            />
            <InputWithPen
              answer={answers[3]}
              showAnswer={showAnswer}
              className="text-center w-[60px] h-[60px] mt-0 bg-transparent"
              penClassName="left-[9px] h-[45px]"
              containerClassName="absolute top-[620px] left-[850px] font-haeseo text-[55px]"
            />
            <InputWithPen
              answer={answers[4]}
              showAnswer={showAnswer}
              className="text-center w-[60px] h-[60px] mt-0 bg-transparent"
              penClassName="left-[9px] h-[45px]"
              containerClassName="absolute top-[620px] left-[980px] font-haeseo text-[55px]"
            />
          </div>
        )}
      </ContentContainer>

      {step === 2 && (
        <CheckAnswerButton
          active={showAnswer}
          onClick={() => setShowAnswer(!showAnswer)}
        />
      )}

      <StepContainer maxStep={2} />

      <img
        src={step === 1 ? BACKGROUND1.src : BACKGROUND2.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
