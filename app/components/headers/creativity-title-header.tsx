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
  sound: string;
  className?: string;
  containerClassName?: string;
}) => {
  // before
  // useEffect(() => {
  //   sound && SOUND(sound).play();
  // }, []);

  // after
  useEffect(() => {
    if (sound) {
      const soundInstance = SOUND(sound);
      soundInstance.stop();
      soundInstance.play();

      return () => {
        soundInstance.stop();
      };
    }
  }, [sound]);

  return (
    <div className={`mx-auto -translate-x-10 ${containerClassName}`}>
      <div
        className={`relative bg-[#963600] px-[60px] rounded-full flex justify-center items-center ${className}`}
      >
        <div className="absolute left-5 w-4 h-4 rounded-full bg-black" />
        <div className="absolute right-5 w-4 h-4 rounded-full bg-black" />
        <p className="text-white text-[50px] tracking-tight">{title}</p>
      </div>
    </div>
  );
};
