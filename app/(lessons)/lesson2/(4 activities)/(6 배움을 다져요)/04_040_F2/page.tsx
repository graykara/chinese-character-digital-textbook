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
import BACKGROUND1 from "@/app/bgpng_temp/4/중등한문_합쳐서 만든 한자21.png";
import BACKGROUND2 from "@/app/bgpng_temp/4/중등한문_합쳐서 만든 한자22.png";

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
    </>
  );
}

const Step1 = () => {
  const answers = ["쉬는 날.", "산과 숲.", "넓고 큰 바다."];
  const [showAnswer, setShowAnswer] = useState(false);

  const sounds = ["010", "011", "012", "013", "000", "014"].map(
    (sound) => `/sound/2/p040_word${sound}.mp3`,
  );

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
        sound="2/40-i-2.mp3"
      />

      <ContentContainer className="!justify-start left-14 -top-7">
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
            className="text-center w-[320px] mt-4 bg-transparent"
            penClassName="left-7 -translate-x-1/2 h-[55px]"
            containerClassName="absolute -bottom-3 left-[65px] text-[50px]"
          />
          <InputWithPen
            answer={answers[1]}
            showAnswer={showAnswer}
            className="text-center w-[320px] mt-4 bg-transparent"
            penClassName="left-7 -translate-x-1/2 h-[55px]"
            containerClassName="absolute -bottom-3 left-[570px] text-[50px]"
          />
          <InputWithPen
            answer={answers[2]}
            showAnswer={showAnswer}
            className="text-center w-[320px] mt-4 bg-transparent"
            penClassName="left-7 -translate-x-1/2 h-[55px]"
            containerClassName="absolute -bottom-3 left-[1070px] text-[50px]"
          />
        </div>
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      {/* <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
};

const Step2 = () => {
  const answers = ["쉬는", "바다", "서양"];
  const [showAnswer, setShowAnswer] = useState(false);

  const sounds = ["015", "016", "017"].map(
    (sound) => `/sound/2/p040_word${sound}.mp3`,
  );

  return (
    <>
      <StrengthenLearningWordHeader
        title={
          <div>
            밑줄 친 한자의 뜻을 활용하여 자연스러운 풀이가 되도록 빈칸을 채워
            보자.
          </div>
        }
        sound="2/40-i-3.mp3"
      />

      <ContentContainer className="!justify-start left-12 top-6">
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
            penClassName="left-8 -translate-x-1/2 h-[42px] top-[30px]"
            containerClassName="absolute bottom-[40px] left-[75px]"
          />
          <InputWithPen
            answer={answers[1]}
            showAnswer={showAnswer}
            className="text-center w-[170px] bg-transparent"
            penClassName="left-8 -translate-x-1/2 h-[42px] top-[30px]"
            containerClassName="absolute -bottom-[15px] left-[655px]"
          />
          <InputWithPen
            answer={answers[2]}
            showAnswer={showAnswer}
            className="text-center w-[150px] bg-transparent"
            penClassName="left-6 -translate-x-1/2 h-[42px] top-[30px]"
            containerClassName="absolute bottom-[95px] left-[1155px]"
          />
        </div>
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      {/* <img src={BACKGROUND2.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
};
