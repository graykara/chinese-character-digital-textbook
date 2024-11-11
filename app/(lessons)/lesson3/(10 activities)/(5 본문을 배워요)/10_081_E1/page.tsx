"use client";

import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import { LearnMainContentPageTemplate } from "@/app/pages/learn-main-content/learn-main-content-page-template";
import { useContext, useEffect, useState } from "react";
import { FlippableCard_60 } from "@/app/components/flippable-card/flippable-card";
import { ContentContainer } from "@/app/components/content-container";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/10/중등한문_이야기가 담긴 성어27.png";
import BACKGROUND2 from "@/app/bgpng_temp/10/중등한문_이야기가 담긴 성어210.png";
import BACKGROUND3 from "@/app/bgpng_temp/10/중등한문_이야기가 담긴 성어214.png";
import BACKGROUND4 from "@/app/bgpng_temp/10/중등한문_이야기가 담긴 성어216.png";
import { MainContent } from "../../../main-content";
import { MainContentVideoButton } from "@/app/components/main-content/video-button";
import { MainContentModalButton } from "@/app/components/main-content/modal-button";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  const [showReading, setShowReading] = useState(false);
  const [showMeaning, setShowMeaning] = useState<boolean | null>(null);
  const [showMeaning2, setShowMeaning2] = useState(false);

  useEffect(() => {
    setShowReading(false);
    setShowMeaning(null);
  }, [step]);

  const data = [
    {
      chinese: [
        { letter: "背", reading: "배" },
        { letter: "水", reading: "수" },
        { letter: "陣", reading: "진" },
      ],
      sound: "/sound/3/80/1.mp3",
      content1: (
        <div className="flex flex-wrap text-[50px] font-bold">
          물을
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 ml-5 mr-6  inline-block"
            text="등지고"
            width={220}
            height={80}
          />
          지는 진.
        </div>
      ),
      content2: (
        <div className="flex flex-wrap text-[50px] font-bold">
          어떤 일을 성취하기 위하여 더 이상 물러설 수 없음.
        </div>
      ),
    },
    {
      chinese: [
        { letter: "多", reading: "다" },
        { letter: "多", reading: "다" },
        {
          letter: "益",
          reading: "익",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/3/p081_word000.mp3").play()}
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] cursor-pointer"
              >
                益
              </span>
              : ① 더하다, ② <span className="underline underline-offset-[10px]">더욱</span>
            </>
          ),
        },
        {
          letter: "善",
          reading: "선",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/3/p081_word001.mp3").play()}
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] cursor-pointer"
              >
                善
              </span>
              : ① 착하다, ② <span className="underline underline-offset-[10px]">좋다</span>
            </>
          ),
        },
      ],
      sound: "/sound/3/80/2.mp3",
      content1: (
        <div className="flex flex-wrap text-[50px] font-bold">
          많으면 많을수록 더욱
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 ml-5 mr-6  inline-block"
            text="좋음."
            width={180}
            height={80}
          />
        </div>
      ),
      content2: (
        <div className="flex flex-wrap text-[50px] font-bold">
          많이 보탤수록 더 큰 능력을 발휘할 수 있음.
        </div>
      ),
    },
    {
      chinese: [
        { letter: "三", reading: "삼" },
        { letter: "人", reading: "인" },
        { letter: "成", reading: "성" },
        { letter: "虎", reading: "호" },
      ],
      sound: "/sound/3/80/3.mp3",
      content1: (
        <div className="flex flex-wrap text-[50px] font-bold">
          세 사람이면
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 ml-5 mr-6  inline-block"
            text="호랑이"
            width={220}
            height={80}
          />
          를 만듦.
        </div>
      ),
      content2: (
        <div className="flex flex-wrap text-[50px] font-bold">
          근거 없는 말이라도 여러 사람이 말하면 곧이듣게 됨.
        </div>
      ),
    },
    {
      chinese: [
        { letter: "結", reading: "결" },
        { letter: "草", reading: "초" },
        {
          letter: "報",
          reading: "보",
          additional: (
            <>
              <span
                onClick={() => SOUND("/sound/3/p081_word002.mp3").play()}
                className="font-haeseo text-[50px] leading-tight tracking-[-10px] cursor-pointer"
              >
                報
              </span>
              : ① 알리다, ② <span className="underline underline-offset-[10px]">갚다</span>
            </>
          ),
        },
        { letter: "恩", reading: "은" },
      ],
      sound: "/sound/3/80/4.mp3",
      content1: (
        <div className="flex flex-wrap text-[50px] font-bold">
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 mr-6  inline-block"
            text="풀"
            width={150}
            height={80}
          />
          을 엮어
          <FlippableCard_60
            active={showMeaning}
            className="-mt-2 ml-5 mr-6  inline-block"
            text="은혜"
            width={180}
            height={80}
          />
          를 갚음.
        </div>
      ),
      content2: (
        <div className="flex flex-wrap text-[50px] font-bold">
          죽은 뒤에라도 은혜를 잊지 않고 갚음.
        </div>
      ),
    },
  ];

  const modal_content = [
    {
      className: "w-[766px]",
      bgColor: "#4f9aab",
      image: "/ui/popupbtn5-1.png",
      meaningsTitle: (
        <>
          <img src="/ui/gam.png" width={54} />
          한·중·일 삼국의 성어
        </>
      ),
      content: (
        <div className="pl-0 -mr-2 pt-2 pb-4 text-[50px] leading-[130%] tracking-tighter break-keep">
          <span className="font-bold">한(<span className="font-haeseo text-[55px] leading-tight tracking-[-5px]">韓</span>)·중(<span className="font-haeseo text-[55px] leading-tight tracking-[-5px]">中</span>)·일(<span className="font-haeseo text-[55px] leading-tight tracking-[-5px]">日</span>) 삼국의 성어</span>
          <br />
          <span>동양의 고전을 바탕으로 한 성어는 한·중·일 삼국에서 모두 비슷한 의미로 사용된다. 한편 ‘함흥차사(<span className="font-haeseo text-[55px] leading-tight tracking-[-8px]">咸興差使</span>), 계란유골(<span className="font-haeseo text-[55px] leading-tight tracking-[-8px]">鷄卵有骨</span>)’ 처럼 우리나라에서 만 사용하는 성어도 있다.</span>
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
          <div className="flex flex-none text-[50px] tracking-tight">
            <p> 중국 한(<span className="font-haeseo font-bold leading-tight text-[55px] tracking-[-5px]">漢</span>)나라의 장수 한신이 강을 등지고 진을 쳐서 병사들이 물러서지 못하고 힘을 다해 싸우도록 하여 조(<span className="font-haeseo font-bold text-[55px] leading-tight tracking-[-5px]">趙</span>)나라의 군사를 물리친 이야기에서 유래함.</p>
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
            <p> 중국 한(<span className="font-haeseo text-[55px] leading-tight tracking-[-5px]">漢</span>)나라의 장수 한신이 자신의 군주인 고조와 장수의 능력을 이야기할 때, 고조는 10만 정도의 장수를 지휘할 수 있지만 자신은 병사의 수가 많으면 많을수록 좋다고 말한 이야기에서 유래함.</p>
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
            <p> 중국 위(<span className="font-haeseo text-[55px] leading-tight tracking-[-5px]">魏</span>)나라 방공이 태자와 함께 조(<span className="font-haeseo text-[55px] leading-tight tracking-[-5px]">趙</span>)나라에 볼모로 잡혀가기 전 왕을 찾아갔다. 방공이 왕에게 한 사람이 시장에 호랑이가 나타났다고 말하면 믿지 않겠지만 세 사람이 찾아와 말하면 믿게 된다면서 자신이 조나라로 떠나면 자신을 모함하는 사람들이 많을 텐데 이를 믿지 말라고 말한 대화에서 유래함.</p>
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
            <p> 중국 진(<span className="font-haeseo text-[55px] leading-tight tracking-[-5px]">晉</span>)나라 위과는 아버지가 세상을 떠나자, 새어머니를 순장(<span className="font-haeseo text-[55px] leading-tight tracking-[-5px]">殉葬</span>)하지 않고 새로 시집보냈다. 이후 위과가 전쟁터에서 적군에게 쫓기다가 풀에 걸려 넘어진 적장을 잡아 큰 공을 세우게 되었다. 그날 밤, 꿈에 한 노인이 나타나 “나는 당신이 살려 준 여인의 죽은 아비요. 당신이 내 딸을 살려 주었기에 내가 오늘 풀을 묶어 그 은혜를 갚은 것이라오.”라고 말한 것에서 유래함.</p>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <LearnMainContentPageTemplate>
        <RightTopStepContainer maxStep={4} />

        {step === 1 ? (
        <MainContentVideoButton
          video="/video/animation/3/BaeSujin.mp4"
          className="absolute left-[112px] top-[40px]"
          buttomImage="/ui/video-button2.png"
        />
        ) : null }
        {step === 2 ? (
          <MainContentVideoButton
            video="/video/animation/3/Dadadikseon.mp4"
            className="absolute left-[112px] top-[40px]"
            buttomImage="/ui/video-button2.png"
          />
        ) : null}
        {step === 3 ? (
          <MainContentVideoButton
            video="/video/animation/3/SamInseongHo.mp4"
            className="absolute left-[112px] top-[40px]"
            buttomImage="/ui/video-button2.png"
          />
        ) : null}
        {step === 4 ? (
          <MainContentVideoButton
            video="/video/animation/3/GyeolchoboEun.mp4"
            className="absolute left-[112px] top-[40px]"
            buttomImage="/ui/video-button2.png"
          />
        ) : null}

        <div className="absolute bottom-[135px] left-[280px] flex flex-wrap">
          {step === 1 ? (
            <>
              <MainContentModalButton modal_data={modal_content[step - 1]} />
              <MainContentModalButton modal_data={modal_content[step]} />
            </>
          ) :
            <MainContentModalButton modal_data={modal_content[step]} />
          }
        </div>

        <ContentContainer className="!justify-start w-[1760px] px-[130px]">

          <MainContent
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
      <img src={
        step === 1 ? BACKGROUND1.src :
          step === 2 ? BACKGROUND2.src :
            step === 3 ? BACKGROUND3.src :
              step === 4 ? BACKGROUND4.src : ""
      } className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
