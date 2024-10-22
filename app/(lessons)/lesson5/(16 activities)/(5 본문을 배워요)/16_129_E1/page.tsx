"use client";

import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import IMAGE1 from "./image1.png";
import { LearnMainContentPageTemplate } from "@/app/pages/learn-main-content/learn-main-content-page-template";
import { useEffect, useState } from "react";
import { FlippableCard } from "@/app/components/flippable-card/flippable-card";
import { PillButton } from "@/app/components/buttons/pill-button";
import { ContentContainer } from "@/app/components/content-container";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕6.png";
import { MainContentChineseAndReading } from "@/app/components/main-content/chinese-and-reading";

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
      chinese: [
        { letter: "萬", reading: "만" },
        { letter: "德", reading: "덕" },
        { letter: "이", isKor: true },
        { letter: "取", reading: "취" },
        { letter: "十", reading: "십" },
        { letter: "之", reading: "지" },
        { letter: "一", reading: "일" },
        { letter: "하여", isKor: true },
        { letter: "以", reading: "이" },
        { letter: "活", reading: "활" },
        { letter: "親", reading: "친" },
        { letter: "族", reading: "족" },
        { letter: "하고", isKor: true },
      ],
      sound: "/sound/5/116/1.mp3", // 실제 경로로 수정 필요
      content: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          만덕이{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="십분의 일"
            width={170}
            height={80}
          />
          을 취하여 친족을 살리고,
        </div>
      ),
    },
    {
      chinese: [
        { letter: "其", reading: "기" },
        { letter: "餘", reading: "여" },
        { letter: "盡", reading: "진" },
        { letter: "輸", reading: "수" },
        { letter: "之", reading: "지" },
        { letter: "官", reading: "관" },
        { letter: "이라", isKor: true },
      ],
      sound: "/sound/5/116/2.mp3", // 실제 경로로 수정 필요
      content: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          나머지는 모두 관아로 실어 보냈다.
        </div>
      ),
    },
    {
      chinese: [
        { letter: "浮", reading: "부" },
        { letter: "黃", reading: "황" },
        { letter: "者", reading: "자" },
        { letter: "가", isKor: true },
        { letter: "聞", reading: "문" },
        { letter: "之", reading: "지" },
        { letter: "하고", isKor: true },
        { letter: "集", reading: "집" },
        { letter: "官", reading: "관" },
        { letter: "庭", reading: "정" },
        { letter: "如", reading: "여" },
        { letter: "雲", reading: "운" },
        { letter: "이라", isKor: true },
      ],
      sound: "/sound/5/116/3.mp3", // 실제 경로로 수정 필요
      content: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          굶주려 병든 사람들이 그것을 듣고 관청의 뜰에{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="구름과 같이"
            width={170}
            height={80}
          />{" "}
          모여들었다.
        </div>
      ),
    },
    {
      chinese: [
        { letter: "男", reading: "남" },
        { letter: "若", reading: "약" },
        { letter: "女", reading: "여" },
        { letter: "가", isKor: true },
        { letter: "出", reading: "출" },
        { letter: "而", reading: "이" },
        { letter: "頌", reading: "송" },
        { letter: "萬", reading: "만" },
        { letter: "德", reading: "덕" },
        { letter: "之", reading: "지" },
        { letter: "恩", reading: "은" },
        { letter: "하니라", isKor: true },
      ],
      sound: "/sound/5/116/4.mp3", // 실제 경로로 수정 필요
      content: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          남자와 여자들이 나와서{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="만덕의 은혜"
            width={170}
            height={80}
          />
          를 칭송하였다.
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
            <MainContentChineseAndReading
              data={data[step - 1]}
              showReading={showReading}
              setShowReading={setShowReading}
              showMeaning={showMeaning}
              setShowMeaning={setShowMeaning}
            />
          </div>
        </ContentContainer>
        {/* )} */}
      </LearnMainContentPageTemplate>
      <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
