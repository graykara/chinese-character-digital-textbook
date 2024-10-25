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
import BACKGROUND1 from "@/app/bgpng_temp/4/중등한문_합쳐서 만든 한자15.png"; //14-
import { MainContentVideoButton } from "@/app/components/main-content/video-button";

export default function Page() {
  const [step, setStep] = useState(1);

  const [showReading, setShowReading] = useState(false);
  const [showMeaning, setShowMeaning] = useState(false);
  const [showResource, setShowResource] = useState(false);

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
          chinese: "門",
          text: "문",
          sound: "/sound/2/38/2.mp3",
        },
        {
          chinese: "問",
          text: "문",
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
          chinese: "每",
          text: "매양",
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

        {step !== 1 ? (
        <MainContentVideoButton
          video="/video/writing/38p_1.mp4"
          className="absolute left-[112px] top-[40px]"
        />
        ) : null }

        {step === 1 ? (
          <img src={IMAGE1.src} alt="image1" />
        ) : (
          <ContentContainer className="w-[1300px] h-full grid grid-cols-[1fr]">
            <div className="!justify-start absolute top-[110px]">
              <div className="relative left-[390px] w-[750px] text-center text-[210px]">
                <span className="font-haeseo">{data[step - 2]?.chinese}</span>
              </div>
              <div className="flex flex-col gap-16 ml-[150px] -mt-[65px]">
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
                    className={`text-center text-main-content text-[60px] h-[60px] -mt-3 ml-10 ${showReading ? "animate__animated animate__slideInDown" : ""}`}
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
                    className={`text-center text-main-content text-[60px] tracking-[20px] h-[60px] -mt-3 ml-10 ${showMeaning ? "animate__animated animate__slideInDown" : ""}`}
                  >
                    {showMeaning ? data[step - 2]?.meaning : null}
                  </div>
                </div>
                <div className="grid grid-cols-[180px__1fr] gap-10 -mt-2">
                  <PillButton
                    active={showResource}
                    onClick={() => setShowResource(!showResource)}
                    text="해설"
                    checkboxColor="#41466f"
                    backgroundColor="#7278a6"
                  />
                  <div key={step}>
                    <div className="flex items-center gap-5 pl-10 mt-12 ml-5">
                      <span
                        className="flex-none w-[100px] h-[100px] font-haeseo text-[75px] cursor-pointer bg-[#f9edce] rounded-xl flex justify-center items-center"
                        onClick={() =>
                          SOUND(data[step - 2]?.equation[0].sound).play()
                        }
                      >
                        {data[step - 2]?.equation[0].chinese}
                      </span>
                      <span className="text-[40px] ml-1 mt-2">
                        {data[step - 2].equation[0].text}
                      </span>
                      <Plus size={50} color="gray" className="-ml-1" />
                      <span
                        className="flex-none w-[100px] h-[100px] font-haeseo text-[75px] cursor-pointer bg-[#e3f2f9] rounded-xl flex justify-center items-center"
                        onClick={() =>
                          SOUND(data[step - 2]?.equation[1].sound).play()
                        }
                      >
                        {data[step - 2]?.equation[1].chinese}
                      </span>
                      <span className="text-[40px] ml-1 mt-2">
                        {data[step - 2].equation[1].text}
                      </span>
                      <MoveRight size={50} color="gray" className="-ml-1" />
                      <span
                        className="font-haeseo text-[90px] ml-5 -mt-2 cursor-pointer"
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
      {/* <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
}
