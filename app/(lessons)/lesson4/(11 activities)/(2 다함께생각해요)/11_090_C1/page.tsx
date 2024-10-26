"use client";

import { ThinkTogetherHeader } from "@/app/components/headers/think-together";
import IMAGE from "./image.png";
import { ContentContainer } from "@/app/components/content-container";
import { useState } from "react";
import { InputWithPen } from "@/app/components/input-with-pen";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/11/중등한문_너와 나, 우리2.png";

export default function Page() {
  return (
    <>
      <ThinkTogetherHeader
        title={<p className="text-[55px] leading-[72px] tracking-tighter -mt-2 -ml-2 -mr-1">말풍선 속의 말을 긍정적이거나 칭찬하는 표현으로 바꾸어 빈칸에<br/>써 보자.</p>}
        sound=""
      />
      <Step1 />
    </>
  );
}

const Step1 = () => {
  const answers = ["융통성이 있는", "신중한, 겸손한", "솔직한", "활동적인", "의사 표현이 명확한"];
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ContentContainer className="-top-16 left-2">

        <div className="relative tracking-tighter">
          <img src={IMAGE.src} />
          <InputWithPen
            answer={answers[0]}
            showAnswer={showAnswer}
            className="text-[50px] text-center w-[500px] bg-transparent"
            penClassName="left-12 -translate-x-1/2 w-[55px] -mt-1 -ml-5"
            containerClassName="absolute left-[845px] top-[30px] mt-1 pl-5"
            isExample
          />
          <InputWithPen
            answer={answers[1]}
            showAnswer={showAnswer}
            className="text-[50px] text-center w-[500px] bg-transparent"
            penClassName="left-12 -translate-x-1/2 w-[55px] -mt-1 -ml-5"
            containerClassName="absolute left-[845px] top-[133px] mt-1 pl-5"
            isExample
          />
          <InputWithPen
            answer={answers[2]}
            showAnswer={showAnswer}
            className="text-[50px] text-center w-[500px] bg-transparent"
            penClassName="left-12 -translate-x-1/2 w-[55px] -mt-1 -ml-5"
            containerClassName="absolute left-[845px] top-[234px] mt-1 pl-5"
            isExample
          />
          <InputWithPen
            answer={answers[3]}
            showAnswer={showAnswer}
            className="text-[50px] text-center w-[500px] bg-transparent"
            penClassName="left-12 -translate-x-1/2 w-[55px] -mt-1 -ml-5"
            containerClassName="absolute left-[845px] top-[335px] mt-1 pl-5"
            isExample
          />
          <InputWithPen
            answer={answers[4]}
            showAnswer={showAnswer}
            className="text-[50px] text-center w-[500px] bg-transparent"
            penClassName="left-12 -translate-x-1/2 w-[55px] -mt-1 -ml-5"
            containerClassName="absolute left-[845px] top-[436px] mt-1 pl-5"
            isExample
          />
        </div>



      </ContentContainer>

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
};
