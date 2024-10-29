"use client";

import { SoundButton2 } from "@/app/components/buttons/sound-button2";
import { ContentContainer } from "@/app/components/content-container";
import { useEffect, useState } from "react";
import { Howl } from "howler";
import IMAGE from "./bg_1_2.png";
import PLUS from "./plus.png";
import MODAL from "./modal.png";
import CLOSE from "./close.png";
import { CultureHeader } from "@/app/components/headers/culture-header";
import BACKGROUND1 from "@/app/bgpng_temp/1/중등한문_한자,어디서봤어27.png"
import { clickSound } from "@/app/utils/click-sound";

export default function Page() {
  const [showModal, setShowModal] = useState(false);
  const [isReading, setIsReading] = useState(false);

  const sound = new Howl({
    src: "/sound/1/15_story.mp3",
    onplay: () => setIsReading(true),
    onend: () => setIsReading(false),
  });
  [
    { text: "한·중·일 3국에서 숫자 ‘4’는 불길한 숫자로 통한다.", start: 0, end: 5566 },
    { text: "이는 한자 문화권 3국 언어의 ‘4’ 발음[사, 쓰(sì), 시(し)]에서 ‘죽을 사(死)’가 연상되기 때문이다.", start: 5566, end: 12082 },
    { text: "한국의 인천 국제공항에는 44번 탑승구가 없으며, 많은 호텔이나 병원도 4층을 F층으로 표기한다.", start: 12082, end: 21222 },
    { text: "일본도 4층이나 4호 병실이 없는 병원이 많으며, 중국은 전화번호나 자동차 번호에 ‘4’ 자가 들어가는 것을 꺼린다.", start: 21222, end: 30876 },
  ];

  useEffect(() => {
    return () => {
      sound.stop();
    };
  }, []);

  return (
    <>
      <CultureHeader title={"한·중·일은 숫자 ‘4’를 싫어해요"} />
      
      <SoundButton2
        className="absolute top-[115px] left-[1040px] animate__animated animate__bounceIn animate__delay-2s"
        active={isReading}
        onClick={() => sound.play()}
      />
     
      <ContentContainer className="w-full">
        <img src={IMAGE.src} className="absolute right-0 mr-0 bottom-[140px] z-10"/>
        
        <div className="relative w-[1460px] -top-[40px]">
          <div className={`bg-[#B9E5FA] rounded-[50px] pl-10 pr-6 pt-5 pb-1 text-[55px] leading-[84px] tracking-tight break-keep ${isReading ? "text-reading" : ""}`}>
            한·중·일 3국에서 숫자 ‘4’는 불길한 숫자로 통한다. 이는 한자 문화권 3국 언어의 ‘4’ 발음[사, 쓰(sì), 시(し)]에서 ‘죽을 사(<span className="font-haeseo text-[60px] leading-tight">死</span>)’ 가 연상되기 때문이다. 한국의 인천 국제공항에는 44번 탑승구가 없으며, 많은 호텔이나 병원도 4층을 F층으로 표기한다. 일본도 4층이나 4호 병실이 없는 병원이 많으며, 중국은 전화번호나 자동차 번호에 ‘4’ 자가 들어가는 것을 꺼린다.
          </div>
        </div>

        <button
          className="absolute right-[45px] bottom-[260px] z-10"
          onClick={() => {
            clickSound.play();
            setShowModal(true);
          }}
        >
          <img src={PLUS.src} />
        </button>

        {showModal ? (
          <div className="fixed left-[80px] top-[90px] w-[1760px] h-[990px] bg-white bg-opacity-80 flex justify-center items-center">
            <div className="animate__animated animate__flipInX relative">
              <img src={MODAL.src} />

              <button
                className="absolute top-5 right-5"
                onClick={() => {
                  clickSound.play();
                  setShowModal(false);
                }}
              >
                <img src={CLOSE.src} />
              </button>
            </div>
          </div>
        ) : null}

      </ContentContainer>
      <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}