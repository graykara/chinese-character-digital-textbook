"use client";

import { ReactNode, useEffect } from "react";
import IMAGE from "./image.png";
import { SOUND } from "@/app/utils/sound-player";

export const ThinkTogetherHeader = ({
  title = "제목을 입력하세요.",
  sound,
  subTitle = "",
  className = "",
}: {
  title: string | ReactNode;
  sound: string;
  subTitle?: string | ReactNode;
  className?: string | ReactNode;
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
    <>
      <div className="animate__animated animate__fadeIn relative pb-[30px]">
        <div className="flex justify-center mt-1">
          <img src={IMAGE.src} alt="image" className="block" />
        </div>

        {className ? (
          <ul className="list-disc marker:text-[#567c56] pl-3">
            <li
              className={`absolute top-[177px] left-[200px] ${className} leading-tight max-w-[1400px] break-keep `}
            >
              {title}
            </li>
          </ul>
        ) : (
          <ul className="list-disc marker:text-[#567c56] pl-3">
            <li
              className={`-mt-[40px] ml-[180px] text-[55px] leading-tight tracking-tighter max-w-[1400px] break-keep`}
            >
              {title}
            </li>
          </ul>
        )}

        <div className="relative left-[200px] text-[50px] max-w-[1300px]">
          {subTitle}
        </div>
      </div>
    </>
  );
};
