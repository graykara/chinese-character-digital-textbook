"use client";

import { StepContainer } from "@/app/components/step-container";
import { Header } from "../assets/header";
import { ExerciseHeader } from "@/app/components/exercise-header";
import { useContext, useEffect, useState } from "react";
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
import BACKGROUND1 from "@/app/bgpng_temp/1/중등한문_한자,어디서봤어12.png";
import BACKGROUND2 from "@/app/bgpng_temp/1/중등한문_한자,어디서봤어13.png";
import BACKGROUND3 from "@/app/bgpng_temp/1/중등한문_한자,어디서봤어14.png";
import BACKGROUND4 from "@/app/bgpng_temp/1/중등한문_한자,어디서봤어15.png";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);
  const [value, setValue] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(false);
    setValue("");
  }, [step]);

  useEffect(() => {
    if (!showAnswer) setValue("");
  }, [showAnswer]);

  const data = [
    {
      image: IMAGE1.src,
      answerContainerImage: ANSWER1.src,
      answer: "다섯 줄.",
      showAnswer: showAnswer,
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
    },
  ];

  return (
    <>
      <Header />

      <ExerciseHeader
        text={
          <>
            <p className="text-[40px] tracking-[-1px]">밑줄 친 부분의 뜻을 추측하여 쓰고, 사전에서 실제 뜻을 찾아 써 보자.</p>
          </>
        }
        sound="/sound/1/13-i2.mp3"
        className="-mt-14 -mb-20"
      />

      <ContentContainer className="flex flex-col items-center -mt-[200px]">
        <img
          src={data[step - 1]?.image}
          className="h-[434px] ml-[25px] mb-[110px]"
        />

        <div className="absolute left-[115px] top-[680px]">
          <img src={`${data[step - 1].answerContainerImage}`} />

          {!value ? (
            <img
              src="/ui/textarea-pen.png"
              className="absolute pointer-events-none"
              style={{
                height: 54,
                top: 50,
                left: 265,
              }}
            />
          ) : null}
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="absolute left-[250px] -mt-[70px] text-center w-[480px] focus:outline-none bg-transparent"
          />

          {showAnswer ? (
            <p
              className={`absolute left-[780px] text-center text-answer ${
                data[step - 1]?.answer.length > 20
                  ? "text-[34px] tracking-tighter -ml-1 top-14"
                  : "top-12 w-[460px]"
              }`}
            >
              {data[step - 1]?.answer}
            </p>
          ) : null}
        </div>
      </ContentContainer>

      <StepContainer maxStep={4} />

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      <img
        src={
          step === 1
            ? BACKGROUND1.src
            : step === 2
              ? BACKGROUND2.src
              : step === 3
                ? BACKGROUND3.src
                : step === 4
                  ? BACKGROUND4.src
                  : ""
        }
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
