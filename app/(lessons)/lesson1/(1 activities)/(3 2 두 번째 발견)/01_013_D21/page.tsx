"use client";

import { SoundButton1 } from "@/app/components/buttons/sound-button1";
import { useEffect, useMemo, useState } from "react";
import { Howl } from "howler";
import { Header } from "../assets/header";
import BACKGROUND from "@/app/bgpng_temp/1/중등한문_한자,어디서봤어11.png";

// 컴포넌트 외부로 sound 인스턴스 이동
const sound = new Howl({
  src: "/sound/1/13.mp3",
});

export default function Page() {
  const [isReading, setIsReading] = useState(false);
  const [soundId, setSoundId] = useState<number | null>(null);

  useEffect(() => {
    // sound 이벤트 리스너 등록
    sound.on('play', () => setIsReading(true));
    sound.on('stop', () => setIsReading(false));
    sound.on('end', () => setIsReading(false));

    return () => {
      // 클린업 시 이벤트 리스너 제거
      sound.off('play');
      sound.off('stop');
      sound.off('end');
      sound.stop();
    };
  }, []);

  return (
    <>
      <Header />

      <div className="w-[1600px] h-full mx-auto flex flex-col justify-center items-center px-[150px] mb-[200px]">
        <div className="relative">
          <SoundButton1
            active={isReading}
            onClick={() => {
              if (isReading) {
                // 재생 중일 때는 정지
                sound.stop();
                setIsReading(false);
                setSoundId(null);
              } else {
                // 재생 시작
                setSoundId(sound.play());
              }
            }}
            className="relative top-[60px] left-[1510px] animate__animated animate__bounceIn animate__delay-2s z-10"
          />
          <div
            className={`border-8 rounded-[35px] border-[#e44d74] w-[1560px] text-[52px] px-9 py-12 leading-[72px] tracking-[-2px] break-keep animate__animated animate__fadeIn animate__delay-1s transition-colors duration-[2000ms] ${isReading ? "text-reading" : ""
              }`}
          >
            교과 학습 시간에 만나는 대부분의 어휘는 한자어이다. 따라서 한자를
            알면 어휘의 뜻을 쉽고 명확하게 이해할 수 있다.
          </div>
        </div>
      </div>
      <img
        src={BACKGROUND.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
