"use client";

import { ContentContainer } from "@/app/components/content-container";
import { HeaderContainer } from "@/app/components/headers/header-container";
import { TitleContainer } from "@/app/components/title-container";
import { useContext, useEffect, useState } from "react";
import EXAMPLE from "./example.png";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import IMAGE3 from "./image3.png";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어3.png";
import { StepContainer } from "@/app/components/step-container";
import { SOUND } from "@/app/utils/sound-player";
import { FlippableCard } from "@/app/components/flippable-card/flippable-card";
import { PageInfoContext } from "@/app/utils/page-info";
import { Button } from "@/app/components/buttons/button";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  const [showAnswer, setShowAnswer] = useState<boolean | null>(null);

  useEffect(() => {
    setShowAnswer(null);
  }, [step]);

  useEffect(() => {
    if (showAnswer) {
      document.querySelectorAll(".flippable-card").forEach((card) => {
        card.setAttribute("data-active", "true");
      })
    } else {
      document.querySelectorAll(".flippable-card").forEach((card) => {
        card.setAttribute("data-active", "false");
      })
    }
  }, [showAnswer])

  return (
    <>
      <HeaderContainer>
        <img src="/header/preview_chinese_characters.png" alt="" />
      </HeaderContainer>

      <TitleContainer className="mt-10" sound="/sound/3/73-i.mp3">
        <p className="tracking-tighter flex items-start gap-5 break-keep">
          <img src="/ui/flower-icon.png" />
          제시된 한자 카드를 보고, 설명에 해당하는 답을 써 보자.
        </p>
      </TitleContainer>

      <ContentContainer className="!justify-start mt-5 pl-12 pb-20">
        <img src={EXAMPLE.src} className="mb-10" />
        <div className="absolute left-[60px] top-[40px] w-[1420px] grid grid-cols-6 gap-[40px] h-[250px]">
          <Button onClick={() => SOUND("/sound/3/p073_word000.mp3").play()} />
          <Button onClick={() => SOUND("/sound/3/p073_word001.mp3").play()} />
          <Button onClick={() => SOUND("/sound/3/p073_word002.mp3").play()} />
          <Button onClick={() => SOUND("/sound/3/p073_word003.mp3").play()} />
          <Button onClick={() => SOUND("/sound/3/p073_word004.mp3").play()} />
          <Button onClick={() => SOUND("/sound/3/p073_word005.mp3").play()} />
        </div>

        <div className="flex items-center gap-10">
          <div className="flex justify-center items-center">
            {step === 1 && (
              <div className="relative">
                <img src={IMAGE1.src} />
                <FlippableCard
                  width={150}
                  height={150}
                  text="馬"
                  className="absolute top-[100px] left-[215px] ring-offset-0"
                  contentClassName="font-haeseo text-[100px] text-black"
                  backClassName="border-none ring-[#cccdcf] ring-8 ring-offset-4"
                  frontClassName="border-none ring-[#cccdcf] ring-8 ring-offset-4 !bg-[#cccdcf]"
                  iconColor="white"
                />
                <FlippableCard
                  width={150}
                  height={150}
                  text="鹿"
                  className="absolute top-[100px] right-[235px] ring-offset-0"
                  contentClassName="font-haeseo text-[100px] text-black"
                  backClassName="border-none ring-[#cccdcf] ring-8 ring-offset-4"
                  frontClassName="border-none ring-[#cccdcf] ring-8 ring-offset-4 !bg-[#cccdcf]"
                  iconColor="white"
                />
              </div>
            )}
            {step === 2 && (
              <div className="relative">
                <img src={IMAGE2.src} />

                <FlippableCard
                  width={150}
                  height={150}
                  text="모"
                  className="absolute top-[110px] left-[135px] ring-offset-0"
                  contentClassName="text-[50px] text-black"
                  backClassName="border-none ring-[#cccdcf] ring-8 ring-offset-4"
                  frontClassName="border-none ring-[#cccdcf] ring-8 ring-offset-4 !bg-[#cccdcf]"
                  iconColor="white"
                />
                <FlippableCard
                  width={150}
                  height={150}
                  text="족"
                  className="absolute top-[110px] right-[155px] ring-offset-0"
                  contentClassName="text-[50px] text-black"
                  backClassName="border-none ring-[#cccdcf] ring-8 ring-offset-4"
                  frontClassName="border-none ring-[#cccdcf] ring-8 ring-offset-4 !bg-[#cccdcf]"
                  iconColor="white"
                />
              </div>
            )}
            {step === 3 && (
              <div className="relative">
                <img src={IMAGE3.src} />

                <FlippableCard
                  width={300}
                  height={150}
                  text="이롭다"
                  className="absolute top-[110px] left-[145px] ring-offset-0"
                  contentClassName="text-[50px] text-black"
                  backClassName="border-none ring-[#cccdcf] ring-8 ring-offset-4"
                  frontClassName="border-none ring-[#cccdcf] ring-8 ring-offset-4 !bg-[#cccdcf]"
                  iconColor="white"
                />
                <FlippableCard
                  width={300}
                  height={150}
                  text="고기잡다"
                  className="absolute top-[110px] right-[170px] ring-offset-0"
                  contentClassName="text-[50px] text-black"
                  backClassName="border-none ring-[#cccdcf] ring-8 ring-offset-4"
                  frontClassName="border-none ring-[#cccdcf] ring-8 ring-offset-4 !bg-[#cccdcf]"
                  iconColor="white"
                />
              </div>
            )}
          </div>
        </div>
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer || false}
        onClick={() => setShowAnswer(!showAnswer)}
      />

      <StepContainer maxStep={3} />
    </>
  );
}
