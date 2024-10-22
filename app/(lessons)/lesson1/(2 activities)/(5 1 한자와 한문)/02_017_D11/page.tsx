"use client";

import { HeaderContainer } from "@/app/components/headers/header-container";
import HEADER from "./header.png";
import TITLE from "./title.png";
import IMAGE from "./image.png";
import BUTTON_1 from "./1.png";
import BUTTON_2 from "./2.png";
import BUTTON_3 from "./3.png";
import { ContentContainer } from "@/app/components/content-container";
import { useContext, useEffect, useState } from "react";
import { SoundButton2 } from "@/app/components/buttons/sound-button2";
import { clickSound } from "@/app/utils/click-sound";
import { PageInfoContext } from "@/app/utils/page-info";
import BACKGROUND from "@/app/bgpng_temp/2/중등한문_한자,얼마나 알아8.png"

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("한자와 한문");

  const [isButton1Clicked, setIsButton1Clicked] = useState(false);
  const [isButton2Clicked, setIsButton2Clicked] = useState(false);
  const [isButton3Clicked, setIsButton3Clicked] = useState(false);

  const [isReading, setIsReading] = useState(false);

  const sound = new Howl({
    src: "/sound/1/17-1.mp3",
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
  
  return (
    <>
      <HeaderContainer className="mt-10">
        <img src={HEADER.src} alt="header" />
      </HeaderContainer>

      <ContentContainer className="!justify-start pt-[85px] ml-[175px]">
        <div className="relative w-full mb-10">
          <img src={TITLE.src} alt="title" />
          <SoundButton2
            active={isReading}
            onClick={() => sound.play()}
            className="absolute top-1/2 -translate-y-1/2 left-[420px]"
          />
        </div>

        <div className="flex mt-3 -ml-[100px]">
          <p className="text-[50px] tracking-tighter leading-[68px] break-keep w-[800px]">
            <span className="font-haeseo text-[55px] leading-tight">漢字</span>(한자)는 하나의 글자가 모양·음·뜻을 모두 갖추고 있는 문자이다.
            <br/>예를 들어, ‘<span className="font-haeseo text-[55px] leading-tight">大</span>’ 자의 모양은 사람이 양팔을 벌린 형태[<span className="font-haeseo text-[55px] leading-tight">大</span>]이며, 음은 ‘대’이고, 뜻은 ‘크다’이다.
          </p>

          <div className="relative flex-none -mt-[90px] -ml-[20px]">
            <img src={IMAGE.src} />

            {isButton1Clicked ? null : (
              <button
                className="absolute left-[250px] top-[80px]"
                onClick={() => {
                  clickSound.play();
                  setIsButton1Clicked(true);
                }}
              >
                <img src={BUTTON_1.src} alt="button" />
              </button>
            )}
            {isButton2Clicked ? null : (
              <button
                className="absolute left-[50px] top-[360px]"
                onClick={() => {
                  clickSound.play();
                  setIsButton2Clicked(true);
                }}
              >
                <img src={BUTTON_2.src} alt="button" />
              </button>
            )}
            {isButton3Clicked ? null : (
              <button
                className="absolute left-[455px] top-[360px]"
                onClick={() => {
                  clickSound.play();
                  setIsButton3Clicked(true);
                }}
              >
                <img src={BUTTON_3.src} alt="button" />
              </button>
            )}
          </div>
        </div>
      </ContentContainer>
      <img src={BACKGROUND.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
