"use client";

import HEADER from "../assets/header.png";
import EXERCISE2 from "./exercise2.png";
import TEXT from "./text.png";
import BLACKBOARD from "./blackboard.png";
import { Textarea, TextareaBase } from "@/app/components/textarea";
import { useState } from "react";
import { ExerciseHeader } from "@/app/components/exercise-header";
import { SmartButton } from "@/app/components/buttons/smart-button";
import { GroupButton } from "@/app/components/buttons/group-button";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";

export default function Page13_2() {
  const answer =
    "책상, 의자, 공책, 연필, 필통, 칠판,창문,시계,\n게시판, 휴지통";
  const [value, setValue] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <header className="pt-5 animate__animated animate__fadeIn">
        <img src={HEADER.src} />
      </header>

      <div className="absolute right-[100px] top-10 flex items-center gap-10">
        <GroupButton />
        <SmartButton link="https://stdict.korean.go.kr/" />
      </div>

      <ExerciseHeader
        text={
          <>
            우리 교실 안에 있는 물건 중 이름이 한자어인 것을 10개 이상 찾아
            써보자.
            <img src={TEXT.src} />
          </>
        }
        image={EXERCISE2.src}
      />

      <div className="w-[1400px] h-full mx-auto flex justify-center items-center">
        <img src={BLACKBOARD.src} />

        <div className="absolute">
          {/* <Textarea
            value={showAnswer ? answer : value}
            onChange={setValue}
            placeholder="<예 공책, 칠판>"
            className={showAnswer ? "text-example" : ""}
          /> */}
          <div className="relative">
            <img src="/ui/textarea-box.png" />

            <div className="absolute left-0 top-0 text-[#9d9483] px-10 py-5">
              &lt;예 공책, 칠판&gt;
            </div>

            <div
              className={`absolute left-0 top-[80px] px-10 py-5 w-full ${
                showAnswer ? "text-example" : ""
              }`}
            >
              {!value ? (
                <img
                  src="/ui/textarea-pen.png"
                  className="absolute pointer-events-none"
                  style={{
                    height: 45,
                    top: 45,
                  }}
                />
              ) : null}
              <TextareaBase
                fontSize={45}
                lineHeight={80}
                textIndent={0}
                underlineColor="#d2cbbd"
                underlineWidth={4}
                rows={2}
                value={showAnswer ? answer : value}
                onChange={(e) => setValue(e.currentTarget.value)}
                className={`w-full focus:outline-none placeholder:text-[#9d9483] bg-transparent`}
                readOnly={showAnswer}
              />
            </div>
          </div>
        </div>
      </div>

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
}
