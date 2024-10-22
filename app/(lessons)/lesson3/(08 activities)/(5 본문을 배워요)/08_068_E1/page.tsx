"use client";

import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import { LearnMainContentPageTemplate } from "@/app/pages/learn-main-content/learn-main-content-page-template";
import { useEffect, useState } from "react";
import { FlippableCard } from "@/app/components/flippable-card/flippable-card";
import { ContentContainer } from "@/app/components/content-container";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어2.png";
import { MainContent } from "../../../main-content";

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
        { letter: "龍", reading: "용" },
        { letter: "頭", reading: "두" },
        { letter: "蛇", reading: "사" },
        { letter: "尾", reading: "미" },
      ],
      sound: "/sound/5/117/1.mp3",
      content1: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          용 머리에 뱀{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="꼬리"
            width={170}
            height={80}
          />
        </div>
      ),
      content2: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          처음은 왕성하나 끝이 부진한 현상.
        </div>
      ),
    },
    {
      chinese: [
        { letter: "易", reading: "역" },
        { letter: "地", reading: "지" },
        { letter: "思", reading: "사" },
        { letter: "之", reading: "지" },
      ],
      sound: "/sound/5/117/2.mp3",
      content1: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="처지"
            width={170}
            height={80}
          />
          를 바꾸어 그것을{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="생각할"
            width={170}
            height={80}
          />
        </div>
      ),
      content2: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          상대방의 처지나 형편에서 생각해 보고 이해함
        </div>
      ),
    },
    {
      chinese: [
        { letter: "苦", reading: "고" },
        { letter: "盡", reading: "진" },
        { letter: "甘", reading: "감" },
        { letter: "來", reading: "래" },
      ],
      sound: "/sound/5/117/3.mp3",
      content1: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          쓴 것이{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="다하면"
            width={170}
            height={80}
          />{" "}
          단 것이 옴.
        </div>
      ),
      content2: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          고생 끝에 즐거움이 옴.
        </div>
      ),
    },
    {
      chinese: [
        { letter: "雪", reading: "설" },
        { letter: "上", reading: "상" },
        { letter: "加", reading: "가" },
        { letter: "霜", reading: "상" },
      ],
      sound: "/sound/5/117/4.mp3",
      content1: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="눈"
            width={170}
            height={80}
          />{" "}
          위에 서리가{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="내림"
            width={170}
            height={80}
          />
        </div>
      ),
      content2: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          난처한 일이나 불행한 일이 잇따라 일어남.
        </div>
      ),
    },
  ];

  return (
    <>
      <LearnMainContentPageTemplate>
        <RightTopStepContainer maxStep={4} step={step} onStepChange={setStep} />
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
