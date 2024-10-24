"use client";

import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import { LearnMainContentPageTemplate } from "@/app/pages/learn-main-content/learn-main-content-page-template";
import { useEffect, useState } from "react";
import { FlippableCard } from "@/app/components/flippable-card/flippable-card";
import { PillButton } from "@/app/components/buttons/pill-button";
import { ContentContainer } from "@/app/components/content-container";
import { SOUND } from "@/app/utils/sound-player";
import { MainContentChineseAndReading } from "@/app/components/main-content/chinese-and-reading";
// import { AdditionalDataButton } from "@/app/components/buttons/additional-data-button";
import BACKGROUND1 from "@/app/bgpng_temp/7/중등한문_언어생활 속의 성어18.png"
import { MainContent } from "../../../main-content";
import { MainContentVideoButton } from "@/app/components/main-content/video-button";

export default function Page() {
  const [step, setStep] = useState(1);

  const [showReading, setShowReading] = useState(false);
  const [showMeaning, setShowMeaning] = useState(false);
  const [showMeaning2, setShowMeaning2] = useState(false);
  // const [showResource, setShowResource] = useState(false);

  useEffect(() => {
    setShowReading(false);
    setShowMeaning(false);
    // setShowResource(false);
  }, [step]);

  const data = [
    {
      chinese: [
        { letter: "十", reading: "십" },
        { letter: "中", reading: "중" },
        { letter: "八", reading: "팔" },
        { letter: "九", reading: "구" },
      ],
      sound: "/sound/3/62/1.mp3",
      content1: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          열 가운데{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="여덟이나 아홉."
            width={400}
            height={80}
          />
        </div>
      ),
      content2: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          거의 대부분 이거나 거의 틀림없음.
        </div>
      ),
    },
    {
      chinese: [
        { letter: "馬", reading: "마" },
        { letter: "耳", reading: "이" },
        {
          letter: "東",
          reading: "동",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/3/p063_word000.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                東風
              </span>
              : 동쪽에서 불어오는 바람. 봄바람.
            </>
          ),
        },
        { letter: "風", reading: "풍" },
      ],
      sound: "/sound/3/62/2.mp3",
      content1: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          말의 귀에{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="동쪽 바람"
            width={280}
            height={80}
          />
        </div>
      ),
      content2: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          남의 말을 귀담아듣지 아니하고 지나쳐 흘려버림.
        </div>
      ),
    },
    {
      chinese: [
        { letter: "莫", reading: "막" },
        { letter: "上", reading: "상" },
        { letter: "莫", reading: "막" },
        { letter: "下", reading: "하" },
      ],
      sound: "/sound/3/62/3.mp3",
      content1: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="위"
            width={130}
            height={80}
          />
          도 없고 아래도 없음.
        </div>
      ),
      content2: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          더 낫고 더 못함의 차이가 거의 없음.
        </div>
      ),
    },
    {
      chinese: [
        { letter: "坐", reading: "좌" },
        { letter: "井", reading: "정" },
        { letter: "觀", reading: "관" },
        { letter: "天", reading: "천" },
      ],
      sound: "/sound/3/62/4.mp3",
      content1: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          우물 속에{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="앉아"
            width={170}
            height={80}
          />
          하늘을{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="봄"
            width={130}
            height={80}
          />
          .
        </div>
      ),
      content2: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          보고 들어 얻은 지식이 매우 적음.
        </div>
      ),
    },
  ];

  return (
    <>
      <LearnMainContentPageTemplate>
        <RightTopStepContainer maxStep={4} step={step} onStepChange={setStep} />

        <MainContentVideoButton
          video="/video/writing/62p_1.mp4"
          className="absolute left-[112px] top-[40px]"
        />
        
        {/* {step === 1 ? (
          <img src={IMAGE1.src} alt="image1" />
        ) : ( */}
        <ContentContainer className="w-[1300px] h-full grid grid-cols-[1fr] px-[150px]">
          <div className="absolute top-[228px] left-[150px]">
            <MainContent
              data={data[step - 1]}
              showReading={showReading}
              setShowReading={setShowReading}
              showMeaning={showMeaning}
              setShowMeaning={setShowMeaning}
              showMeaning2={showMeaning2}
              setShowMeaning2={setShowMeaning2}
            />
          </div>
        </ContentContainer>
        {/* )} */}
      </LearnMainContentPageTemplate>
      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
