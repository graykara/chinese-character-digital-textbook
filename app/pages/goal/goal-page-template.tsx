"use client";

import GOAL_TITLE from "./assets/goal-title.png";
import { useContext, useEffect, useMemo, useState } from "react";
import { Howl } from "howler";
import { ReadingButton } from "@/app/components/buttons/reading-button";
import { PageInfoContext } from "@/app/utils/page-info";

export const GoalPageTemplate = ({
  background,
  goals,
}: {
  background: string;
  goals: { text: string; sound: string }[];
}) => {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("학습 목표");

  const [isReading, setIsReading] = useState(false);
  const [currentSoundSrc, setCurrentSoundSrc] = useState("");
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  const sounds = useMemo(() => {
    return goals.map(
      ({ sound }, index) =>
        new Howl({
          src: [sound],
          onend: () => {
            if (index < goals.length - 1) {
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
        })
    );
  }, [goals]);

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
    <div className="w-full h-full bg-[#d5e7e8] flex flex-col justify-center items-center">
      <header className="w-[1450px] mx-auto flex justify-between items-end mb-4">
        <img
          className="animate__animated animate__flipInX"
          src={GOAL_TITLE.src}
        />

        {/* <button
          onClick={() => setIsReading(true)}
          className="animate__animated animate__bounceIn animate__delay-2s"
        >
          <img src={isReading ? READING_PRESSED.src : READING.src} />
        </button> */}

        <ReadingButton
          active={isReading}
          onClick={() => setIsReading(true)}
          className="animate__animated animate__bounceIn animate__delay-2s"
        />
      </header>

      <div className="relative">
        <img src={background} alt="background" />
        <ul className="absolute left-[100px] top-[55px] list-disc marker:text-[#d5454f] text-[55px] animate__animated animate__fadeIn animate__delay-1s">
          {goals.map(({ text, sound }) => (
            <li
              className={`tracking-tight leading-[70px] mb-8 animate__animated ${
                sound === currentSoundSrc ? "animate__bounce" : ""
              }`}
            >
              {text.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
