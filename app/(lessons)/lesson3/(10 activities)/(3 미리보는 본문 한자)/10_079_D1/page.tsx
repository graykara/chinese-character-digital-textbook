"use client";

import { ContentContainer } from "@/app/components/content-container";
import { HeaderContainer } from "@/app/components/headers/header-container";
import { TitleContainer } from "@/app/components/title-container";
import { useContext, useEffect, useState } from "react";
import { SOUND } from "@/app/utils/sound-player";
import EXAMPLE from "./example.png";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/10/중등한문_이야기가 담긴 성어24.png";
import BACKGROUND2 from "@/app/bgpng_temp/10/중등한문_이야기가 담긴 성어25.png";
import { StepContainer } from "@/app/components/step-container";
import { InputWithPen } from "@/app/components/input-with-pen";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);
  const answers1 = ["은", "은혜", "선", "좋다", "결", "맺다"];
  const answers2 = ["보", "갚다", "익", "더욱", "호", "호랑이", "성", "이루다"];
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(false);
  }, [step]);

  return (
    <>
      <HeaderContainer>
        <img src="/header/preview_chinese_characters.png" alt="" />
      </HeaderContainer>

      <TitleContainer className="mt-10" sound="/sound/3/79-i.mp3">
        <p className="tracking-tighter flex items-start gap-5 break-keep">
          <img src="/ui/flower-icon.png" />
          제시된 한자 카드를 보고, 도형으로 가려진 한자의 음과 뜻을 맞혀 보자.
        </p>
      </TitleContainer>

      <ContentContainer className="!justify-start mt-10 pl-1">
        <img src={EXAMPLE.src} className="mb-10" />
        <div className="absolute left-[50px] top-[50px] grid grid-cols-8 gap-[30px] w-full h-[90px] bg-transparent pr-[50px]">
          <button
            onClick={() => SOUND("/sound/3/p079_word000.mp3").play()}
          ></button>
          <button
            onClick={() => SOUND("/sound/3/p079_word001.mp3").play()}
          ></button>
          <button
            onClick={() => SOUND("/sound/3/p079_word002.mp3").play()}
          ></button>
          <button
            onClick={() => SOUND("/sound/3/p079_word003.mp3").play()}
          ></button>
          <button
            onClick={() => SOUND("/sound/3/p079_word004.mp3").play()}
          ></button>
          <button
            onClick={() => SOUND("/sound/3/p079_word005.mp3").play()}
          ></button>
          <button
            onClick={() => SOUND("/sound/3/p079_word006.mp3").play()}
          ></button>
          <button
            onClick={() => SOUND("/sound/3/p079_word007.mp3").play()}
          ></button>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex justify-center items-center">
            {step === 1 && (
              <div className="relative">
                <img src={IMAGE1.src} />
                <InputWithPen
                  answer={answers1[0]}
                  showAnswer={showAnswer}
                  containerClassName="absolute absolute left-[375px] -bottom-[2px]"
                  className="text-[40px] text-center w-[65px] bg-transparent"
                  penClassName="left-1/2 -translate-x-1/2 h-[45px]"
                />
                <InputWithPen
                  answer={answers1[1]}
                  showAnswer={showAnswer}
                  containerClassName="absolute absolute left-[440px] -bottom-[2px]"
                  className="text-[40px] text-center w-[170px] bg-transparent"
                  penClassName="left-1/2 -translate-x-1/2 h-[45px]"
                />

                <InputWithPen
                  answer={answers1[2]}
                  showAnswer={showAnswer}
                  containerClassName="absolute absolute left-[705px] -bottom-[2px]"
                  className="text-[40px] text-center w-[65px] bg-transparent"
                  penClassName="left-1/2 -translate-x-1/2 h-[45px]"
                />
                <InputWithPen
                  answer={answers1[3]}
                  showAnswer={showAnswer}
                  containerClassName="absolute absolute left-[770px] -bottom-[2px]"
                  className="text-[40px] text-center w-[170px] bg-transparent"
                  penClassName="left-1/2 -translate-x-1/2 h-[45px]"
                />

                <InputWithPen
                  answer={answers1[4]}
                  showAnswer={showAnswer}
                  containerClassName="absolute absolute left-[1035px] -bottom-[2px]"
                  className="text-[40px] text-center w-[65px] bg-transparent"
                  penClassName="left-1/2 -translate-x-1/2 h-[45px]"
                />
                <InputWithPen
                  answer={answers1[5]}
                  showAnswer={showAnswer}
                  containerClassName="absolute absolute left-[1100px] -bottom-[2px]"
                  className="text-[40px] text-center w-[170px] bg-transparent"
                  penClassName="left-1/2 -translate-x-1/2 h-[45px]"
                />
              </div>
            )}
            {step === 2 && (
              <div className="relative">
                <img src={IMAGE2.src} />
                <InputWithPen
                  answer={answers2[0]}
                  showAnswer={showAnswer}
                  containerClassName="absolute absolute left-[0px] -bottom-[2px]"
                  className="text-[40px] text-center w-[65px] bg-transparent"
                  penClassName="left-1/2 -translate-x-1/2 -mt-[3px] h-[45px]"
                />
                <InputWithPen
                  answer={answers2[1]}
                  showAnswer={showAnswer}
                  containerClassName="absolute absolute left-[65px] -bottom-[2px]"
                  className="text-[40px] text-center w-[170px] bg-transparent"
                  penClassName="left-1/2 -translate-x-1/2 -mt-[3px] h-[45px]"
                />

                <InputWithPen
                  answer={answers2[2]}
                  showAnswer={showAnswer}
                  containerClassName="absolute absolute left-[345px] -bottom-[2px]"
                  className="text-[40px] text-center w-[65px] bg-transparent"
                  penClassName="left-1/2 -translate-x-1/2 -mt-[3px] h-[45px]"
                />
                <InputWithPen
                  answer={answers2[3]}
                  showAnswer={showAnswer}
                  containerClassName="absolute absolute left-[405px] -bottom-[2px]"
                  className="text-[40px] text-center w-[170px] bg-transparent"
                  penClassName="left-1/2 -translate-x-1/2 -mt-[3px] h-[45px]"
                />

                <InputWithPen
                  answer={answers2[4]}
                  showAnswer={showAnswer}
                  containerClassName="absolute absolute left-[685px] -bottom-[2px]"
                  className="text-[40px] text-center w-[65px] bg-transparent"
                  penClassName="left-1/2 -translate-x-1/2 -mt-[3px] h-[45px]"
                />
                <InputWithPen
                  answer={answers2[5]}
                  showAnswer={showAnswer}
                  containerClassName="absolute absolute left-[750px] -bottom-[2px]"
                  className="text-[40px] text-center w-[170px] bg-transparent"
                  penClassName="left-1/2 -translate-x-1/2 -mt-[3px] h-[45px]"
                />

                <InputWithPen
                  answer={answers2[6]}
                  showAnswer={showAnswer}
                  containerClassName="absolute absolute left-[1030px] -bottom-[2px]"
                  className="text-[40px] text-center w-[65px] bg-transparent"
                  penClassName="left-1/2 -translate-x-1/2 -mt-[3px] h-[45px]"
                />
                <InputWithPen
                  answer={answers2[7]}
                  showAnswer={showAnswer}
                  containerClassName="absolute absolute left-[1095px] -bottom-[2px]"
                  className="text-[40px] text-center w-[170px] bg-transparent"
                  penClassName="left-1/2 -translate-x-1/2 -mt-[3px] h-[45px]"
                />

              </div>
            )}
          </div>
        </div>
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />

      <StepContainer maxStep={2} />

      <img
        src={step === 1 ? BACKGROUND1.src : BACKGROUND2.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
