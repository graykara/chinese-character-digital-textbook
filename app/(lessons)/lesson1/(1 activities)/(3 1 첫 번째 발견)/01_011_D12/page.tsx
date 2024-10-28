"use client";

import { Header } from "../assets/header";
import { VideoThumbnail } from "@/app/components/video-thumbnail";
import EXERCISE1 from "./exercise1.png";
import THUMBNAIL from "./thumbnail.png";
import { TextareaWithPen } from "@/app/components/textarea/textarea-with-pen";
import TEXTAREA from "./bgTextArea1.png";
import { useEffect, useState } from "react";
import { ExerciseHeader } from "@/app/components/exercise-header";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import BACKGROUND from "@/app/bgpng_temp/1/중등한문_한자,어디서봤어5.png"

export default function Page() {
  const answer =
    "안녕, 한문, 수행 평가, 보고서, 작성, 부분, 도대체, 당연, 지금, 어중간, 점심시간";
  const [showAnswer, setShowAnswer] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue("");
  }, [showAnswer]);

  return (
    <>
      <Header />

      <ExerciseHeader
        text="대화에서 한자 어휘라고 생각하는 것에 모두 ○표 해 보자."
        image={EXERCISE1.src}
      />

      <div className="w-[1600px] h-full ml-[160px] -mt-[130px] flex justify-center items-center">
        <div className="grid grid-cols-[2fr__3fr] gap-9">
          <VideoThumbnail
            thumbnail={THUMBNAIL.src}
            video="/video/animation/1-1_11.mp4"
            width={620}
            height={330}
          />

          <div className="relative top-1">
            <TextareaWithPen
              answer={answer}
              showAnswer={showAnswer}
              containerClassName={`absolute resize-none left-0 top-5 text-[45px] bg-transparent w-[840px] ml-3 px-16 leading-[81px] tracking-tighter break-keep ${showAnswer ? "text-answer ml-3" : ""}`}
              penClassName="h-[55px] top-[27px] left-[60px]"
              rows={3}
            />
            <img src={TEXTAREA.src} className="" />
          </div>

        </div>
      </div>

      <div className="flex justify-end px-10">
        <CheckAnswerButton
          active={showAnswer}
          onClick={() => setShowAnswer(!showAnswer)}
        />
      </div>
      <img src={BACKGROUND.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
