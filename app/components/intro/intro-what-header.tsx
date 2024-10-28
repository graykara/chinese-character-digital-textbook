"use client";

import { SOUND } from "@/app/utils/sound-player";
import { useEffect } from "react";

interface Props {
  className?: string;
}

export const IntroWhatHeader = ({ className }: Props) => {
  useEffect(() => {
    SOUND("/sound/common/activity_start.mp3").play();
  }, []);

  return (
    <div className={`animate__animated animate__flipInX ${className}`}>
      <img src="/ui/what.png" />

      <h1 className="absolute left-[130px] top-[9px] text-white text-[55px] font-bold">
        무엇을 배워요?
      </h1>
    </div>
  );
};
