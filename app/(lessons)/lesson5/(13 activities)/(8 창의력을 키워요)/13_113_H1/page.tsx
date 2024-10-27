"use client";

import IMAGE from "./bg_6.png";
import IMAGE1 from "./bg_5.png";
import IMAGE2 from "./bg_2.png";
import IMAGE_BUTTON from "./button.png";
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

  return (
    <>
      <CreativityPageTemplate>
        <CreativityTitleHeader
          title="말과 관련된 속담으로 짧은 영상 만들기"
          containerClassName="-mt-5"
        />
        {/* <TitleContainer
          className="ml-[85px] mt-6"
          sound="">
          <div className="flex items-center gap-1 text-[45px] tracking-[-2px] -ml-[70px] -mr-20">
            내가 시간과 노력을 들여서 이루고 싶은 것을 생각해 보고 구체적인 계획을 쓰고 발표해 보자.
          </div>
        </TitleContainer> */}
        {/* <div className="relative left-[120px] top-[105px]">
          <img src={IMAGE1.src} />
        </div> */}
        <div className="relative left-[150px] top-[40px]">
          <img src={IMAGE.src} />
        </div>
      </CreativityPageTemplate>

      <GroupButton className="animate__animated animate__fadeIn animate__delay-2s absolute right-[80px] top-[664px] z-1" />

      <InputWithPen
        answer={answers1[0]}
        showAnswer={showAnswer}
        className="text-[45px] text-center w-[720px] bg-transparent"
        penClassName="left-0 w-[60px] top-[35px]"
        containerClassName="absolute top-[172px] left-[280px]"
        isExample
      />
      <InputWithPen
        answer={answers1[1]}
        showAnswer={showAnswer}
        className="text-[45px] text-center w-[720px] bg-transparent"
        penClassName="left-0 w-[60px] top-[35px]"
        containerClassName="absolute top-[317px] left-[280px]"
        isExample
      />

      <div className="absolute w-[930px] grid grid-cols-4 gap-[60px] left-[580px] bottom-[93px]">
        <img src={IMAGE_BUTTON.src} className="w-[187px] h-[100px]" />
        <img src={IMAGE_BUTTON.src} className="w-[187px] h-[100px]" />
        <img src={IMAGE_BUTTON.src} className="w-[187px] h-[100px]" />
        <img src={IMAGE_BUTTON.src} className="w-[187px] h-[100px]" />
      </div>

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
