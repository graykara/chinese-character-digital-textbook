"use client";

import { StepContainer } from "@/app/components/step-container";
import HEADER from "../assets/header.png";
import EXERCISE4 from "./exercise4.png";
import { useEffect, useState } from "react";
import { VideoThumbnail } from "@/app/components/video-thumbnail";
import THUMBNAIL from "./thumbnail.png";
import { ContentContainer } from "@/app/components/content-container";
import { Textarea } from "@/app/components/textarea";
import { MoveRight } from "lucide-react";
import { ExerciseHeader } from "@/app/components/exercise-header";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";

export default function Page13_4() {
  const [showAnswer, setShowAnswer] = useState(false);
  const answer = {
    answer1: "연애인.",
    answer2: "동거동락.",
    answer3: "연예인.",
    answer4: "동고동락.",
  };
  const [value, setValue] = useState({
    text1: "",
    text2: "",
    text3: "",
    text4: "",
  });

  useEffect(() => {
    setValue({
      text1: "",
      text2: "",
      text3: "",
      text4: "",
    });
  }, [showAnswer]);

  return (
    <>
      <header className="pt-5 animate__animated animate__fadeIn">
        <img src={HEADER.src} />
      </header>

      <ExerciseHeader
        text="뉴스 기사에서 틀린 말을 모두 찾아 바르게 고쳐 보자."
        image={EXERCISE4.src}
      />

      <ContentContainer>
        <div className="grid grid-cols-[2fr__3fr] mx-auto gap-5">
          <VideoThumbnail
            thumbnail={THUMBNAIL.src}
            video="/video/animation/1-1_12-3.mp4"
            width={550}
            height={320}
          />
          <div className="relative h-[320px] flex justify-center items-center">
            <div className="flex flex-col items-center gap-5">
              <div className="rounded-full bg-[#f9e7b8] tracking-normal text-[35px] w-[180px] text-center py-1">
                틀린 말
              </div>
              <input
                value={showAnswer ? answer.answer1 : value.text1}
                onChange={(e) =>
                  setValue({ ...value, text1: e.currentTarget.value })
                }
                className={`w-[240px] border-b-2 border-black text-center py-2 focus:outline-none ${
                  showAnswer ? "text-red-500" : ""
                }`}
              />
              <input
                value={showAnswer ? answer.answer2 : value.text2}
                onChange={(e) =>
                  setValue({ ...value, text2: e.currentTarget.value })
                }
                className={`w-[240px] border-b-2 border-black text-center py-2 focus:outline-none ${
                  showAnswer ? "text-red-500" : ""
                }`}
              />
            </div>
            <div className="mx-5 relative w-[30px] h-full">
              {/* <MoveRight size={30} className="absolute top-[140px]" />
              <MoveRight size={30} className="absolute top-[240px]" /> */}
              <p className="text-[30px] absolute top-[140px]">⇒</p>
              <p className="text-[30px] absolute top-[240px]">⇒</p>
            </div>
            <div className="flex flex-col items-center gap-5">
              <div className="rounded-full bg-[#c2e6ec] tracking-normal text-[35px] w-[180px] text-center py-1">
                바른 말
              </div>
              <input
                value={showAnswer ? answer.answer3 : value.text3}
                onChange={(e) =>
                  setValue({ ...value, text3: e.currentTarget.value })
                }
                className={`w-[240px] border-b-2 border-black text-center py-2 focus:outline-none ${
                  showAnswer ? "text-red-500" : ""
                }`}
              />
              <input
                value={showAnswer ? answer.answer4 : value.text4}
                onChange={(e) =>
                  setValue({ ...value, text4: e.currentTarget.value })
                }
                className={`w-[240px] border-b-2 border-black text-center py-2 focus:outline-none ${
                  showAnswer ? "text-red-500" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
}
