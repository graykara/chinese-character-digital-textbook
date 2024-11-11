"use client";

import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./society.png";
import IMAGE3 from "./language.png";
import IMAGE4 from "./geography.png";
import IMAGE5 from "./fig_1.png";
import IMAGE6 from "./fig_2.png";
import IMAGE7 from "./fig_3.png";
import { LearnMainContentPageTemplate } from "@/app/pages/learn-main-content/learn-main-content-page-template";
import { useContext, useEffect, useState } from "react";
import { FlippableCard_60 } from "@/app/components/flippable-card/flippable-card";
import { PillButton } from "@/app/components/buttons/pill-button";
import { ContentContainer } from "@/app/components/content-container";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘7.png";
import BACKGROUND2 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘8.png";
import BACKGROUND3 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘9.png";
import BACKGROUND4 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘10.png";
import BACKGROUND5 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘11.png";
import BACKGROUND6 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘12.png";
import BACKGROUND7 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘13.png";
import BACKGROUND8 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘14.png";
import BACKGROUND9 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘15.png";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  const [showReading, setShowReading] = useState(false);
  const [showMeaning, setShowMeaning] = useState(false);

  useEffect(() => {
    setShowReading(false);
    setShowMeaning(false);
  }, [step]);

  const data = [
    {
      chinese: "民主",
      reading: "민주",
      sound: "/sound/2/50/1.mp3",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tighter font-bold -mb-[75px]">
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 -ml-3 mr-7 inline-block"
            text="국민이"
            width={230}
            height={80}
          />
          {"\xa0"}
          주인임.
        </div>
      ),
      flippableCardData: true,
    },
    {
      chinese: "投票",
      reading: "투표",
      sound: "/sound/2/50/2.mp3",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tighter font-bold -mb-[75px]">
          표를
          <FlippableCard_60
            active={showMeaning}
            className="-mt-1 ml-5 mr-5 inline-block"
            text="던짐"
            width={210}
            height={80}
          />
          [냄].
        </div>
      ),
      flippableCardData: true,
    },
    {
      chinese: "話者",
      reading: "화자",
      sound: "/sound/2/50/3.mp3",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tighter font-bold -mb-[75px]">
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 -ml-3 mr-10 inline-block"
            text="말하는"
            width={230}
            height={80}
          />
          사람
        </div>
      ),
      flippableCardData: true,
    },
    {
      chinese: "共感",
      reading: "공감",
      sound: "/sound/2/50/4.mp3",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tighter font-bold -mb-[75px]">
          함께
          <FlippableCard_60
            active={showMeaning}
            className="-mt-1 ml-7 inline-block"
            text="느낌."
            width={220}
            height={80}
          />
        </div>
      ),
      flippableCardData: true,
    },
    {
      chinese: "聽者",
      reading: "청자",
      sound: "/sound/2/50/5.mp3",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tighter font-bold -mb-[75px]">
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 -ml-3 mr-10 inline-block"
            text="듣는"
            width={215}
            height={80}
          />
          사람.
        </div>
      ),
      flippableCardData: true,
    },
    {
      chinese: "寒冷",
      reading: "한랭",
      sound: "/sound/2/51/1.mp3",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tighter font-bold -mb-[75px]">
          춥고 차가움.
        </div>
      ),
    },
    {
      chinese: "溫暖",
      reading: "온난",
      sound: "/sound/2/51/2.mp3",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tighter font-bold -mb-[75px]">
          따뜻함.
        </div>
      ),
    },
    {
      chinese: "多濕",
      reading: "다습",
      sound: "/sound/2/51/3.mp3",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tighter font-bold -mb-[75px]">
          습기가
          <FlippableCard_60
            active={showMeaning}
            className="-mt-1 ml-7 inline-block"
            text="많음."
            width={220}
            height={80}
          />
        </div>
      ),
      flippableCardData: true,
    },
    {
      chinese: "密林",
      reading: "밀림",
      sound: "/sound/2/51/4.mp3",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tighter font-bold -mb-[75px]">
          빽빽한
          <FlippableCard_60
            active={showMeaning}
            className="-mt-1 ml-7 inline-block"
            text="숲."
            width={220}
            height={80}
          />
        </div>
      ),
      flippableCardData: true,
    },
  ];

  return (
    <>
      <LearnMainContentPageTemplate>
        <RightTopStepContainer maxStep={9} step={step} onStepChange={setStep} />

        <div className="absolute top-[140px] left-[150px]">
          {step === 1 || step === 2 ? (
            <img src={IMAGE2.src} alt="society" />
          ) : step === 3 || step === 4 || step === 5 ? (
            <img src={IMAGE3.src} alt="language" />
          ) : (
            <img src={IMAGE4.src} alt="geography" />
          )}
        </div>

        <ContentContainer className="!justify-start w-[1760px] px-[130px]">
          <div className="absolute top-[150px] ml-0 text-center text-[180px] tracking-[50px]">
            <span className="font-haeseo">{data[step - 1]?.chinese}</span>
          </div>
          <div className="relative w-full top-[380px] px-[150px]">
            <div className="flex flex-col gap-16">
              <div className="grid grid-cols-[180px__1fr]">
                <PillButton
                  active={showReading}
                  onClick={() => {
                    if (!showReading) SOUND(data[step - 1].sound).play();
                    setShowReading(!showReading);
                  }}
                  text="읽기"
                  checkboxColor="#23425e"
                  backgroundColor="#3a5e7c"
                />
                <div
                  className={`mr-[60px] -mt-4 h-[85px] text-center text-main-content font-chosun text-[60px] tracking-[170px] ${showReading ? "animate__animated animate__slideInDown" : ""}`}
                >
                  {showReading ? data[step - 1]?.reading : null}
                </div>
              </div>
              <div className="grid grid-cols-[180px__1fr]">
                <PillButton
                  active={showMeaning}
                  onClick={() => setShowMeaning(!showMeaning)}
                  text="풀이"
                  checkboxColor="#306875"
                  backgroundColor="#4f9aab"
                />
                {data[step - 1]?.flippableCardData ? (
                  <div
                    key={step}
                    className="-mt-0 ml-10 tracking-[0.5px]"
                  >
                    <div>{data[step - 1]?.content ?? null}</div>
                  </div>
                ) : (
                  <div
                    key={step}
                    className={`-mt-0 ml-10 tracking-[0.5px] ${showMeaning ? 'animate__animated animate__fadeIn animate__flipInX' : 'hidden'}`}
                  >
                    <div>{data[step - 1]?.content ?? null}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-[1000px] h-[115px]">
            <div>
              {step === 1 || step === 2 ? (
                <img
                  src={IMAGE5.src}
                  alt="figure1"
                  className="absolute bottom-[75px] right-[100px]"
                />
              ) : step === 3 || step === 4 || step === 5 ? (
                <img
                  src={IMAGE6.src}
                  alt="figure2"
                  className="absolute bottom-[75px] right-[150px]"
                />
              ) : (
                <img
                  src={IMAGE7.src}
                  alt="figure3"
                  className="absolute bottom-[65px] right-[150px]"
                />
              )}
            </div>
          </div>
        </ContentContainer>
      </LearnMainContentPageTemplate>
      <img src={
        step === 1 ? BACKGROUND1.src :
          step === 2 ? BACKGROUND2.src :
            step === 3 ? BACKGROUND3.src :
              step === 4 ? BACKGROUND4.src :
                step === 5 ? BACKGROUND5.src :
                  step === 6 ? BACKGROUND6.src :
                    step === 7 ? BACKGROUND7.src :
                      step === 8 ? BACKGROUND8.src :
                        step === 9 ? BACKGROUND9.src : ""
      } className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
