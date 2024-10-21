"use client";

import HEADER from "../assets/header.png";
import { VideoThumbnail } from "@/app/components/video-thumbnail";
import EXERCISE4 from "./exercise4.png";
import THUMBNAIL from "./thumbnail.png";
import { ContentContainer } from "@/app/components/content-container";
import { Textarea } from "@/app/components/textarea";
import { useEffect, useState } from "react";
import { MoveRight } from "lucide-react";
import { ExerciseHeader } from "@/app/components/exercise-header";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import BACKGROUND from "@/app/bgpng_temp/1/중등한문_한자,어디서봤어10.png"

export default function Page() {
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
      <header className="pt-3 pb-2 animate__animated animate__fadeIn">
        <img src={HEADER.src} />
      </header>

      <ExerciseHeader
        text="뉴스 기사에서 틀린 말을 모두 찾아 바르게 고쳐 보자."
        image={EXERCISE4.src}
      />

      <ContentContainer className="w-[1600px] h-full ml-[160px] -mt-[130px] flex justify-center items-center">
        <div className="grid grid-cols-[2fr__3fr] gap-9">
          <VideoThumbnail
            thumbnail={THUMBNAIL.src}
            video="/video/animation/1-1_12-3.mp4"
            width={620}
            height={330}
          />
          <div className="relative h-[320px] flex justify-center items-center -left-[20px]">
            <div className="flex flex-col items-center gap-5">
              <div className="rounded-full bg-[#f9e7b8] tracking-normal text-[35px] w-[180px] text-center py-1">
                틀린 말
              </div>
              {!value && !showAnswer ? (
              <img
                src="/ui/textarea-pen.png"
                className="absolute pointer-events-none"
                style={{
                  height: 55,
                  top: 110,
                  left: 60
                }}
              />
            ) : null}
              <input
                value={showAnswer ? answer.answer1 : value.text1}
                onChange={(e) =>
                  setValue({ ...value, text1: e.currentTarget.value })
                }
                className={`w-[320px] border-b-2 border-black text-center text-[50px] leading-tight pt-4 pb-2 focus:outline-none ${
                  showAnswer ? "text-red-500" : ""
                }`}
              />
              <input
                value={showAnswer ? answer.answer2 : value.text2}
                onChange={(e) =>
                  setValue({ ...value, text2: e.currentTarget.value })
                }
                className={`w-[320px] border-b-2 border-black text-center text-[50px] leading-tight pt-4 pb-2 focus:outline-none ${
                  showAnswer ? "text-red-500" : ""
                }`}
              />
            </div>
            <div className="mx-5 relative w-[30px] h-full">
              <p className="text-[40px] absolute top-[110px]">⇒</p>
              <p className="text-[40px] absolute top-[210px]">⇒</p>
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
                className={`w-[320px] border-b-2 border-black text-center text-[50px] leading-tight pt-4 pb-2 focus:outline-none ${
                  showAnswer ? "text-red-500" : ""
                }`}
              />
              <input
                value={showAnswer ? answer.answer4 : value.text4}
                onChange={(e) =>
                  setValue({ ...value, text4: e.currentTarget.value })
                }
                className={`w-[320px] border-b-2 border-black text-center text-[50px] leading-tight pt-4 pb-2 focus:outline-none ${
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
      <img src={BACKGROUND.src} className="absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
