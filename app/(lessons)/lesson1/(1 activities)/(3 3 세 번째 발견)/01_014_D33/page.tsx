"use client";

import { useEffect, useState } from "react";
import { Header } from "../assets/header";
import IMAGE from "./image.png";
import { ExerciseHeader } from "@/app/components/exercise-header";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import HEADER from "../assets/header.png";
import BACKGROUND from "@/app/bgpng_temp/1/중등한문_한자,어디서봤어20.png"

export default function Page() {
  const answer = "조선 태조 때부터 철종까지의 역사적 사실";
  const [value, setValue] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setValue("");
  }, [showAnswer]);

  return (
    <>
      <Header />

      <ExerciseHeader
        text="아래 한문 기록이 담고 있는 내용을 조사하여 빈칸에 써 보자."
        showSmartButton
        showWritingButton
        smartLink="https://sillok.history.go.kr/intro/intro.do"
      />

      <div className="relative">
        <img src={IMAGE.src} className="mx-auto -mt-8" />


        {!value && !showAnswer ? (
            <img
              src="/ui/textarea-pen.png"
              className="absolute pointer-events-none"
              style={{
                height: 45,
                top: 380,
                left: 580
              }}
            />
          ) : null}
        <input
          value={showAnswer ? answer : value}
          onChange={(e) => setValue(e.currentTarget.value)}
          className={`text-[35px] text-center leading-[30px] tracking-tight absolute w-[570px] left-[570px] bottom-[140px] border-b-2 border-black bg-transparent ${
            showAnswer ? "text-red-500" : ""
          }`}
        />
      </div>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      <img src={BACKGROUND.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
