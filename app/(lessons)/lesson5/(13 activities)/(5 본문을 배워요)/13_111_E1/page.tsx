"use client";

import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import { LearnMainContentPageTemplate } from "@/app/pages/learn-main-content/learn-main-content-page-template";
import { useEffect, useState } from "react";
import { FlippableCard_60 } from "@/app/components/flippable-card/flippable-card";
import { ContentContainer } from "@/app/components/content-container";
import { SOUND } from "@/app/utils/sound-player";
import { MainContentChineseAndReading } from "@/app/components/main-content/chinese-and-reading";
import BACKGROUND1 from "@/app/bgpng_temp/13/중등한문_귀에 대고 말한 까닭6.png";
import BACKGROUND2 from "@/app/bgpng_temp/13/중등한문_귀에 대고 말한 까닭9.png";
import BACKGROUND3 from "@/app/bgpng_temp/13/중등한문_귀에 대고 말한 까닭14.png";

export default function Page() {
  const [step, setStep] = useState(1);

  const [showReading, setShowReading] = useState(false);
  const [showMeaning, setShowMeaning] = useState(false);

  useEffect(() => {
    setShowReading(false);
    setShowMeaning(false);
  }, [step]);

  const data = [
    {
      chinese: [
        {
          letter: "雖",
          reading: "수",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/5/p111_word000.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                雖
              </span>
              : 비록 ~일지라도
            </>
          ),
        },
        { letter: "畜", reading: "축" },
        { letter: "物", reading: "물" },
        { letter: "이나", isKor: true, className: "mr-5" },
        { letter: "其", reading: "기" },
        { letter: "心", reading: "심" },
        {
          letter: "與",
          reading: "여",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/5/p111_word001.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                與
              </span>
              : ① 더불어, ② 주다, ③<span className="underline underline-offset-2">~와/과</span>
            </p>
          ),
        },
        { letter: "人", reading: "인" },
        { letter: "同", reading: "동" },
        { letter: "也", reading: "야" },
        { letter: "라.", isKor: true },
      ],
      sound: "/sound/5/110/2.mp3",
      content: (
        <div className="flex flex-wrap text-[50px] font-bold">
          비록
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 ml-5 mr-6 inline-block"
            text="가축"
            width={170}
            height={80}
          />
          이라도 그 마음은
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 ml-5 mr-6 inline-block"
            text="사람과"
            width={200}
            height={80}
          />
          같습니다.
        </div>
      ),
    },
    {
      chinese: [
        { letter: "此", reading: "차" },
        {
          letter: "勝",
          reading: "승",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/5/p111_word002.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                勝
              </span>
              : ① 이기다, ②<span className="underline underline-offset-2">낫다</span>
            </>
          ),
        },
        {
          letter: "則",
          reading: "즉",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/5/p111_word003.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                則
              </span>
              : ~하면
            </>
          ),
        },
        { letter: "彼", reading: "피" },
        {
          letter: "劣",
          reading: "렬",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/5/p111_word004.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                劣
              </span>
              : 못하다
            </>
          ),
        },
        { letter: "이니", isKor: true, className: "mr-5" },
        {
          letter: "使",
          reading: "사",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/5/p111_word005.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                使
              </span>
              : ~로 하여금 ~하게 하다
            </>
          ),
        },
        { letter: "牛", reading: "우" },
        { letter: "聞", reading: "문" },
        { letter: "之", reading: "지" },
        { letter: "면", isKor: true },
      ],
      sound: "/sound/5/110/3.mp3",
      content: (
        <>
          <div className="flex flex-wrap text-[50px] font-bold">
            이것(누런 소)이
            <FlippableCard_60
              active={showMeaning}
              className="-mt-2 ml-5 mr-6 inline-block"
              text="나으면"
              width={220}
              height={80}
            />
            저것(검은 소)은
          </div>
          <div className="flex flex-wrap mt-10 text-[50px] font-bold">
            <FlippableCard_60
              active={showMeaning}
              className="-mt-2 mr-6 inline-block"
              text="못한 것이니"
              width={300}
              height={80}
            />
            소로 하여금 그것을 듣게 하면,
          </div>
        </>
      ),
    },
    {
      chinese: [
        {
          letter: "寧",
          reading: "영",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/5/p111_word006.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                寧~乎
              </span>
              : 어찌~겠는가?
            </>
          ),
        },
        { letter: "無", reading: "무" },
        {
          letter: "不",
          reading: "불",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/5/p111_word007.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                不平(불평)
              </span>
              : 마음에 들지 아니하여 못마땅하게 여김.
            </>
          ),
        },
        { letter: "平", reading: "평" },
        { letter: "之", reading: "지" },
        { letter: "心", reading: "심" },
        { letter: "乎", reading: "호" },
        { letter: "리오?", isKor: true },
      ],
      sound: "/sound/5/110/4.mp3",
      content: (
        <div className="flex flex-wrap text-[50px] font-bold">
          어찌
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 ml-5 mr-6 inline-block"
            text="불평"
            width={170}
            height={80}
          />
          하는 마음이 없겠습니까?
        </div>
      ),
    },
  ];

  return (
    <>
      <LearnMainContentPageTemplate>
        <RightTopStepContainer maxStep={3} step={step} onStepChange={setStep} />

        <ContentContainer className="w-[1760px] grid grid-cols-[1fr]">
          <div className="absolute w-[1480px] top-[228px] left-[280px]">
            <MainContentChineseAndReading
              data={data[step - 1]}
              showReading={showReading}
              setShowReading={setShowReading}
              showMeaning={showMeaning}
              setShowMeaning={setShowMeaning}
            />
          </div>
        </ContentContainer>

      </LearnMainContentPageTemplate>
      <img src={
        step === 1 ? BACKGROUND1.src :
          step === 2 ? BACKGROUND2.src :
            step === 3 ? BACKGROUND3.src : ""
      } className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
