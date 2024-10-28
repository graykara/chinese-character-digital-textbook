"use client";

import { clickSound } from "@/app/utils/click-sound";
import { useState } from "react";

interface Props {
  active: boolean;
  onClick?: () => void;
  text: string;
  checkboxColor: string;
  backgroundColor: string;
}

export const PillButton = ({
  active,
  onClick,
  text,
  checkboxColor,
  backgroundColor,
}: Props) => {
  const [isHover, setIsHover] = useState(false);

  const handleClick = () => {
    clickSound.play();
    onClick?.();
  };

  return (
    <button
      className="w-[180px] h-[64px] rounded-full flex items-center px-[11px]"
      onClick={handleClick}
      style={{
        backgroundColor,
      }}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className="relative w-[42px] h-[42px] rounded-full"
        style={{
          backgroundColor: checkboxColor,
        }}
      >
        <img
          src="/ui/pill-button-check-icon.png"
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150 ${
            active || isHover ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <p className="text-white w-[116px] text-center">{text}</p>
    </button>
  );
};
