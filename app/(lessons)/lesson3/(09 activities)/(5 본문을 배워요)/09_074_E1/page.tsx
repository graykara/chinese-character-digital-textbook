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
        { letter: "蛇", reading: "사" },
        { letter: "足", reading: "족" },
      ],
      sound: "/sound/5/117/1.mp3",
      content1: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          뱀의{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="발"
            width={170}
            height={80}
          />
        </div>
      ),
      content2: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          쓸데없는 군것을 하여 도리어 잘못되게 함
        </div>
      ),
    },
    {
      chinese: [
        { letter: "漁", reading: "어" },
        { letter: "父", reading: "부" },
        { letter: "之", reading: "지" },
        { letter: "利", reading: "리" },
      ],
      sound: "/sound/5/117/2.mp3",
      content1: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          어부의{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="이익"
            width={170}
            height={80}
          />
        </div>
      ),
      content2: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          두 사람이 이해관계로 서로 싸우는 사이에 엉뚱한 사람이 애쓰지 않고
          가로챈 이익
        </div>
      ),
    },
  ];

  return (
    <>
      <LearnMainContentPageTemplate>
        <RightTopStepContainer maxStep={2} step={step} onStepChange={setStep} />
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
