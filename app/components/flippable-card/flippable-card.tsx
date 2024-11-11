"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import CLICK_ICON from "./click-icon.png";
import CLICK_ICON_WHITE from "./click-icon-white.png";
import CLICK_ICON_BLACK from "./click-icon-black.png";
import FLIP_ICON from "./flip-icon.png";
import { clickSound } from "@/app/utils/click-sound";

interface Props {
  active: boolean | null;
  text: string | ReactNode;
  width: number;
  height: number;
  className?: string;
  iconClassName?: string;
  backClassName?: string;
  frontClassName?: string;
  contentClassName?: string;
  flipIconClassName?: string;
  iconColor?: "default" | "white" | "black";
}

export const FlippableCard = ({
  active,
  text,
  width,
  height,
  className = "",
  iconClassName = "",
  backClassName = "",
  frontClassName = "",
  contentClassName = "",
  flipIconClassName = "",
  iconColor = "default",
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isFlipped, setIsFlipped] = useState<boolean | null>(active);

  const handleFlip = () => {
    clickSound.play();
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    setIsFlipped(active);
  }, [active]);

  useEffect(() => {
    if (isFlipped) {
      ref.current?.setAttribute('data-active', 'true');
    } else {
      ref.current?.setAttribute('data-active', 'false');
    }
  }, [isFlipped]);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-active') {
          const active = ref.current?.getAttribute('data-active');
          if (active === 'true') {
            setIsFlipped(true);
          } else {
            setIsFlipped(false);
          }
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current, { attributes: true });
    }

    return () => observer.disconnect();
  }, []);

  const clickIcon =
    iconColor === "white"
      ? CLICK_ICON_WHITE
      : iconColor === "black"
        ? CLICK_ICON_BLACK
        : CLICK_ICON;

  return (
    <div
      ref={ref}
      className={`[perspective:1000px] cursor-pointer ${className}`}
      onClick={handleFlip}
      style={{
        width,
        height,
      }}
    >
      <div
        className={`relative w-full h-full ${isFlipped !== null ? "transition-transform duration-500" : ""} [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateX(-180deg)]" : ""
          }`}
      >
        <div
          className={`absolute w-full h-full bg-white border-8 border-[#0090a2] rounded-2xl flex flex-col items-center justify-center [backface-visibility:hidden] ${frontClassName}`}
        >
          <img
            src={clickIcon.src}
            className={iconClassName ?? ""}
            style={{
              height: height * 0.6,
            }}
          />
        </div>
        <div
          className={`absolute w-full h-full bg-white border-8 border-[#0090a2] rounded-2xl text-[#0090a2] flex items-center justify-center [backface-visibility:hidden] [transform:rotateX(180deg)] ${backClassName}`}
        >
          <div
            className={`w-full h-full flex items-center justify-center font-bold ${contentClassName}`}
          >
            <p className="text-center px-4 [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased]">
              {text}
            </p>
          </div>
          <img
            src={FLIP_ICON.src}
            className={`absolute -top-8 -right-8 w-[70px] ${flipIconClassName}`}
            alt="Flip icon"
          />
        </div>
      </div>
    </div>
  );
};

export const FlippableCard_60 = ({
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
  const ref = useRef<HTMLDivElement>(null);
  const [isFlipped, setIsFlipped] = useState<boolean | null>(active || null);

  const handleFlip = () => {
    clickSound.play();
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    setIsFlipped(active || null);
  }, [active]);

  useEffect(() => {
    if (isFlipped) {
      ref.current?.setAttribute('data-active', 'true');
    } else {
      ref.current?.setAttribute('data-active', 'false');
    }
  }, [isFlipped]);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-active') {
          const active = ref.current?.getAttribute('data-active');
          if (active === 'true') {
            setIsFlipped(true);
          } else {
            setIsFlipped(false);
          }
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current, { attributes: true });
    }

    return () => observer.disconnect();
  }, []);

  const clickIcon =
    iconColor === "white"
      ? CLICK_ICON_WHITE
      : iconColor === "black"
        ? CLICK_ICON_BLACK
        : CLICK_ICON;

  return (
    <div
      ref={ref}
      className={`flippable-card [perspective:1000px] cursor-pointer ${className}`}
      data-active={isFlipped || "false"}
      onClick={handleFlip}
      style={{
        width,
        height,
      }}
    >
      <div
        className={`relative w-full h-full ${isFlipped !== null ? "transition-transform duration-500" : ""} [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateX(-180deg)]" : ""
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
            className="absolute -top-8 -right-8 w-[60px]"
            alt="Flip icon"
          />
        </div>
      </div>
    </div>
  );
};
