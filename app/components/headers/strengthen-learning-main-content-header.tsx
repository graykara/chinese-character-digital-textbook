"use client";

import { PageInfoContext } from "@/app/utils/page-info";
import { SOUND } from "@/app/utils/sound-player";
import { ReactNode, useContext, useEffect } from "react";

interface Props {
  title: string | ReactNode;
  sound: string;
  className?: string;
  titleClassName?: string;
}

export const StrengthenLearningMainContentHeader = ({
  title,
  sound,
  className,
  titleClassName,
}: Props) => {
  const { currentStep, isPageReady } = useContext(PageInfoContext)

  console.log(currentStep, isPageReady)

  useEffect(() => {
    let soundInstance: Howl | null = null;
    if (sound) {
      soundInstance = new Howl({ src: sound });
      setTimeout(() => {
        Howler.stop();
        soundInstance.play()
      }, 700);
    }
    return () => {
      soundInstance?.unload();
    }
  }, [sound]);

  return (
    <header className={`relative ml-[80px] mt-[10px] ${className || ""}`}>
      <img
        className="animate__animated animate__slideInLeft"
        src="/header/strengthen-learning-main-content.png"
      />

      <div
        className={`absolute left-[140px] top-[192px] text-[55px] leading-[63px] tracking-[-2.5px] break-keep flex gap-2 w-[1400px] animate__animated animate__delay-1s animate__flipInX ${titleClassName}`}
      >
        <img
          src="/ui/flower-icon.png"
          className="flex-none w-[49px] h-[49px] mt-[3px]"
        />
        {title}
      </div>
    </header>
  );
};
