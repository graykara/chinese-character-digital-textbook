"use client";

import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import IMAGE1 from "./image1.png";
import { LearnMainContentPageTemplate } from "@/app/pages/learn-main-content/learn-main-content-page-template";
import { useContext, useEffect, useState } from "react";
import { FlippableCard_60 } from "@/app/components/flippable-card/flippable-card";
import { PillButton } from "@/app/components/buttons/pill-button";
import { ContentContainer } from "@/app/components/content-container";
import { MoveRight, Plus } from "lucide-react";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/4/중등한문_합쳐서 만든 한자7.png";
import BACKGROUND2 from "@/app/bgpng_temp/4/중등한문_합쳐서 만든 한자8.png";
import BACKGROUND3 from "@/app/bgpng_temp/4/중등한문_합쳐서 만든 한자9.png";
import BACKGROUND4 from "@/app/bgpng_temp/4/중등한문_합쳐서 만든 한자10.png";
import BACKGROUND5 from "@/app/bgpng_temp/4/중등한문_합쳐서 만든 한자11.png";
import BACKGROUND6 from "@/app/bgpng_temp/4/중등한문_합쳐서 만든 한자12.png";
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
      chinese: "林",
      reading: "림",
      meaning: "수풀",
      sound: "/sound/2/36/2.mp3",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tight -mr-10">
          <FlippableCard_60
            key="1"
            active={showResource}
            className="-mt-4 ml-5 mr-5 inline-block"
            text="나무"
            width={210}
            height={80}
          />
          와
          <FlippableCard_60
            key="2"
            active={showResource}
            className="-mt-4 ml-5 mr-5 inline-block"
            text="나무"
            width={210}
            height={80}
          />
          가 모여 이루어진 ‘
          <FlippableCard_60
            key="3"
            active={showResource}
            className="-mt-4 ml-2 mr-2 inline-block"
            text="수풀"
            width={210}
            height={80}
          />
          ’
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
        <div className="flex items-center flex-wrap text-[50px] tracking-tight -mr-10">
          <FlippableCard_60
            key="4"
            active={showResource}
            className="-mt-4 ml-5 mr-5 inline-block"
            text="사람"
            width={210}
            height={80}
          />
          이
          <FlippableCard_60
            key="5"
            active={showResource}
            className="-mt-4 ml-5 mr-5 inline-block"
            text="나무"
            width={210}
            height={80}
          />
          에 기대어 ‘
          <FlippableCard_60
            key="6"
            active={showResource}
            className="-mt-4 ml-5 mr-5 inline-block"
            text="쉬다"
            width={210}
            height={80}
          />
          ’
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
        <div className="flex items-center flex-wrap text-[50px] tracking-tight -mr-10">
          <FlippableCard_60
            key="7"
            active={showResource}
            className="-mt-4 ml-5 mr-5 inline-block"
            text="해"
            width={210}
            height={80}
          />
          와
          <FlippableCard_60
            key="8"
            active={showResource}
            className="-mt-4 ml-5 mr-5 inline-block"
            text="달"
            width={210}
            height={80}
          />
          처럼 ‘
          <FlippableCard_60
            key="9"
            active={showResource}
            className="-mt-4 ml-5 mr-5 inline-block"
            text="밝다"
            width={210}
            height={80}
          />
          ’
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
        <div className="flex items-center flex-wrap text-[50px] tracking-tight -mr-10">
          <FlippableCard_60
            key="10"
            active={showResource}
            className="-mt-4 ml-5 mr-5 inline-block"
            text="여자"
            width={210}
            height={80}
          />
          가 자녀를 안으니 ‘
          <FlippableCard_60
            key="11"
            active={showResource}
            className="-mt-4 ml-5 mr-5 inline-block"
            text="좋다"
            width={210}
            height={80}
          />
          ’
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
        <div className="flex items-center flex-wrap text-[40px] mt-10 ml-5 -mr-10">
          어두운
          <FlippableCard_60
            key="12"
            active={showResource}
            className="-mt-3 ml-2 mr-5 text-[50px] inline-block"
            text="저녁"
            width={205}
            height={80}
          />
          에 상대를 알기 위해 입으로 부르는 ‘
          <FlippableCard_60
            key="13"
            active={showResource}
            className="-mt-3 ml-2 mr-5 text-[50px] inline-block"
            text="이름"
            width={204}
            height={80}
          />
          ’
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
        <RightTopStepContainer maxStep={6} />

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
                    text="해설"
                    checkboxColor="#41466f"
                    backgroundColor="#7278a6"
                  />
                  <div key={step}>
                    <div
                      className="flex items-center gap-4 -mt-2 ml-8 text-[50px] leading-[62px] tracking-[0.5px] -mr-[230px]">
                      <div
                        className="w-[100px] h-[100px] font-haeseo text-[70px] cursor-pointer bg-[#f9edce] rounded-xl flex justify-center items-center"
                        onClick={() =>
                          SOUND(data[step - 2]?.equation[0].sound).play()
                        }
                      >
                        {data[step - 2]?.equation[0].chinese}
                      </div>
                      <span className="text-[40px] ml-2 mt-2">
                        {data[step - 2].equation[0].text}
                      </span>
                      <Plus size={45} color="gray" className="-ml-1" />
                      <div
                        className="w-[100px] h-[100px] font-haeseo text-[70px] cursor-pointer bg-[#e3f2f9] rounded-xl flex justify-center items-center"
                        onClick={() =>
                          SOUND(data[step - 2]?.equation[1].sound).play()
                        }
                      >
                        {data[step - 2]?.equation[1].chinese}
                      </div>
                      <span className="text-[40px] ml-3 mt-2">
                        {data[step - 2].equation[1].text}
                      </span>
                      <MoveRight size={50} color="gray" className="ml-1" />
                      <div
                        className="font-haeseo text-[90px] ml-5 -mt-2 cursor-pointer"
                        onClick={() =>
                          SOUND(data[step - 2]?.equation[2].sound).play()
                        }
                      >
                        {data[step - 2]?.equation[2].chinese}
                      </div>
                      <span className="text-[40px] ml-0 mt-2">
                        {data[step - 2].equation[2].text}
                      </span>
                    </div>
                    <div className="mt-9 ml-2 text-[50px] -mr-[230px]"
                    >
                      {data[step - 2]?.content ?? null}
                    </div>
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
                  step == 6 ? BACKGROUND6.src : ""
      } className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
