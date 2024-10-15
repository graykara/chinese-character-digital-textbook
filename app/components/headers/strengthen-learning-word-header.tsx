"use client";

import { ReactNode } from "react";

interface Props {
  title: string | ReactNode;
  sound: string;
}

export const StrengthenLearningWordHeader = ({ title, sound }: Props) => {
  return (
    <header className="relative ml-[80px] mt-5">
      <img
        className="animate__animated animate__slideInLeft"
        src="/header/strengthen-learning-word.png"
      />

      <div className="absolute left-[150px] top-[190px] flex gap-2 w-[1300px] animate__animated animate__delay-1s animate__flipInX">
        <img
          src="/ui/flower-icon.png"
          className="flex-none w-[49px] h-[49px] mt-1"
        />
        {title}
      </div>
    </header>
  );
};
