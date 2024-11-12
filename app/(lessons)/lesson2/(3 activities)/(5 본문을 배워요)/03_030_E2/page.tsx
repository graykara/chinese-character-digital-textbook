"use client";

import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import IMAGE3 from "./image3.png";
import IMAGE4 from "./image4.png";
import IMAGE5 from "./image5.png";
import IMAGE6 from "./image6.png";
import IMAGE7 from "./image7.png";
import { LearnMainContentPageTemplate } from "@/app/pages/learn-main-content/learn-main-content-page-template";
import { useContext, useEffect, useState } from "react";
import { FlippableCard_60 } from "@/app/components/flippable-card/flippable-card";
import { PillButton } from "@/app/components/buttons/pill-button";
import { ContentContainer } from "@/app/components/content-container";
import { Howl } from "howler";
import BACKGROUND1 from "@/app/bgpng_temp/3/중등한문_그려서 만든 한자21.png";
import BACKGROUND2 from "@/app/bgpng_temp/3/중등한문_그려서 만든 한자22.png";
import BACKGROUND3 from "@/app/bgpng_temp/3/중등한문_그려서 만든 한자23.png";
import BACKGROUND4 from "@/app/bgpng_temp/3/중등한문_그려서 만든 한자24.png";
import BACKGROUND5 from "@/app/bgpng_temp/3/중등한문_그려서 만든 한자25.png";
import BACKGROUND6 from "@/app/bgpng_temp/3/중등한문_그려서 만든 한자26.png";
import BACKGROUND7 from "@/app/bgpng_temp/3/중등한문_그려서 만든 한자27.png";
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
      chinese: "一",
      reading: "일",
      meaning: "하나",
      content: (
        <div className="flex items-center flex-wrap mb-2">
          선 하나를 그어서
          <FlippableCard_60
            key="1"
            active={showResource}
            className="-mt-4 ml-5 mr-10 inline-block"
            text="하나"
            width={210}
            height={80}
          />
          라는 뜻을 나타냄.
        </div>
      ),
      resource: IMAGE2.src,
      sound: "/sound/2/30/1.mp3",
    },
    {
      chinese: "上",
      reading: "상",
      meaning: "위",
      content: (
        <div className="flex items-center flex-wrap">
          기준선
          <FlippableCard_60
            key="2"
            active={showResource}
            className="-mt-4 ml-5 mr-6 inline-block"
            text="위"
            width={165}
            height={80}
          />
          에 점을 찍어
          <FlippableCard_60
            key="3"
            active={showResource}
            className="-mt-4 ml-6 mr-8 inline-block"
            text="위"
            width={165}
            height={80}
          />
          라는 뜻을 나타냄.
        </div>
      ),
      resource: IMAGE3.src,
      sound: "/sound/2/30/4.mp3",
    },
    {
      chinese: "下",
      reading: "하",
      meaning: "아래",
      content: (
        <div className="flex items-center flex-wrap">
          기준선
          <FlippableCard_60
            key="4"
            active={showResource}
            className="-mt-4 ml-5 mr-5 inline-block"
            text="아래"
            width={190}
            height={80}
          />
          에 점을 찍어
          <FlippableCard_60
            key="5"
            active={showResource}
            className="-mt-4 ml-4 mr-8 inline-block"
            text="아래"
            width={190}
            height={80}
          />
          라는 뜻을 나타냄.
        </div>
      ),
      resource: IMAGE4.src,
      sound: "/sound/2/30/5.mp3",
    },
    {
      chinese: "本",
      reading: "본",
      meaning: "근본",
      content: (
        <div className="flex items-center flex-wrap">
          나무
          <FlippableCard_60
            key="6"
            active={showResource}
            className="-mt-4 ml-4 mr-5 inline-block"
            text="뿌리"
            width={190}
            height={80}
          />
          {"\xa0"}
          부분에 선을 그어
          <FlippableCard_60
            key="7"
            active={showResource}
            className="-mt-4 ml-5 mr-10 inline-block"
            text="근본"
            width={190}
            height={80}
          />
          <span className="mt-2 -mb-10">이라는 뜻을 나타냄.</span>
        </div>
      ),
      resource: IMAGE5.src,
      sound: "/sound/2/30/6.mp3",
    },
    {
      chinese: "末",
      reading: "말",
      meaning: "끝",
      content: (
        <div className="flex items-center flex-wrap">
          나뭇가지 끝부분에 선을 그어
          <FlippableCard_60
            key="8"
            active={showResource}
            className="-mt-4 ml-5 mr-8 inline-block"
            text="끝"
            width={165}
            height={80}
          />
          이라는 뜻을 <span className="mt-[70px] -mb-[70px] -ml-[1030px]">나타냄.</span>
        </div>
      ),
      resource: IMAGE6.src,
      sound: "/sound/2/30/7.mp3",
    },
  ];

  return (
    <>
      <LearnMainContentPageTemplate>
        <RightTopStepContainer maxStep={7} />

        {step === 1 ? (
          <img src={IMAGE1.src} alt="image1" className="mt-[40px]" />
        ) : step === 7 ? (
          <div className="relative">
            <img src={IMAGE7.src} alt="image1" className="mt-[65px]" />
            <div className="absolute w-full left-1/2 -translate-x-1/2 bottom-[100px] grid grid-cols-5 gap-x-[50px] gap-y-[50px] px-[100px]">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v) => (
                <button
                  onClick={() =>
                    new Howl({
                      src: `/sound/2/31/${v}.mp3`,
                    }).play()
                  }
                  className="w-[150px] h-[120px]"
                />
              ))}
            </div>
          </div>
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
                      if (!showReading) {
                        new Howl({
                          src: data[step - 2].sound,
                        }).play();
                      }
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
                    active={showMeaning}
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
                    active={showResource}
                    onClick={() => setShowResource(!showResource)}
                    text="자원"
                    checkboxColor="#41466f"
                    backgroundColor="#7278a6"
                  />
                  <div
                    key={step}
                    className="mt-2 ml-10 text-[50px] leading-[62px] tracking-[0.5px] -mr-[230px]"
                  >
                    {data[step - 2]?.content ?? null}

                  </div>
                  <div className="relative mt-10 pt-2 pl-8 w-[1200px] h-[115px] justify-items-center ">
                    <img
                      src={data[step - 2]?.resource}
                      alt="resource"
                    />
                  </div>
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
                step == 5 ? BACKGROUND5.src :
                  step == 6 ? BACKGROUND6.src :
                    step == 7 ? BACKGROUND7.src : ""
      } className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
