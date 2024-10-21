"use client";

import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import IMAGE from "./image.png";
import { useState } from "react";
import { InputWithPen } from "@/app/components/input-with-pen";
import { Check } from "lucide-react";
import { Howl } from "howler";
import BACKGROUND2 from "@/app/bgpng_temp/3/중등한문_그려서 만든 한자37.png";

export default function Page() {
  const answers = ["우", "폭우"];
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <img
        src={IMAGE.src}
        className="relative top-[23px] left-[45px] w-[97%]"
      />

      {/* 체크표시 넣어주세요. 위에는 항상 보이는 체크마크이고 아래는 예시 답안 눌렀을 때만 보여야합니다. */}
      <InputWithPen
        answer={answers[0]}
        showAnswer={showAnswer}
        className="text-example text-[50px] text-center w-[100px] bg-transparent"
        penClassName="left-1/2 -translate-x-1/2 w-[60px] top-[30px]"
        containerClassName="absolute bottom-[70px] left-[500px]"
      />
      <InputWithPen
        answer={answers[1]}
        showAnswer={showAnswer}
        className="text-example text-[50px] text-center w-[100px] bg-transparent"
        penClassName="left-1/2 -translate-x-1/2 w-[60px] top-[30px]"
        containerClassName="absolute bottom-[70px] left-[675px]"
      />

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      <img
        src={BACKGROUND2.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
