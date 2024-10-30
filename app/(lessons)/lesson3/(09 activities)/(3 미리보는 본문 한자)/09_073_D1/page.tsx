"use client";

import { ContentContainer } from "@/app/components/content-container";
import { HeaderContainer } from "@/app/components/headers/header-container";
import { TitleContainer } from "@/app/components/title-container";
import { useEffect, useState } from "react";
import EXAMPLE from "./example.png";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import IMAGE3 from "./image3.png";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어3.png";
import { StepContainer } from "@/app/components/step-container";
import { SOUND } from "@/app/utils/sound-player";
import { FlippableCard } from "@/app/components/flippable-card/flippable-card";

export default function Page() {
  const [step, setStep] = useState(1);

  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(false);
  }, [step]);

  return (
    <>
      <HeaderContainer>
        <img src="/header/preview_chinese_characters.png" alt="" />
      </HeaderContainer>

      <TitleContainer className="mt-10" sound="/sound/3/73-i.mp3">
        <p className="tracking-tighter flex items-start gap-5 break-keep">
          <img src="/ui/flower-icon.png" />
          제시된 한자 카드를 보고, 질문에 답하며 개인별 또는 모둠별로 왕관을
          획득해 보자.
        </p>
      </TitleContainer>

      <ContentContainer className="!justify-start mt-5 pl-12 pb-20">
        <img src={EXAMPLE.src} className="mb-10" />
        <div className="absolute left-[60px] top-[40px] w-[1420px] grid grid-cols-6 gap-[40px] h-[250px]">
          <button onClick={() => SOUND("/sound/3/73_001.mp3").play()} />
          <button onClick={() => SOUND("/sound/3/73_002.mp3").play()} />
          <button onClick={() => SOUND("/sound/3/73_003.mp3").play()} />
          <button onClick={() => SOUND("/sound/3/73_004.mp3").play()} />
          <button onClick={() => SOUND("/sound/3/73_005.mp3").play()} />
          <button onClick={() => SOUND("/sound/3/73_006.mp3").play()} />
        </div>

        <div className="flex items-center gap-10">
          <div className="flex justify-center items-center">
            {step === 1 && (
              <div className="relative">
                <img src={IMAGE1.src} />
                <FlippableCard
                  active={showAnswer}
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
                  active={showAnswer}
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
                  active={showAnswer}
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
                  active={showAnswer}
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
                  active={showAnswer}
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
                  active={showAnswer}
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
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />

      <StepContainer maxStep={3} step={step} onStepChange={setStep} />
    </>
  );
}
