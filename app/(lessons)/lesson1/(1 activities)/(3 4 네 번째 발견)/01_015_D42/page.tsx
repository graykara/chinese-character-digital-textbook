"use client";

import { ExerciseHeader2 } from "@/app/components/exercise-header";
import { Header } from "../assets/header";
import { StepContainer } from "@/app/components/step-container";
import { useState } from "react";
import { ContentContainer } from "@/app/components/content-container";
import { TextareaWithPen } from "@/app/components/textarea/textarea-with-pen";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import IMAGE3 from "./image3.png";
import IMAGE4 from "./image4.png";
import IMAGE5 from "./image5.png";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/1/중등한문_한자,어디서봤어22.png";
import BACKGROUND2 from "@/app/bgpng_temp/1/중등한문_한자,어디서봤어23.png";
import BACKGROUND3 from "@/app/bgpng_temp/1/중등한문_한자,어디서봤어24.png";
import BACKGROUND4 from "@/app/bgpng_temp/1/중등한문_한자,어디서봤어25.png";
import BACKGROUND5 from "@/app/bgpng_temp/1/중등한문_한자,어디서봤어26.png";

export default function Page() {
  const [step, setStep] = useState(1);

  const quizes = [
    {
      image: IMAGE1.src,
      fontSize: 40,
      answer:
        "여기는 일본이야. 저기 표지판을 봐!\n출구 전용은 '나가는 길로만 씀.'이라는 뜻이야.",
      position: { x: 640, y: 30 },
      rows: 4,
    },
    {
      image: IMAGE2.src,
      fontSize: 50,
      answer: "입구는\n‘들어가는 길.’\n이라는 뜻이야.",
      position: { x: 640, y: 30 },
      rows: 3,
    },
    {
      image: IMAGE3.src,
      fontSize: 40,
      answer:
        "나는 지금 일본의\n어느 신호등 앞에 서 있어.\n‘보행자 전용’은 ‘걸어 다니는 사람만 다니는 길’이고,",
      position: { x: 820, y: 30 },
      rows: 4,
    },
    {
      image: IMAGE3.src,
      fontSize: 50,
      answer: "'자전거 전용'은 ‘자전거만 다니는 길’이야.",
      position: { x: 820, y: 40 },
      rows: 4,
    },
    {
      image: IMAGE4.src,
      fontSize: 40,
      answer:
        "여기는 중국의 거리야.\n저기 보이는 한자는 '열구'라고 읽는데 '핫도그'라는 뜻이야.",
      position: { x: 820, y: 30 },
      rows: 4,
    },

    {
      image: IMAGE5.src,
      fontSize: 40,
      answer:
        "지금 여기 중국에는 방금 비가 내렸다가 그쳤어.\n그래서 '소심지활' 즉 '바닥이 미끄러우니 조심하세요'라는 뜻의 표지판이 보이네.",
      position: { x: 640, y: 30 },
      rows: 4,
    },
  ];

  const [value, setValue] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <Header />

      <ExerciseHeader2
        text="한자 문화권 나라의 길거리를 담은 사진이다. 각 사진 속의 한자가 무엇을 뜻하는지 알아 보자."
        sound="/sound/1/15-i2.mp3"
      />

      <ContentContainer className="-top-6 left-20">
        {quizes.map((quiz, index) => {
          return (
            <div
              key={index}
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
                <TextareaWithPen
                  answer={showAnswer ? quiz.answer : value}
                  showAnswer={showAnswer}
                  containerClassName={`w-[450px] mt-5 bg-transparent resize-none text-center leading-tight tracking-tight break-keep ${showAnswer ? "text-example" : ""}`}
                  penClassName="h-[55px] top-[27px] left-[60px]"
                  rows={quiz.rows}
                  style={{ fontSize: quiz.fontSize + "px" }}
                />
              </div>
            </div>
          );
        })}
      </ContentContainer>

      <StepContainer step={step} maxStep={6} onStepChange={setStep} />

      <ExampleAnswerButton
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
                  : step === 5
                    ? BACKGROUND5.src
                    : ""
        }
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
