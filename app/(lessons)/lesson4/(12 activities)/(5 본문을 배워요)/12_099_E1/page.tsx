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
import { useEffect, useState } from "react";
import { FlippableCard } from "@/app/components/flippable-card/flippable-card";
import { PillButton } from "@/app/components/buttons/pill-button";
import { ContentContainer } from "@/app/components/content-container";
import { Howl } from "howler";
import { MoveRight, Plus } from "lucide-react";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘8.png";

export default function Page() {
  const [step, setStep] = useState(1);

  const [showReading, setShowReading] = useState(false);
  const [showMeaning, setShowMeaning] = useState(false);
  // const [showResource, setShowResource] = useState(false);

  useEffect(() => {
    setShowReading(false);
    setShowMeaning(false);
    // setShowResource(false);
  }, [step]);

  const data = [
    {
      chinese: "民主",
      reading: "민\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0주",
      sound: "/sound/2/50/1.mp3",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tighter font-bold -mb-[75px]">
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="국민이"
            width={220}
            height={80}
          />
          &nbsp; 주인임.
        </div>
      ),
    },
    {
      chinese: "投票",
      reading: "투\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0표",
      sound: "/sound/2/50/2.mp3",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tighter font-bold -mb-[75px]">
          표를{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="던짐"
            width={220}
            height={80}
          />
          {"\xa0[냄]"}
        </div>
      ),
    },
    {
      chinese: "話者",
      reading: "화\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0자",
      sound: "/sound/2/50/3.mp3",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tighter font-bold -mb-[75px]">
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="말하는"
            width={220}
            height={80}
          />
          &nbsp; 사람
        </div>
      ),
    },
    {
      chinese: "共感",
      reading: "공\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0감",
      sound: "/sound/2/50/4.mp3",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tighter font-bold -mb-[75px]">
          함께{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="느낌."
            width={220}
            height={80}
          />
        </div>
      ),
    },
    {
      chinese: "聽者",
      reading: "청\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0자",
      sound: "/sound/2/50/5.mp3",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tighter font-bold -mb-[75px]">
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="듣는"
            width={220}
            height={80}
          />
          &nbsp; 사람.
        </div>
      ),
    },
    {
      chinese: "寒冷",
      reading: "한\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0랭",
      sound: "/sound/2/51/1.mp3",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tighter font-bold -mb-[75px]">
          춥고 차가움.
        </div>
      ),
    },
    {
      chinese: "溫暖",
      reading: "온\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0난",
      sound: "/sound/2/51/2.mp3",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tighter font-bold -mb-[75px]">
          따뜻함.
        </div>
      ),
    },
    {
      chinese: "多濕",
      reading: "다\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0습",
      sound: "/sound/2/51/3.mp3",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tighter font-bold -mb-[75px]">
          습기가{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="많음."
            width={220}
            height={80}
          />
        </div>
      ),
    },
    {
      chinese: "密林",
      reading: "밀\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0림",
      sound: "/sound/2/51/4.mp3",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tighter font-bold -mb-[75px]">
          빽빽한{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="숲."
            width={220}
            height={80}
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <LearnMainContentPageTemplate>
        <RightTopStepContainer maxStep={5} step={step} onStepChange={setStep} />
        {/* {step === 1 ? (
          <img src={IMAGE1.src} alt="image1" />
        ) : ( */}
        <ContentContainer className="w-[1300px] h-full grid grid-cols-[1fr] px-[150px]">
          <div className="absolute top-36 left-5">
            {step === 1 || step === 2 ? (
              <img src={IMAGE2.src} alt="society" />
            ) : step === 3 || step === 4 || step === 5 ? (
              <img src={IMAGE3.src} alt="language" />
            ) : (
              <img src={IMAGE4.src} alt="geography" />
            )}
          </div>
          <div className="relative mb-[230px]">
            <div className="relative -mt-10 left-[300px] w-[550px] text-center text-[190px] tracking-widest">
              <span className="font-haeseo">{data[step - 1]?.chinese}</span>
            </div>
            <div className="flex flex-col gap-16">
              <div className="grid grid-cols-[180px__700px] gap-10 -mt-14">
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
                  className={`text-center text-main-content text-[60px] h-[60px] -mt-4 ${showReading ? "animate__animated animate__slideInDown" : ""}`}
                >
                  {showReading ? data[step - 1]?.reading : null}
                </div>
              </div>
              <div className="grid grid-cols-[180px__1fr] gap-10">
                <PillButton
                  active={showMeaning}
                  onClick={() => setShowMeaning(!showMeaning)}
                  text="뜻"
                  checkboxColor="#306875"
                  backgroundColor="#4f9aab"
                />
                <div key={step}>
                  <div>{data[step - 1]?.content ?? null}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-[1000px] h-[115px]">
            <div>
              {step === 1 || step === 2 ? (
                <img
                  src={IMAGE5.src}
                  alt="figure1"
                  className="absolute bottom-[60px] right-0"
                />
              ) : step === 3 || step === 4 || step === 5 ? (
                <img
                  src={IMAGE6.src}
                  alt="figure2"
                  className="absolute bottom-[60px] right-5"
                />
              ) : (
                <img
                  src={IMAGE7.src}
                  alt="figure3"
                  className="absolute bottom-[60px] right-5"
                />
              )}
            </div>
          </div>
        </ContentContainer>
        {/* )} */}
      </LearnMainContentPageTemplate>
      <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
