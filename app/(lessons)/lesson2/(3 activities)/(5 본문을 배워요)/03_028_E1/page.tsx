"use client";

import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import CONTAINER from "./content.png";
import MODAL from "./modal.png";
import MODAL_CLOSE from "./modal-close.png";
import IMAGE1 from "./image1.png";
import { LearnMainContentPageTemplate } from "@/app/pages/learn-main-content/learn-main-content-page-template";
import { useContext, useEffect, useState } from "react";
import { FlippableCard } from "@/app/components/flippable-card/flippable-card";
import { PillButton } from "@/app/components/buttons/pill-button";
import { ResourceButton } from "@/app/components/buttons/resource-button";
import { ContentContainer } from "@/app/components/content-container";
import { Modal } from "@/app/components/modal";
import { Howl } from "howler";
import { clickSound } from "@/app/utils/click-sound";
import BACKGROUND1 from "@/app/bgpng_temp/3/중등한문_그려서 만든 한자7.png";
import BACKGROUND2 from "@/app/bgpng_temp/3/중등한문_그려서 만든 한자8.png";
import BACKGROUND3 from "@/app/bgpng_temp/3/중등한문_그려서 만든 한자10.png";
import BACKGROUND4 from "@/app/bgpng_temp/3/중등한문_그려서 만든 한자12.png";
import BACKGROUND5 from "@/app/bgpng_temp/3/중등한문_그려서 만든 한자14.png";
import BACKGROUND6 from "@/app/bgpng_temp/3/중등한문_그려서 만든 한자16.png";
import BACKGROUND7 from "@/app/bgpng_temp/3/중등한문_그려서 만든 한자18.png";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  const [showReading, setShowReading] = useState(false);
  const [showMeaning, setShowMeaning] = useState<boolean | null>(null);
  const [showContent, setShowContent] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowReading(false);
    setShowMeaning(null);
    setShowContent(false);
    setShowModal(false);
  }, [step]);

  const data = [
    {
      chinese: "山",
      reading: "산",
      meaning: "산",
      content: "등산",
      resource: "/video/animation/2-3_29/017-1-1.webm",
    },
    {
      chinese: "川",
      reading: "천",
      meaning: "내",
      content: "하천",
      resource: "/video/animation/2-3_29/017-2-1.webm",
    },
    {
      chinese: "日",
      reading: "일",
      meaning: "해",
      content: "일식",
      resource: "/video/animation/2-3_29/017-3-1.webm",
    },
    {
      chinese: "月",
      reading: "월",
      meaning: "달",
      content: "월식",
      resource: "/video/animation/2-3_29/017-4-1.webm",
    },
    {
      chinese: "火",
      reading: "화",
      meaning: "불",
      content: "화력",
      resource: "/video/animation/2-3_29/017-5-1.webm",
    },
    {
      chinese: "木",
      reading: "목",
      meaning: "나무",
      content: "초목",
      resource: "/video/animation/2-3_29/017-6-1.webm",
    },
  ];

  return (
    <>
      <LearnMainContentPageTemplate>
        <RightTopStepContainer maxStep={7} />

        {step === 1 ? (
          <img src={IMAGE1.src} alt="image1" className="mt-[40px]" />
        ) : (
          <ContentContainer className="!justify-start w-[1760px] px-[130px]">
            <div className="absolute top-[110px] pr-[190px] text-center text-[215px]">
              <span className="font-haeseo">{data[step - 2]?.chinese}</span>
            </div>
            <div className="relative w-full top-[380px] px-[150px]  grid grid-cols-[1fr__452px]">
              <div className="flex flex-col gap-16">
                <div className="grid grid-cols-[180px__1fr]">
                  <PillButton
                    active={showReading}
                    onClick={() => {
                      if (!showReading)
                        new Howl({ src: `/sound/2/28/${step - 1}.mp3` }).play();
                      setShowReading(!showReading);
                    }}
                    text="읽기"
                    checkboxColor="#23425e"
                    backgroundColor="#3a5e7c"
                  />
                  <div
                    className={`ml-[70px] -mt-4 h-[85px] text-center text-main-content font-chosun text-[60px] ${showReading ? "animate__animated animate__slideInDown" : ""}`}
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
                    className={`ml-[70px] -mt-0 -mb-4 h-[85px] text-center font-bold text-[50px] tracking-tighter ${showMeaning ? "animate__animated animate__slideInDown" : ""}`}
                  >
                    {showMeaning ? data[step - 2]?.meaning : null}
                  </div>
                </div>
                <ResourceButton active onClick={() => setShowModal(true)} />
              </div>
              <div className="relative -top-[80px] -right-[90px]">
                <img src={CONTAINER.src} alt="container" />
                <FlippableCard
                  active={showContent}
                  key={step}
                  text={data[step - 2]?.content}
                  width={330}
                  height={125}
                  className="text-[60px] absolute bottom-12 left-1/2 -translate-x-1/2"
                />
              </div>
            </div>
          </ContentContainer>
        )}
      </LearnMainContentPageTemplate>

      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        hideCloseButtom
      >
        <div className="h-[990px] bg-white bg-opacity-70 flex justify-center items-center">
          <div className="relative flex justify-center items-center">
            <img src={MODAL.src} />
            <video
              alt="resource"
              className="absolute top-[90px] w-[1100px] h-[320px] object-contain"
              autoPlay
            >
              <source src={data[step - 2]?.resource} type="video/webm" />
            </video>

            <button
              className="animate__animated animate__delay-1s animate__rotateIn absolute top-6 right-6"
              onClick={() => {
                clickSound.play();
                setShowModal(false);
              }}
            >
              <img src={MODAL_CLOSE.src} />
            </button>
          </div>
        </div>
      </Modal>
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
