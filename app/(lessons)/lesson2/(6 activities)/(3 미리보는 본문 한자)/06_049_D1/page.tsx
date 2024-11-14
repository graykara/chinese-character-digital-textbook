"use client";

import { ContentContainer } from "@/app/components/content-container";
import { HeaderContainer } from "@/app/components/headers/header-container";
import { TitleContainer } from "@/app/components/title-container";
import { useContext, useEffect, useState } from "react";
import { SOUND } from "@/app/utils/sound-player";
import EXAMPLE from "./example.png";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import BUTTON from "./button.png";
import { StepContainer } from "@/app/components/step-container";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘4.png";
import BACKGROUND2 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘5.png";
import { clickSound } from "@/app/utils/click-sound";
import { PageInfoContext } from "@/app/utils/page-info";
import { Button } from "@/app/components/buttons/button";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  const [showAnswer, setShowAnswer] = useState(false);
  const sounds = [
    "/sound/2/p049_word000.mp3",
    "/sound/2/p049_word001.mp3",
    "/sound/2/p049_word002.mp3",
    "/sound/2/p049_word003.mp3",
    "/sound/2/p049_word004.mp3",
    "/sound/2/p049_word005.mp3",
  ];

  useEffect(() => {
    setShowAnswer(false);
  }, [step]);

  return (
    <>
      <HeaderContainer>
        <img src="/header/preview_chinese_characters.png" alt="" />
      </HeaderContainer>

      <TitleContainer className="mt-10" sound="/sound/2/49-i.mp3">
        <p className="tracking-tighter flex items-start gap-5 text-[45px]">
          <img src="/ui/flower-icon.png" />
          제시된 한자 카드를 보고, 설명에 해당하는 한자를 써 보자.
        </p>
      </TitleContainer>

      <div className="w-[1500px] mx-auto pl-10">
        <img src={EXAMPLE.src} />
        <div className="absolute w-full flex z-10">
          <div className="absolute left-[7px] -top-[270px] grid grid-cols-6 gap-[60px] w-[1400px] h-[100px] z-10">
            <Button onClick={() => SOUND(sounds[0]).play()}></Button>
            <Button onClick={() => SOUND(sounds[1]).play()}></Button>
            <Button onClick={() => SOUND(sounds[2]).play()}></Button>
            <Button onClick={() => SOUND(sounds[3]).play()}></Button>
            <Button onClick={() => SOUND(sounds[4]).play()}></Button>
            <Button onClick={() => SOUND(sounds[5]).play()}></Button>
          </div>
        </div>
      </div>
      <ContentContainer className="!justify-start mt-10 pl-10">

        <div className="relative w-full pb-20">
        {/* <div className=" w-full pb-20"> */}
          {step === 1 && (
            <div className="relative mt-[10px] ml-[7px] mb-20">
              <img src={IMAGE1.src} alt="" />
              {!showAnswer && (
                <div>
                  <Button
                    onClick={(e) => {
                      clickSound.play();
                      e.currentTarget.remove();
                    }}
                    className="absolute left-[335px] top-[78px]"
                  >
                    <img src={BUTTON.src} />
                  </Button>
                  <Button
                    onClick={(e) => {
                      clickSound.play();
                      e.currentTarget.remove();
                    }}
                    className="absolute left-[1145px] top-[78px]"
                  >
                    <img src={BUTTON.src} />
                  </Button>
                  <Button
                    onClick={(e) => {
                      clickSound.play();
                      e.currentTarget.remove();
                    }}
                    className="absolute left-[335px] top-[338px]"
                  >
                    <img src={BUTTON.src} />
                  </Button>
                  <Button
                    onClick={(e) => {
                      clickSound.play();
                      e.currentTarget.remove();
                    }}
                    className="absolute left-[1145px] top-[338px]"
                  >
                    <img src={BUTTON.src} />
                  </Button>
                </div>
              )}
            </div>
          )}
          {step === 2 && (
            <div className="relative mt-[10px] ml-[7px] ">
              <img src={IMAGE2.src} alt="" />

              {!showAnswer && (
                <div>
                  <Button
                    onClick={(e) => {
                      clickSound.play();
                      e.currentTarget.remove();
                    }}
                    className="absolute left-[335px] top-[78px]"
                  >
                    <img src={BUTTON.src} />
                  </Button>
                  <Button
                    onClick={(e) => {
                      clickSound.play();
                      e.currentTarget.remove();
                    }}
                    className="absolute left-[1145px] top-[78px]"
                  >
                    <img src={BUTTON.src} />
                  </Button>
                </div>
              )}
            </div>
          )}
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
