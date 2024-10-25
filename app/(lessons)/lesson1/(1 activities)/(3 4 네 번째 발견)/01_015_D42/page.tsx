"use client";

import { ExerciseHeader, ExerciseHeader2 } from "@/app/components/exercise-header";
import { Header } from "../assets/header";
import { StepContainer } from "@/app/components/step-container";
import { useEffect, useState } from "react";
import { ContentContainer } from "@/app/components/content-container";

import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import IMAGE3 from "./image3.png";
import IMAGE4 from "./image4.png";
import IMAGE5 from "./image5.png";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import BACKGROUND from "@/app/bgpng_temp/1/중등한문_한자,어디서봤어24.png"

export default function Page() {
  const [step, setStep] = useState(1);

  const quizes = [
    {
      image: IMAGE1.src,
      fontSize: 50,
      answer: "출구전용은\n‘나가는 길로만 씀.’\n이라는 뜻이야.",
      position: { x: 650, y: 30 },
      rows: 3,
    },
    {
      image: IMAGE2.src,
      fontSize: 50,
      answer: "입구는\n‘들어가는 길.’\n이라는 뜻이야.",
      position: { x: 650, y: 30 },
      rows: 3,
    },
    {
      image: IMAGE3.src,
      fontSize: 40,
      answer:
        "보행자전용은 ‘걸어\n다니는 사람만 다니는 길’이고, 자전거 전용은 ‘자전거만 다니는 길’ 이야. ",
      position: { x: 820, y: 30 },
      rows: 4,
    },
    {
      image: IMAGE4.src,
      fontSize: 50,
      answer: "열구는 ‘핫도그’\n라는 뜻이야.",
      position: { x: 820, y: 75 },
      rows: 2,
    },

    {
      image: IMAGE5.src,
      fontSize: 50,
      answer: "소심지활은 ‘바닥이\n미끄러우니 조심’\n하라는 뜻이야.",
      position: { x: 640, y: 50 },
      rows: 3,
    },
  ];

  const [value, setValue] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setValue("");
  }, [showAnswer, step]);

  useEffect(() => {
    setShowAnswer(false);
  }, [step]);

  return (
    <>
      <Header />

      <ExerciseHeader2
        text="한자 문화권 나라의 길거리를 담은 사진이다. 각 사진 속의 한자가 무엇을 뜻하는지 알아 보자."
      />

      <ContentContainer className="-top-6">
        {quizes.map((quiz, index) => {
          return (
            <div
              className={`relative ${step === index + 1 ? "block" : "hidden"}`}
            >
              <img src={quiz.image} />

              <div
                className="absolute"
                style={{
                  left: quiz.position.x,
                  top: quiz.position.y,
                }}
              >
                <textarea
                  className={`w-[450px] mt-5 bg-transparent resize-none text-center leading-tight tracking-tight break-keep ${
                    showAnswer ? "text-example" : ""
                  }`}
                  style={{ fontSize: quiz.fontSize + "px" }}
                  value={showAnswer ? quiz.answer : value}
                  onChange={(e) => setValue(e.currentTarget.value)}
                  rows={quiz.rows}
                />
              </div>
            </div>
          );
        })}
      </ContentContainer>

      <StepContainer step={step} maxStep={5} onStepChange={setStep} />

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      <img src={BACKGROUND.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
