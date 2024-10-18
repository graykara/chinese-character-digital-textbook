"use client";

import UNDERSTATND_TITLE from "./assets/understanding-title.png";
import { useEffect, useMemo, useState } from "react";
import { Howl } from "howler";
import { SoundButton1 } from "@/app/components/buttons/sound-button1";

export const UnderstandPageTemplate = ({
  background,
  texts,
}: {
  background: string;
  texts: { text: string; sound: string }[];
}) => {
  const [isReading, setIsReading] = useState(false);
  const [currentSoundSrc, setCurrentSoundSrc] = useState("");
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  const sounds = useMemo(() => {
    return texts.map(
      ({ sound }, index) =>
        new Howl({
          src: [sound],
          onend: () => {
            if (index < texts.length - 1) {
              setCurrentIndex(index + 1);
            } else {
              setIsPlaying(false);
              setCurrentSoundSrc("");
              setCurrentIndex(-1);
            }
          },
          onplay: () => {
            setCurrentSoundSrc(sound);
          },
        }),
    );
  }, [texts]);

  useEffect(() => {
    if (isReading && !isPlaying) {
      setIsPlaying(true);
      setCurrentIndex(0);
    } else if (!isReading && isPlaying) {
      setIsPlaying(false);
      sounds[currentIndex]?.stop();
      setCurrentSoundSrc("");
      setCurrentIndex(-1);
    }
  }, [isReading, isPlaying]);

  useEffect(() => {
    if (isPlaying && currentIndex >= 0 && currentIndex < sounds.length) {
      sounds[currentIndex].play();
    } else {
      setIsReading(false);
      setIsPlaying(false);
    }
  }, [currentIndex, sounds, isPlaying]);

  useEffect(() => {
    return () => {
      sounds.forEach((sound) => sound.stop());
    };
  }, [sounds]);

  return (
    <div className="w-full h-full bg-[#d5e7e8] justify-center px-[150px] pb-[100px] ">
      <header className="mt-[130px]">
      <img
          className="animate__animated animate__flipInX"
          src={UNDERSTATND_TITLE.src}
        />
        <SoundButton1
          active={isReading}
          onClick={() => setIsReading(true)}
          className="absolute right-[127px] animate__animated animate__bounceIn animate__delay-2s z-10"
        />
      </header>

      <div className="relative">
        {texts.map(({ text, sound }) => (
          <div
          className={`mt-7 bg-white rounded-[25px] px-20 pt-14 pb-16 text-[50px] leading-relaxed tracking-tighter break-keep animate__animated animate__fadeIn animate__delay-1s transition-colors duration-[2000ms] ${isReading ? "text-reading" : ""
              }`}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};
