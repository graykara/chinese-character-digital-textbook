"use client";

import { Header } from "../assets/header";
import { GroupButton } from "@/app/components/buttons/group-button";
import { WritingButton } from "@/app/components/buttons/writing-button";
import { BuddyButton } from "@/app/components/buttons/buddy-button";
import { SmartButton } from "@/app/components/buttons/smart-button";
import { QRButton } from "@/app/components/buttons/qr-button";
import QR from "./qr.png";
import { ExerciseHeader } from "@/app/components/exercise-header";
import EXERCISE2 from "./exercise2.png";
import TEXT from "./text.png";
import BLACKBOARD from "./bgTextArea2.png";
import { Textarea, TextareaBase } from "@/app/components/textarea";
import { useState } from "react";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import BACKGROUND from "@/app/bgpng_temp/1/중등한문_한자,어디서봤어6.png"

export default function Page() {
  const answer =
    "책상, 의자, 공책, 연필, 필통, 칠판, 창문, 시계,게시판, 휴지통";
  const [value, setValue] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <Header />

      <GroupButton
        className="animate__animated animate__fadeIn animate__delay-1s absolute right-[340px] top-[85px] z-1" />
      <SmartButton
        link="https://stdict.korean.go.kr/"
        className="animate__animated animate__bounceIn animate__delay-2s absolute right-[185px] top-[40px] z-1" />
      <QRButton 
        src={QR.src} 
        className="absolute right-[105px] top-[350px] z-1" />

      <ExerciseHeader
        text={
          <>
            <p className="tracking-[-2.5px]">우리 교실 안에 있는 물건 중 이름이 한자어인 것을 10개 이상 찾아 써보자.</p>
            <p className="ml-[0px] mt-0 text-[35px] text-[#1b1b1b] tracking-tighter break-keep leading-[55px] "><span className="text-[#884F36] text-[45px] -mr-1">*</span> 국어사전으로 한자어인지 확인해 보자.</p>
          </>
        }
        image={EXERCISE2.src}
      />

      <div className="w-[1400px] h-full mx-auto flex justify-center items-center ">
        <img src={BLACKBOARD.src} className="absolute -translate-x-5 -translate-y-5" />
        <div className="relative w-[850px] mb-[475px]">

          <div className="absolute left-0  text-[#9d9483] tracking-tighter">
            &lt;예 공책, 칠판&gt;
          </div>

          <div className="relative top-2">
            {!value && !showAnswer ? (
              <img
                src="/ui/textarea-pen.png"
                className="absolute pointer-events-none"
                style={{
                  height: 56,
                  top: 75,
                  left: 15
                }}
              />
            ) : null}
            <textarea
              value={showAnswer ? answer : value}
              onChange={(e) => setValue(e.target.value)}
              className={`absolute resize-none w-[850px] left-0 top-[70px] text-[45px] leading-[80px] tracking-tighter break-keep bg-transparent ml-6 py-0  ${showAnswer ? "text-example ml-6" : ""
                }`}
              rows={2}
            ></textarea>
          </div>
        </div>
      </div>

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      <img src={BACKGROUND.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
