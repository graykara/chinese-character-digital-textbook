"use client";

import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import { LearnMainContentPageTemplate } from "@/app/pages/learn-main-content/learn-main-content-page-template";
import { useEffect, useState } from "react";
import { FlippableCard } from "@/app/components/flippable-card/flippable-card";
import { ContentContainer } from "@/app/components/content-container";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/10/중등한문_이야기가 담긴 성어27.png";
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
        { letter: "背", reading: "배" },
        { letter: "水", reading: "수" },
        { letter: "陣", reading: "진" },
      ],
      sound: "/sound/3/80/1.mp3",
      content1: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          물을{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="등지고"
            width={220}
            height={80}
          />{" "}
          지는 진.
        </div>
      ),
      content2: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          어떤 일을 성취하기 위하여 더 이상 물러설 수 없음.
        </div>
      ),
    },
    {
      chinese: [
        { letter: "多", reading: "다" },
        { letter: "多", reading: "다" },
        {
          letter: "益",
          reading: "익",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/3/p081_word000.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                益
              </span>
              : ① 더하다, ② 더욱
            </>
          ),
        },
        {
          letter: "善",
          reading: "선",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/3/p081_word001.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                善
              </span>
              : ① 착하다, ② 좋다
            </>
          ),
        },
      ],
      sound: "/sound/3/80/2.mp3",
      content1: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          많으면 많을수록 더욱{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="좋음"
            width={170}
            height={80}
          />
        </div>
      ),
      content2: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          많이 보탤수록 더 큰 능력을 발휘할 수 있음.
        </div>
      ),
    },
    {
      chinese: [
        { letter: "三", reading: "삼" },
        { letter: "人", reading: "인" },
        { letter: "成", reading: "성" },
        { letter: "虎", reading: "호" },
      ],
      sound: "/sound/3/80/3.mp3",
      content1: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          세 사람이면{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="호랑이"
            width={220}
            height={80}
          />
          를 만듦.
        </div>
      ),
      content2: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          근거 없는 말이라도 여러 사람이 말하면 곧이듣게 됨.
        </div>
      ),
    },
    {
      chinese: [
        { letter: "結", reading: "결" },
        { letter: "草", reading: "초" },
        {
          letter: "報",
          reading: "보",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/3/p081_word002.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                報
              </span>
              : ① 알리다, ② 갚다
            </>
          ),
        },
        { letter: "恩", reading: "은" },
      ],
      sound: "/sound/3/80/4.mp3",
      content1: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="풀"
            width={170}
            height={80}
          />
          을 엮어{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="은혜"
            width={170}
            height={80}
          />
          를 갚음.
        </div>
      ),
      content2: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          죽은 뒤에라도 은혜를 잊지 않고 갚음.
        </div>
      ),
    },
  ];

  return (
    <>
      <LearnMainContentPageTemplate>
        <RightTopStepContainer maxStep={4} step={step} onStepChange={setStep} />

        <MainContentVideoButton
          video="/video/writing/80p_1.mp4"
          className="absolute left-[112px] top-[40px]"
        />

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
