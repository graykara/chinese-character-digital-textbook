"use client";

import { clickSound } from "@/app/utils/click-sound";

export const ResourceButton = ({
  active,
  onClick,
}: {
  active: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className="w-[180px] h-[64px] flex justify-center items-center gap-4 bg-[#4e9aaa] rounded-xl"
      onClick={() => {
        clickSound.play();
        onClick();
      }}
    >
      <img src="/ui/resource-button-icon.png" />
      <p className="text-white">자원</p>
    </button>
  );
};
