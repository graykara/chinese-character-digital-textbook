"use client";
import { SOUND } from "@/app/utils/sound-player";
import { useEffect, useState, useRef, useMemo, useCallback } from "react";

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

  const startTimer = useCallback(() => {
    if (!soundPlayer) return;

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      if (soundPlayer?.playing()) {
        // Howler.js는 초 단위로 반환하므로 밀리초로 변환
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

  useEffect(() => {
    const timeout = setTimeout(() => {
      const soundPlayer = SOUND(sound);
      soundPlayer.play();
      setSoundPlayer(soundPlayer);
    }, 2000);

    return () => {
      if (timeout) clearTimeout(timeout);
      stopTimer();
      if (soundPlayer) soundPlayer.unload();
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
      return "text-blue-500"; // 현재 재생 중인 텍스트 색상
    }
    return "text-gray-900"; // 기본 텍스트 색상
  };

  // 디버깅을 위한 시간 포매팅 함수
  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const milliseconds = Math.floor(ms % 1000);
    return `${seconds}.${milliseconds.toString().padStart(3, "0")}`;
  };

  return (
    <div
      className={`animate__animated animate__fadeIn animate__delay-2s overflow-y-auto ${className || ""}`}
      style={style}
    >
      <p
        className={`text-[55px] font-semibold break-keep leading-[78px] ${textClassName}`}
      >
        {data.map((item, index) => (
          <span
            key={index}
            className={`transition-colors duration-1000 ${getTextColor(
              item.start,
              item.end,
            )}`}
          >
            {item.text}{" "}
          </span>
        ))}
      </p>

      {/* 디버깅용 컨트롤 (필요시 주석 해제) */}
      {/* <div className="mt-4">
        <p>Current Time: {formatTime(currentTime)}ms</p>
        <button
          onClick={() =>
            isPlaying ? soundPlayer?.pause() : soundPlayer?.play()
          }
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div> */}
    </div>
  );
};
