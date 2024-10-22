"use client";

import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import IMAGE1 from "./image1.png";
import { LearnMainContentPageTemplate } from "@/app/pages/learn-main-content/learn-main-content-page-template";
import { useEffect, useState } from "react";
import { FlippableCard } from "@/app/components/flippable-card/flippable-card";
import { PillButton } from "@/app/components/buttons/pill-button";
import { ContentContainer } from "@/app/components/content-container";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/14/중등한문_사람만 귀한가요6.png";
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
        {
          letter: "以",
          reading: "이",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/5/p117_word000.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                以
              </span>
              : ~으로서
            </>
          ),
        },
        { letter: "人", reading: "인" },
        { letter: "視", reading: "시" },
        { letter: "物", reading: "물" },
        { letter: "이면", isKor: true, className: "mr-5" },
        { letter: "人", reading: "인" },
        { letter: "貴", reading: "귀" },
        {
          letter: "而",
          reading: "이",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/5/p117_word001.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                而
              </span>
              : 그리고
            </p>
          ),
        },
        { letter: "物", reading: "물" },
        { letter: "賤", reading: "천" },
        { letter: "이요", isKor: true },
      ],
      sound: "/sound/5/116/1.mp3",
      content: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          사람으로서 만물을 보면{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="사람"
            width={170}
            height={80}
          />
          이 귀하고{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="만물"
            width={170}
            height={80}
          />
          천하며
        </div>
      ),
    },
    {
      chinese: [
        { letter: "以", reading: "이" },
        { letter: "物", reading: "물" },
        { letter: "視", reading: "시" },
        { letter: "人", reading: "인" },
        { letter: "이면", isKor: true, className: "mr-5" },
        { letter: "物", reading: "물" },
        { letter: "貴", reading: "귀" },
        { letter: "而", reading: "이" },
        { letter: "人", reading: "인" },
        { letter: "賤", reading: "천" },
        { letter: "이라", isKor: true },
      ],
      sound: "/sound/5/116/2.mp3", // This is a placeholder, adjust as needed
      content: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          만물로서 사람을 보면{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="만물"
            width={170}
            height={80}
          />
          이 귀하고{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="사람"
            width={170}
            height={80}
          />
          이 천하다
        </div>
      ),
    },
    {
      chinese: [
        { letter: "自", reading: "자", additional: "自: ~로부터" },
        {
          letter: "天",
          reading: "천",
          additional: "自天: 하늘로부터, 하늘의 관점에서",
        },
        { letter: "而", reading: "이" },
        { letter: "視", reading: "시" },
        { letter: "之", reading: "지", additional: "之: 그것 →人與物" },
        { letter: "면", isKor: true, className: "mr-5" },
        { letter: "人", reading: "인" },
        { letter: "與", reading: "여", additional: "與: ~와/과" },
        { letter: "物", reading: "물" },
        { letter: "均", reading: "균" },
        { letter: "也", reading: "야" },
        { letter: "다", isKor: true },
      ],
      sound: "/sound/5/116/1.mp3", // This is a placeholder, adjust as needed
      content: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="하늘"
            width={170}
            height={80}
          />
          로부터 그것을 보면 사람과 만물은{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="균등"
            width={170}
            height={80}
          />
          하다
        </div>
      ),
    },
  ];

  return (
    <>
      <LearnMainContentPageTemplate>
        <RightTopStepContainer maxStep={3} step={step} onStepChange={setStep} />
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
