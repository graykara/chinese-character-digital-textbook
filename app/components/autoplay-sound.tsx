"use client";

import React, { useEffect, useRef } from "react";

const AutoplaySound: React.FC = ({
  sound = "/sound/common/activity_start.mp3",
}: {
  sound?: string;
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const attemptPlay = async () => {
      audioRef.current = new Audio(sound);
      audioRef.current.muted = true;

      try {
        await audioRef.current.play();
        // 재생이 시작되면 음소거를 해제 시도
        audioRef.current.muted = false;
      } catch (error) {
        console.error("Autoplay was prevented:", error);
      }
    };

    attemptPlay();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return null;
};

export default AutoplaySound;
