"use client";

import { useEffect, useState } from "react";
import { Header } from "../components/header";
import IMAGE from "./image.png";
import { ExerciseHeader } from "@/app/components/exercise-header";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";

export default function Page15_3() {
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
        <img src={IMAGE.src} className="mx-auto" />

        <input
          value={showAnswer ? answer : value}
          onChange={(e) => setValue(e.currentTarget.value)}
          className={`text-[35px] text-center absolute w-[550px] left-[580px] bottom-[140px] border-b-2 border-black bg-transparent ${
            showAnswer ? "text-red-500" : ""
          }`}
        />
      </div>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
}
