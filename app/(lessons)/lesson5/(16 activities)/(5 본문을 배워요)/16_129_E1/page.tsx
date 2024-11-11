"use client";

import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import { LearnMainContentPageTemplate } from "@/app/pages/learn-main-content/learn-main-content-page-template";
import { useContext, useEffect, useState } from "react";
import { FlippableCard_60 } from "@/app/components/flippable-card/flippable-card";
import { ContentContainer } from "@/app/components/content-container";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕6.png";
import BACKGROUND2 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕9.png";
import BACKGROUND3 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕12.png";
import BACKGROUND4 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕16.png";
import { MainContentChineseAndReading } from "@/app/components/main-content/chinese-and-reading";
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
        { letter: "萬", reading: "만" },
        { letter: "德", reading: "덕" },
        { letter: "이", isKor: true },
        { letter: "取", reading: "취" },
        { letter: "十", reading: "십" },
        {
          letter: "之",
          reading: "지",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/5/p129_word000.mp3").play()}
                className="font-haeseo text-[50px] leading-tight tracking-[-5px] -mr-1 cursor-pointer"
              >
                十之一
              </span>
              : 열의 하나 → 1/10
            </>
          ),
        },
        { letter: "一", reading: "일" },
        { letter: "하여", isKor: true },
        { letter: "以", reading: "이" },
        {
          letter: "活",
          reading: "활",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/5/p129_word001.mp3").play()}
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] pr-2 cursor-pointer"
              >
                活
              </span>
              : 살리다
            </p>
          ),
        },
        { letter: "親", reading: "친" },
        { letter: "族", reading: "족" },
        { letter: "하고", isKor: true },
      ],
      sound: "/sound/5/128/2-1.mp3",
      content: (
        <div className="flex flex-wrap text-[50px] tracking-normal font-bold">
          만덕이
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 ml-5 mr-7 inline-block"
            text="십분의 일"
            width={270}
            height={80}
          />
          을 취하여 친족을 살리고,
        </div>
      ),
      flippableCardData: true,
    },
    {
      chinese: [
        { letter: "其", reading: "기" },
        {
          letter: "餘",
          reading: "여",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/5/p129_word002.mp3").play()}
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] pr-0 cursor-pointer"
              >
                餘
              </span>
              : 나머지
            </>
          ),
        },
        {
          letter: "盡",
          reading: "진",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/5/p129_word003.mp3").play()}
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] pr-2 cursor-pointer"
              >
                盡
              </span>
              : 모두
            </p>
          ),
        },
        { letter: "輸", reading: "수" },
        { letter: "之", reading: "지" },
        { letter: "官", reading: "관" },
        { letter: "이라.", isKor: true },
      ],
      sound: "/sound/5/128/2-2.mp3",
      content: (
        <div className="flex flex-wrap text-[50px] tracking-normal font-bold">
          나머지는 모두 관아로 실어 보냈다.
        </div>
      ),
    },
    {
      chinese: [
        {
          letter: "浮黃",
          reading: "부황",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/5/p129_word004.mp3").play()}
                className="font-haeseo text-[50px] leading-tight tracking-[-5px] -mr-2 cursor-pointer"
              >
                浮黃
              </span>{" "}
              : 오래 굶주려서 살이 붓고 누렇게 되는 병. 부황병.
            </>
          ),
        },
        { letter: "者", reading: "자" },
        { letter: "가", isKor: true },
        { letter: "聞", reading: "문" },
        {
          letter: "之",
          reading: "지",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/5/p129_word005.mp3").play()}
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] pr-2 cursor-pointer"
              >
                之
              </span>
              : 그것
            </p>
          ),
        },
        { letter: "하고", isKor: true },
        { letter: "集", reading: "집" },
        { letter: "官", reading: "관" },
        { letter: "庭", reading: "정" },
        {
          letter: "如",
          reading: "여",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/5/p129_word006.mp3").play()}
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] pr-2 cursor-pointer"
              >
                如
              </span>
              : 같다
            </p>
          ),
        },
        { letter: "雲", reading: "운" },
        { letter: "이라.", isKor: true },
      ],
      sound: "/sound/5/128/3.mp3",
      content: (
        <div className="flex flex-wrap text-[50px] leading-[95px] -mt-[10px] font-bold mr-20">
          굶주려 병든 사람들이 그것을 듣고 관청의 뜰에
          <FlippableCard_60
            active={showMeaning}
            className="mt-1 mr-6 inline-block"
            text="구름과 같이"
            width={310}
            height={80}
          />
          모여들었다.
        </div>
      ),
      flippableCardData: true,
    },
    {
      chinese: [
        { letter: "男", reading: "남" },
        {
          letter: "若",
          reading: "약",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/5/p129_word007.mp3").play()}
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] pr-0 cursor-pointer"
              >
                若
              </span>
              : ① 같다, ②
              <span className="underline underline-offset-[10px]">~와/과</span>
            </>
          ),
        },
        { letter: "女", reading: "여" },
        { letter: "가", isKor: true },
        { letter: "出", reading: "출" },
        {
          letter: "而",
          reading: "이",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/5/p129_word008.mp3").play()}
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] pr-1 cursor-pointer"
              >
                而
              </span>
              : ~해서
            </p>
          ),
        },
        {
          letter: "頌",
          reading: "송",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/5/p129_word009.mp3").play()}
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] pr-2 cursor-pointer"
              >
                頌
              </span>
              : 기리다, 칭송하다
            </p>
          ),
        },
        { letter: "萬", reading: "만" },
        { letter: "德", reading: "덕" },
        { letter: "之", reading: "지" },
        { letter: "恩", reading: "은" },
        { letter: "하니라.", isKor: true },
      ],
      sound: "/sound/5/128/4.mp3",
      content: (
        <div className="flex flex-wrap text-[50px] tracking-normal font-bold">
          남자와 여자들이 나와서
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 ml-5 mr-6 inline-block"
            text="만덕의 은혜"
            width={310}
            height={80}
          />
          를 칭송하였다.
        </div>
      ),
      flippableCardData: true,
    },
  ];

  return (
    <>
      <LearnMainContentPageTemplate>
        <RightTopStepContainer maxStep={4} step={step} onStepChange={setStep} />

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
      <img
        src={
          step === 1
            ? BACKGROUND1.src
            : step === 2
              ? BACKGROUND2.src
              : step === 3
                ? BACKGROUND3.src
                : step === 4
                  ? BACKGROUND4.src
                  : ""
        }
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
