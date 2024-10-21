"use client";

import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import IMAGE1 from "./image1.png";
import { LearnMainContentPageTemplate } from "@/app/pages/learn-main-content/learn-main-content-page-template";
import { useEffect, useState } from "react";
import { FlippableCard } from "@/app/components/flippable-card/flippable-card";
import { PillButton } from "@/app/components/buttons/pill-button";
import { ContentContainer } from "@/app/components/content-container";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕14.png";

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
      chinese: ["雖畜物", "이나\xa0", "其心與人同也", "라"],
      reading:
        "수\xa0\xa0\xa0축\xa0\xa0\xa0물\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0기\xa0\xa0\xa0심\xa0\xa0\xa0여\xa0\xa0\xa0인\xa0\xa0\xa0동\xa0\xa0\xa0야",
      sound: "/sound/5/110/2.mp3",
      content: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold -mb-[75px] -mr-20">
          비록{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="가축"
            width={170}
            height={80}
          />
          &nbsp; 이라도 그 마음은
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="사람과"
            width={200}
            height={80}
          />
          &nbsp; 같습니다.
        </div>
      ),
    },
    {
      chinese: ["此勝則彼劣", "이니\xa0", "使牛聞之", "면"],
      reading:
        "차\xa0\xa0\xa0승\xa0\xa0\xa0즉\xa0\xa0\xa0피\xa0\xa0\xa0렬\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0사\xa0\xa0\xa0우\xa0\xa0\xa0문\xa0\xa0\xa0지",
      sound: "/sound/5/110/3.mp3",
      content: (
        <div className="flex flex-wrap text-[50px] tracking-tighter -mt-4 leading-loose font-bold -mr-10">
          {"이것(누런 소)이 "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 mt-2 inline-block"
            text="나으면"
            width={220}
            height={80}
          />
          {"\xa0\xa0저것(검은 소)은"}
          <FlippableCard
            active={showMeaning}
            className="mt-2 inline-block"
            text="못한 것이니"
            width={300}
            height={80}
          />
          {"\xa0\xa0\xa0"}
          소로 하여금 그것을 듣게 하면,
        </div>
      ),
    },
    {
      chinese: ["寧無不平之心乎", "리오?"],
      reading:
        "영\xa0\xa0\xa0무\xa0\xa0\xa0불\xa0\xa0\xa0평\xa0\xa0\xa0지\xa0\xa0\xa0심\xa0\xa0\xa0호",
      sound: "/sound/5/110/4.mp3",
      content: (
        <div className="flex flex-wrap text-[50px] tracking-tighter -mt-4 leading-loose font-bold -mr-10">
          어찌{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 mt-2 inline-block"
            text="불평"
            width={170}
            height={80}
          />
          &nbsp; 하는 마음이 없겠습니까?
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
            <div className="relative items-start left-[210px] w-[1100px]">
              <span className="font-haeseo text-[100px] text-left">
                {data[step - 1]?.chinese[0]}
              </span>
              <span className="text-[50px] text-left">
                {data[step - 1]?.chinese[1]}
              </span>
              <span className="font-haeseo text-[100px] text-left">
                {data[step - 1]?.chinese[2]}
              </span>
              <span className="text-[50px] text-left">
                {data[step - 1]?.chinese[3]}
              </span>
            </div>
            <div className="flex flex-col gap-16 mt-5">
              <div className="grid grid-cols-[180px__1fr] gap-10">
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
                  className={`text-main-content text-[60px] h-[60px] -mt-3 ml-5 tracking-wide ${showReading ? "animate__animated animate__slideInDown" : ""}`}
                >
                  {showReading ? data[step - 1]?.reading : null}
                </div>
              </div>
              <div className="grid grid-cols-[180px__1100px] gap-10">
                <PillButton
                  active={showMeaning}
                  onClick={() => setShowMeaning(!showMeaning)}
                  text="풀이"
                  checkboxColor="#306875"
                  backgroundColor="#4f9aab"
                />
                <div key={step}>
                  <div>{data[step - 1]?.content ?? null}</div>
                </div>
              </div>
            </div>
          </div>
        </ContentContainer>
        {/* )} */}
      </LearnMainContentPageTemplate>
      {/* <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
}
