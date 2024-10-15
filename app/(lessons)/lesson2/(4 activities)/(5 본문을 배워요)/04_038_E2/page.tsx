"use client";

import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import IMAGE1 from "./image1.png";
import { LearnMainContentPageTemplate } from "@/app/pages/learn-main-content/learn-main-content-page-template";
import { useEffect, useState } from "react";
import { PillButton } from "@/app/components/buttons/pill-button";
import { ContentContainer } from "@/app/components/content-container";
import { Howl } from "howler";
import { MoveRight, Plus } from "lucide-react";
import { SOUND } from "@/app/utils/sound-player";

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
      chinese: "問",
      reading: "문",
      meaning: "묻다",
      sound: "/sound/2/38/3.mp3",
      equation: [
        {
          chinese: "口",
          text: "입",
          sound: "/sound/2/38/1.mp3",
        },
        {
          chinese: "木",
          text: "나무",
          sound: "/sound/2/38/2.mp3",
        },
        {
          chinese: "林",
          text: "수풀",
          sound: "/sound/2/38/2.mp3",
        },
      ],
    },
    {
      sound: "/sound/2/38/5.mp3",
      chinese: "聞",
      reading: "문",
      meaning: "듣다",
      equation: [
        {
          chinese: "耳",
          text: "귀",
          sound: "/sound/2/38/4.mp3",
        },
        {
          chinese: "門",
          text: "문",
          sound: "/sound/2/38/2.mp3",
        },
        {
          chinese: "聞",
          text: "듣다",
          sound: "/sound/2/38/5.mp3",
        },
      ],
    },
    {
      sound: "/sound/2/38/8.mp3",
      chinese: "海",
      reading: "해",
      meaning: "바다",
      equation: [
        {
          chinese: "水",
          text: "물",
          sound: "/sound/2/38/6.mp3",
        },
        {
          chinese: "母",
          text: "어머니",
          sound: "/sound/2/38/7.mp3",
        },
        {
          chinese: "海",
          text: "바다",
          sound: "/sound/2/38/8.mp3",
        },
      ],
    },
    {
      sound: "/sound/2/38/10.mp3",
      chinese: "洋",
      reading: "양",
      meaning: "큰 바다",
      equation: [
        {
          chinese: "水",
          text: "물",
          sound: "/sound/2/38/6.mp3",
        },
        {
          chinese: "羊",
          text: "양",
          sound: "/sound/2/38/9.mp3",
        },
        {
          chinese: "洋",
          text: "큰 바다",
          sound: "/sound/2/38/10.mp3",
        },
      ],
    },
  ];

  return (
    <>
      <LearnMainContentPageTemplate>
        <RightTopStepContainer maxStep={5} step={step} onStepChange={setStep} />
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
                    onClick={() => setShowReading(!showReading)}
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
                    active
                    text="해설"
                    checkboxColor="#41466f"
                    backgroundColor="#7278a6"
                  />
                  <div key={step}>
                    <div className="flex items-center gap-5 pl-10">
                      <span
                        className="font-haeseo text-[80px] cursor-pointer"
                        onClick={() =>
                          SOUND(data[step - 2]?.equation[0].sound).play()
                        }
                      >
                        {data[step - 2]?.equation[0].chinese}
                      </span>
                      <span>{data[step - 2].equation[0].text}</span>
                      <Plus size={50} color="gray" />
                      <span
                        className="font-haeseo text-[80px] cursor-pointer"
                        onClick={() =>
                          SOUND(data[step - 2]?.equation[1].sound).play()
                        }
                      >
                        {data[step - 2]?.equation[1].chinese}
                      </span>
                      <span>{data[step - 2].equation[1].text}</span>
                      <MoveRight size={50} color="gray" />
                      <span
                        className="font-haeseo text-[80px] cursor-pointer"
                        onClick={() =>
                          SOUND(data[step - 2]?.equation[2].sound).play()
                        }
                      >
                        {data[step - 2]?.equation[2].chinese}
                      </span>
                      <span>{data[step - 2].equation[2].text}</span>
                    </div>
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
