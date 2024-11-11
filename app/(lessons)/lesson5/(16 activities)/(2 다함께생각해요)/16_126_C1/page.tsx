"use client";

import { ThinkTogetherHeader } from "@/app/components/headers/think-together";
import IMAGE from "./image.png";
import BUTTON_1 from "./1.png";
import BUTTON_2 from "./2.png";
import BUTTON_3 from "./3.png";
import { ContentContainer } from "@/app/components/content-container";
import { TextareaWithPen } from "@/app/components/textarea/textarea-with-pen";
import { useState } from "react";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕2.png";
import { clickSound } from "@/app/utils/click-sound";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);
  const answers = [
    "도움이 필요한 사람에게 도움을 주는 것.",
    "마을의 어르신들에게 스마트 기기 활용 방법을 알려 드림."
  ];

  const [isButton1Clicked, setIsButton1Clicked] = useState(false);
  const [isButton2Clicked, setIsButton2Clicked] = useState(false);
  const [isButton3Clicked, setIsButton3Clicked] = useState(false);

  return (
    <>
      <ThinkTogetherHeader
        title={<p className="-ml-2 leading-[60px]">다양한 나눔의 사례를 보고 내가 생각하는 나눔과 내가 실천한 나눔의 사례를 적어 보자.</p>}
        sound="/sound/5/126-i.mp3"
      />

      <ContentContainer className="-top-9 left-10">
        <img src={IMAGE.src} />
      </ContentContainer>
      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />

      <div>
        {isButton1Clicked ? null : (
          <button
            className="absolute left-[240px] top-[365px]"
            onClick={() => {
              clickSound.play();
              setIsButton1Clicked(true);
            }}
          >
            <img src={BUTTON_1.src} alt="button" />
          </button>
        )}
        {isButton2Clicked ? null : (
          <button
            className="absolute left-[445px] top-[337px]"
            onClick={() => {
              clickSound.play();
              setIsButton2Clicked(true);
            }}
          >
            <img src={BUTTON_2.src} alt="button" />
          </button>
        )}
        {isButton3Clicked ? null : (
          <button
            className="absolute left-[585px] top-[405px]"
            onClick={() => {
              clickSound.play();
              setIsButton3Clicked(true);
            }}
          >
            <img src={BUTTON_3.src} alt="button" />
          </button>
        )}
      </div>

      <TextareaWithPen
        answer={answers[0]}
        showAnswer={showAnswer}
        containerClassName={`absolute resize-none w-[720px] left-[870px] top-[532px] text-[35px] pl-4 leading-[45px] tracking-tighter break-keep bg-transparent py-1  ${showAnswer ? "text-example" : ""}`}
        penClassName="h-[37px] top-[537px] left-[870px]"
        rows={2}
      />

      <TextareaWithPen
        answer={answers[1]}
        showAnswer={showAnswer}
        containerClassName={`absolute resize-none w-[720px] left-[870px] top-[689px] text-[35px] pl-4 leading-[45px] tracking-tighter break-keep bg-transparent py-1  ${showAnswer ? "text-example" : ""}`}
        penClassName="h-[37px] top-[694px] left-[870px]"
        rows={2}
      />

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
