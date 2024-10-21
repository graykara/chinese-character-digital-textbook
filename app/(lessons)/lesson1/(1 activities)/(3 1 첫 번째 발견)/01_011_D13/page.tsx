"use client";

import HEADER from "../assets/header.png";
import EXERCISE2 from "./exercise2.png";
import TEXT from "./text.png";
// import BLACKBOARD from "./blackboard.png";
import BLACKBOARD from "./bgTextArea2.png";
import { Textarea, TextareaBase } from "@/app/components/textarea";
import { useState } from "react";
import { ExerciseHeader } from "@/app/components/exercise-header";
import { SmartButton } from "@/app/components/buttons/smart-button";
import { GroupButton } from "@/app/components/buttons/group-button";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import BACKGROUND from "@/app/bgpng_temp/1/중등한문_한자,어디서봤어6.png"

export default function Page13_2() {
  const answer =
    "책상, 의자, 공책, 연필, 필통, 칠판, 창문, 시계,게시판, 휴지통";
  const [value, setValue] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <header className="pt-3 pb-2 animate__animated animate__fadeIn">
        <img src={HEADER.src} />
      </header>

      <div className="absolute right-[180px] top-10 flex items-center gap-8">
        <GroupButton />
        <SmartButton link="https://stdict.korean.go.kr/" />
      </div>

      <ExerciseHeader
        text={
          <>
            우리 교실 안에 있는 물건 중 이름이 한자어인 것을 10개 이상 찾아
            써보자.
            <img src={TEXT.src} className="mt-2" />
          </>
        }
        image={EXERCISE2.src}
      />

      <div className="w-[1400px] h-full mx-auto flex justify-center items-center ">
        <img src={BLACKBOARD.src} className="absolute -translate-x-5 -translate-y-2" />
        <div className="relative w-[850px] mb-[450px]">

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
              className={`absolute resize-none w-[850px] left-0 top-[70px] text-[45px] leading-[80px] tracking-tighter break-keep bg-transparent ml-5 py-0  ${showAnswer ? "text-answer ml-5" : ""
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
      <img src={BACKGROUND.src} className="absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
