"use client";

import { ReactNode, useEffect, useState } from "react";
import CLICK_ICON from "./click-icon.png";
import CLICK_ICON_WHITE from "./click-icon-white.png";
import CLICK_ICON_BLACK from "./click-icon-black.png";
import FLIP_ICON from "./flip-icon.png";
import { clickSound } from "@/app/utils/click-sound";

interface Props {
  active?: boolean;
  text: string | ReactNode;
  width: number;
  height: number;
  className?: string;
  backClassName?: string;
  frontClassName?: string;
  contentClassName?: string;
  iconColor?: "default" | "white" | "black";
}

export const FlippableCard = ({
  active,
  text,
  width,
  height,
  className = "",
  backClassName = "",
  frontClassName = "",
  contentClassName = "",
  iconColor = "default",
}: Props) => {
  const [isFlipped, setIsFlipped] = useState(active || false);

  const handleFlip = () => {
    clickSound.play();
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    setIsFlipped(active || false);
  }, [active]);

  const clickIcon =
    iconColor === "white"
      ? CLICK_ICON_WHITE
      : iconColor === "black"
        ? CLICK_ICON_BLACK
        : CLICK_ICON;

  return (
    <div
      className={`[perspective:1000px] cursor-pointer ${className}`}
      onClick={handleFlip}
      style={{
        width,
        height,
      }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateX(-180deg)]" : ""
        }`}
      >
        <div
          className={`absolute w-full h-full bg-white border-8 border-[#0090a2] rounded-2xl flex flex-col items-center justify-center [backface-visibility:hidden] ${frontClassName}`}
        >
          <img
            src={clickIcon.src}
            style={{
              height: height * 0.6,
            }}
          />
        </div>
        <div
          className={`absolute w-full h-full bg-white border-8 border-[#0090a2] rounded-2xl text-[#0090a2] flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(180deg)] ${backClassName}`}
        >
          <div
            className={`w-full h-full flex items-center justify-center ${contentClassName}`}
          >
            <p className="text-center px-4 font-bold [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased]">
              {text}
            </p>
          </div>
          <img
            src={FLIP_ICON.src}
            className="absolute -top-7 -right-9 w-[62px]"
            alt="Flip icon"
          />
        </div>
      </div>
    </div>
  );
};
