"use client";

import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import IMAGE_Before from "./image_before.png";
import IMAGE_After from "./image_after.png";
import { CreativityPageTemplate } from "@/app/pages/creativity-page-template";
import { CreativityTitleHeader } from "@/app/components/headers/creativity-title-header";
import { TitleContainer } from "@/app/components/title-container";
import { ContentContainer } from "@/app/components/content-container";
import { useEffect, useState } from "react";
import { InputWithPen } from "@/app/components/input-with-pen";
import BACKGROUND2 from "@/app/bgpng_temp/3/중등한문_그려서 만든 한자37.png";
import { OLD_TextareaWithPen } from "@/app/components/textarea/textarea-with-pen";

export default function Page() {
  const answers = ["우", "폭우"];
  const [showAnswer, setShowAnswer] = useState(false);
  const [checked, setChecked] = useState(0);

  useEffect(() => {
    if (showAnswer) setChecked(2);
    else setChecked(0);
  }, [showAnswer]);

  return (
    <>
      <CreativityPageTemplate>
        <CreativityTitleHeader
          title="만들자! 나만의 창의 한자"
          containerClassName="-mt-5"
        />
        <TitleContainer className="-left-12 mt-2" sound="/sound/2/33-i.mp3">
          <div className="flex items-center gap-1 text-[50px] tracking-[-0.5px]">
            상형 또는 지사의 원리를 활용하여 나만의 한자를 만들고 발표해 보자.
          </div>
        </TitleContainer>

        <ContentContainer className="-left-16 top-0">
          <img src={showAnswer ? IMAGE_After.src : IMAGE_Before.src} />
        </ContentContainer>

        <button
          onClick={() => !showAnswer && setChecked(1)}
          className="absolute top-[695px] left-[1165px]"
        >
          <img
            src="/ui/blue-check-icon.png"
            className={checked !== 1 ? "opacity-0" : ""}
          />
        </button>
        <button
          onClick={() => !showAnswer && setChecked(2)}
          className="absolute top-[695px] left-[1290px]"
        >
          <img
            src="/ui/blue-check-icon.png"
            className={checked !== 2 ? "opacity-0" : ""}
          />
        </button>
      </CreativityPageTemplate>

      {/* 체크표시 기능 넣어주세요. */}

      <InputWithPen
        answer={answers[0]}
        showAnswer={showAnswer}
        className="text-[50px] text-center w-[100px] bg-transparent"
        penClassName="left-1/2 -translate-x-1/2 w-[60px] top-[30px]"
        containerClassName="absolute bottom-[70px] left-[500px]"
        isExample
      />
      <InputWithPen
        answer={answers[1]}
        showAnswer={showAnswer}
        className="text-[50px] text-center w-[100px] bg-transparent"
        penClassName="left-1/2 -translate-x-1/2 w-[60px] top-[30px]"
        containerClassName="absolute bottom-[70px] left-[675px]"
        isExample
      />

      <OLD_TextareaWithPen
        showAnswer={showAnswer}
        className="text-[40px] w-[550px] bg-transparent"
        penClassName="left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[50px]"
        containerClassName="!absolute bottom-[120px] left-[900px]"
        rows={3}
      />

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      <img
        src={BACKGROUND2.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
