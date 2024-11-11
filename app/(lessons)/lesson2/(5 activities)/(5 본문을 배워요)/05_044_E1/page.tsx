"use client";

import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import IMAGE2 from "./bg_2.png";
import IMAGE3 from "./bg_3.png";
import IMAGE4 from "./bg_4.png";
import IMAGE5 from "./bg_5.png";
import VIDEO_PLAY_THUMBNAIL from "@/app/components/video-thumbnail/assets/video-play.png";
import { LearnMainContentPageTemplate } from "@/app/pages/learn-main-content/learn-main-content-page-template";
import { useContext, useEffect, useState } from "react";
import { FlippableCard_60 } from "@/app/components/flippable-card/flippable-card";
import { PillButton } from "@/app/components/buttons/pill-button";
import { ContentContainer } from "@/app/components/content-container";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/5/중등한문_한자를 알면 틀리지 않는 일상 어휘6.png";
import BACKGROUND2 from "@/app/bgpng_temp/5/중등한문_한자를 알면 틀리지 않는 일상 어휘7.png";
import BACKGROUND3 from "@/app/bgpng_temp/5/중등한문_한자를 알면 틀리지 않는 일상 어휘8.png";
import BACKGROUND4 from "@/app/bgpng_temp/5/중등한문_한자를 알면 틀리지 않는 일상 어휘9.png";
import { Modal } from "@/app/components/modal";
import ReactPlayer from "react-player";
import { clickSound } from "@/app/utils/click-sound";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  const [showReading, setShowReading] = useState(false);
  const [showMeaning, setShowMeaning] = useState<boolean | null>(null);
  const [showReading2, setShowReading2] = useState(false);
  const [showMeaning2, setShowMeaning2] = useState(false);

  const video = "string";
  useEffect(() => {
    setShowReading(false);
    setShowMeaning(null);
    setShowReading2(false);
    setShowMeaning2(false);
  }, [step]);

  const data = [
    {
      //left part
      chinese: "問安",
      reading: "문 안",
      sound: "/sound/2/44/1.mp3",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tighter font-bold">
          안부를{" "}
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 ml-5 mr-10 inline-block"
            text="물음."
            width={220}
            height={80}
          />
        </div>
      ),
      flippableCardData: true,
    },
    {
      //right part
      sound: "/sound/2/44/2.mp3",
      chinese: "無難",
      reading: "무 난",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tighter font-bold">
          어려움이{" "}
          <FlippableCard_60
            active={showMeaning2}
            className="-mt-2 ml-5 mr-10 inline-block"
            text="없음."
            width={220}
            height={80}
          />
        </div>
      ),
      flippableCardData: true,
      resource: IMAGE2.src,
      video: "/video/animation/2-5_44-1.mp4",
    },
    {
      //left part
      chinese: "今日",
      reading: "금 일",
      sound: "/sound/2/44/3.mp3",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tighter leading-tight font-bold -mb-[50px]">
          지금 지나가고
          <br />
          있는 이날.
        </div>
      ),
    },
    {
      //right part
      sound: "/sound/2/44/4.mp3",
      chinese: "休業",
      reading: "휴 업",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tighter font-bold ">
          일을{" "}
          <FlippableCard_60
            active={showMeaning2}
            className="-mt-2 ml-5 mr-10 inline-block"
            text="쉼."
            width={220}
            height={80}
          />
        </div>
      ),
      flippableCardData: true,
      resource: IMAGE3.src,
      video: "/video/animation/2-5_44-2.mp4",
    },
    {
      //left part
      chinese: "植樹",
      reading: "식 수",
      sound: "/sound/2/45/1.mp3",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tighter font-bold">
          나무를{" "}
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 ml-5 mr-10 inline-block"
            text="심음."
            width={220}
            height={80}
          />
        </div>
      ),
      flippableCardData: true,
    },
    {
      //right part
      sound: "/sound/2/45/2.mp3",
      chinese: "食水",
      reading: "식 수",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tighter font-bold">
          먹는{" "}
          <FlippableCard_60
            active={showMeaning2}
            className="-mt-2 ml-5 mr-10 inline-block"
            text="물."
            width={220}
            height={80}
          />
        </div>
      ),
      flippableCardData: true,
      resource: IMAGE4.src,
      video: "/video/animation/2-5_45-1.mp4",
    },
    {
      //left part
      chinese: "義士",
      reading: "의 사",
      sound: "/sound/2/45/3.mp3",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tighter font-bold">
          의로운{" "}
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 ml-5 mr-10 inline-block"
            text="사람."
            width={220}
            height={80}
          />
        </div>
      ),
      flippableCardData: true,
    },
    {
      //right part
      sound: "/sound/2/45/4.mp3",
      chinese: "意思",
      reading: "의 사",
      content: (
        <div className="flex items-center flex-wrap text-[50px] tracking-tighter font-bold -mb-[75px]">
          뜻과{" "}
          <FlippableCard_60
            active={showMeaning2}
            className="-mt-2 ml-5 mr-10 inline-block"
            text="생각."
            width={220}
            height={80}
          />
          무엇을 하고자 하는 생각.
        </div>
      ),
      flippableCardData: true,
      resource: IMAGE5.src,
      video: "/video/animation/2-5_45-2.mp4",
    },
  ];

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <LearnMainContentPageTemplate>
        <RightTopStepContainer maxStep={4} />

        <ContentContainer className="w-[1300px] h-full grid grid-cols-2 pl-20 pr-10">
          <div className="relative mb-[260px]">
            <div className="relative top-7 left-[135px] w-[550px] text-center text-[180px] tracking-widest">
              <span className="font-haeseo">{data[step * 2 - 2]?.chinese}</span>
            </div>
            <div className="flex flex-col gap-16">
              <div className="grid grid-cols-[180px__1fr] gap-12">
                <PillButton
                  active={showReading}
                  onClick={() => {
                    if (!showReading) SOUND(data[step * 2 - 2].sound).play();
                    setShowReading(!showReading);
                  }}
                  text="읽기"
                  checkboxColor="#23425e"
                  backgroundColor="#3a5e7c"
                />
                <div
                  className={`mr-[100px] -mt-4 h-[85px] text-main-content font-chosun text-[60px] pl-12 tracking-[60px] ${showReading ? "animate__animated animate__slideInDown" : ""}`}
                >
                  {showReading ? data[step * 2 - 2]?.reading : null}
                </div>
              </div>
              <div className="grid grid-cols-[180px__1fr] gap-12 bg-transparent">
                <PillButton
                  active={showMeaning}
                  onClick={() => setShowMeaning(!showMeaning)}
                  text="풀이"
                  checkboxColor="#306875"
                  backgroundColor="#4f9aab"
                />
                {data[step * 2 - 2]?.flippableCardData ? (
                  <div>
                    <div key={step}>{data[step * 2 - 2]?.content ?? null}</div>
                  </div>
                ) : (
                  <div className="h-[75px]">
                    <div key={step}
                      className={`mt-2 ${showMeaning ? 'animate__animated animate__fadeIn animate__flipInX' : 'hidden'}`}
                    >
                      {data[step * 2 - 2]?.content ?? null}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="relative mb-[260px]">
            <div className="relative top-7 left-[135px] w-[550px] text-center text-[180px] tracking-widest">
              <span className="font-haeseo">{data[step * 2 - 1]?.chinese}</span>
            </div>
            <div className="flex flex-col gap-16">
              <div className="grid grid-cols-[180px__1fr] gap-12">
                <PillButton
                  active={showReading2}
                  onClick={() => {
                    if (!showReading2) SOUND(data[step * 2 - 1].sound).play();
                    setShowReading2(!showReading2);
                  }}
                  text="읽기"
                  checkboxColor="#23425e"
                  backgroundColor="#3a5e7c"
                />
                <div
                  className={`mr-[100px] -mt-4 h-[85px] text-main-content font-chosun text-[60px] pl-12 tracking-[60px] ${showReading2 ? "animate__animated animate__slideInDown" : ""}`}
                >
                  {showReading2 ? data[step * 2 - 1]?.reading : null}
                </div>
              </div>
              <div className="grid grid-cols-[180px__1fr] gap-12 bg-transparent">
                <PillButton
                  active={showMeaning2}
                  onClick={() => setShowMeaning2(!showMeaning2)}
                  text="풀이"
                  checkboxColor="#306875"
                  backgroundColor="#4f9aab"
                />
                <div key={step}>{data[step * 2 - 1]?.content ?? null}</div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 w-[1000px] h-[115px]">
            <div>
              <img src={VIDEO_PLAY_THUMBNAIL.src} className={
                step === 1 ? "pointer-events-none opacity-60 w-[80px] absolute bottom-[160px] right-[180px] z-10" :
                  step === 2 ? "pointer-events-none opacity-60 w-[80px] absolute bottom-[170px] right-[160px] z-10" :
                    step === 3 ? "pointer-events-none opacity-60 w-[80px] absolute bottom-[180px] right-[210px] z-10" :
                      step === 4 ? "pointer-events-none opacity-60 w-[80px] absolute bottom-[170px] translate-x-[200px] z-10"
                        : ""
              } />
              <button
                className={`z-[3]`}
                onClick={() => {
                  clickSound.play();
                  setShowModal(true);
                }}
              >
                <img
                  src={data[step * 2 - 1]?.resource}
                  alt="resource"
                  className={
                    step === 1 ? "absolute bottom-[60px] right-14" :
                      step === 2 ? "absolute bottom-[70px] right-10" :
                        step === 3 ? "absolute bottom-[70px] right-5" :
                          step === 4 ? "absolute bottom-[70px] translate-x-5"
                            : ""
                  }
                />
              </button>

              <Modal open={showModal} onClose={() => setShowModal(false)}>
                <div className="w-full h-full bg-white bg-opacity-70 ">
                  {video ? (
                    <ReactPlayer
                      url={data[step * 2 - 1]?.video}
                      playing
                      width={1760}
                      height={990}
                    />
                  ) : null}
                </div>
              </Modal>

            </div>
          </div>
        </ContentContainer>
      </LearnMainContentPageTemplate>
      <img src={
        step == 1 ? BACKGROUND1.src :
          step == 2 ? BACKGROUND2.src :
            step == 3 ? BACKGROUND3.src :
              step == 4 ? BACKGROUND4.src : ""
      } className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
