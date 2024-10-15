"use client";

import React, {
  createContext,
  useContext,
  useRef,
  useEffect,
  useState,
} from "react";
import { usePathname } from "next/navigation";

interface AudioContextType {
  play: () => void;
  isPlaying: boolean;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    audioRef.current = new Audio("/sound/common/activity_start.mp3");
    audioRef.current.loop = true; // 필요에 따라 조정

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    // 페이지 변경 시 오디오 상태 유지
    if (audioRef.current && isPlaying) {
      audioRef.current
        .play()
        .catch((e) => console.error("Audio playback failed:", e));
    }
  }, [pathname, isPlaying]);

  const play = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.error("Audio playback failed:", e));
    }
  };

  return (
    <AudioContext.Provider value={{ play, isPlaying }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};
