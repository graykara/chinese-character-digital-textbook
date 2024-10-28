"use client";

import { SOUND } from "@/app/utils/sound-player";
import { useEffect } from "react";

interface Props {
  className?: string;
}

export const IntroWhyHeader = ({ className }: Props) => {
  useEffect(() => {
    SOUND("/sound/1/8_intro/2.mp3").play();
  }, []);

  return (
    <div className={`animate__animated animate__flipInX ${className}`}>
      <img src="/ui/why.png" />

      <h1 className="absolute left-[110px] top-[40px] text-white text-[55px] font-bold">
        왜 배워요?
      </h1>
    </div>
  );
};
