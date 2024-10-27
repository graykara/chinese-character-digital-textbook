"use client";

import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import { LearnMainContentPageTemplate } from "@/app/pages/learn-main-content/learn-main-content-page-template";
import { useEffect, useState } from "react";
import { FlippableCard_60 } from "@/app/components/flippable-card/flippable-card";
import { ContentContainer } from "@/app/components/content-container";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어210.png";
import BACKGROUND2 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어212.png";
import BACKGROUND3 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어217.png";
import BACKGROUND4 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어220.png";
import { MainContent } from "../../../main-content";
import { MainContentVideoButton } from "@/app/components/main-content/video-button";

export default function Page() {
  const [step, setStep] = useState(1);

  const [showReading, setShowReading] = useState(false);
  const [showMeaning, setShowMeaning] = useState(false);
  const [showMeaning2, setShowMeaning2] = useState(false);

  useEffect(() => {
    setShowReading(false);
    setShowMeaning(false);
  }, [step]);

  const data = [
    {
      chinese: [
        { letter: "龍", reading: "용" },
        { letter: "頭", reading: "두" },
        { letter: "蛇", reading: "사" },
        { letter: "尾", reading: "미" },
      ],
      sound: "/sound/3/68/1.mp3",
      content1: (
        <div className="flex flex-wrap text-[50px] font-bold">
          용 머리에 뱀
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 ml-5 inline-block"
            text="꼬리"
            width={180}
            height={80}
          />
        </div>
      ),
      content2: (
        <div className="flex flex-wrap text-[50px] font-bold">
          처음은 왕성하나 끝이 부진한 현상.
        </div>
      ),
    },
    {
      chinese: [
        {
          letter: "易",
          reading: "역",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/3/p069_word000.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                易
              </span>
              : ① (역) 바꾸다, ② (이) 쉽다
            </>
          ),
        },
        {
          letter: "地",
          reading: "지",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/3/p069_word001.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                地
              </span>
              : ① 땅, ② 처지
            </>
          ),
        },
        { letter: "思", reading: "사" },
        {
          letter: "之",
          reading: "지",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/3/p069_word002.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                之
              </span>
              : 그것
            </>
          ),
        },
      ],
      sound: "/sound/3/68/2.mp3",
      content1: (
        <div className="flex flex-wrap text-[50px] font-bold">
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 mr-6 inline-block"
            text="처지"
            width={170}
            height={80}
          />
          를 바꾸어 그것을
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 ml-5 mr-6 inline-block"
            text="생각함"
            width={220}
            height={80}
          />
        </div>
      ),
      content2: (
        <div className="flex flex-wrap text-[50px] font-bold">
          상대방의 처지나 형편에서 생각해 보고 이해함
        </div>
      ),
    },
    {
      chinese: [
        { letter: "苦", reading: "고" },
        {
          letter: "盡",
          reading: "진",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/3/p069_word003.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                盡
              </span>
              : ① 다하다, ② 모두
            </>
          ),
        },
        { letter: "甘", reading: "감" },
        { letter: "來", reading: "래" },
      ],
      sound: "/sound/3/68/3.mp3",
      content1: (
        <div className="flex flex-wrap text-[50px] font-bold">
          쓴 것이
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 ml-5 mr-8 inline-block"
            text="다하면"
            width={220}
            height={80}
          />
          단 것이 옴.
        </div>
      ),
      content2: (
        <div className="flex flex-wrap text-[50px] font-bold">
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
      sound: "/sound/3/68/4.mp3",
      content1: (
        <div className="flex flex-wrap text-[50px] font-bold">
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 mr-8 inline-block"
            text="눈"
            width={130}
            height={80}
          />
          위에 서리가
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 ml-5 inline-block"
            text="내림"
            width={180}
            height={80}
          />
        </div>
      ),
      content2: (
        <div className="flex flex-wrap text-[50px] font-bold">
          난처한 일이나 불행한 일이 잇따라 일어남.
        </div>
      ),
    },
  ];

  return (
    <>
      <LearnMainContentPageTemplate>
        <RightTopStepContainer maxStep={4} step={step} onStepChange={setStep} />

        <MainContentVideoButton
          video="/video/writing/68p_1.mp4"
          className="absolute left-[112px] top-[40px]"
        />

        <ContentContainer className="!justify-start w-[1760px] px-[130px]">

          <MainContent
            data={data[step - 1]}
            showReading={showReading}
            setShowReading={setShowReading}
            showMeaning={showMeaning}
            setShowMeaning={setShowMeaning}
            showMeaning2={showMeaning2}
            setShowMeaning2={setShowMeaning2}
          />

        </ContentContainer>

      </LearnMainContentPageTemplate>
      <img src={
        step === 1 ? BACKGROUND1.src :
          step === 2 ? BACKGROUND2.src :
            step === 3 ? BACKGROUND3.src :
              step === 4 ? BACKGROUND4.src : ""
      } className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
