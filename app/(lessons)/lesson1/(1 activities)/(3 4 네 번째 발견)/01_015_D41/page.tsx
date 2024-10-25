"use client";

import { SoundButton1 } from "@/app/components/buttons/sound-button1";
import { useEffect, useMemo, useState } from "react";
import { Howl } from "howler";
import { Header } from "../assets/header";
import BACKGROUND from "@/app/bgpng_temp/1/중등한문_한자,어디서봤어21.png"

export default function Page() {
  const [isReading, setIsReading] = useState(false);

  const sound = new Howl({
    src: "/sound/1/15.mp3",
    onplay: () => setIsReading(true),
    onend: () => setIsReading(false),
  });

  useEffect(() => {
    return () => {
      sound.stop();
    };
  }, []);

  return (
    <>
      <Header />

      <div className="w-[1600px] h-full mx-auto flex flex-col justify-center items-center px-[150px] mb-[150px]">

        <div className="relative">
          <SoundButton1
            active={isReading}
            onClick={() => sound.play()}
            className="relative top-[60px] left-[1510px] animate__animated animate__bounceIn animate__delay-2s z-10"
          />
          <div
            className={`border-8 rounded-[40px] border-[#804f3d] w-[1560px] text-[52px] px-9 py-12 leading-[72px] tracking-[-2px] break-keep animate__animated animate__fadeIn animate__delay-1s transition-colors duration-[2000ms] ${isReading ? "text-reading" : ""
              }`}
          >
            한자 문화권이란 한자를 사용했거나, 지금도 사용하고 있는 나라와 지역을 말한다. 우리나라·중국·일본·베트남 등이 대표적이며, 한자 문화권의 인구는 전 세계 인구의 25%나 된다.
          </div>
        </div>
      </div>
      <img src={BACKGROUND.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}