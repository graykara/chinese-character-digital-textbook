"use client";

import { StrengthenLearningMainContentHeader } from "@/app/components/headers/strengthen-learning-main-content-header";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import { InputWithPen } from "@/app/components/input-with-pen";
import { TextareaWithPen } from "@/app/components/textarea/textarea-with-pen";
import { ContentContainer } from "@/app/components/content-container";
import { SOUND } from "@/app/utils/sound-player";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { useEffect, useState } from "react";
import { StepContainer } from "@/app/components/step-container";
import BACKGROUND1 from "@/app/bgpng_temp/11/중등한문_너와 나, 우리26.png";
import BACKGROUND2 from "@/app/bgpng_temp/11/중등한문_너와 나, 우리27.png";

export default function Page() {
  const [step, setStep] = useState(1);
  const answers1 = ["1", "2", "3", "4", "5", "6", "#내가 먼저 존중하기"];
  const answers2 = ["1", "4", "3", "2", "8", "7", "6", "5", "#입장 바꿔 생각하기\n#존중과 이해"];
  const [showAnswer, setShowAnswer] = useState(false);
  const [value, setValue] = useState("");
  useEffect(() => {
    setShowAnswer(false);
  }, [step]);

  return (
    <>
      <StrengthenLearningMainContentHeader
        title={
          <>
            <p className="tracking-tighter -mr-10">문장의 풀이 순서를 빈칸에 숫자로 써 보고, 문장을 보고 느낀 점이나 스스로 다짐하는 말에 #기호를 붙여 정리해 보자.</p>
          </>
        }
        sound="/sound/4/94-i-1.mp3"
      />

      <ContentContainer className="!justify-start -top-4">
        {step === 1 && (
          <div>
            <img src={IMAGE1.src} />
            <InputWithPen
              answer={answers1[0]}
              showAnswer={showAnswer}
              className="text-answer text-[50px] text-center w-[68px] bg-transparent"
              penClassName="left-12 -translate-x-1/2 w-[40px] -mt-1 -ml-3"
              containerClassName="absolute left-[500px] top-[50px] mt-1 pl-5"
            />
            <InputWithPen
              answer={answers1[1]}
              showAnswer={showAnswer}
              className="text-answer text-[50px] text-center w-[68px] bg-transparent"
              penClassName="left-12 -translate-x-1/2 w-[40px] -mt-1 -ml-3"
              containerClassName="absolute left-[582px] top-[50px] mt-1 pl-5"
            />
            <InputWithPen
              answer={answers1[2]}
              showAnswer={showAnswer}
              className="text-answer text-[50px] text-center w-[68px] bg-transparent"
              penClassName="left-12 -translate-x-1/2 w-[40px] -mt-1 -ml-3"
              containerClassName="absolute left-[664px] top-[50px] mt-1 pl-5"
            />
            <InputWithPen
              answer={answers1[3]}
              showAnswer={showAnswer}
              className="text-answer text-[50px] text-center w-[68px] bg-transparent"
              penClassName="left-12 -translate-x-1/2 w-[40px] -mt-1 -ml-3"
              containerClassName="absolute left-[796px] top-[50px] mt-1 pl-5"
            />
            <InputWithPen
              answer={answers1[4]}
              showAnswer={showAnswer}
              className="text-answer text-[50px] text-center w-[68px] bg-transparent"
              penClassName="left-12 -translate-x-1/2 w-[40px] -mt-1 -ml-3"
              containerClassName="absolute left-[879px] top-[50px] mt-1 pl-5"
            />
            <InputWithPen
              answer={answers1[5]}
              showAnswer={showAnswer}
              className="text-answer text-[50px] text-center w-[68px] bg-transparent"
              penClassName="left-12 -translate-x-1/2 w-[40px] -mt-1 -ml-3"
              containerClassName="absolute left-[961px] top-[50px] mt-1 pl-5"
            />
            <InputWithPen
              answer={answers1[6]}
              showAnswer={showAnswer}
              className="text-answer text-[45px] w-[468px] bg-transparent"
              penClassName="left-12 -translate-x-1/2 w-[40px] -mt-1 -ml-5"
              containerClassName="absolute left-[630px] top-[315px] mt-1 pl-5"
            />
          </div>
        )}
        {step === 2 && (
          <div>
            <img src={IMAGE2.src} />
            <InputWithPen
              answer={answers2[0]}
              showAnswer={showAnswer}
              className="text-answer text-[50px] text-center w-[68px] bg-transparent"
              penClassName="left-12 -translate-x-1/2 w-[40px] -mt-1 -ml-3"
              containerClassName="absolute left-[418px] top-[50px] mt-1 pl-5"
            />
            <InputWithPen
              answer={answers2[1]}
              showAnswer={showAnswer}
              className="text-answer text-[50px] text-center w-[68px] bg-transparent"
              penClassName="left-12 -translate-x-1/2 w-[40px] -mt-1 -ml-3"
              containerClassName="absolute left-[500px] top-[50px] mt-1 pl-5"
            />
            <InputWithPen
              answer={answers2[2]}
              showAnswer={showAnswer}
              className="text-answer text-[50px] text-center w-[68px] bg-transparent"
              penClassName="left-12 -translate-x-1/2 w-[40px] -mt-1 -ml-3"
              containerClassName="absolute left-[582px] top-[50px] mt-1 pl-5"
            />
            <InputWithPen
              answer={answers2[3]}
              showAnswer={showAnswer}
              className="text-answer text-[50px] text-center w-[68px] bg-transparent"
              penClassName="left-12 -translate-x-1/2 w-[40px] -mt-1 -ml-3"
              containerClassName="absolute left-[664px] top-[50px] mt-1 pl-5"
            />
            <InputWithPen
              answer={answers2[4]}
              showAnswer={showAnswer}
              className="text-answer text-[50px] text-center w-[68px] bg-transparent"
              penClassName="left-12 -translate-x-1/2 w-[40px] -mt-1 -ml-3"
              containerClassName="absolute left-[796px] top-[50px] mt-1 pl-5"
            />
            <InputWithPen
              answer={answers2[5]}
              showAnswer={showAnswer}
              className="text-answer text-[50px] text-center w-[68px] bg-transparent"
              penClassName="left-12 -translate-x-1/2 w-[40px] -mt-1 -ml-3"
              containerClassName="absolute left-[879px] top-[50px] mt-1 pl-5"
            />
            <InputWithPen
              answer={answers2[6]}
              showAnswer={showAnswer}
              className="text-answer text-[50px] text-center w-[68px] bg-transparent"
              penClassName="left-12 -translate-x-1/2 w-[40px] -mt-1 -ml-3"
              containerClassName="absolute left-[961px] top-[50px] mt-1 pl-5"
            />
            <InputWithPen
              answer={answers2[7]}
              showAnswer={showAnswer}
              className="text-answer text-[50px] text-center w-[68px] bg-transparent"
              penClassName="left-12 -translate-x-1/2 w-[40px] -mt-1 -ml-3"
              containerClassName="absolute left-[1044px] top-[50px] mt-1 pl-5"
            />

            <TextareaWithPen
              answer={answers2[8]}
              showAnswer={showAnswer}
              containerClassName={`absolute resize-none w-[465px] left-[720px] top-[275px] pt-1 ml-3 text-[40px] leading-[50px]  bg-transparent ${showAnswer ? "text-answer" : ""}`}
              penClassName="h-[40px] top-[330px] left-[720px]"
              rows={2}
            />

          </div>
        )}
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
      <img src={step === 1 ? BACKGROUND1.src : BACKGROUND2.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
