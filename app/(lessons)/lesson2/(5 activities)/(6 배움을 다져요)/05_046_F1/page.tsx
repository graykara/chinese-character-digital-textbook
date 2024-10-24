"use client";

import { StrengthenLearningMainContentHeader } from "@/app/components/headers/strengthen-learning-main-content-header";
import { useState } from "react";
import IMAGE1 from "./1.png";
import IMAGE2 from "./2.png";
import IMAGE3 from "./3.png";
import IMAGE4 from "./4.png";
import IMAGE5 from "./5.png";
import EXAMPLE from "./example.png";
import ANSWER_BUTTON from "./answer-button.png";
import { InputWithPen } from "@/app/components/input-with-pen";
import { ContentContainer } from "@/app/components/content-container";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/5/중등한문_한자를 알면 틀리지 않는 일상 어휘11.png";

export default function Page() {
  const data = [
    {
      resource: IMAGE1.src,
      answer: ["無","難"],
      x: 910,
      y: 10,
    },
    {
      resource: IMAGE2.src,
      answer: ["食","水"],
      x: 10,
      y: 10,
    },
    {
      resource: IMAGE3.src,
      answer: ["今","日"],
      x: 10,
      y: 10,
    },
    {
      resource: IMAGE4.src,
      answer: ["意","思"],
      x: 10,
      y: 10,
    },
    {
      resource: IMAGE5.src,
      answer: ["休","業"],
      x: 10,
      y: 10,
    },
  ];
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    
    <>
      <StrengthenLearningMainContentHeader
        title={
          <>
            빈칸에 어울리는 단어를{" "}
            <span className="border rounded-lg border-black inline">보기</span>
            에서 찾아 써 보자.
          </>
        }
        sound=""
      />

      <ContentContainer className="flex-none !h-[120px] -mt-20 mb-10">
        <img src={EXAMPLE.src} />
      </ContentContainer>

      <ContentContainer className="!justify-start pt-5 pb-20 pr-10 gap-[100px] mb-[50px]">
        {data.map(({ resource, answer, x, y }) => (
          <div
            key={resource}
            className="w-full relative flex justify-between items-center pl-[120px]"
          >
            <div className="relative">
              <img src={resource} />
            </div>

            <InputWithPen
              answer={answer[0]}
              showAnswer={showAnswer}
              className="font-haeseo text-[80px] text-center w-[100px] bg-transparent"
              penClassName="left-1/2 -translate-x-1/2 -mt-2"
              containerClassName={`absolute top-[${y}px] left-[${x}px]`}
            />
            <InputWithPen
              answer={answer[1]}
              showAnswer={showAnswer}
              className="font-haeseo text-[80px] text-center w-[100px] bg-transparent"
              penClassName="left-1/2 -translate-x-1/2 -mt-2"
              containerClassName={`absolute top-[${y}px] left-[${x+100}px]`}
            />
            <button 
              onClick={() => setShowAnswer(!showAnswer)}>
              <img src={ANSWER_BUTTON.src} />
            </button>
          </div>
        ))}
      </ContentContainer>
      <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
