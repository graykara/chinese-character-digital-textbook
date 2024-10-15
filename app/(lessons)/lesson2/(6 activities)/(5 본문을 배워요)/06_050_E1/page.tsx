"use client";

import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import IMAGE1 from "./image1.png";
import { LearnMainContentPageTemplate } from "@/app/pages/learn-main-content/learn-main-content-page-template";
import { useEffect, useState } from "react";
import { FlippableCard } from "@/app/components/flippable-card/flippable-card";
import { PillButton } from "@/app/components/buttons/pill-button";
import { ContentContainer } from "@/app/components/content-container";
import { Howl } from "howler";
import { MoveRight, Plus } from "lucide-react";
import { SOUND } from "@/app/utils/sound-player";

export default function Page() {
  const [step, setStep] = useState(1);

  const [showReading, setShowReading] = useState(false);
  const [showMeaning, setShowMeaning] = useState(false);
  const [showResource, setShowResource] = useState(false);

  useEffect(() => {
    setShowReading(false);
    setShowMeaning(false);
    setShowResource(false);
  }, [step]);

  const data = [
    {
      chinese: "林",
      reading: "림",
      meaning: "수풀",
      sound: "/sound/2/36/2.mp3",
      content: (
        <div className="flex items-center flex-wrap">
          <FlippableCard
            active={showResource}
            className="mx-5 inline-block"
            text="나무"
            width={180}
            height={80}
          />
          와{" "}
          <FlippableCard
            active={showResource}
            className="mx-5 inline-block"
            text="나무"
            width={180}
            height={80}
          />
          가 모여 이루어진
          <FlippableCard
            active={showResource}
            className="mx-5 inline-block"
            text="수풀"
            width={180}
            height={80}
          />
        </div>
      ),
      equation: [
        {
          chinese: "木",
          text: "나무",
          sound: "/sound/2/36/1.mp3",
        },
        {
          chinese: "木",
          text: "나무",
          sound: "/sound/2/36/1.mp3",
        },
        {
          chinese: "林",
          text: "수풀",
          sound: "/sound/2/36/2.mp3",
        },
      ],
    },
    {
      sound: "/sound/2/36/4.mp3",
      chinese: "休",
      reading: "휴",
      meaning: "쉬다",
      content: (
        <div className="flex items-center flex-wrap">
          <FlippableCard
            active={showResource}
            className="mx-5 inline-block"
            text="사람"
            width={180}
            height={80}
          />
          이
          <FlippableCard
            active={showResource}
            className="mx-5 inline-block"
            text="나무"
            width={180}
            height={80}
          />{" "}
          에 기대어
          <FlippableCard
            active={showResource}
            className="mx-5 inline-block"
            text="쉬다"
            width={180}
            height={80}
          />{" "}
        </div>
      ),
      equation: [
        {
          chinese: "人",
          text: "사람",
          sound: "/sound/2/36/3.mp3",
        },
        {
          chinese: "木",
          text: "나무",
          sound: "/sound/2/36/1.mp3",
        },
        {
          chinese: "休",
          text: "쉬다",
          sound: "/sound/2/36/4.mp3",
        },
      ],
    },
    {
      sound: "/sound/2/36/7.mp3",
      chinese: "明",
      reading: "명",
      meaning: "밝다",
      content: (
        <div className="flex items-center flex-wrap">
          <FlippableCard
            active={showResource}
            className="mx-5 inline-block"
            text="해"
            width={180}
            height={80}
          />
          와
          <FlippableCard
            active={showResource}
            className="mx-5 inline-block"
            text="달"
            width={180}
            height={80}
          />
          처럼
          <FlippableCard
            active={showResource}
            className="mx-5 inline-block"
            text="밝다"
            width={180}
            height={80}
          />{" "}
        </div>
      ),
      equation: [
        {
          chinese: "日",
          text: "해",
          sound: "/sound/2/36/5.mp3",
        },
        {
          chinese: "月",
          text: "달",
          sound: "/sound/2/36/6.mp3",
        },
        {
          chinese: "明",
          text: "밝다",
          sound: "/sound/2/36/7.mp3",
        },
      ],
    },
    {
      sound: "/sound/2/36/10.mp3",
      chinese: "好",
      reading: "호",
      meaning: "좋다",
      content: (
        <div className="flex items-center flex-wrap">
          <FlippableCard
            active={showResource}
            className="mx-5 inline-block"
            text="여자"
            width={180}
            height={80}
          />
          가 자녀를 안으니
          <FlippableCard
            active={showResource}
            className="mx-5 inline-block"
            text="좋다"
            width={180}
            height={80}
          />{" "}
        </div>
      ),
      equation: [
        {
          chinese: "女",
          text: "여자",
          sound: "/sound/2/36/8.mp3",
        },
        {
          chinese: "子",
          text: "자녀",
          sound: "/sound/2/36/9.mp3",
        },
        {
          chinese: "好",
          text: "좋다",
          sound: "/sound/2/36/10.mp3",
        },
      ],
    },
    {
      sound: "/sound/2/36/13.mp3",
      chinese: "名",
      reading: "명",
      meaning: "이름",
      content: (
        <div className="flex items-center flex-wrap">
          어두운
          <FlippableCard
            active={showResource}
            className="mx-5 inline-block"
            text="저녁"
            width={180}
            height={80}
          />
          에 상대를 알기위해 입으로 부르는
          <FlippableCard
            active={showResource}
            className="mx-5 inline-block"
            text="이름"
            width={180}
            height={80}
          />
        </div>
      ),
      equation: [
        {
          chinese: "夕",
          text: "저녁",
          sound: "/sound/2/36/11.mp3",
        },
        {
          chinese: "口",
          text: "입",
          sound: "/sound/2/36/12.mp3",
        },
        {
          chinese: "名",
          text: "이름",
          sound: "/sound/2/36/13.mp3",
        },
      ],
    },
  ];

  return (
    <>
      <LearnMainContentPageTemplate>
        <RightTopStepContainer maxStep={6} step={step} onStepChange={setStep} />
        {step === 1 ? (
          <img src={IMAGE1.src} alt="image1" />
        ) : (
          <ContentContainer className="w-[1300px] h-full grid grid-cols-[1fr]">
            <div className="relative">
              <div className="relative left-[220px] w-[750px] text-center text-[160px]">
                <span className="font-haeseo">{data[step - 2]?.chinese}</span>
              </div>
              <div className="flex flex-col gap-16">
                <div className="grid grid-cols-[180px__750px] gap-10">
                  <PillButton
                    active={showReading}
                    onClick={() => {
                      if (!showReading) SOUND(data[step - 2].sound).play();
                      setShowReading(!showReading);
                    }}
                    text="읽기"
                    checkboxColor="#23425e"
                    backgroundColor="#3a5e7c"
                  />
                  <div
                    className={`text-center text-main-content text-[60px] h-[80px] ${showReading ? "animate__animated animate__slideInDown" : ""}`}
                  >
                    {showReading ? data[step - 2]?.reading : null}
                  </div>
                </div>
                <div className="grid grid-cols-[180px__750px] gap-10">
                  <PillButton
                    active={showMeaning}
                    onClick={() => setShowMeaning(!showMeaning)}
                    text="뜻"
                    checkboxColor="#306875"
                    backgroundColor="#4f9aab"
                  />
                  <div
                    className={`text-center text-main-content text-[60px] h-[80px] ${showMeaning ? "animate__animated animate__slideInDown" : ""}`}
                  >
                    {showMeaning ? data[step - 2]?.meaning : null}
                  </div>
                </div>
                <div className="grid grid-cols-[180px__1fr] gap-10">
                  <PillButton
                    active={showResource}
                    onClick={() => setShowResource(!showResource)}
                    text="해설"
                    checkboxColor="#41466f"
                    backgroundColor="#7278a6"
                  />
                  <div key={step}>
                    <div className="flex items-center gap-5">
                      <div
                        className="flex-none w-[100px] h-[100px] font-haeseo text-[80px] cursor-pointer bg-[#f9edce] rounded-xl flex justify-center items-center"
                        onClick={() =>
                          SOUND(data[step - 2]?.equation[0].sound).play()
                        }
                      >
                        {data[step - 2]?.equation[0].chinese}
                      </div>
                      <span>{data[step - 2].equation[0].text}</span>
                      <Plus size={50} color="gray" />
                      <div
                        className="flex-none w-[100px] h-[100px] font-haeseo text-[80px] cursor-pointer bg-[#e3f2f9] rounded-xl flex justify-center items-center"
                        onClick={() =>
                          SOUND(data[step - 2]?.equation[1].sound).play()
                        }
                      >
                        {data[step - 2]?.equation[1].chinese}
                      </div>
                      <span>{data[step - 2].equation[1].text}</span>
                      <MoveRight size={50} color="gray" />
                      <div
                        className="font-haeseo text-[80px] cursor-pointer"
                        onClick={() =>
                          SOUND(data[step - 2]?.equation[2].sound).play()
                        }
                      >
                        {data[step - 2]?.equation[2].chinese}
                      </div>
                      <span>{data[step - 2].equation[2].text}</span>
                    </div>
                    <div>{data[step - 2]?.content ?? null}</div>
                  </div>
                </div>
              </div>
            </div>
          </ContentContainer>
        )}
      </LearnMainContentPageTemplate>
    </>
  );
}
