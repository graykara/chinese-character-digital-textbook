"use client";

import { BuddyButton } from "@/app/components/buttons/buddy-button";
import { ContentContainer } from "@/app/components/content-container";
import { HeaderContainer } from "@/app/components/headers/header-container";
import { TitleContainer } from "@/app/components/title-container";
import { useContext, useEffect, useState } from "react";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import { StepContainer } from "@/app/components/step-container";
import { FlippableCard } from "@/app/components/flippable-card/flippable-card";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/4/중등한문_합쳐서 만든 한자4.png";
import BACKGROUND2 from "@/app/bgpng_temp/4/중등한문_합쳐서 만든 한자5.png";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(false);
  }, [step]);

  return (
    <>
      <HeaderContainer>
        <img src="/header/preview_chinese_characters.png" alt="" />
      </HeaderContainer>

      <TitleContainer className="mt-10" sound="/sound/2/35-i.mp3">
        <p className="text-[45px] tracking-tighter ml-16">
          아래 의미를 지닌 그림을 서로 합치면 어떤 의미가 될지 자유롭게 말해
          보자.
        </p>
        <BuddyButton className="animate__animated animate__fadeIn animate__delay-1s absolute bottom-2 -right-[120px] w-[100px] z-1" />
      </TitleContainer>

      <ContentContainer className="!justify-start pt-8">
        <div className="relative w-[1100px]">
          {step === 1 && (
            <div className="relative mt-10">
              <img src={IMAGE1.src} alt="" className="mt-[95px] ml-[45px]" />
              <FlippableCard
                active={showAnswer}
                iconColor="white"
                width={352} //388-18-18
                height={158} //194-18-18
                text={
                  <>
                    <p className="text-[30px] leading-[35px] tracking-[-2.5px] break-keep mt-1">
                      해와 달은 하늘 높이 
                      <br />
                      떠있는 것이므로, 둘을 합치면 ‘아주
                      높은 지위’를 의미하지 않을까?
                    </p>
                  </>
                }
                className="absolute bottom-8 right-7"
                frontClassName="!bg-[#daecf2] outline-[10px] outline outline-[#daecf2] outline-offset-8 !border-transparent !rounded-2xl"
                backClassName="!bg-[#daecf2] outline-[10px] outline outline-[#daecf2] outline-offset-8 !border-transparent !rounded-2xl"
                contentClassName="text-example text-[25px]"
              />
            </div>
          )}
          {step === 2 && (
            <div className="relative mt-10">
              <img src={IMAGE2.src} alt="" className="-mt-[30px] ml-[25px]" />
              <FlippableCard
                active={showAnswer}
                iconColor="white"
                width={352}
                height={158}
                text={
                  <>
                    <p className="text-[30px] leading-[35px] tracking-tighter break-keep mt-1">
                      나무와 나무가
                      <br />
                      합쳐진 것을 보니
                      <br />
                      수목원이 떠올라.
                    </p>
                  </>
                }
                className="absolute -top-2 right-10"
                frontClassName="!bg-[#daecf2] outline-[10px] outline outline-[#daecf2] outline-offset-8 !border-transparent !rounded-2xl"
                backClassName="!bg-[#daecf2] outline-[10px] outline outline-[#daecf2] outline-offset-8 !border-transparent !rounded-2xl"
                contentClassName="text-example text-[25px]"
              />
              <FlippableCard
                active={showAnswer}
                iconColor="white"
                width={352}
                height={158}
                text={
                  <>
                    <p className="text-[30px] leading-[35px] tracking-tighter break-keep mt-1">
                      불과 불이 합쳐져
                      <br />큰 불꽃이 생각나.
                    </p>
                  </>
                }
                className="absolute bottom-[230px] right-10"
                frontClassName="!bg-[#daecf2] outline-[10px] outline outline-[#daecf2] outline-offset-8 !border-transparent !rounded-2xl"
                backClassName="!bg-[#daecf2] outline-[10px] outline outline-[#daecf2] outline-offset-8 !border-transparent !rounded-2xl"
                contentClassName="text-example text-[25px]"
              />
              <FlippableCard
                active={showAnswer}
                iconColor="white"
                width={352}
                height={158}
                text={
                  <>
                    <p className="text-[30px] leading-[35px] tracking-[-2px] break-keep mt-1">
                      나무에, 나무에 또 나무가 더해진다? 나무가 빽빽하게 들어선
                      모습이 떠오르네.
                    </p>
                  </>
                }
                className="absolute -bottom-1 right-10"
                frontClassName="!bg-[#daecf2] outline-[10px] outline outline-[#daecf2] outline-offset-8 !border-transparent !rounded-2xl"
                backClassName="!bg-[#daecf2] outline-[10px] outline outline-[#daecf2] outline-offset-8 !border-transparent !rounded-2xl"
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

      <StepContainer maxStep={2} />
      <img
        src={step === 1 ? BACKGROUND1.src : BACKGROUND2.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
