"use client";

import { StrengthenLearningMainContentHeader } from "@/app/components/headers/strengthen-learning-main-content-header";
import { useEffect, useState } from "react";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import IMAGE3 from "./image3.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { InputWithPen } from "@/app/components/input-with-pen";
import { Check } from "lucide-react";
import { Howl } from "howler";
import BACKGROUND1 from "@/app/bgpng_temp/3/중등한문_그려서 만든 한자29.png";
import BACKGROUND2 from "@/app/bgpng_temp/3/중등한문_그려서 만든 한자30.png";
import BACKGROUND3 from "@/app/bgpng_temp/3/중등한문_그려서 만든 한자31.png";

export default function Page() {
  const [step, setStep] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(false);
  }, [step]);

  return (
    <>
      {step === 1 && <Step1 key={1} />}
      {step === 2 && <Step2 key={2} />}
      {step === 3 && <Step3 key={3} />}

      <StepContainer maxStep={3} step={step} onStepChange={setStep} />
    </>
  );
}

const Step1 = () => {
  const answers = ["日", "月", "火", "木"];
  const sounds = [
    "/sound/2/32_001.mp3",
    "/sound/2/32_002.mp3",
    "/sound/2/32_003.mp3",
    "/sound/2/32_004.mp3",
    "/sound/2/32_005.mp3",
    "/sound/2/32_006.mp3",
    "/sound/2/32_007.mp3",
  ];
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <StrengthenLearningMainContentHeader
        title="달력의 빈칸에 들어갈 요일을 한자로 써 보자."
        sound=""
      />

      <ContentContainer className="!justify-start">
        <div className="relative mt-10">
          <img src={IMAGE1.src} />

          <InputWithPen
            answer={answers[0]}
            showAnswer={showAnswer}
            className="font-haeseo text-[80px] text-center w-[100px] bg-transparent"
            penClassName="left-1/2 -translate-x-1/2"
            containerClassName="absolute top-[80px] left-[45px]"
          />
          <InputWithPen
            answer={answers[1]}
            showAnswer={showAnswer}
            className="font-haeseo text-[80px] text-center w-[100px] bg-transparent"
            penClassName="left-1/2 -translate-x-1/2"
            containerClassName="absolute top-[80px] left-[245px]"
          />
          <InputWithPen
            answer={answers[2]}
            showAnswer={showAnswer}
            className="font-haeseo text-[80px] text-center w-[100px] bg-transparent"
            penClassName="left-1/2 -translate-x-1/2"
            containerClassName="absolute top-[80px] left-[440px]"
          />
          <InputWithPen
            answer={answers[3]}
            showAnswer={showAnswer}
            className="font-haeseo text-[80px] text-center w-[100px] bg-transparent"
            penClassName="left-1/2 -translate-x-1/2"
            containerClassName="absolute top-[80px] left-[825px]"
          />

          {showAnswer ? (
            <div className="absolute left-0 bottom-0 grid grid-cols-7">
              {sounds.map((sound) => (
                <button
                  key={sound}
                  className="w-[200px] h-[150px]"
                  onClick={() =>
                    new Howl({
                      src: sound,
                    }).play()
                  }
                />
              ))}
            </div>
          ) : null}
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
  const answers = ["7", "12", "七", "十二"];
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <StrengthenLearningMainContentHeader
        title="자신의 생일을 숫자로 적고, 옆에 한자로 써 보자."
        sound=""
      />

      <ContentContainer className="!justify-start">
        <div className="relative -left-[40px]">
          <img src={IMAGE2.src} />

          <InputWithPen
            answer={answers[0]}
            showAnswer={showAnswer}
            className="text-[55px] text-center w-[100px] bg-transparent"
            penClassName="left-1/2 -translate-x-1/2"
            containerClassName="absolute top-[30px] left-[440px]"
          />
          <InputWithPen
            answer={answers[1]}
            showAnswer={showAnswer}
            className="text-[55px] text-center w-[100px] bg-transparent"
            penClassName="left-1/2 -translate-x-1/2"
            containerClassName="absolute top-[30px] left-[635px]"
          />
          <InputWithPen
            answer={answers[2]}
            showAnswer={showAnswer}
            className="font-haeseo text-[65px] text-center w-[100px] bg-transparent"
            penClassName="left-1/2 -translate-x-1/2"
            containerClassName="absolute bottom-[50px] left-[315px]"
          />
          <InputWithPen
            answer={answers[3]}
            showAnswer={showAnswer}
            className="font-haeseo text-[65px] text-center w-[120px] bg-transparent"
            penClassName="left-1/2 -translate-x-1/2"
            containerClassName="absolute bottom-[50px] left-[492px]"
          />
        </div>
      </ContentContainer>

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      {/* <img src={BACKGROUND2.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
};

const Step3 = () => {
  const answer = [3, 4, 6, 8];
  const [showAnswer, setShowAnswer] = useState(false);
  const [selected, setSelected] = useState<number[]>([]);

  useEffect(() => {
    if (showAnswer) setSelected(answer);
    else setSelected([]);
  }, [showAnswer]);

  return (
    <>
      <StrengthenLearningMainContentHeader
        title={
          <>
            제시된 한자 옆에 나열된 단어의 뜻을 생각해 보고, 해당 한자가
            <br />
            사용된 단어를 모두 골라 보자.
          </>
        }
        sound=""
      />

      <ContentContainer className="!justify-start">
        <div className="relative mt-1">
          <img src={IMAGE3.src} />

          <div className="absolute left-[390px] top-[65px] grid grid-cols-[293px__295px__310px__48px] gap-y-[110px]">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((v) => (
              <div key={v} className={`relative w-12 h-12`}>
                <button
                  className="w-12 h-12"
                  onClick={() =>
                    selected.includes(v)
                      ? setSelected(selected.filter((value) => value !== v))
                      : setSelected(selected.concat(v))
                  }
                  disabled={v === 1 || showAnswer}
                />
                {selected.includes(v) ? (
                  <Check
                    color={showAnswer ? "red" : "blue"}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    size={48}
                    strokeWidth={4}
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      {/* <img src={BACKGROUND3.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
};
