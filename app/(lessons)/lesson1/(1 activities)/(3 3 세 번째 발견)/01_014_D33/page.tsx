"use client";

import { useEffect, useState } from "react";
import { Header } from "../assets/header";
import IMAGE from "./image.png";
import { ExerciseHeader } from "@/app/components/exercise-header";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import HEADER from "../assets/header.png";
import BACKGROUND from "@/app/bgpng_temp/1/중등한문_한자,어디서봤어20.png"
import { WritingButton } from "@/app/components/buttons/writing-button";
import { SmartButton } from "@/app/components/buttons/smart-button";
import { QRButton } from "@/app/components/buttons/qr-button";
import QR from "./qr.png";

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
        text={
          <>
            <p className="text-[45px] tracking-[-2.5px]">아래 한문 기록이 담고 있는 내용을 조사하여 빈칸에 써 보자.</p>
          </>
        }
        sound="/sound/1/14-i2.mp3"
      />

      <WritingButton
        className="animate__animated animate__fadeIn animate__delay-1s absolute right-[325px] top-[200px] z-1" />
      <SmartButton
        link="https://sillok.history.go.kr/intro/intro.do"
        className="animate__animated animate__bounceIn animate__delay-2s absolute right-[177px] top-[155px] z-1" />
      <QRButton
        src={QR.src}
        link="http://YBMqr.com/acj002"
        className="absolute right-[227px] top-[368px] z-10" />

      <div className="relative">
        <img src={IMAGE.src} className="mx-auto mt-6" />

        {!value && !showAnswer ? (
          <img
            src="/ui/textarea-pen.png"
            className="absolute pointer-events-none"
            style={{
              height: 45,
              top: 435,
              left: 580
            }}
          />
        ) : null}
        <input
          value={showAnswer ? answer : value}
          onChange={(e) => setValue(e.currentTarget.value)}
          className={`text-[35px] text-center leading-[30px] tracking-tight absolute w-[570px] left-[570px] bottom-[140px] border-b-2 border-black bg-transparent ${showAnswer ? "text-answer" : ""
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
