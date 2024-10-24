"use client";

import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./society.png";
import IMAGE3 from "./language.png";
import IMAGE4 from "./geography.png";
import IMAGE5 from "./fig_1.png";
import IMAGE6 from "./fig_2.png";
import IMAGE7 from "./fig_3.png";
import { LearnMainContentPageTemplate } from "@/app/pages/learn-main-content/learn-main-content-page-template";
import { useEffect, useState } from "react";
import { FlippableCard } from "@/app/components/flippable-card/flippable-card";
import { PillButton } from "@/app/components/buttons/pill-button";
import { ContentContainer } from "@/app/components/content-container";
import { Howl } from "howler";
import { MoveRight, Plus } from "lucide-react";
import { SOUND } from "@/app/utils/sound-player";
import { MainContentChineseAndReading } from "@/app/components/main-content/chinese-and-reading";
import BACKGROUND1 from "@/app/bgpng_temp/12/중등한문_나에게 힘이 되는 글8.png";

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
        { letter: "有", reading: "유" },
        { letter: "志", reading: "지" },
        { letter: "者", reading: "자" },
        { letter: "는", isKor: true, className: "mr-5" },
        { letter: "事", reading: "사" },
        { letter: "竟", reading: "경" },
        { letter: "成", reading: "성" },
        {
          letter: "也",
          reading: "야",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/4/p099_word000.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                也
              </span>
              : ~이다
            </>
          ),
        },
        { letter: "라.", isKor: true },
      ],
      sound: "/sound/4/98/1.mp3",
      content: (
        <div className="flex flex-wrap text-[50px] tracking-tight font-bold">
          뜻이 있는{" "}
          <FlippableCard
            active={showMeaning}
            className="ml-4 mr-5 inline-block"
            text="사람(자)"
            width={240}
            height={80}
          />
          은/는 일이{" "}
          <FlippableCard
            active={showMeaning}
            className="ml-5 mr-6 inline-block"
            text="마침내"
            width={210}
            height={80}
          />
          이루어진다.
        </div>
      ),
    },
    {
      chinese: [
        { letter: "天", reading: "천" },
        { letter: "下", reading: "하" },
        { letter: "無", reading: "무" },
        { letter: "無", reading: "무" },
        { letter: "一", reading: "일" },
        { letter: "能", reading: "능" },
        {
          letter: "之",
          reading: "지",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/4/p099_word001.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                之
              </span>
              : ~하는
            </>
          ),
        },
        { letter: "人", reading: "인" },
        { letter: "이라.", isKor: true },
      ],
      sound: "/sound/4/98/2.mp3",
      content: (
        <div className="flex flex-wrap text-[50px] tracking-normal font-bold mr-10">
          세상에 한 가지의 재능도{" "}
          <FlippableCard
            active={showMeaning}
            className="ml-3 mr-6 inline-block"
            text="없는"
            width={170}
            height={80}
          />
          사람은{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="없다."
            width={170}
            height={80}
          />
        </div>
      ),
    },
    {
      chinese: [
        { letter: "不", reading: "불" },
        {
          letter: "經",
          reading: "경",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/4/p099_word002.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                經
              </span>
              : ① 지나다, ②<span className="underline">경험하다</span>
            </>
          ),
        },
        { letter: "一", reading: "일" },
        { letter: "事", reading: "사" },
        { letter: "면", isKor: true, className: "mr-5" },
        { letter: "不", reading: "부" },
        {
          letter: "長",
          reading: "장",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/4/p099_word003.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                長
              </span>
              : 자라다
            </>
          ),
        },
        { letter: "一", reading: "일" },
        { letter: "智", reading: "지" },
        { letter: "니라.", isKor: true },
      ],
      sound: "/sound/4/98/3.mp3",
      content: (
        <div className="flex flex-wrap text-[50px] tracking-tighter font-bold">
          한 가지{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="일"
            width={130}
            height={80}
          />
          을 경험하지 않으면, 한 가지 지혜가
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="자라지"
            width={220}
            height={80}
          />
          않는다.
        </div>
      ),
    },
    {
      chinese: [
        { letter: "人", reading: "인" },
        { letter: "一", reading: "일" },
        { letter: "能", reading: "능" },
        {
          letter: "之",
          reading: "지",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/4/p099_word004.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                之
              </span>
              : 그것
            </>
          ),
        },
        { letter: "면", isKor: true, className: "mr-5" },
        {
          letter: "己",
          reading: "기",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/4/p099_word005.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                己
              </span>
              : 나
            </>
          ),
        },
        {
          letter: "百",
          reading: "백",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/4/p099_word006.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                百
              </span>
              : 백 번 하다
            </>
          ),
        },
        { letter: "之", reading: "지" },
        { letter: "하고", isKor: true },
      ],
      sound: "/sound/4/98/4.mp3",
      content: (
        <div className="flex flex-wrap text-[50px] tracking-normal font-bold">
          남이{" "}
          <FlippableCard
            active={showMeaning}
            className="ml-4 mr-6 inline-block"
            text="한 번에"
            width={240}
            height={80}
          />
          그것을 할 수 있으면
          <FlippableCard
            active={showMeaning}
            className="ml-4 mr-6 inline-block"
            text="나"
            width={130}
            height={80}
          />
          는 그것을 백 번 하고,
        </div>
      ),
    },
    {
      chinese: [
        { letter: "人", reading: "인" },
        { letter: "十", reading: "십" },
        { letter: "能", reading: "능" },
        { letter: "之", reading: "지" },
        { letter: "면", isKor: true, className: "mr-5" },
        { letter: "己", reading: "기" },
        {
          letter: "千",
          reading: "천",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/4/p099_word007.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                千
              </span>
              : 천 번 하다
            </>
          ),
        },
        { letter: "之", reading: "지" },
        { letter: "니라.", isKor: true },
      ],
      sound: "/sound/4/98/5.mp3",
      content: (
        <div className="flex flex-wrap text-[50px] tracking-normal font-bold">
          <FlippableCard
            active={showMeaning}
            className="ml-4 mr-6 inline-block"
            text="남"
            width={130}
            height={80}
          />
          이 열 번에 그것을 할 수 있으면 나는 그것을
          <FlippableCard
            active={showMeaning}
            className="ml-4 mr-6 inline-block"
            text="천 번 한다."
            width={280}
            height={80}
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <LearnMainContentPageTemplate>
        <RightTopStepContainer maxStep={5} step={step} onStepChange={setStep} />
        {/* {step === 1 ? (
          <img src={IMAGE1.src} alt="image1" />
        ) : ( */}
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
        {/* )} */}
      </LearnMainContentPageTemplate>
      <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
