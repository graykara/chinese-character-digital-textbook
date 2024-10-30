"use client";

import { SOUND } from "@/app/utils/sound-player";
import { useEffect, useState, useRef, useCallback } from "react";
import { SoundText } from "../sound-text";

interface Props {
  sound: string;
  data: {
    text: string;
    start: number; // milliseconds
    end: number; // milliseconds
  }[];
  style?: React.CSSProperties;
  className?: string;
  textClassName?: string;
}

export const IntroTextPlayer = ({
  sound,
  data,
  style = {},
  className,
  textClassName,
}: Props) => {
  const [currentTime, setCurrentTime] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [soundPlayer, setSoundPlayer] = useState<Howl | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const startTimer = useCallback(() => {
    if (!soundPlayer) return;
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      if (soundPlayer?.playing()) {
        const position = soundPlayer.seek() * 1000;
        setCurrentTime(position);
      }
    }, 16);
  }, [soundPlayer]);

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // Find current active text element and scroll to it
  useEffect(() => {
    const activeElement = document.querySelector(`.text-blue-500`);
    if (activeElement && containerRef.current) {
      const container = containerRef.current;
      const elementRect = activeElement.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      const scrollTo =
        elementRect.top -
        containerRect.top -
        container.clientHeight / 2 +
        elementRect.height / 2;

      container.scrollTo({
        top: container.scrollTop + scrollTo,
        behavior: "smooth",
      });
    }
  }, [currentTime]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const soundPlayer = SOUND(sound);
      soundPlayer.play();
      setSoundPlayer(soundPlayer);
    }, 2000);
    return () => {
      if (timeout) clearTimeout(timeout);
      stopTimer();
      if (soundPlayer) {
        soundPlayer.unload();
        soundPlayer.stop();
      }
    };
  }, []);

  useEffect(() => {
    if (soundPlayer) {
      soundPlayer.on("play", () => {
        setIsPlaying(true);
        startTimer();
      });
      soundPlayer.on("pause", () => {
        setIsPlaying(false);
        stopTimer();
      });
      soundPlayer.on("stop", () => {
        setIsPlaying(false);
        stopTimer();
        setCurrentTime(0);
      });
      soundPlayer.on("end", () => {
        setIsPlaying(false);
        stopTimer();
      });
    }
  }, [soundPlayer]);

  const getTextColor = (start: number, end: number) => {
    if (currentTime >= start && currentTime <= end) {
      return "text-blue-500";
    }
    return "text-gray-900";
  };

  const isPlayingSound = (start: number, end: number) => {
    if (currentTime >= start && currentTime <= end) {
      return true;
    }
    return false;
  };

  return (
    <div
      ref={containerRef}
      className={`animate__animated animate__fadeIn animate__delay-2s overflow-y-auto max-h-screen ${className || ""}`}
      style={style}
    >
      <p
        className={`text-[55px] font-semibold break-keep leading-[78px] ${textClassName}`}
      >
        {data.map((item, index) => (
          <SoundText
            key={index}
            isPlaying={isPlayingSound(item.start, item.end)}
          >
            {item.text}{" "}
          </SoundText>
        ))}
      </p>
    </div>
  );
};
