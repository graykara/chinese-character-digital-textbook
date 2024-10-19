"use client";

import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import IMAGE2 from "./bg_2.png";
import IMAGE3 from "./bg_3.png";
import IMAGE4 from "./bg_4.png";
import IMAGE5 from "./bg_5.png";
import { LearnMainContentPageTemplate } from "@/app/pages/learn-main-content/learn-main-content-page-template";
import { useEffect, useState } from "react";
import { FlippableCard } from "@/app/components/flippable-card/flippable-card";
import { PillButton } from "@/app/components/buttons/pill-button";
import { ContentContainer } from "@/app/components/content-container";
import { Howl } from "howler";
import { MoveRight, Plus } from "lucide-react";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/5/중등한문_한자를 알면 틀리지 않는 일상 어휘9.png";

export default function Page() {
  const [step, setStep] = useState(1);

  const [showReading, setShowReading] = useState(false);
  const [showMeaning, setShowMeaning] = useState(false);
  const [showReading2, setShowReading2] = useState(false);
  const [showMeaning2, setShowMeaning2] = useState(false);

  useEffect(() => {
    setShowReading(false);
    setShowMeaning(false);
    setShowReading2(false);
    setShowMeaning2(false);
  }, [step]);

  const data = [
    {
      //left part
      chinese: "問安",
      reading: "문 안",
      sound: "/sound/2/44/1.mp3",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tighter font-bold">
          안부를{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="물음."
            width={220}
            height={80}
          />
        </div>
      ),
    },
    {
      //right part
      sound: "/sound/2/44/2.mp3",
      chinese: "無難",
      reading: "무 난",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tighter font-bold">
          어려움이{" "}
          <FlippableCard
            active={showMeaning2}
            className="mx-5 inline-block"
            text="없음."
            width={220}
            height={80}
          />
        </div>
      ),
      resource: IMAGE2.src,
    },
    {
      //left part
      chinese: "今日",
      reading: "금 일",
      sound: "/sound/2/44/3.mp3",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tighter font-bold -mb-[70px]">
          지금 지나가고
          <br />
          있는 이날.
        </div>
      ),
    },
    {
      //right part
      sound: "/sound/2/44/4.mp3",
      chinese: "休業",
      reading: "휴 업",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tighter font-bold">
          일을{" "}
          <FlippableCard
            active={showMeaning2}
            className="mx-5 inline-block"
            text="쉼."
            width={220}
            height={80}
          />
        </div>
      ),
      resource: IMAGE3.src,
    },
    {
      //left part
      chinese: "植樹",
      reading: "식 수",
      sound: "/sound/2/44/5.mp3",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tighter font-bold">
          나무를{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="심음."
            width={220}
            height={80}
          />
        </div>
      ),
    },
    {
      //right part
      sound: "/sound/2/44/6.mp3",
      chinese: "食水",
      reading: "식 수",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tighter font-bold">
          먹는{" "}
          <FlippableCard
            active={showMeaning2}
            className="mx-5 inline-block"
            text="물."
            width={220}
            height={80}
          />
        </div>
      ),
      resource: IMAGE4.src,
    },
    {
      //left part
      chinese: "義士",
      reading: "의 사",
      sound: "/sound/2/44/7.mp3",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tighter font-bold">
          의로운{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="사람."
            width={220}
            height={80}
          />
        </div>
      ),
    },
    {
      //right part
      sound: "/sound/2/44/8.mp3",
      chinese: "意思",
      reading: "의 사",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tighter font-bold -mb-[75px]">
          뜻과{" "}
          <FlippableCard
            active={showMeaning2}
            className="mx-5 inline-block"
            text="생각."
            width={220}
            height={80}
          />
          무엇을 하고자 하는 생각.
        </div>
      ),
      resource: IMAGE5.src,
    },
  ];

  return (
    <>
      <LearnMainContentPageTemplate>
        <RightTopStepContainer maxStep={4} step={step} onStepChange={setStep} />
        <ContentContainer className="w-[1300px] h-full grid grid-cols-2 pl-20 pr-10">
          <div className="relative mb-[260px]">
            <div className="relative top-7 left-[135px] w-[550px] text-center text-[180px] tracking-widest">
              <span className="font-haeseo">{data[step]?.chinese}</span>
            </div>
            <div className="flex flex-col gap-16">
              <div className="grid grid-cols-[180px__1fr] gap-12">
                <PillButton
                  active={showReading}
                  onClick={() => {
                    if (!showReading) SOUND(data[step].sound).play();
                    setShowReading(!showReading);
                  }}
                  text="읽기"
                  checkboxColor="#23425e"
                  backgroundColor="#3a5e7c"
                />
                <div
                  className={` text-main-content text-[55px] h-[55px] tracking-widest ${showReading ? "animate__animated animate__slideInDown" : ""}`}
                >
                  {showReading ? data[step]?.reading : null}
                </div>
              </div>
              <div className="grid grid-cols-[180px__1fr] gap-12 bg-transparent">
                <PillButton
                  active={showMeaning}
                  onClick={() => setShowMeaning(!showMeaning)}
                  text="풀이"
                  checkboxColor="#306875"
                  backgroundColor="#4f9aab"
                />
                <div key={step}>{data[step]?.content ?? null}</div>
              </div>
            </div>
          </div>
        </ContentContainer>
      </LearnMainContentPageTemplate>
      {/* <img src={BACKGROUND1.src} className="absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
}
