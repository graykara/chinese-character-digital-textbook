"use client";

import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import { StepContainer } from "@/app/components/step-container";
import { Header } from "../assets/header";
import { useEffect, useState } from "react";
import { ContentContainer } from "@/app/components/content-container";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import IMAGE3 from "./image3.png";
import IMAGE4 from "./image4.png";
import ANSWER1 from "./answer1.png";
import ANSWER2 from "./answer2.png";
import ANSWER3 from "./answer3.png";
import ANSWER4 from "./answer4.png";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import BACKGROUND from "@/app/bgpng_temp/1/중등한문_한자,어디서봤어12.png"

export default function Page() {
  const [step, setStep] = useState(1);
  const [value, setValue] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(false);
  }, [step]);

  const data = [
    {
      image: IMAGE1.src,
      answerContainerImage: ANSWER1.src,
      answer: "다섯 줄.",
      showAnswer: showAnswer
    },
    {
      image: IMAGE2.src,
      answerContainerImage: ANSWER2.src,
      answer: "아직 값을 모르는 수.",
      showAnswer: showAnswer,
    },
    {
      image: IMAGE3.src,
      answerContainerImage: ANSWER3.src,
      answer: "의로운 병사.",
      showAnswer: showAnswer,
    },
    {
      image: IMAGE4.src,
      answerContainerImage: ANSWER4.src,
      answer: "동쪽 지역은 높고 서쪽 지역은 낮은 상태.",
      showAnswer: showAnswer,
    }
  ]

  return (
    <>
      <Header />

      <ContentContainer className="flex flex-col items-center -mt-[150px]">
        <img src={data[step - 1]?.image} className="h-[420px] mb-[150px]" />

        <div className="absolute left-[115px] top-[680px]">

          <img src={`${data[step - 1].answerContainerImage}`} />

          {!value && !showAnswer ? (
            <img
              src="/ui/textarea-pen.png"
              className="absolute pointer-events-none"
              style={{
                height: 54,
                top: 50,
                left: 265
              }}
            />
          ) : null}
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="absolute left-[250px] -mt-[70px] text-center w-[480px] focus:outline-none bg-transparent" />

          {showAnswer ? (
            <p
              className={`absolute left-[780px] text-center text-red-500 ${data[step - 1]?.answer.length > 20 ? "text-[34px] tracking-tighter -ml-1 top-14" : "top-12 w-[460px]"
                }`}
            >
              {data[step - 1]?.answer}
            </p>
          ) : null}
        </div>

      </ContentContainer>

      <StepContainer step={step} maxStep={4} onStepChange={setStep} />

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      <img src={BACKGROUND.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
