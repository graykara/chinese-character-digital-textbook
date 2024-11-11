"use client";

import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import { LearnMainContentPageTemplate } from "@/app/pages/learn-main-content/learn-main-content-page-template";
import { useEffect, useState } from "react";
import { FlippableCard_60 } from "@/app/components/flippable-card/flippable-card";
import { ContentContainer } from "@/app/components/content-container";
import { SOUND } from "@/app/utils/sound-player";
import IMAGE1 from "./popup_1.png";
import IMAGE2 from "./popup_2.png";
import { MainContentChineseAndReading } from "@/app/components/main-content/chinese-and-reading";
import { MainContentModalButton } from "@/app/components/main-content/modal-button";
import BACKGROUND1 from "@/app/bgpng_temp/11/중등한문_너와 나, 우리7.png"; //5-8
import BACKGROUND2 from "@/app/bgpng_temp/11/중등한문_너와 나, 우리9.png"; //9-14
import BACKGROUND3 from "@/app/bgpng_temp/11/중등한문_너와 나, 우리15.png"; //15-21
import BACKGROUND4 from "@/app/bgpng_temp/11/중등한문_너와 나, 우리22.png"; //22-23
import BACKGROUND5 from "@/app/bgpng_temp/11/중등한문_너와 나, 우리24.png";

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
          letter: "去",
          reading: "거",
          className: "text-[120px] leading-[150px]",
        },
        {
          letter: "言",
          reading: "언",
          className: "text-[120px] leading-[150px]",
        },
        {
          letter: "美",
          reading: "미",
          className: "text-[120px] leading-[150px]",
        },
        {
          letter: "라야",
          isKor: true,
          className: "mr-5",
          additional: (
            <p className="tracking-tighter leading-tight">
              문장을 읽을 때는 구절 사이나 문장 끝에 토<br />
              (우리말로 된 조사나 어미)를 달아 끊어 읽는다.
              <br />
              끊지 않은 부분도 결합 관계를 살펴 띄어 읽는다.
            </p>
          ),
          additionalTitle: (
            <p className="flex items-center gap-2 -ml-3">
              <img src="/ui/gam.png" />
              끊어 읽기
            </p>
          ),
        },
        {
          letter: "來",
          reading: "내",
          className: "text-[120px] leading-[150px]",
          additional: (
            <div>
              <p className="leading-tight">음운 법칙에 맞게 읽기 :</p>
              <p>
                ①{" "}
                <span
                  onClick={() => SOUND("/sound/4/p093_word000.mp3").play()}
                  className="font-haeseo text-[48px] leading-tight tracking-[-10px] pr-1 cursor-pointer"
                >
                  來言
                </span>
                (<span className="text-answer">내</span>
                언), ②{" "}
                <span
                  onClick={() => SOUND("/sound/4/p093_word001.mp3").play()}
                  className="font-haeseo text-[48px] leading-tight tracking-[-10px] pr-1 cursor-pointer"
                >
                  來日
                </span>
                (<span className="text-answer">내</span>일), ③{" "}
                <span
                  onClick={() => SOUND("/sound/4/p093_word002.mp3").play()}
                  className="font-haeseo text-[48px] leading-tight tracking-[-10px] pr-1 cursor-pointer"
                >
                  去來
                </span>
                (거<span className="text-answer">래</span>)
              </p>
            </div>
          ),
        },
        {
          letter: "言",
          reading: "언",
          className: "text-[120px] leading-[150px]",
        },
        {
          letter: "美",
          reading: "미",
          className: "text-[120px] leading-[150px]",
        },
        { letter: "니라.", isKor: true },
      ],
      sound: "/sound/4/92/1.mp3",
      content: (
        <div className="flex flex-wrap text-[50px] font-bold">
          가는 말이 고와야{" "}
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 ml-5 mr-6 inline-block"
            text="오는 말"
            width={220}
            height={80}
          />
          이 곱다.{" "}
        </div>
      ),
      flippableCardData: true,
    },
    {
      chinese: [
        {
          letter: "己",
          reading: "기",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/4/p093_word003.mp3").play()}
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] cursor-pointer"
              >
                己
              </span>
              : ① 몸, ②{" "}
              <span className="underline underline-offset-[10px]">자기</span>
            </>
          ),
        },
        {
          letter: "所",
          reading: "소",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/4/p093_word004.mp3").play()}
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] pr-2 cursor-pointer"
              >
                所
              </span>
              : ~하는 바(것)
            </p>
          ),
        },
        { letter: "不", reading: "불" },
        { letter: "欲", reading: "욕" },
        { letter: "을", isKor: true, className: "mr-5" },
        {
          letter: "勿",
          reading: "물",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/4/p093_word005.mp3").play()}
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] pr-1 cursor-pointer"
              >
                勿
              </span>
              : ~하지 마라
            </p>
          ),
        },
        { letter: "施", reading: "시" },
        {
          letter: "於",
          reading: "어",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/4/p093_word006.mp3").play()}
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] pr-2 cursor-pointer"
              >
                於
              </span>
              : ~에게
            </p>
          ),
        },
        {
          letter: "人",
          reading: "인",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/4/p093_word007.mp3").play()}
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] pr-2 cursor-pointer"
              >
                人
              </span>
              : ① 사람, ②{" "}
              <span className="underline underline-offset-[10px]">남</span>
            </p>
          ),
        },
        { letter: "하라.", isKor: true },
      ],
      sound: "/sound/4/92/2.mp3",
      content: (
        <div className="flex flex-wrap text-[50px] font-bold">
          자기가{" "}
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 ml-5 mr-6 inline-block tracking-tighter"
            text="하고자 하지 않는 바(것)"
            width={510}
            height={80}
          />
          을/를 남에게 베풀지 마라.
        </div>
      ),
      flippableCardData: true,
    },
    {
      chinese: [
        {
          letter: "無",
          reading: "무",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/4/p093_word008.mp3").play()}
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] pr-1 cursor-pointer"
              >
                無
              </span>
              : ① 없다, ②{" "}
              <span className="underline underline-offset-[10px]">
                ~하지마라
              </span>
            </p>
          ),
        },
        {
          letter: "道",
          reading: "도",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/4/p093_word009.mp3").play()}
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] pr-1 cursor-pointer"
              >
                道
              </span>
              : ① 길, ②{" "}
              <span className="underline underline-offset-[10px]">말하다</span>
            </p>
          ),
        },
        { letter: "人", reading: "인" },
        {
          letter: "之",
          reading: "지",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/4/p093_word010.mp3").play()}
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] pr-1 cursor-pointer"
              >
                之
              </span>
              : ~의
            </p>
          ),
        },
        {
          letter: "短",
          reading: "단",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/4/p093_word011.mp3").play()}
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] pr-1 cursor-pointer"
              >
                短
              </span>
              : ① 짧다, ②{" "}
              <span className="underline underline-offset-[10px]">단점</span>
            </p>
          ),
        },
        { letter: "하고", isKor: true, className: "mr-5" },
        { letter: "無", reading: "무" },
        { letter: "說", reading: "설" },
        { letter: "己", reading: "기" },
        { letter: "之", reading: "지" },
        {
          letter: "長",
          reading: "장",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/4/p093_word012.mp3").play()}
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] pr-1 cursor-pointer"
              >
                長
              </span>
              : ① 길다, ②{" "}
              <span className="underline underline-offset-[10px]">장점</span>
            </p>
          ),
        },
        { letter: "하라.", isKor: true },
      ],
      sound: "/sound/4/92/3.mp3",
      content: (
        <div className="flex flex-wrap text-[50px] font-bold">
          남의 단점을 말하지{" "}
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 ml-5 mr-6 inline-block"
            text="말고"
            width={165}
            height={80}
          />
          자기의{" "}
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 ml-5 mr-6 inline-block"
            text="장점"
            width={165}
            height={80}
          />
          을 말하지 마라.
        </div>
      ),
      flippableCardData: true,
    },
    {
      chinese: [
        { letter: "愛", reading: "애" },
        { letter: "人", reading: "인" },
        { letter: "者", reading: "자" },
        { letter: "는", isKor: true, className: "mr-5" },
        { letter: "人", reading: "인" },
        { letter: "恒", reading: "항" },
        { letter: "愛", reading: "애" },
        {
          letter: "之",
          reading: "지",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/4/p093_word013.mp3").play()}
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] cursor-pointer"
              >
                之
              </span>
              : 그 →
              <span
                onClick={() => SOUND("/sound/4/p093_word014.mp3").play()}
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] cursor-pointer"
              >
                愛人者
              </span>
            </>
          ),
        },
        { letter: "하고", isKor: true },
      ],
      sound: "/sound/4/92/4.mp3",
      content: (
        <div className="flex flex-wrap text-[50px] font-bold">
          남을 사랑하는 사람은{" "}
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 ml-5 mr-6 inline-block"
            text="남"
            width={140}
            height={80}
          />
          도 항상 그를 사랑하고,
        </div>
      ),
      flippableCardData: true,
    },
    {
      chinese: [
        { letter: "敬", reading: "경" },
        { letter: "人", reading: "인" },
        { letter: "者", reading: "자" },
        { letter: "는", isKor: true, className: "mr-5" },
        { letter: "人", reading: "인" },
        { letter: "恒", reading: "항" },
        { letter: "敬", reading: "경" },
        { letter: "之", reading: "지" },
        { letter: "니라.", isKor: true },
      ],
      sound: "/sound/4/92/5.mp3",
      content: (
        <div className="flex flex-wrap text-[50px] font-bold">
          남을{" "}
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 ml-5 mr-6 inline-block"
            text="공경"
            width={165}
            height={80}
          />
          하는 사람은 남도{" "}
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 ml-5 mr-6 inline-block"
            text="항상"
            width={165}
            height={80}
          />
          그를 공경한다.
        </div>
      ),
      flippableCardData: true,
    },
  ];

  const modal_content = [
    {
      className: "w-[766px]",
      bgColor: "#4f9aab",
      image: "/ui/popupbtn6-1.png",
      meaningsTitle: (
        <>
          <img src="/ui/gam.png" width={54} />
          주술 구조
        </>
      ),
      content: (
        <>
          <div className="py-6 text-[50px] leading-[130%] tracking-tighter break-keep">
            <img src={IMAGE1.src} className="mx-auto" />
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

        {step === 1 ? (
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
