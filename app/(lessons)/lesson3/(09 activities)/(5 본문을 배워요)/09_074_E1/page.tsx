"use client";

import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import { LearnMainContentPageTemplate } from "@/app/pages/learn-main-content/learn-main-content-page-template";
import { useEffect, useState } from "react";
import { FlippableCard_60 } from "@/app/components/flippable-card/flippable-card";
import { ContentContainer } from "@/app/components/content-container";
import { SOUND } from "@/app/utils/sound-player";
import IMAGE1 from "./popup_03_img1.png";
import IMAGE2 from "./popup_03_img2.png";
import IMAGE3 from "./popup_03_img3.png";
import IMAGE4 from "./popup_03_img4.png";
import BACKGROUND1 from "@/app/bgpng_temp/9/중등한문_이야기가 담긴 성어19.png";
import BACKGROUND2 from "@/app/bgpng_temp/9/중등한문_이야기가 담긴 성어113.png";
import BACKGROUND3 from "@/app/bgpng_temp/9/중등한문_이야기가 담긴 성어115.png";
import BACKGROUND4 from "@/app/bgpng_temp/9/중등한문_이야기가 담긴 성어118.png";
import { MainContent_SM } from "../../../main-content";
import { MainContentVideoButton } from "@/app/components/main-content/video-button";
import { MainContentModalButton } from "@/app/components/main-content/modal-button";

export default function Page() {
  const [step, setStep] = useState(1);

  const [showReading, setShowReading] = useState(false);
  const [showMeaning, setShowMeaning] = useState(false);
  const [showMeaning2, setShowMeaning2] = useState(false);

  useEffect(() => {
    setShowReading(false);
    setShowMeaning(false);
    setShowMeaning2(false);
  }, [step]);

  const data = [
    {
      chinese: [
        { letter: "蛇", reading: "사" },
        {
          letter: "足",
          reading: "족",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/3/p075_word000.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                足
              </span>
              : ① 발, ② 만족하다
            </p>
          ),
        },
      ],
      sound: "/sound/3/74/1.mp3",
      content1: (
        <div className="flex flex-wrap text-[50px] font-bold">
          뱀의
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 ml-5 inline-block"
            text="발"
            width={150}
            height={80}
          />
        </div>
      ),
      content2: (
        <div className="flex flex-wrap text-[50px] font-bold">
          쓸데없는 군짓을 하여 도리어 잘못되게 함.
        </div>
      ),
    },
    {
      chinese: [
        { letter: "指", reading: "지" },
        { letter: "鹿", reading: "록" },
        { letter: "爲", reading: "위" },
        { letter: "馬", reading: "마" },
      ],
      sound: "/sound/3/74/2.mp3",
      content1: (
        <div className="flex flex-wrap text-[50px] font-bold">
          사슴을
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 ml-5 mr-8 inline-block"
            text="가리켜"
            width={220}
            height={80}
          />
          말이라고
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 ml-5 inline-block"
            text="함"
            width={150}
            height={80}
          />
        </div>
      ),
      content2: (
        <div className="flex flex-wrap text-[50px] font-bold">
          윗사람을 농락하여 권세를 마음대로 함.
        </div>
      ),
    },
    {
      chinese: [
        { letter: "漁", reading: "어" },
        { letter: "父", reading: "부" },
        {
          letter: "之",
          reading: "지",
          additional: (
            <p>
              <span
                onClick={() => SOUND("/sound/3/p075_word001.mp3").play()}
                className="font-haeseo cursor-pointer"
              >
                之
              </span>
              : ~의
            </p>
          ),
        },
        { letter: "利", reading: "리" },
      ],
      sound: "/sound/3/74/3.mp3",
      content1: (
        <div className="flex flex-wrap text-[50px] font-bold">
          어부의
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 ml-5 mr-5 inline-block"
            text="이익"
            width={170}
            height={80}
          />
          .
        </div>
      ),
      content2: (
        <div className="flex flex-wrap text-[50px] font-bold">
          두 사람이 이해관계로 서로 싸우는 사이에 엉뚱한 사람이 애쓰지 않고
          가로챈 이익
        </div>
      ),
    },
    {
      chinese: [
        { letter: "朝", reading: "조" },
        { letter: "三", reading: "삼" },
        { letter: "暮", reading: "모" },
        { letter: "四", reading: "사" },
      ],
      sound: "/sound/3/74/4.mp3",
      content1: (
        <div className="flex flex-wrap text-[50px] font-bold">
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 mr-6 inline-block"
            text="아침"
            width={170}
            height={80}
          />
          에 세 개,
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 ml-5 mr-6 inline-block"
            text="저녁"
            width={170}
            height={80}
          />
          에 네 개.
        </div>
      ),
      content2: (
        <div className="flex flex-wrap text-[50px] font-bold">
          간사한 꾀로 남을 속여 희롱함.
        </div>
      ),
    },
  ];

  const modal_content = [
    {
      className: "w-[900px]",
      bgColor: "#4f9aab",
      image: "/ui/popupbtn3-1.png",
      meaningsTitle: (
        <>
          <img src="/ui/question-icon.png" width={45} />
          성어의 유래란?
        </>
      ),
      content: (
        <div className="px-4 pt-2 pb-4 text-[50px] leading-[130%] tracking-tighter break-keep">
          <span>
            성어가 만들어진 ‘배경 이야기’를 성어의 ‘유래’ 또는 ‘고사(
            <span className="font-haeseo text-[55px] leading-tight tracking-[-5px]">
              故事
            </span>
            )’라고 한다. 성어의 유래에는 성어가 만들어진 당시의 시대 상황이나
            가치관 등이 담겨 있다.
            <br />
          </span>
        </div>
      ),
    },
    {
      className: "w-[1315px]",
      bgColor: "#4f9aab",
      image: "/ui/popupbtn4-1.png",
      meaningsTitle: (
        <>
          <img src="/ui/resource-button-icon.png" width={46} />
          성어 유래
        </>
      ),
      content: (
        <>
          <div className="flex flex-none text-[50px] tracking-tight break-keep">
            <p>
              {" "}
              중국 초(
              <span className="font-haeseo text-[55px] leading-tight tracking-[-5px]">
                楚
              </span>
              )나라의 한 부자가 하인들에게 술을 한 병 내렸는데, 뱀을 가장 먼저
              그린 한 명이 술을 갖기로 하였다. 한 하인이 뱀을 제일 먼저 완성하고
              뱀에 발을 덧붙였는데 옆에 있던 하인이 “당신이 그린 그림은 뱀에
              발이 붙어 있으니 어찌 뱀이라 할 수 있겠소.”라고 하며 술을 빼앗은
              이야기에서 유래함.
            </p>
            <img src={IMAGE1.src} className="float-right bottom-0 h-[100%]" />
          </div>
        </>
      ),
    },
    {
      className: "w-[1315px]",
      bgColor: "#4f9aab",
      image: "/ui/popupbtn4-1.png",
      meaningsTitle: (
        <>
          <img src="/ui/resource-button-icon.png" width={46} />
          성어 유래
        </>
      ),
      content: (
        <>
          <div className="flex flex-none text-[50px] tracking-tight break-keep">
            <p>
              중국 진(
              <span className="font-haeseo text-[55px] leading-tight tracking-[-5px]">
                秦
              </span>
              )나라 조고는 자신이 반역을 꾀했을 때 누가 자신의 편이 될 것인가를
              시험하기 위해 황제 호해에게 사슴을 바치며 말이라고 하였다. 그러자
              호해가 신하들에게 사슴인지 말인지 물으니, 조고의 권력을 두려워하던
              신하들이 말이라고 한 이야기에서 유래함.
            </p>
            <img src={IMAGE2.src} className="float-right bottom-0 h-[100%]" />
          </div>
        </>
      ),
    },
    {
      className: "w-[1315px]",
      bgColor: "#4f9aab",
      image: "/ui/popupbtn4-1.png",
      meaningsTitle: (
        <>
          <img src="/ui/resource-button-icon.png" width={46} />
          성어 유래
        </>
      ),
      content: (
        <>
          <div className="flex flex-none text-[50px] tracking-tight break-keep">
            <p>
              {" "}
              도요새가 날아와 조개의 속살을 부리로 쪼자, 조개는 입을 다물어
              도요새의 부리를 잡고 버텼다. 그런데 우연히 지나가던 어부가
              힘들이지 않고 조개와 도요새를 둘 다 잡았다는 이야기에서 유래함.
            </p>
            <img src={IMAGE3.src} className="float-right bottom-0 h-[100%]" />
          </div>
        </>
      ),
    },
    {
      className: "w-[1315px]",
      bgColor: "#4f9aab",
      image: "/ui/popupbtn4-1.png",
      meaningsTitle: (
        <>
          <img src="/ui/resource-button-icon.png" width={46} />
          성어 유래
        </>
      ),
      content: (
        <>
          <div className="flex flex-none text-[50px] tracking-tight break-keep">
            <p>
              {" "}
              중국 송(
              <span className="font-haeseo text-[55px] leading-tight tracking-[-5px]">
                宋
              </span>
              )나라 때 저공이 원숭이들에게 도토리를 아침에 세 개, 저녁에 네 개씩
              주겠다고 하니 원숭이들이 적다고 화를 냈다. 그런데 아침에 네 개,
              저녁에 세 개씩 준다고 하자 좋아하였다고 한 이야기에서 유래함.
            </p>
            <img src={IMAGE4.src} className="float-right bottom-0 h-[100%]" />
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <LearnMainContentPageTemplate>
        <RightTopStepContainer maxStep={4} step={step} onStepChange={setStep} />

        <MainContentVideoButton
          video="/video/writing/74p_1.mp4"
          className="absolute left-[112px] top-[40px]"
          buttomImage="/ui/video-button2.png"
        />

        <div className="absolute bottom-[135px] left-[280px] flex flex-wrap">
          {step === 1 ? (
            <>
              <MainContentModalButton modal_data={modal_content[step - 1]} />
              <MainContentModalButton modal_data={modal_content[step]} />
            </>
          ) : (
            <MainContentModalButton modal_data={modal_content[step]} />
          )}
        </div>

        <ContentContainer className="!justify-start w-[1760px] px-[130px]">
          <MainContent_SM
            data={data[step - 1]}
            showReading={showReading}
            setShowReading={setShowReading}
            showMeaning={showMeaning}
            setShowMeaning={setShowMeaning}
            showMeaning2={showMeaning2}
            setShowMeaning2={setShowMeaning2}
          />
        </ContentContainer>
      </LearnMainContentPageTemplate>
      <img
        src={
          step === 1
            ? BACKGROUND1.src
            : step === 2
              ? BACKGROUND2.src
              : step === 3
                ? BACKGROUND3.src
                : step === 4
                  ? BACKGROUND4.src
                  : ""
        }
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
