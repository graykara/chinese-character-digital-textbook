"use client";

import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import { LearnMainContentPageTemplate } from "@/app/pages/learn-main-content/learn-main-content-page-template";
import { useContext, useEffect, useState } from "react";
import { FlippableCard_60 } from "@/app/components/flippable-card/flippable-card";
import { ContentContainer } from "@/app/components/content-container";
import { SOUND } from "@/app/utils/sound-player";
import IMAGE1 from "./img1.png";
import IMAGE2 from "./img2.png";
import IMAGE3 from "./img3.png";
import IMAGE4 from "./img4.png";
import BACKGROUND1 from "@/app/bgpng_temp/7/중등한문_언어생활 속의 성어18.png"; //18-19,110
import BACKGROUND2 from "@/app/bgpng_temp/7/중등한문_언어생활 속의 성어111.png"; //111-113
import BACKGROUND3 from "@/app/bgpng_temp/7/중등한문_언어생활 속의 성어114.png"; //114-115
import BACKGROUND4 from "@/app/bgpng_temp/7/중등한문_언어생활 속의 성어116.png"; //116-117
import { MainContent } from "../../../main-content";
import { MainContentModalButton } from "@/app/components/main-content/modal-button";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  const [showReading, setShowReading] = useState<boolean | null>(null);
  const [showMeaning, setShowMeaning] = useState<boolean | null>(null);
  const [showMeaning2, setShowMeaning2] = useState<boolean | null>(null);

  useEffect(() => {
    setShowReading(null);
    setShowMeaning(null);
    setShowMeaning2(null);
  }, [step]);

  const data = [
    {
      chinese: [
        { letter: "十", reading: "십" },
        { letter: "中", reading: "중" },
        { letter: "八", reading: "팔" },
        { letter: "九", reading: "구" },
      ],
      sound: "/sound/3/62/1.mp3",
      content1: (
        <div className="flex flex-wrap text-[50px] font-bold">
          열 가운데
          <FlippableCard_60
            key="1"
            active={showMeaning}
            className="-mt-2 ml-8 inline-block"
            text="여덟이나 아홉."
            width={400}
            height={80}
          />
        </div>
      ),
      content2: (
        <div className="flex flex-wrap text-[50px] font-bold">
          거의 대부분이거나 거의 틀림없음.
        </div>
      ),
    },
    {
      chinese: [
        { letter: "馬", reading: "마" },
        { letter: "耳", reading: "이" },
        {
          letter: "東",
          reading: "동",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/3/p063_word000.mp3").play()}
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] cursor-pointer"
              >
                東風
              </span>
              : 동쪽에서 불어오는 바람. 봄바람.
            </>
          ),
        },
        { letter: "風", reading: "풍" },
      ],
      sound: "/sound/3/62/2.mp3",
      content1: (
        <div className="flex flex-wrap text-[50px] font-bold">
          말의 귀에
          <FlippableCard_60
            key="2"
            active={showMeaning}
            className="-mt-2 ml-8 inline-block"
            text="동쪽 바람."
            width={280}
            height={80}
          />
        </div>
      ),
      content2: (
        <div className="flex flex-wrap text-[50px] font-bold">
          남의 말을 귀담아듣지 아니하고 지나쳐 흘려버림.
        </div>
      ),
    },
    {
      chinese: [
        { letter: "莫", reading: "막" },
        { letter: "上", reading: "상" },
        { letter: "莫", reading: "막" },
        { letter: "下", reading: "하" },
      ],
      sound: "/sound/3/62/3.mp3",
      content1: (
        <div className="flex flex-wrap text-[50px] font-bold">
          <FlippableCard_60
            key="3"
            active={showMeaning}
            className="-mt-2 mr-6 inline-block"
            text="위"
            width={130}
            height={80}
          />
          도 없고 아래도 없음.
        </div>
      ),
      content2: (
        <div className="flex flex-wrap text-[50px] font-bold">
          더 낫고 더 못함의 차이가 거의 없음.
        </div>
      ),
    },
    {
      chinese: [
        { letter: "坐", reading: "좌" },
        { letter: "井", reading: "정" },
        { letter: "觀", reading: "관" },
        { letter: "天", reading: "천" },
      ],
      sound: "/sound/3/62/4.mp3",
      content1: (
        <div className="flex flex-wrap text-[50px] font-bold">
          우물 속에
          <FlippableCard_60
            key="4"
            active={showMeaning}
            className="-mt-2 ml-5 mr-10 inline-block"
            text="앉아"
            width={170}
            height={80}
          />
          하늘을
          <FlippableCard_60
            key="5"
            active={showMeaning}
            className="-mt-2 ml-5 mr-5 inline-block"
            text="봄"
            width={130}
            height={80}
          />
          .
        </div>
      ),
      content2: (
        <div className="flex flex-wrap text-[50px] font-bold">
          보고 들어 얻은 지식이 매우 적음.
        </div>
      ),
    },
  ];

  const modal_content = [
    {
      className: "w-[766px]",
      bgColor: "#4f9aab",
      image: "/ui/popupbtn1-1.png",
      meaningsTitle: (
        <>
          <img src="/ui/gam.png" width={54} />
          성어의 겉뜻과 속뜻
        </>
      ),
      content: (
        <div className="px-4 pt-2 pb-4 text-[50px] leading-[130%] tracking-tighter break-keep">
          <span className="font-bold">
            성어(
            <span className="font-haeseo text-[55px] leading-tight tracking-[-5px]">
              成語
            </span>
            )의 겉뜻과 속뜻
          </span>
          <br />
          <span>
            성어를 글자대로 풀이한 것을
            <br />
            ‘겉뜻’이라고 하고, 그 속에 담긴
            <br />
            뜻을 ‘속뜻’이라고 한다.
          </span>
        </div>
      ),
    },
    {
      className: "w-[1315px]",
      bgColor: "#4f9aab",
      image: "/ui/popupbtn2-1.png",
      meaningsTitle: (
        <>
          <img src="/ui/resource-button-icon.png" width={46} />
          성어 활용
        </>
      ),
      content: (
        <>
          <div className="flex flex-wrap text-[50px] tracking-tight break-keep">
            <p>
              ① 그 사람의 말은{" "}
              <span
                onClick={() => SOUND("/sound/3/62/1.mp3").play()}
                className="font-haeseo text-[55px] tracking-[-5px] cursor-pointer"
              >
                十中八九
              </span>{" "}
              거짓말이야.
            </p>
            <p>
              ② 은행업무{" "}
              <span
                onClick={() => SOUND("/sound/3/62/1.mp3").play()}
                className="font-haeseo text-[55px] tracking-[-5px] cursor-pointer"
              >
                十中八九
              </span>{" "}
              는 비대면 활용
            </p>
          </div>
          <img src={IMAGE1.src} className="mx-auto" />
        </>
      ),
    },
    {
      className: "w-[1315px]",
      bgColor: "#4f9aab",
      image: "/ui/popupbtn2-1.png",
      meaningsTitle: (
        <>
          <img src="/ui/resource-button-icon.png" width={46} />
          성어 활용
        </>
      ),
      content: (
        <>
          <div className="flex flex-wrap text-[50px] tracking-tight break-keep">
            <p>
              ① 그 친구에게 나의 충고는{" "}
              <span
                onClick={() => SOUND("/sound/3/62/2.mp3").play()}
                className="font-haeseo text-[55px] tracking-[-5px] cursor-pointer"
              >
                馬耳東風
              </span>{" "}
              이었다.
            </p>
            <p>
              ② 기후 위기 경고에도{" "}
              <span
                onClick={() => SOUND("/sound/3/62/2.mp3").play()}
                className="font-haeseo text-[55px] tracking-[-5px] cursor-pointer"
              >
                馬耳東風
              </span>
            </p>
          </div>
          <img src={IMAGE2.src} className="mx-auto" />
        </>
      ),
    },
    {
      className: "w-[1315px]",
      bgColor: "#4f9aab",
      image: "/ui/popupbtn2-1.png",
      meaningsTitle: (
        <>
          <img src="/ui/resource-button-icon.png" width={46} />
          성어 활용
        </>
      ),
      content: (
        <>
          <div className="flex flex-wrap text-[50px] tracking-tight break-keep">
            <p>
              ① 그 팀과 우리 팀은 실력이{" "}
              <span
                onClick={() => SOUND("/sound/3/62/3.mp3").play()}
                className="font-haeseo text-[55px] tracking-[-5px] cursor-pointer"
              >
                莫上莫下
              </span>
              이다.
            </p>
            <p>
              ②{" "}
              <span
                onClick={() => SOUND("/sound/3/62/3.mp3").play()}
                className="font-haeseo text-[55px] tracking-[-5px] cursor-pointer"
              >
                莫上莫下
              </span>{" "}
              대결 펼친 배구 경기
            </p>
          </div>
          <img src={IMAGE3.src} className="mx-auto" />
        </>
      ),
    },
    {
      className: "w-[1315px]",
      bgColor: "#4f9aab",
      image: "/ui/popupbtn2-1.png",
      meaningsTitle: (
        <>
          <img src="/ui/resource-button-icon.png" width={46} />
          성어 활용
        </>
      ),
      content: (
        <>
          <div className="flex flex-wrap text-[50px] tracking-tight break-keep">
            <p>
              ① 그렇게 한쪽으로 치우친 시각은{" "}
              <span
                onClick={() => SOUND("/sound/3/62/4.mp3").play()}
                className="font-haeseo text-[55px] tracking-[-5px] cursor-pointer"
              >
                坐井觀天
              </span>
              과 다를 바 없어.{" "}
            </p>
            <p>
              ②{" "}
              <span
                onClick={() => SOUND("/sound/3/62/4.mp3").play()}
                className="font-haeseo text-[55px] tracking-[-5px] cursor-pointer"
              >
                坐井觀天
              </span>
              의 자세 버릴때
            </p>
          </div>
          <img src={IMAGE4.src} className="mx-auto" />
        </>
      ),
    },
  ];

  return (
    <>
      <LearnMainContentPageTemplate>
        <RightTopStepContainer maxStep={4} />

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
          <MainContent
            data={data[step - 1]}
            showReading={showReading}
            setShowReading={setShowReading}
            showMeaning={showMeaning}
            setShowMeaning={(value) => {
              alert(value); setShowMeaning(value);
            }}
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
