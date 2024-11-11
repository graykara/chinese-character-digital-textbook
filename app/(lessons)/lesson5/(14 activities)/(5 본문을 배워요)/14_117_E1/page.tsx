"use client";

import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import { LearnMainContentPageTemplate } from "@/app/pages/learn-main-content/learn-main-content-page-template";
import { useContext, useEffect, useState } from "react";
import { FlippableCard_60 } from "@/app/components/flippable-card/flippable-card";
import { ContentContainer } from "@/app/components/content-container";
import { SOUND } from "@/app/utils/sound-player";
import { MainContentChineseAndReading } from "@/app/components/main-content/chinese-and-reading";
import BACKGROUND1 from "@/app/bgpng_temp/14/중등한문_사람만 귀한가요6.png";
import BACKGROUND2 from "@/app/bgpng_temp/14/중등한문_사람만 귀한가요9.png";
import BACKGROUND3 from "@/app/bgpng_temp/14/중등한문_사람만 귀한가요10.png";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

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
          letter: "以",
          reading: "이",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/5/p117_word000.mp3").play()}
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] pr-0 cursor-pointer"
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
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] pr-1 cursor-pointer"
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
        <>
          <div className="flex flex-wrap text-[50px] font-bold">
            사람으로서 만물을 보면
            <FlippableCard_60
              active={showMeaning}
              className="-mt-2 ml-5 mr-6 inline-block"
              text="사람"
              width={165}
              height={80}
            />
            이 귀하고
            <FlippableCard_60
              active={showMeaning}
              className="-mt-2 ml-5 mr-6 inline-block"
              text="만물"
              width={165}
              height={80}
            />
            이
          </div>
          <div className="flex flex-wrap  text-[50px] font-bold">
            천하며
          </div>
        </>
      ),
      flippableCardData: true,
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
        { letter: "이라.", isKor: true },
      ],
      sound: "/sound/5/116/2.mp3",
      content: (
        <div className="flex flex-wrap text-[50px] font-bold">
          만물로서 사람을 보면
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 ml-5 mr-6 inline-block"
            text="만물"
            width={160}
            height={80}
          />
          이 귀하고
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 ml-5 mr-6 inline-block"
            text="사람"
            width={160}
            height={80}
          />
          이 천하다.
        </div>
      ),
      flippableCardData: true,
    },
    {
      chinese: [
        {
          letter: "自",
          reading: "자",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/5/p117_word002.mp3").play()}
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] pr-0 cursor-pointer"
              >
                自
              </span>
              : ~로부터
            </>
          ),
        },
        {
          letter: "天",
          reading: "천",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/5/p117_word003.mp3").play()}
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] pr-0 cursor-pointer"
              >
                自天
              </span>
              : 하늘로부터, 하늘의 관점에서
            </>
          ),
        },
        { letter: "而", reading: "이" },
        { letter: "視", reading: "시" },
        {
          letter: "之",
          reading: "지",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/5/p117_word005.mp3").play()}
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] pr-0 cursor-pointer"
              >
                之
              </span>
              : 그것 → 
              <span
                onClick={() => SOUND("/sound/5/p117_word006.mp3").play()}
                className="font-haeseo text-[50px] leading-tight tracking-[-5px] pr-0 cursor-pointer"
              >
                人與物
              </span>
            </>
          ),
        },
        { letter: "면", isKor: true, className: "mr-5" },
        { letter: "人", reading: "인" },
        {
          letter: "與",
          reading: "여",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/5/p117_word004.mp3").play()}
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] pr-0 cursor-pointer"
              >
                與
              </span>
              : ~와/과
            </>
          ),
        },
        { letter: "物", reading: "물" },
        { letter: "均", reading: "균" },
        { letter: "也", reading: "야" },
        { letter: "라.", isKor: true },
      ],
      sound: "/sound/5/116/3.mp3",
      content: (
        <div className="flex flex-wrap text-[50px] font-bold">
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 mr-5 inline-block"
            text="하늘"
            width={165}
            height={80}
          />
          로부터 그것을 보면 사람과 만물은
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 ml-5 mr-6 inline-block"
            text="균등"
            width={165}
            height={80}
          />
          하다.
        </div>
      ),
      flippableCardData: true,
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
      } className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
