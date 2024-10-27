"use client";

import { SoundButton1 } from "@/app/components/buttons/sound-button1";
import { useEffect, useMemo, useState } from "react";
import { Howl } from "howler";
import { Header } from "../assets/header";
import BACKGROUND from "@/app/bgpng_temp/1/중등한문_한자,어디서봤어17.png"

export default function Page() {
  const [isReading, setIsReading] = useState(false);

  const sound = new Howl({
    src: "/sound/1/14.mp3",
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
            className={`border-8 rounded-[40px] border-[#d74e1e] w-[1560px] text-[52px] px-9 py-12 leading-[72px] tracking-[-2px] break-keep animate__animated animate__fadeIn animate__delay-1s transition-colors duration-[2000ms] ${isReading ? "text-reading" : ""
              }`}
          >
            우리의 역사와 사상을 비롯한 대부분의 전통문화는 한자로 기록되어 전해진다. 따라서 우리의 역사와 문화를 이해하고 재창조하기 위해 한자와 한문을 익히고 활용할 수 있는 역량을 길러야 한다.
          </div>
        </div>
      </div>
      <img src={BACKGROUND.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}