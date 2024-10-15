"use client";

import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import CONTAINER from "./content.png";
import MODAL from "./modal.png";
import MODAL_CLOSE from "./modal-close.png";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import IMAGE3 from "./image3.png";
import IMAGE4 from "./image4.png";
import IMAGE5 from "./image5.png";
import IMAGE6 from "./image6.png";
import IMAGE7 from "./image7.png";
import { LearnMainContentPageTemplate } from "@/app/pages/learn-main-content/learn-main-content-page-template";
import { useEffect, useState } from "react";
import { FlippableCard } from "@/app/components/flippable-card/flippable-card";
import { PillButton } from "@/app/components/buttons/pill-button";
import { ResourceButton } from "@/app/components/buttons/resource-button";
import { ContentContainer } from "@/app/components/content-container";
import { Modal } from "@/app/components/modal";
import { Howl } from "howler";
import BACKGROUND1 from "@/app/bgpng_temp/3/중등한문_그려서 만든 한자8.png";

export default function Page() {
  const [step, setStep] = useState(1);

  const [showReading, setShowReading] = useState(false);
  const [showMeaning, setShowMeaning] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowReading(false);
    setShowMeaning(false);
    setShowModal(false);
  }, [step]);

  const data = [
    {
      chinese: "山",
      reading: "산",
      meaning: "산",
      content: "등산",
      // resource: IMAGE2.src,
      resource: "/video/animation/2-3_29/017-1-1.webm",
    },
    {
      chinese: "川",
      reading: "천",
      meaning: "내",
      content: "하천",
      // resource: IMAGE3.src,
      resource: "/video/animation/2-3_29/017-2-1.webm",
    },
    {
      chinese: "日",
      reading: "일",
      meaning: "해",
      content: "일식",
      // resource: IMAGE4.src,
      resource: "/video/animation/2-3_29/017-3-1.webm",
    },
    {
      chinese: "月",
      reading: "월",
      meaning: "달",
      content: "월식",
      // resource: IMAGE5.src,
      resource: "/video/animation/2-3_29/017-4-1.webm",
    },
    {
      chinese: "火",
      reading: "화",
      meaning: "불",
      content: "화력",
      // resource: IMAGE6.src,
      resource: "/video/animation/2-3_29/017-5-1.webm",
    },
    {
      chinese: "木",
      reading: "목",
      meaning: "나무",
      content: "초목",
      // resource: IMAGE7.src,
      resource: "/video/animation/2-3_29/017-6-1.webm",
    },
  ];

  return (
    <>
      <LearnMainContentPageTemplate>
        <RightTopStepContainer maxStep={7} step={step} onStepChange={setStep} />
        {step === 1 ? (
          <img src={IMAGE1.src} alt="image1" />
        ) : (
          <ContentContainer className="w-[1300px] h-full grid grid-cols-[1fr__452px]">
            <div className="relative left-[100px] top-[50px]">
              <div className="absolute left-[160px] -top-[270px] w-[770px] text-center text-[215px]">
                <span className="font-haeseo">{data[step - 2]?.chinese}</span>
              </div>
              <div className="flex flex-col gap-16">
                <div className="grid grid-cols-[50px__1fr]">
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
                    className={`text-center text-main-content text-[60px] h-[60px] mb-[10px] ${showReading ? "animate__animated animate__slideInDown" : ""}`}
                  >
                    {showReading ? data[step - 2]?.reading : null}
                  </div>
                </div>
                <div className="grid grid-cols-[50px__1fr]">
                  <PillButton
                    active={showMeaning}
                    onClick={() => setShowMeaning(!showMeaning)}
                    text="뜻"
                    checkboxColor="#306875"
                    backgroundColor="#4f9aab"
                  />
                  <div
                    className={`text-center text-main-content text-[60px] h-[60px] mb-[10px] ${showMeaning ? "animate__animated animate__slideInDown" : ""}`}
                  >
                    {showMeaning ? data[step - 2]?.meaning : null}
                  </div>
                </div>
                <ResourceButton active onClick={() => setShowModal(true)} />
              </div>
            </div>
            <div>
              <div className="relative top-[50px] -left-[10px]">
                <img src={CONTAINER.src} alt="container" />

                <FlippableCard
                  key={step}
                  text={data[step - 2]?.content}
                  width={330}
                  height={130}
                  className="text-[60px] absolute bottom-10 left-1/2 -translate-x-1/2"
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
              onClick={() => setShowModal(false)}
            >
              <img src={MODAL_CLOSE.src} />
            </button>
          </div>
        </div>
      </Modal>
      {/* <img src={BACKGROUND1.src} className="absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
}
