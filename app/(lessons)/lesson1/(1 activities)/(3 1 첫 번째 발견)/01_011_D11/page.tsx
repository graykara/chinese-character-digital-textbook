"use client";

import { SoundButton1 } from "@/app/components/buttons/sound-button1";
import { useEffect, useMemo, useState } from "react";
import { Howl } from "howler";
import { Header } from "../assets/header";
import BACKGROUND from "@/app/bgpng_temp/1/중등한문_한자,어디서봤어4.png"

export default function Page() {
  const [isReading, setIsReading] = useState(false);

  const sound = new Howl({
    src: "/sound/1/11.mp3",
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
            className={`border-8 rounded-[35px] border-[#20a5c5] w-[1560px] text-[52px] px-9 py-12 leading-[72px] tracking-[-3px] break-keep animate__animated animate__fadeIn animate__delay-1s transition-colors duration-[2000ms] ${isReading ? "text-reading" : ""
              }`}
          >
            한글 창제 이전은 물론, 그 이후에도 우리는 한자를 표기 수단으로 사용하였다. 수천 년 동안 한자와 한문으로 생각과 감정을 표현하고 기록해 온 것이다. 자연스럽게 지금의 우리 언어생활 속 에는 한자로 이루어진 말들이 많아졌다.
          </div>
        </div>
      </div>
      <img src={BACKGROUND.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}