"use client";

import { ExerciseHeader } from "@/app/components/exercise-header";
import { Header } from "../components/header";
import { StepContainer } from "@/app/components/step-container";
import { useEffect, useState } from "react";
import { ContentContainer } from "@/app/components/content-container";

import IMAGE1 from "./assets/image1.png";
import IMAGE2 from "./assets/image2.png";
import IMAGE3 from "./assets/image3.png";
import IMAGE4 from "./assets/image4.png";
import IMAGE5 from "./assets/image5.png";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";

export default function Page16_1() {
  const [step, setStep] = useState(1);

  const quizes = [
    {
      image: IMAGE1.src,
      fontSize: 45,
      answer: "출구전용은\n‘나가는 길로만 씀.’\n이라는 뜻이야.",
      position: { x: 680, y: 50 },
      rows: 3,
    },
    {
      image: IMAGE2.src,
      fontSize: 45,
      answer: "입구는\n‘들어가는 길.’\n이라는 뜻이야.",
      position: { x: 680, y: 50 },
      rows: 3,
    },
    {
      image: IMAGE3.src,
      fontSize: 35,
      answer:
        "보행자전용은 ‘걸어\n다니는 사람만 다니는 길’이고,\n자전거 전용은 ‘자전거만\n다니는 길’ 이야. ",
      position: { x: 840, y: 50 },
      rows: 4,
    },
    {
      image: IMAGE4.src,
      fontSize: 45,
      answer: "열구는 ‘핫도그’\n라는 뜻이야.",
      position: { x: 840, y: 85 },
      rows: 2,
    },

    {
      image: IMAGE5.src,
      fontSize: 45,
      answer: "소심지활은 ‘바닥이\n미끄러우니 조심’\n하라는 뜻이야.",
      position: { x: 665, y: 50 },
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

      <ExerciseHeader text="한자 문화권 나라의 길거리를 담은 사진이다. 각 사진 속의 한자가 무엇을 뜻하는지 알아 보자." />

      <ContentContainer>
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
                  className={`w-[400px] bg-transparent resize-none text-center ${
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
    </>
  );
}
