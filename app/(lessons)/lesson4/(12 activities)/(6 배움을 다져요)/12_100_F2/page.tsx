"use client";

import { StrengthenLearningWordHeader } from "@/app/components/headers/strengthen-learning-word-header";
import EXAMPLE from "./example.png";
import IMAGE1_BEFORE from "./image1-before.png";
import IMAGE1_AFTER from "./image1-after.png";
import IMAGE2_BEFORE from "./image2-before.png";
import IMAGE2_AFTER from "./image2-after.png";
import IMAGE3_BEFORE from "./image3-before.png";
import IMAGE3_AFTER from "./image3-after.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useEffect, useState } from "react";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { InputWithPen } from "@/app/components/input-with-pen";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘18.png";

export default function Page() {
  const [step, setStep] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(false);
  }, [step]);

  return (
    <>
      <StrengthenLearningWordHeader
        title={
          "한자 카드를 결합하여 아래의 설명에 해당하는 단어를 만들어 보자."
        }
        sound=""
      />

      <ContentContainer className="!justify-start">
        <img src={EXAMPLE.src} />
      </ContentContainer>

      <Content
        showAnswer={showAnswer}
        before={
          step === 1
            ? IMAGE1_BEFORE.src
            : step === 2
              ? IMAGE2_BEFORE.src
              : IMAGE3_BEFORE.src
        }
        after={
          step === 1
            ? IMAGE1_AFTER.src
            : step === 2
              ? IMAGE2_AFTER.src
              : IMAGE3_AFTER.src
        }
      />

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />

      <StepContainer maxStep={3} step={step} onStepChange={setStep} />
    </>
  );
}

const Content = ({
  before,
  after,
  showAnswer,
}: {
  before: string;
  after: string;
  showAnswer: boolean;
}) => {
  return (
    <>
      <ContentContainer className="!justify-start !items-start left-[250px]">
        <div className="relative">
          {showAnswer ? <img src={after} /> : <img src={before} />}
        </div>
      </ContentContainer>
      <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> 
    </>
  );
};
