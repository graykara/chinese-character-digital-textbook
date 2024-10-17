"use client";

import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import IMAGE2 from "./bg_2.png";
import IMAGE3 from "./bg_3.png";
import IMAGE4 from "./bg_4.png";
import IMAGE5 from "./bg_5.png";
import { LearnMainContentPageTemplate } from "@/app/pages/learn-main-content/learn-main-content-page-template";
import { useEffect, useState } from "react";
import { FlippableCard } from "@/app/components/flippable-card/flippable-card";
import { PillButton } from "@/app/components/buttons/pill-button";
import { ContentContainer } from "@/app/components/content-container";
import { Howl } from "howler";
import { MoveRight, Plus } from "lucide-react";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/5/중등한문_한자를 알면 틀리지 않는 일상 어휘6.png"

export default function Page() {
  const [step, setStep] = useState(1);

  const [showReading, setShowReading] = useState(false);
  const [showMeaning, setShowMeaning] = useState(false);
  const [showReading2, setShowReading2] = useState(false);
  const [showMeaning2, setShowMeaning2] = useState(false);

  useEffect(() => {
    setShowReading(false);
    setShowMeaning(false);
    setShowReading2(false);
    setShowMeaning2(false);
  }, [step]);

  const data = [
    {
      chinese: "問安",
      reading: "문 안",
      sound: "/sound/2/44/1.mp3",
      content: (
        <div className="flex items-center flex-wrap w-[500px] text-[50px] tracking-tighter font-bold bg-slate-600">
          안부를{" "}
          <FlippableCard
            active={showMeaning}
            className="mx-5 inline-block"
            text="물음."
            width={220}
            height={80}
          />
        </div>
      ),

    },
    {
      sound: "/sound/2/44/2.mp3",
      chinese: "無難",
      reading: "무 난",
      content: (
        <div className="flex items-center flex-wrap w-[500px] text-[50px] tracking-tighter font-bold bg-slate-600">
          어려움이{" "}
          <FlippableCard
            active={showMeaning2}
            className="mx-5 inline-block"
            text="없음."
            width={220}
            height={80}
          />
        </div>
      ),
      resource: IMAGE2.src,
    },
  ];

  return (
    <>
      <LearnMainContentPageTemplate>
        <RightTopStepContainer maxStep={4} step={step} onStepChange={setStep} />
        {/* {step === 1 ? (
          <img src={IMAGE1.src} alt="image1" />
        ) : ( */}
          <ContentContainer className="w-[1300px] h-full px-20">
            <div className="relative top-10">
              <div className="flex flex-col gap-16">
                <div className="grid grid-cols-[650px__650px] gap-10 h-[220px] text-center text-[180px] tracking-widest">
                  <span className="font-haeseo">{data[step - 1]?.chinese}</span>
                  <span className="font-haeseo">{data[step]?.chinese}</span>
                </div>
                <div className="grid grid-cols-[650px__650px] gap-10">
                  <div className="grid grid-cols-[180px__300px] gap-10">
                    <PillButton
                      active={showReading}
                      onClick={() => {
                        if (!showReading) SOUND(data[step - 1].sound).play();
                        setShowReading(!showReading);
                      }}
                      text="읽기"
                      checkboxColor="#23425e"
                      backgroundColor="#3a5e7c"
                    />
                    <div
                      className={`text-center text-main-content text-[60px] h-[60px] ${showReading ? "animate__animated animate__slideInDown" : ""}`}
                    >
                      {showReading ? data[step - 1]?.reading : null}
                    </div>
                  </div>
                  <div className="grid grid-cols-[180px__300px] gap-10">
                  <PillButton
                    active={showReading2}
                    onClick={() => {
                      if (!showReading2) SOUND(data[step].sound).play();
                      setShowReading2(!showReading2);
                    }}
                    text="읽기"
                    checkboxColor="#23425e"
                    backgroundColor="#3a5e7c"
                  />
                  <div
                    className={`text-center text-main-content text-[60px] h-[80px] ${showReading2 ? "animate__animated animate__slideInDown" : ""}`}
                  >
                    {showReading2 ? data[step]?.reading : null}
                  </div>
                  </div> 
                </div>
                <div className="grid grid-cols-[650px__650px] gap-10">
                  <div className="grid grid-cols-[150px__500px] gap-10">
                    <PillButton
                      active={showMeaning}
                      onClick={() => setShowMeaning(!showMeaning)}
                      text="뜻"
                      checkboxColor="#306875"
                      backgroundColor="#4f9aab"
                    />
                  </div>
                  <div className="grid grid-cols-[150px__500px] gap-10">
                    <PillButton
                      active={showMeaning2}
                      onClick={() => setShowMeaning2(!showMeaning2)}
                      text="뜻"
                      checkboxColor="#306875"
                      backgroundColor="#4f9aab"
                    />
                  </div>
                </div>
                <div key={step}>
                  {data[step - 1]?.content ?? null}
                  <div className="absolute right-0 w-[1000px] h-[115px]">
                    <div>
                      <img src={data[step - 1]?.resource} alt="resource" className="absolute bottom-0 right-10"/> 
                    </div>
                  </div>
                </div>
              </div>
              
            </div>

            
          </ContentContainer>
        {/* )} */}
      </LearnMainContentPageTemplate>
      <img src={BACKGROUND1.src} className="absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
