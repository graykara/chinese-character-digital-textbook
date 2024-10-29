"use client";

import { HeaderContainer } from "@/app/components/headers/header-container";
import HEADER from "./header.png";
import TITLE from "./title.png";
import IMAGE from "./image.png";
import { ContentContainer } from "@/app/components/content-container";
import { useContext, useEffect, useState } from "react";
import { SoundButton2 } from "@/app/components/buttons/sound-button2";
import { clickSound } from "@/app/utils/click-sound";
import { PageInfoContext } from "@/app/utils/page-info";
import BACKGROUND from "@/app/bgpng_temp/2/중등한문_한자,얼마나 알아9.png";

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("한자와 한문");

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const [isReading, setIsReading] = useState(false);
  const [soundId, setSoundId] = useState<number | null>(null);
  const sound = new Howl({
    src: "/sound/1/17/1.mp3",
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
            onClick={() => {
              soundId && sound.stop(soundId);
              setSoundId(sound.play());
            }}
            className="absolute top-1/2 -translate-y-1/2 left-[150px]"
          />
        </div>

        <p className="text-[50px] tracking-tighter leading-[55px] break-keep w-[1400px] -mt-3 -ml-[100px]">
          한자는 하나하나의 낱글자이다. 낱글자인 한자가 모여 이루어진 문장을
          <br />{" "}
          <span className="font-haeseo text-[55px] leading-tight  tracking-[-10px]">
            漢文
          </span>
          (한문)이라고 한다.
        </p>

        <div className="relative flex-none mt-[80px]">
          <img src={IMAGE.src} />

          {show1 ? null : (
            <button
              onClick={() => {
                clickSound.play();
                setShow1(true);
              }}
              className="absolute left-[-20px] top-[40px] flex justify-center items-center bg-white w-[150px] h-[150px]"
            >
              <img src="/ui/click-icon.png" />
            </button>
          )}
          {show2 ? null : (
            <button
              onClick={() => {
                clickSound.play();
                setShow2(true);
              }}
              className="absolute left-[240px] top-[40px] flex justify-center items-center bg-white w-[150px] h-[150px]"
            >
              <img src="/ui/click-icon.png" />
            </button>
          )}
          {show3 ? null : (
            <button
              onClick={() => {
                clickSound.play();
                setShow3(true);
              }}
              className="absolute left-[550px] top-[40px] flex justify-center items-center bg-white w-[220px] h-[150px]"
            >
              <img src="/ui/click-icon.png" />
            </button>
          )}
        </div>
      </ContentContainer>
      <img
        src={BACKGROUND.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
