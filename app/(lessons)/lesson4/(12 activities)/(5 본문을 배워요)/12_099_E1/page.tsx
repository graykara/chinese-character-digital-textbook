"use client";

import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import { LearnMainContentPageTemplate } from "@/app/pages/learn-main-content/learn-main-content-page-template";
import { useEffect, useState } from "react";
import { FlippableCard_60 } from "@/app/components/flippable-card/flippable-card";
import { ContentContainer } from "@/app/components/content-container";
import { Howl } from "howler";
import { SOUND } from "@/app/utils/sound-player";
import IMAGE1 from "./popup_1.png";
import IMAGE2 from "./popup_2.png";
import { MainContentChineseAndReading } from "@/app/components/main-content/chinese-and-reading";
import { MainContentModalButton } from "@/app/components/main-content/modal-button";
import BACKGROUND1 from "@/app/bgpng_temp/12/중등한문_나에게 힘이 되는 글8.png";
import BACKGROUND2 from "@/app/bgpng_temp/12/중등한문_나에게 힘이 되는 글10.png";
import BACKGROUND3 from "@/app/bgpng_temp/12/중등한문_나에게 힘이 되는 글12.png";
import BACKGROUND4 from "@/app/bgpng_temp/12/중등한문_나에게 힘이 되는 글16.png";
import BACKGROUND5 from "@/app/bgpng_temp/12/중등한문_나에게 힘이 되는 글21.png";

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
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] cursor-pointer"
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
        <>
          <div className="flex flex-wrap text-[50px] font-bold">
            뜻이 있는
            <FlippableCard_60
              active={showMeaning}
              className="-mt-2 ml-4 mr-5 inline-block"
              text="사람(자)"
              width={250}
              height={80}
            />
            은/는 일이
            <FlippableCard_60
              active={showMeaning}
              className="-mt-2 ml-5 mr-6 inline-block"
              text="마침내"
              width={220}
              height={80}
            />
          </div>
          <div className="flex flex-wrap text-[50px] font-bold mt-2">
            이루어진다.
          </div>
        </>
      ),
      flippableCardData: true,
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
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] cursor-pointer"
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
          세상에 한 가지의 재능도
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 ml-3 mr-6 inline-block"
            text="없는"
            width={170}
            height={80}
          />
          사람은
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 mx-5 inline-block"
            text="없다."
            width={170}
            height={80}
          />
        </div>
      ),
      flippableCardData: true,
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
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] cursor-pointer"
              >
                經
              </span>
              : ① 지나다, ②{" "}
              <span className="underline underline-offset-[10px]">
                경험하다
              </span>
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
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] cursor-pointer"
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
        <>
          <div className="flex flex-wrap text-[50px] font-bold">
            한 가지
            <FlippableCard_60
              active={showMeaning}
              className="-mt-2 ml-5 mr-6 inline-block"
              text="일"
              width={130}
              height={80}
            />
            을 경험하지 않으면,
          </div>
          <div className="flex flex-wrap mt-8 text-[50px] font-bold">
            한 가지 지혜가
            <FlippableCard_60
              active={showMeaning}
              className="-mt-2 ml-5 mr-6 inline-block"
              text="자라지"
              width={210}
              height={80}
            />
            않는다.
          </div>
        </>
      ),
      flippableCardData: true,
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
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] cursor-pointer"
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
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] cursor-pointer"
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
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] cursor-pointer"
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
        <>
          <div className="flex flex-wrap text-[50px] font-bold">
            남이
            <FlippableCard_60
              active={showMeaning}
              className="-mt-2 ml-4 mr-6 inline-block"
              text="한 번에"
              width={220}
              height={80}
            />
            그것을 할 수 있으면
            <FlippableCard_60
              active={showMeaning}
              className="-mt-2 ml-4 mr-6 inline-block"
              text="나"
              width={120}
              height={80}
            />
            는
          </div>
          <div className="flex flex-wrap text-[50px] font-bold mt-2">
            그것을 백 번 하고,
          </div>
        </>
      ),
      flippableCardData: true,
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
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] cursor-pointer"
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
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 mr-6 inline-block"
            text="남"
            width={130}
            height={80}
          />
          이 열 번에 그것을 할 수 있으면 나는 그것을
          <FlippableCard_60
            active={showMeaning}
            className="mt-6 mr-6 inline-block"
            text="천 번 한다."
            width={280}
            height={80}
          />
        </div>
      ),
      flippableCardData: true,
    },
  ];

  const modal_content = [
    {
      className: "w-[766px]",
      bgColor: "#4f9aab",
      image: "/ui/popupbtn8-1.png",
      meaningsTitle: (
        <>
          <img src="/ui/gam.png" width={54} />
          不의 읽기
        </>
      ),
      content: (
        <>
          <div className="flex flex-none text-[50px] tracking-tight break-keep">
            <p>
              ‘
              <span className="font-haeseo text-[55px] leading-tight tracking-[-5px]">
                不
              </span>
              ’은 첫소리가 ‘ㄷ’ 또는 ‘ㅈ’인 글자 앞에서는 ‘부’로 읽는다.
              <br />
              <img
                src={IMAGE1.src}
                className="inline-block mr-2 relative -top-2"
              />
              <span className="font-haeseo text-[55px] leading-tight tracking-[-5px]">
                不知不識
              </span>
              (<span className="text-answer">부</span>지
              <span className="text-answer">불</span>식): 생각하지도 못하고
              알지도 못함. 예외적으로 ‘부실(
              <span className="font-haeseo text-[55px] leading-tight tracking-[-5px]">
                不實
              </span>
              )’은 ‘ㅅ’ 앞에 ‘부’로 읽는다.
            </p>
          </div>
        </>
      ),
    },
    {
      className: "w-[766px]",
      bgColor: "#4f9aab",
      image: "/ui/popupbtn7-1.png",
      meaningsTitle: (
        <>
          <img src="/ui/gam.png" width={54} />
          주술목 구조
        </>
      ),
      content: (
        <>
          <div className="py-6 text-[50px] leading-[130%] tracking-tighter break-keep">
            <img src={IMAGE2.src} className="mx-auto" />
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <LearnMainContentPageTemplate>
        <RightTopStepContainer maxStep={5} step={step} onStepChange={setStep} />

        {step === 3 ? (
          <div className="absolute bottom-[135px] left-[280px] flex flex-wrap">
            <MainContentModalButton modal_data={modal_content[0]} />
          </div>
        ) : step === 4 ? (
          <div className="absolute bottom-[135px] left-[280px] flex flex-wrap">
            <MainContentModalButton modal_data={modal_content[1]} />
          </div>
        ) : null}

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
                  : step === 5
                    ? BACKGROUND5.src
                    : ""
        }
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
