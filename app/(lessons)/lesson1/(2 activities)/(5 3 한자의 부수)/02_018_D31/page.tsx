"use client";

import { HeaderContainer } from "@/app/components/headers/header-container";
import HEADER from "./header.png";
import TEXT1 from "./text1.png";
import TEXT2 from "./text2.png";
import IMAGE from "./image.png";
import { SoundButton2 } from "@/app/components/buttons/sound-button2";
import { ContentContainer } from "@/app/components/content-container";
import { useContext, useEffect, useState } from "react";
import { Howl } from "howler";
import { clickSound } from "@/app/utils/click-sound";
import { PageInfoContext } from "@/app/utils/page-info";
import BACKGROUND from "@/app/bgpng_temp/2/중등한문_한자,얼마나 알아13.png";
import { SOUND } from "@/app/utils/sound-player";

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("한자의 부수");

  const [buttonActive, setButtonActive] = useState<number[]>([]);

  const [isReading, setIsReading] = useState(false);
  const [soundId, setSoundId] = useState<number | null>(null);
  const sound = new Howl({
    src: "/sound/1/18.mp3",
    onplay: () => setIsReading(true),
    onend: () => setIsReading(false),
  });
  useEffect(() => {
    sound.stop();
  }, []);

  useEffect(() => {
    return () => {
      sound.stop();
    };
  }, []);

  const sounds = [
    "/sound/1/18_004.mp3",
    "/sound/1/18_005.mp3",
    "/sound/1/18_006.mp3",
    "/sound/1/18_007.mp3",
    "/sound/1/18_008.mp3",
  ];

  return (
    <>
      <HeaderContainer className="mt-10 mb-10">
        <img src={HEADER.src} alt="header" />
      </HeaderContainer>

      <SoundButton2
        className="absolute top-[60px] left-[470px]"
        active={isReading}
        onClick={() => {
          soundId && sound.stop(soundId);
          setSoundId(sound.play());
        }}
      />

      <ContentContainer className="!justify-start !items-start">
        <div className="relative mt-1 ml-[55px] text-[50px] leading-[60px] tracking-tighter break-keep">
          <p>
            부수(<span className="font-haeseo text-[55px] leading-[30px] tracking-[-5px]">部首</span>)는 자전에서 한자를 찾을 때 기준이 되는 글자의 한 부분으로
            대개 한자의 의미와 관련이 깊다.
          </p>
          <img
            src={TEXT1.src}
            alt="text1"
            className="absolute left-[510px] top-[65px]"
          />
        </div>

        <div className="relative mt-14 ml-[55px] text-[50px] leading-[60px] tracking-tighter break-keep">
          <p>부수는 때로 위치에 따라 모양이 변하기도 한다. </p>
          <div className="relative">
            <img src={TEXT2.src} alt="text1" className="mt-4" />
            <div className="absolute left-[50px] top-0 grid grid-cols-3 gap-[10px] w-[700px] h-[60px] bg-transparent">
              <button onClick={() => SOUND("/sound/1/p018_word000.mp3").play()}>
              </button>
              <button onClick={() => SOUND("/sound/1/p018_word001.mp3").play()}></button>
              <button onClick={() => SOUND("/sound/1/p018_word002.mp3").play()}></button>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center mt-1 ml-6">
          <div className="relative">
            <img src={IMAGE.src} />
            <div className="absolute top-5 left-[577px] font-haeseo text-[35px] text-[#1b1b1b]">
              <span>水</span>
              <span className="ml-9">日</span>
            </div>
            <div className="absolute bottom-[55px] left-[40px] grid grid-cols-5 gap-[90px]">
              {Array.from(Array(5).keys()).map((_, index) =>
                buttonActive.includes(index) ? (
                  <div key={index} className="w-[80px] h-[80px]" />
                ) : (
                  <button
                    key={index}
                    className="bg-white w-[80px] h-[80px] flex justify-center items-center"
                    onClick={() => {
                      clickSound.play();
                      if (!buttonActive.includes(index)) {
                        new Howl({
                          src: sounds[index],
                        }).play();
                        setButtonActive(buttonActive.concat(index));
                      }
                    }}
                  >
                    <img src="/ui/click-icon.png" />
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      </ContentContainer>
      <img
        src={BACKGROUND.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
