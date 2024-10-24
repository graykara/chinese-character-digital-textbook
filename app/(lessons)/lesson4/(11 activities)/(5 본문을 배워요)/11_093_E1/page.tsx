"use client";

import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import { LearnMainContentPageTemplate } from "@/app/pages/learn-main-content/learn-main-content-page-template";
import { useEffect, useState } from "react";
import { FlippableCard } from "@/app/components/flippable-card/flippable-card";
import { PillButton } from "@/app/components/buttons/pill-button";
import { ContentContainer } from "@/app/components/content-container";
import { SOUND } from "@/app/utils/sound-player";
import { MainContentChineseAndReading } from "@/app/components/main-content/chinese-and-reading";
import BACKGROUND1 from "@/app/bgpng_temp/11/중등한문_너와 나, 우리15.png"; //5~9~15~22~24

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
          className: "text-[120px] leading-[155px]",
        },
        {
          letter: "言",
          reading: "언",
          className: "text-[120px] leading-[155px]",
        },
        {
          letter: "美",
          reading: "미",
          className: "text-[120px] leading-[155px]",
        },
        {
          letter: "라야",
          isKor: true,
          className: "mr-5",
          additional: (
            <p className="tracking-tighter">
              문장을 읽을 때는 구절 사이나 문장 끝에 토[우리말로 된 조사 나
              어미]를 달아 끊어 읽는다. 끊지 않은 부분도 결합 관계를 살펴 띄어
              읽는다.
            </p>
          ),
          additionalTitle: (
            <p className="flex items-center gap-2">
              <img src="/ui/gam.png" />
              끊어 읽기
            </p>
          ),
        },
        {
          letter: "來",
          reading: "내",
          className: "text-[120px] leading-[155px]",
          additional: (
            <div>
              <p>음운 법칙에 맞게 읽기 :</p>
              <p className="tracking-tighter">
                ①{" "}
                <span
                  onClick={() => SOUND("/sound/4/p093_word000.mp3").play()}
                  className="font-haeseo cursor-pointer"
                >
                  來言
                </span>
                (<span className="text-answer">내</span>
                언), ②
                <span
                  onClick={() => SOUND("/sound/4/p093_word001.mp3").play()}
                  className="font-haeseo cursor-pointer"
                >
                  來日
                </span>
                (<span className="text-answer">내</span>일), ③
                <span
                  onClick={() => SOUND("/sound/4/p093_word002.mp3").play()}
                  className="font-haeseo cursor-pointer"
                >
                  去來
                </span>
                (거<span className="text-answer">래</span>)
              </p>
            </div>
          ), //음운 법칙게 맞게 읽기: 다음 줄바꿈 필요
        },
        {
          letter: "言",
          reading: "언",
          className: "text-[120px] leading-[155px]",
        },
        {
          letter: "美",
          reading: "미",
          className: "text-[120px] leading-[155px]",
        },
        { letter: "니라.", isKor: true },
      ],
      sound: "/sound/4/92/1.mp3",
      content: (
        <div className="flex flex-wrap text-[50px] tracking-tight font-bold">
          가는 말이 고와야{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="오는 말"
            width={220}
            height={80}
          />
          이 곱다.{" "}
        </div>
      ),
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
                className="font-haeseo cursor-pointer"
              >
                己
              </span>
              : ① 몸, ②<span className="underline">자기</span>
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
                className="font-haeseo cursor-pointer"
              >
                所
              </span>
              : ~하는바(것)
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
                className="font-haeseo cursor-pointer"
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
                className="font-haeseo cursor-pointer"
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
                className="font-haeseo cursor-pointer"
              >
                人
              </span>
              : ① 사람, ② 남
            </p>
          ),
        },
        { letter: "하라.", isKor: true },
      ],
      sound: "/sound/4/92/2.mp3",
      content: (
        <div className="flex flex-wrap text-[50px] tracking-tight font-bold">
          자기가{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="하고자 하지 않는 (것)"
            width={500}
            height={80}
          />
          을/를 남에게 베풀지 마라.
        </div>
      ),
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
                className="font-haeseo cursor-pointer"
              >
                無
              </span>
              : ① 없다, ② ~하지마라
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
                className="font-haeseo cursor-pointer"
              >
                道
              </span>
              : ① 길, ② 말하다
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
                className="font-haeseo cursor-pointer"
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
                className="font-haeseo cursor-pointer"
              >
                短
              </span>
              : ① 짧다, ② 단점
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
                className="font-haeseo cursor-pointer"
              >
                長
              </span>
              : ① 길다, ② 장점
            </p>
          ),
        },
        { letter: "하라.", isKor: true },
      ],
      sound: "/sound/4/92/3.mp3",
      content: (
        <div className="flex flex-wrap text-[50px] tracking-tight font-bold">
          남의 단점을 말하지{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="말고"
            width={165}
            height={80}
          />
          자기의{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="장점"
            width={165}
            height={80}
          />
          을 말하지 마라.
        </div>
      ),
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
                className="font-haeseo cursor-pointer"
              >
                之
              </span>
              : 그
              <span
                onClick={() => SOUND("/sound/4/p093_word014.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                → 愛人者
              </span>
            </>
          ),
        },
        { letter: "하고", isKor: true },
      ],
      sound: "/sound/4/92/4.mp3",
      content: (
        <div className="flex flex-wrap text-[50px] tracking-tight font-bold">
          남을 사랑하는 사람은{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="남"
            width={140}
            height={80}
          />
          도 항상 그를 사랑하고,
        </div>
      ),
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
        <div className="flex flex-wrap text-[50px] tracking-tight font-bold">
          남을{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="공경"
            width={165}
            height={80}
          />
          하는 사람은 남도{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="항상"
            width={165}
            height={80}
          />
          그를 공경한다.
        </div>
      ),
    },
  ];

  return (
    <>
      <LearnMainContentPageTemplate>
        <RightTopStepContainer maxStep={5} step={step} onStepChange={setStep} />
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
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
