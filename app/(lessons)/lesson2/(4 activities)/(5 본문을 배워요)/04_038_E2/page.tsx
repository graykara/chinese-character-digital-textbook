"use client";

import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import IMAGE2_1 from "./img2-1.png";
import IMAGE2_2 from "./img2-2.png";
import IMAGE2_3 from "./img2-3.png";
import IMAGE2_4 from "./img2-4.png";
import { LearnMainContentPageTemplate } from "@/app/pages/learn-main-content/learn-main-content-page-template";
import { useContext, useEffect, useState } from "react";
import { PillButton } from "@/app/components/buttons/pill-button";
import { ContentContainer } from "@/app/components/content-container";
import { MoveRight, Plus } from "lucide-react";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/4/중등한문_합쳐서 만든 한자14.png";
import BACKGROUND2 from "@/app/bgpng_temp/4/중등한문_합쳐서 만든 한자15.png";
import BACKGROUND3 from "@/app/bgpng_temp/4/중등한문_합쳐서 만든 한자16.png";
import BACKGROUND4 from "@/app/bgpng_temp/4/중등한문_합쳐서 만든 한자17.png";
import BACKGROUND5 from "@/app/bgpng_temp/4/중등한문_합쳐서 만든 한자18.png";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  const [showReading, setShowReading] = useState(false);
  const [showMeaning, setShowMeaning] = useState<boolean | null>(null);
  const [showResource, setShowResource] = useState(false);

  useEffect(() => {
    setShowReading(false);
    setShowMeaning(null);
    setShowResource(false);
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
          text: "묻다",
          sound: "/sound/2/38/2.mp3",
        },
      ],
      image: IMAGE2_1.src,
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
      image: IMAGE2_2.src,
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
          text: "매",
          sound: "/sound/2/38/7.mp3",
        },
        {
          chinese: "海",
          text: "바다",
          sound: "/sound/2/38/8.mp3",
        },
      ],
      image: IMAGE2_3.src,
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
      image: IMAGE2_4.src,
    },
  ];

  return (
    <>
      <LearnMainContentPageTemplate>
        <RightTopStepContainer maxStep={5} />

        {step === 4 ? (
          <div className="absolute right-[105px] translate-y-[60px]">
            <img src={IMAGE2.src} />
          </div>
        ) : null}

        {step === 1 ? (
          <img src={IMAGE1.src} alt="image1" className="mt-[40px]" />
        ) : (
          <ContentContainer className="!justify-start w-[1760px] px-[130px]">
            <div className="absolute top-[110px] pl-[40px] text-center text-[210px]">
              <span className="font-haeseo">{data[step - 2]?.chinese}</span>
            </div>
            <div className="relative w-full top-[380px] px-[150px]">
              <div className="flex flex-col gap-16">
                <div className="grid grid-cols-[180px__1fr]">
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
                    className={`mr-[160px] -mt-4 h-[85px] text-center text-main-content font-chosun text-[60px] ${showReading ? "animate__animated animate__slideInDown" : ""}`}
                  >
                    {showReading ? data[step - 2]?.reading : null}
                  </div>
                </div>
                <div className="grid grid-cols-[180px__1fr]">
                  <PillButton
                    active={showMeaning ?? false}
                    onClick={() => setShowMeaning(!showMeaning)}
                    text="뜻"
                    checkboxColor="#306875"
                    backgroundColor="#4f9aab"
                  />
                  <div
                    className={`mr-[160px] -mt-0 -mb-4 h-[85px] text-center font-bold text-[50px] tracking-tighter ${showMeaning ? "animate__animated animate__slideInDown" : ""}`}
                  >
                    {showMeaning ? data[step - 2]?.meaning : null}
                  </div>
                </div>
                <div className="grid grid-cols-[180px__1fr] -mt-4">
                  <PillButton
                    active={showResource ?? false}
                    onClick={() => setShowResource(!showResource)}
                    text="해설"
                    checkboxColor="#41466f"
                    backgroundColor="#7278a6"
                  />
                  <div key={step}>
                    <div className="flex items-center gap-6 pl-10 mt-12 ml-16 ">
                      <span
                        className="flex-none w-[100px] h-[100px] font-haeseo text-[75px] cursor-pointer bg-[#f9edce] rounded-xl flex justify-center items-center z-10"
                        onClick={() =>
                          SOUND(data[step - 2]?.equation[0].sound).play()
                        }
                      >
                        {data[step - 2]?.equation[0].chinese}
                      </span>
                      <span className="text-[40px] ml-1 mt-2">
                        {data[step - 2].equation[0].text}
                      </span>
                      <Plus size={50} color="gray" className="ml-5" />
                      <span
                        className="flex-none w-[100px] h-[100px] font-haeseo text-[75px] cursor-pointer bg-[#e3f2f9] rounded-xl flex justify-center items-center z-10"
                        onClick={() =>
                          SOUND(data[step - 2]?.equation[1].sound).play()
                        }
                      >
                        {data[step - 2]?.equation[1].chinese}
                      </span>
                      <span className="text-[40px] ml-1 mt-2">
                        {data[step - 2].equation[1].text}
                      </span>
                      <MoveRight size={50} color="gray" className="ml-5" />
                      <div
                        className="font-haeseo text-[90px] ml-4 -mt-2 cursor-pointer z-10"
                        onClick={() =>
                          SOUND(data[step - 2]?.equation[2].sound).play()
                        }
                      >
                        {data[step - 2]?.equation[2].chinese}
                      </div>
                      <span className="text-[40px] ml-2 mt-2">
                        {data[step - 2].equation[2].text}
                      </span>
                    </div>
                  </div>
                </div>
                <div key={step}
                  className="absolute top-[235px] left-[460px] -z-0">
                  <img
                    src={showResource && (step === 2 || step === 3 || step === 4 || step === 5) ? data[step - 2]?.image : ''}
                    className={showResource && (step === 2 || step === 3 || step === 4 || step === 5) ? 'animate__animated animate__fadeIn' : ''}
                  />
                </div>
              </div>
            </div>
          </ContentContainer>
        )}
      </LearnMainContentPageTemplate>
      <img src={
        step == 1 ? BACKGROUND1.src :
          step == 2 ? BACKGROUND2.src :
            step == 3 ? BACKGROUND3.src :
              step == 4 ? BACKGROUND4.src :
                step == 5 ? BACKGROUND5.src : ""
      } className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
