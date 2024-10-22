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
        { letter: "去", reading: "인", className: "text-[120px] leading-[155px]"},
        { letter: "言", reading: "시", className: "text-[120px] leading-[155px]" },
        { letter: "美", reading: "물", className: "text-[120px] leading-[155px]" },
        {
          letter: "라야",
          isKor: true,
          className: "mr-5",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/5/p117_word001.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                而
              </span>
              : 그리고
            </p>
          ),
        },
        {
          letter: "來",
          reading: "이",
          className: "text-[120px] leading-[155px]",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/5/p117_word001.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                而
              </span>
              : 그리고
            </p>
          ),
        },
        { letter: "言", reading: "귀", className: "text-[120px] leading-[155px]" },    
        { letter: "美", reading: "물", className: "text-[120px] leading-[155px]" },
        { letter: "니라.", isKor: true },
      ],
      sound: "/sound/5/116/1.mp3",
      content: (
        <div className="flex flex-wrap text-[50px] tracking-tight font-bold">
          사람으로서 만물을 보면{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="사람"
            width={165}
            height={80}
          />
          이 귀하고{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="만물"
            width={165}
            height={80}
          />
          천하며
        </div>
      ),
    },
    {
      chinese: [ 
        {
          letter: "己",
          reading: "기",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/5/p117_word001.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                而
              </span>
              : 그리고
            </p>
          ),
        },
        {
          letter: "所",
          reading: "이",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/5/p117_word001.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                而
              </span>
              : 그리고
            </p>
          ),
        },
        { letter: "不", reading: "시", },
        { letter: "欲", reading: "물", },
        { letter: "을", isKor: true, className: "mr-5" },
        {
          letter: "勿",
          reading: "이",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/5/p117_word001.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                而
              </span>
              : 그리고
            </p>
          ),//己所不欲을 勿施於人하라.
        },   
        { letter: "施", reading: "물" },
        {
          letter: "於",
          reading: "이",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/5/p117_word001.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                而
              </span>
              : 그리고
            </p>
          ),
        }, 
        {
          letter: "人",
          reading: "이",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/5/p117_word001.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                而
              </span>
              : 그리고
            </p>
          ),
        }, 
        { letter: "하라.", isKor: true },
      ],
      sound: "/sound/5/116/1.mp3",
      content: (
        <div className="flex flex-wrap text-[50px] tracking-tight font-bold">
          사람으로서 만물을 보면{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="사람"
            width={165}
            height={80}
          />
          이 귀하고{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="만물"
            width={165}
            height={80}
          />
          천하며
        </div>
      ),
    },
    {
      chinese: [ 
        {
          letter: "己",
          reading: "기",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/5/p117_word001.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                而
              </span>
              : 그리고
            </p>
          ),
        },
        {
          letter: "所",
          reading: "이",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/5/p117_word001.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                而
              </span>
              : 그리고
            </p>
          ),
        },
        { letter: "不", reading: "시", },
        { letter: "欲", reading: "물", },
        { letter: "을", isKor: true, className: "mr-5" },
        {
          letter: "勿",
          reading: "이",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/5/p117_word001.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                而
              </span>
              : 그리고
            </p>
          ),//己所不欲을 勿施於人하라.
        },   
        { letter: "施", reading: "물" },
        {
          letter: "於",
          reading: "이",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/5/p117_word001.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                而
              </span>
              : 그리고
            </p>
          ),
        }, 
        {
          letter: "人",
          reading: "이",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/5/p117_word001.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                而
              </span>
              : 그리고
            </p>
          ),
        }, 
        { letter: "하라.", isKor: true },
      ],
      sound: "/sound/5/116/1.mp3",
      content: (
        <div className="flex flex-wrap text-[50px] tracking-tight font-bold">
          사람으로서 만물을 보면{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="사람"
            width={165}
            height={80}
          />
          이 귀하고{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="만물"
            width={165}
            height={80}
          />
          천하며
        </div>
      ),
    },
    {
      chinese: [ 
        {
          letter: "己",
          reading: "기",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/5/p117_word001.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                而
              </span>
              : 그리고
            </p>
          ),
        },
        {
          letter: "所",
          reading: "이",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/5/p117_word001.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                而
              </span>
              : 그리고
            </p>
          ),
        },
        { letter: "不", reading: "시", },
        { letter: "欲", reading: "물", },
        { letter: "을", isKor: true, className: "mr-5" },
        {
          letter: "勿",
          reading: "이",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/5/p117_word001.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                而
              </span>
              : 그리고
            </p>
          ),//己所不欲을 勿施於人하라.
        },   
        { letter: "施", reading: "물" },
        {
          letter: "於",
          reading: "이",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/5/p117_word001.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                而
              </span>
              : 그리고
            </p>
          ),
        }, 
        {
          letter: "人",
          reading: "이",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/5/p117_word001.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                而
              </span>
              : 그리고
            </p>
          ),
        }, 
        { letter: "하라.", isKor: true },
      ],
      sound: "/sound/5/116/1.mp3",
      content: (
        <div className="flex flex-wrap text-[50px] tracking-tight font-bold">
          사람으로서 만물을 보면{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="사람"
            width={165}
            height={80}
          />
          이 귀하고{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="만물"
            width={165}
            height={80}
          />
          천하며
        </div>
      ),
    },
    {
      chinese: [ 
        {
          letter: "己",
          reading: "기",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/5/p117_word001.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                而
              </span>
              : 그리고
            </p>
          ),
        },
        {
          letter: "所",
          reading: "이",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/5/p117_word001.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                而
              </span>
              : 그리고
            </p>
          ),
        },
        { letter: "不", reading: "시", },
        { letter: "欲", reading: "물", },
        { letter: "을", isKor: true, className: "mr-5" },
        {
          letter: "勿",
          reading: "이",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/5/p117_word001.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                而
              </span>
              : 그리고
            </p>
          ),//己所不欲을 勿施於人하라.
        },   
        { letter: "施", reading: "물" },
        {
          letter: "於",
          reading: "이",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/5/p117_word001.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                而
              </span>
              : 그리고
            </p>
          ),
        }, 
        {
          letter: "人",
          reading: "이",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/5/p117_word001.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                而
              </span>
              : 그리고
            </p>
          ),
        }, 
        { letter: "하라.", isKor: true },
      ],
      sound: "/sound/5/116/1.mp3",
      content: (
        <div className="flex flex-wrap text-[50px] tracking-tight font-bold">
          사람으로서 만물을 보면{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="사람"
            width={165}
            height={80}
          />
          이 귀하고{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="만물"
            width={165}
            height={80}
          />
          천하며
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
