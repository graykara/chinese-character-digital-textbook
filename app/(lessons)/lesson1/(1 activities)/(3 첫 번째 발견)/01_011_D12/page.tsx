"use client";

import HEADER from "../assets/header.png";
import { VideoThumbnail } from "@/app/components/video-thumbnail";
import EXERCISE1 from "./exercise1.png";
import THUMBNAIL from "./thumbnail.png";
import { Textarea } from "@/app/components/textarea";
import { useEffect, useState } from "react";
import { ExerciseHeader } from "@/app/components/exercise-header";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";

export default function Page13_1() {
  const answer =
    "안녕, 한문, 수행 평가, 보고서, 작성,\n부분, 도대체, 당연, 지금, 어중간, 점심시간";
  const [showAnswer, setShowAnswer] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue("");
  }, [showAnswer]);

  return (
    <>
      <header className="pt-5 animate__animated animate__fadeIn">
        <img src={HEADER.src} />
      </header>

      <ExerciseHeader
        text="대화에서 한자 어휘라고 생각하는 것에 모두 ◦표 해 보자."
        image={EXERCISE1.src}
      />

      <div className="w-[1400px] h-full mx-auto flex justify-center items-center">
        <div className="grid grid-cols-[2fr__3fr] mx-auto gap-5">
          <VideoThumbnail
            thumbnail={THUMBNAIL.src}
            video="/video/animation/1-1_11.mp4"
            width={550}
            height={320}
          />
          <div className="relative h-[320px]">
            <Textarea
              value={showAnswer ? answer : value}
              onChange={setValue}
              className={showAnswer ? "text-red-500" : ""}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end px-10">
        <CheckAnswerButton
          active={showAnswer}
          onClick={() => setShowAnswer(!showAnswer)}
        />
      </div>
    </>
  );
}
