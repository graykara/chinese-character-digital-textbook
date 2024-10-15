"use client";

import { ReactNode } from "react";

interface Props {
  title: string | ReactNode;
  sound: string;
}

export const StrengthenLearningMainContentHeader = ({
  title,
  sound,
}: Props) => {
  return (
    <header className="relative ml-[80px] mt-[10px]">
      <img
        className="animate__animated animate__slideInLeft"
        src="/header/strengthen-learning-main-content.png"
      />

      <div className="absolute left-[140px] top-[192px] text-[55px] leading-[63px] tracking-[-2.5px] break-keep flex gap-2 w-[1400px] animate__animated animate__delay-1s animate__flipInX">
        <img
          src="/ui/flower-icon.png"
          className="flex-none w-[49px] h-[49px] mt-[3px]"
        />
        {title}
      </div>
    </header>
  );
};
