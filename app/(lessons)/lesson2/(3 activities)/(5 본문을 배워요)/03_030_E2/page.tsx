"use client";

import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import IMAGE3 from "./image3.png";
import IMAGE4 from "./image4.png";
import IMAGE5 from "./image5.png";
import IMAGE6 from "./image6.png";
import IMAGE7 from "./image7.png";
import { LearnMainContentPageTemplate } from "@/app/pages/learn-main-content/learn-main-content-page-template";
import { useEffect, useState } from "react";
import { FlippableCard } from "@/app/components/flippable-card/flippable-card";
import { PillButton } from "@/app/components/buttons/pill-button";
import { ContentContainer } from "@/app/components/content-container";
import { Howl } from "howler";
import BACKGROUND1 from "@/app/bgpng_temp/3/중등한문_그려서 만든 한자26.png";
import { MainContentVideoButton } from "@/app/components/main-content/video-button";

export default function Page() {
  const [step, setStep] = useState(1);

  const [showReading, setShowReading] = useState(false);
  const [showMeaning, setShowMeaning] = useState(false);
  const [showResource, setShowResource] = useState(false);

  useEffect(() => {
    setShowReading(false);
    setShowMeaning(false);
    setShowResource(false);
  }, [step]);

  const data = [
    {
      chinese: "一",
      reading: "일",
      meaning: "하나",
      content: (
        <div className="flex items-center flex-wrap">
          선 하나를 그어서{" "}
          <FlippableCard
            active={showResource}
            className="mx-5 inline-block"
            text="하나"
            width={210}
            height={80}
          />
          {"\xa0"}
          라는 뜻을 나타냄.
        </div>
      ),
      resource: IMAGE2.src,
    },
    {
      chinese: "上",
      reading: "상",
      meaning: "위",
      content: (
        <div className="flex items-center flex-wrap">
          기준선{" "}
          <FlippableCard
            active={showResource}
            className="mx-5 inline-block"
            text="위"
            width={180}
            height={80}
          />
          {"\xa0"}에 점을 찍어{" "}
          <FlippableCard
            active={showResource}
            className="mx-5 inline-block"
            text="위"
            width={180}
            height={80}
          />
          {"\xa0"}
          라는 뜻을 나타냄.
        </div>
      ),
      resource: IMAGE3.src,
    },
    {
      chinese: "下",
      reading: "하",
      meaning: "아래",
      content: (
        <div className="flex items-center flex-wrap">
          기준선{" "}
          <FlippableCard
            active={showResource}
            className="mx-5 inline-block"
            text="아래"
            width={180}
            height={80}
          />
          {"\xa0"}에 점을 찍어{" "}
          <FlippableCard
            active={showResource}
            className="mx-5 inline-block"
            text="아래"
            width={180}
            height={80}
          />
          {"\xa0"}
          라는 뜻을 나타냄.
        </div>
      ),
      resource: IMAGE4.src,
    },
    {
      chinese: "本",
      reading: "본",
      meaning: "근본",
      content: (
        <div className="flex items-center flex-wrap">
          나무
          <FlippableCard
            active={showResource}
            className="mx-5 inline-block"
            text="화"
            width={120}
            height={80}
          />
          {"\xa0"}
          부분에 선을 그어
          <FlippableCard
            active={showResource}
            className="mx-5 inline-block"
            text="월식"
            width={170}
            height={80}
          />
          {"\xa0"}
          이라는 뜻을 나타냄.
        </div>
      ),
      resource: IMAGE5.src,
    },
    {
      chinese: "末",
      reading: "말",
      meaning: "끝",
      content: (
        <div className="flex items-center flex-wrap">
          나뭇가지 끝부분에 선을 그어
          <FlippableCard
            active={showResource}
            className="mx-5 inline-block"
            text="일식"
            width={180}
            height={80}
          />
          {"\xa0"}
          이라는 뜻을 나타냄.
        </div>
      ),
      resource: IMAGE6.src,
    },
  ];

  return (
    <>
      <LearnMainContentPageTemplate>
        <RightTopStepContainer maxStep={7} step={step} onStepChange={setStep} />

        <MainContentVideoButton
          video="/video/writing/30p_1.mp4"
          className="absolute left-[112px] top-[40px]"
        />

        {step === 1 ? (
          <img src={IMAGE1.src} alt="image1" />
        ) : step === 7 ? (
          <div className="relative">
            <img src={IMAGE7.src} alt="image1" />
            <div className="absolute w-full left-1/2 -translate-x-1/2 bottom-[100px] grid grid-cols-5 gap-x-[50px] gap-y-[50px] px-[100px]">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v) => (
                <button
                  onClick={() =>
                    new Howl({
                      src: `/sound/2/31/${v}.mp3`,
                    }).play()
                  }
                  className="w-[150px] h-[120px]"
                />
              ))}
            </div>
          </div>
        ) : (
          <ContentContainer className="w-[1400px] h-full grid grid-cols-[1fr]">
            <div className="relative left-[0px] -top-[50px]">
              <div className="relative top-[80px] w-[1400px] text-center text-[215px]">
                <span className="font-haeseo">{data[step - 2]?.chinese}</span>
              </div>
              <div className="flex flex-col gap-16">
                <div className="grid grid-cols-[280px__750px] gap-10">
                  <PillButton
                    active={showReading}
                    onClick={() => {
                      if (!showReading) {
                        new Howl({
                          src: `/sound/2/30/${step - 1}.mp3`,
                        }).play();
                      }
                      setShowReading(!showReading);
                    }}
                    text="읽기"
                    checkboxColor="#23425e"
                    backgroundColor="#3a5e7c"
                  />
                  <div
                    className={`text-center text-main-content text-[60px] h-[60px]  ${showReading ? "animate__animated animate__slideInDown" : ""}`}
                  >
                    {showReading ? data[step - 2]?.reading : null}
                  </div>
                </div>
                <div className="grid grid-cols-[280px__750px] gap-10">
                  <PillButton
                    active={showMeaning}
                    onClick={() => setShowMeaning(!showMeaning)}
                    text="뜻"
                    checkboxColor="#306875"
                    backgroundColor="#4f9aab"
                  />
                  <div
                    className={`text-center text-main-content text-[60px] h-[60px]  ${showMeaning ? "animate__animated animate__slideInDown" : ""}`}
                  >
                    {showMeaning ? data[step - 2]?.meaning : null}
                  </div>
                </div>
                <div className="grid grid-cols-[180px__1fr] gap-10">
                  <PillButton
                    active={showResource}
                    onClick={() => setShowResource(!showResource)}
                    text="자원"
                    checkboxColor="#41466f"
                    backgroundColor="#7278a6"
                  />
                  <div
                    key={step}
                    className="text-[50px] leading-[62px] tracking-[-1.5px]"
                  >
                    {data[step - 2]?.content ?? null}
                    <div className="mt-10 w-[1000px] h-[115px] flex justify-center">
                      <div>
                        <img
                          src={data[step - 2]?.resource}
                          alt="resource"
                          className="inset-y-1/2"
                        />
                        {/* 이미지가 위아래 가운데에 위치하게 해주세요 */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ContentContainer>
        )}
      </LearnMainContentPageTemplate>
      {/* <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
}
