"use client";

import { StrengthenLearningWordHeader } from "@/app/components/headers/strengthen-learning-word-header";
import IMAGE1_BEFORE from "./image1-before.png";
import IMAGE1_AFTER from "./image1-after.png";
import IMAGE2 from "./image2.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useState } from "react";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { InputWithPen } from "@/app/components/input-with-pen";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { SOUND } from "@/app/utils/sound-player";

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>
      <StrengthenLearningWordHeader
        title={
          <div>
            <span className="border border-black rounded-lg inline">보기</span>{" "}
            의 한자를 활용하여 다음 글의 밑줄 친 부분을 한자로 쓰고,
            <br />그 뜻도 써 보자.
          </div>
        }
        sound=""
      />

      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
    </>
  );
}

const Step1 = () => {
  const answers = ["쉬는 날.", "산과 숲.", "넓고 큰 바다."];
  const [showAnswer, setShowAnswer] = useState(false);

  const sounds = [
    "/sound/2/40_011.mp3",
    "/sound/2/40_012.mp3",
    "/sound/2/40_013.mp3",
    "/sound/2/40_014.mp3",
    "/sound/2/40_001.mp3",
    "/sound/2/40_015.mp3",
  ];

  return (
    <>
      <ContentContainer className="!justify-start">
        <div className="relative">
          {showAnswer ? (
            <img src={IMAGE1_AFTER.src} />
          ) : (
            <img src={IMAGE1_BEFORE.src} />
          )}

          <div className="absolute left-[350px] top-[210px] grid grid-cols-6 gap-[55px]">
            {sounds.map((sound) => (
              <button
                key={sound}
                className="w-20 h-20"
                onClick={() => SOUND(sound).play()}
              />
            ))}
          </div>

          <InputWithPen
            answer={answers[0]}
            showAnswer={showAnswer}
            className="text-center w-[320px] bg-transparent"
            containerClassName="absolute bottom-[0px] left-[60px]"
          />
          <InputWithPen
            answer={answers[1]}
            showAnswer={showAnswer}
            className="text-center w-[320px] bg-transparent"
            containerClassName="absolute bottom-[0px] left-[550px]"
          />
          <InputWithPen
            answer={answers[2]}
            showAnswer={showAnswer}
            className="text-center w-[320px] bg-transparent"
            containerClassName="absolute bottom-[0px] left-[1030px]"
          />
        </div>
      </ContentContainer>

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
};

const Step2 = () => {
  const answers = ["쉬는", "바다", "서양"];
  const [showAnswer, setShowAnswer] = useState(false);

  const sounds = [
    "/sound/2/40_016.mp3",
    "/sound/2/40_017.mp3",
    "/sound/2/40_018.mp3",
  ];

  return (
    <>
      <ContentContainer className="!justify-start">
        <div className="relative mt-10">
          <img src={IMAGE2.src} />

          <div className="absolute left-[50px] top-[0px] grid grid-cols-6 gap-[500px]">
            {sounds.map((sound) => (
              <button
                key={sound}
                className="w-[400px] h-[150px]"
                onClick={() => SOUND(sound).play()}
              />
            ))}
          </div>

          <InputWithPen
            answer={answers[0]}
            showAnswer={showAnswer}
            className="text-center w-[150px] bg-transparent"
            penClassName="left-1/2 -translate-x-1/2 h-[45px]"
            containerClassName="absolute bottom-[35px] left-[70px]"
          />
          <InputWithPen
            answer={answers[1]}
            showAnswer={showAnswer}
            className="text-center w-[170px] bg-transparent"
            penClassName="left-1/2 -translate-x-1/2 h-[45px]"
            containerClassName="absolute -bottom-[10px] left-[645px]"
          />
          <InputWithPen
            answer={answers[2]}
            showAnswer={showAnswer}
            className="text-center w-[150px] bg-transparent"
            penClassName="left-1/2 -translate-x-1/2 h-[45px]"
            containerClassName="absolute bottom-[95px] left-[1130px]"
          />
        </div>
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
};
