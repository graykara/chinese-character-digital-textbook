"use client";

import { SOUND } from "@/app/utils/sound-player";
import { ReactNode, useEffect } from "react";

export const CreativityTitleHeader = ({
  title,
  sound,
  className = "",
  containerClassName = "",
}: {
  title: string | ReactNode;
  sound?: string;
  className?: string;
  containerClassName?: string;
}) => {
  useEffect(() => {
    let soundInstance: Howl | null = null;
    if (sound) {
      soundInstance = new Howl({ src: sound });
      setTimeout(() => soundInstance.play(), 100);
    }
    return () => {
      soundInstance?.unload();
    }
  }, [sound]);

  return (
    <div className={`mx-auto -translate-x-10 ${containerClassName}`}>
      <div
        className={`relative bg-[#963600] px-[60px] rounded-[30px] flex justify-center items-center ${className}`}
      >
        <div className="absolute left-5 w-4 h-4 rounded-full bg-black" />
        <div className="absolute right-5 w-4 h-4 rounded-full bg-black" />
        <p className="text-white text-[50px] tracking-tight">{title}</p>
      </div>
    </div>
  );
};
