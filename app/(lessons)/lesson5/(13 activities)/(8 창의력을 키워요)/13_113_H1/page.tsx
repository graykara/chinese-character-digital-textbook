"use client";

import IMAGE from "./bg_6.png";
import IMAGE1 from "./bg_5.png";
import IMAGE2 from "./bg_2.png";
import { useEffect, useState } from "react";
import { CreativityPageTemplate } from "@/app/pages/creativity-page-template";
import { CreativityTitleHeader } from "@/app/components/headers/creativity-title-header";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { InputWithPen } from "@/app/components/input-with-pen";
import { TitleContainer } from "@/app/components/title-container";
import { StepContainer } from "@/app/components/step-container";
import BACKGROUND1 from "@/app/bgpng_temp/13/중등한문_귀에 대고 말한 까닭24.png";
import { GroupButton } from "@/app/components/buttons/group-button";

export default function Page() {
  const answers1 = [
    "낮말은 새가 듣고 밤말은 쥐가 듣는다.",
    "일아무도 안 듣는데서라도 말조심을 해야한다.",
  ];
  const answers2 = [
    "스토리보드 작성하기.",
    "필요한 역할 분담하기.",
    "각 장면을 내용에 맞게 촬영하기.",
    "영상 완성하여 발표하기.",
  ];
  const [showAnswer, setShowAnswer] = useState(false);
  // const [step, setStep] = useState(1);

  // useEffect(() => {
  //   setShowAnswer(false);
  // }, [step]);

  return (
    <>
      <CreativityPageTemplate>
        <header className="relative width-[1000px] left-[450px] -top-5 text-[50px]">
          <CreativityTitleHeader title="말과 관련된 속담으로 짧은 영상 만들기"></CreativityTitleHeader>
        </header>
      </CreativityPageTemplate>

      <GroupButton className="animate__animated animate__fadeIn animate__delay-2s absolute right-[100px] top-[664px] z-1" />

      {/* <StepContainer maxStep={2} step={step} onStepChange={setStep} /> */}

      <TitleContainer className="ml-4 mt-4">
        <div className="flex items-center gap-4">
          <img src="/ui/flower-icon-2.png" />
          다음 단어의 뜻을 조사하고 차이점을 발표해 보자.
        </div>
      </TitleContainer>

      <div className="absolute  ">
        <img src={IMAGE.src} />
      </div>

      <InputWithPen
        answer={answers1[0]}
        showAnswer={showAnswer}
        className="text-example text-[50px] text-center w-[720px] bg-transparent"
        penClassName="left-0 w-[60px] top-[35px]"
        containerClassName="absolute top-[172px] left-[280px]"
      />
      <InputWithPen
        answer={answers1[1]}
        showAnswer={showAnswer}
        className="text-example ext-[50px] text-center w-[720px] bg-transparent"
        penClassName="left-0 w-[60px] top-[35px]"
        containerClassName="absolute top-[317px] left-[280px]"
      />
      <InputWithPen
        answer={answers2[2]}
        showAnswer={showAnswer}
        className="text-example text-[50px] text-center w-[720px] bg-transparent"
        penClassName="left-0 w-[60px] top-[35px]"
        containerClassName="absolute top-[463px] left-[280px]"
      />
      <InputWithPen
        answer={answers2[3]}
        showAnswer={showAnswer}
        className="text-example text-[50px] text-center w-[720px] bg-transparent"
        penClassName="left-0 w-[60px] top-[35px]"
        containerClassName="absolute top-[608px] left-[280px]"
      />

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />

      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
