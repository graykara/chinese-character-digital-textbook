"use client";

import { BuddyButton } from "@/app/components/buttons/buddy-button";
import { ContentContainer } from "@/app/components/content-container";
import { HeaderContainer } from "@/app/components/headers/header-container";
import { TitleContainer } from "@/app/components/title-container";
import { useEffect, useState } from "react";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import { StepContainer } from "@/app/components/step-container";
import { FlippableCard } from "@/app/components/flippable-card/flippable-card";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
// import BACKGROUND1 from "@/app/bgpng_temp/4/중등한문_합쳐서 만든 한자4.png"
import BACKGROUND1 from "@/app/bgpng_temp/4/중등한문_합쳐서 만든 한자5.png"


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

      <TitleContainer className="mt-10">
        <p className="tracking-tight">
          아래 의미를 지닌 그림을 서로 합치면 어떤 의미가 될지 자유롭게 말해
          보자.
        </p>
        <BuddyButton className="absolute bottom-3 -right-28" />
      </TitleContainer>

      <ContentContainer className="!justify-start pt-8">
        <div className="relative w-[1100px]">
          {step === 1 && (
            <div className="relative mt-10">
              <img src={IMAGE1.src} alt="" />
              <FlippableCard
                iconColor="white"
                width={350}
                height={180}
                text={
                  <>
                    합해와 달은 하늘 높이 떠있는
                    <br />
                    것이므로, 둘을 합치면
                    <br />
                    ‘아주 높은 지위’를
                    <br />
                    의미하지 않을까?
                  </>
                }
                className="absolute bottom-10 right-10"
                frontClassName="!bg-[#daecf2] outline-[10px] outline outline-[#daecf2] outline-offset-8 !border-transparent !rounded-3xl"
                backClassName="!bg-[#daecf2] outline-[10px] outline outline-[#daecf2] outline-offset-8 !border-transparent !rounded-3xl"
                contentClassName="text-example text-[25px]"
              />
            </div>
          )}
          {step === 2 && (
            <div className="relative mt-10">
              <img src={IMAGE2.src} alt="" />
              <FlippableCard
                iconColor="white"
                width={350}
                height={180}
                text={
                  <>
                    나무와 나무가 합쳐진 것을 보니
                    <br />
                    수목원이 떠올라.
                  </>
                }
                className="absolute -top-5 right-10"
                frontClassName="!bg-[#daecf2] outline-[10px] outline outline-[#daecf2] outline-offset-8 !border-transparent !rounded-3xl"
                backClassName="!bg-[#daecf2] outline-[10px] outline outline-[#daecf2] outline-offset-8 !border-transparent !rounded-3xl"
                contentClassName="text-example text-[25px]"
              />
              <FlippableCard
                iconColor="white"
                width={350}
                height={180}
                text={
                  <>
                    불과 불이 합쳐져
                    <br />큰 불꽃이 생각나.
                  </>
                }
                className="absolute bottom-[220px] right-10"
                frontClassName="!bg-[#daecf2] outline-[10px] outline outline-[#daecf2] outline-offset-8 !border-transparent !rounded-3xl"
                backClassName="!bg-[#daecf2] outline-[10px] outline outline-[#daecf2] outline-offset-8 !border-transparent !rounded-3xl"
                contentClassName="text-example text-[25px]"
              />
              <FlippableCard
                iconColor="white"
                width={350}
                height={180}
                text={
                  <>
                    나무에, 나무에
                    <br />또 나무가 더해진다?
                    <br />
                    나무가 빽빽하게 들어선
                    <br />
                    모습이 떠오르네.
                  </>
                }
                className="absolute -bottom-2 right-10"
                frontClassName="!bg-[#daecf2] outline-[10px] outline outline-[#daecf2] outline-offset-8 !border-transparent !rounded-3xl"
                backClassName="!bg-[#daecf2] outline-[10px] outline outline-[#daecf2] outline-offset-8 !border-transparent !rounded-3xl"
                contentClassName="text-example text-[25px]"
              />
            </div>
          )}
        </div>
      </ContentContainer>

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
      <img src={BACKGROUND1.src} className="absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
