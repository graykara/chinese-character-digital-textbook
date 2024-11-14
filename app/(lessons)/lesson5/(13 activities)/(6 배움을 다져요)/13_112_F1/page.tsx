"use client";

import { StrengthenLearningMainContentHeader } from "@/app/components/headers/strengthen-learning-main-content-header";
import { useContext, useState } from "react";
import IMAGE1 from "./bg_1.png";
import IMAGE2 from "./bg_2.png";
import CHECK from "./check.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { InputWithPen } from "@/app/components/input-with-pen";
import { TextareaWithPen } from "@/app/components/textarea/textarea-with-pen";
import { WritingButton } from "@/app/components/buttons/writing-button";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/13/중등한문_귀에 대고 말한 까닭19.png";
import BACKGROUND2 from "@/app/bgpng_temp/13/중등한문_귀에 대고 말한 까닭20.png";
import { clickSound } from "@/app/utils/click-sound";
import { PageInfoContext } from "@/app/utils/page-info";
import { Button } from "@/app/components/buttons/button";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  return (
    <>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      <StepContainer maxStep={2} />
    </>
  );
}

const Step1 = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const answer1 = "누런 소가 더 일을 잘합니다";
  const answer2 =
    "누런 소가 나으면 저 소가 못한 것이 되는데 아무리 가축이라도 이 말을 듣게 되면 불평하는 마음이 생길 것 같아 그랬습니다";

  return (
    <>
      <StrengthenLearningMainContentHeader
        title={
          <p className="-mr-20">
            본문 내용을 참고하여 황희와 농부의 이야기를 대본으로 완성해 보자.
          </p>
        }
        sound="/sound/5/112-i-1.mp3"
      />
      <WritingButton
        className="animate__animated animate__fadeIn animate__delay-1s absolute top-[135px] left-[1565px] flex items-center gap-5" />

      <ContentContainer className="!justify-start -top-[90px] left-7">
        <img src={IMAGE1.src} />
        <InputWithPen
          answer={answer1}
          showAnswer={showAnswer}
          className={`w-[600px] bg-transparent text-[40px]  tracking-tight ${showAnswer ? "text-example" : ""}`}
          penClassName="-left-3 -mt-2 w-[52px]"
          containerClassName="absolute top-[215px] left-[730px] mt-1 ml-1"
        />
        <TextareaWithPen
          answer={answer2}
          showAnswer={showAnswer}
          containerClassName={`absolute resize-none w-[920px] left-[365px] top-[428px] pt-1 ml-5 text-[40px] tracking-tighter break-keep leading-[53px] bg-transparent ${showAnswer ? "text-example tracking-tighter break-keep" : ""}`}
          penClassName="h-[52px] top-[422px] left-[367px]"
          rows={2}
        />
      </ContentContainer>

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
};

const Step2 = () => {
  const [group1, setGroup1] = useState([false, false, false]);
  const [group2, setGroup2] = useState([false, false, false]);
  const [group3, setGroup3] = useState([false, false, false]);

  const handleClick = (group, setGroup, index) => {
    clickSound.play();
    setGroup(group.map((_, i) => i === index));
  }

  return (
    <>
      <StrengthenLearningMainContentHeader
        title={
          <p className="-mr-20">
            ‘나의 언어생활 점검표’를 작성하여 자신의 언어생활을 돌아보자.
          </p>
        }
        sound="/sound/5/112-i-2.mp3"
      />
      <ContentContainer className="!justify-start -top-[50px] left-9">
        <img src={IMAGE2.src} />
        <div className="absolute top-[57px] right-[53px] w-[810px] h-[83px] grid grid-cols-3">
          <Button
            className="w-[270px] justify-items-center"
            onClick={() => handleClick(group1, setGroup1, 0)}
          >
            <img src={group1[0] ? CHECK.src : ""} />
          </Button>
          <Button
            className="w-[270px] justify-items-center"
            onClick={() => handleClick(group1, setGroup1, 1)}
          >
            <img src={group1[1] ? CHECK.src : ""} />
          </Button>
          <Button
            className="w-[270px] justify-items-center"
            onClick={() => handleClick(group1, setGroup1, 2)}
          >
            <img src={group1[2] ? CHECK.src : ""} />
          </Button>

        </div>
        <div className="absolute top-[140px] right-[53px] w-[810px] h-[83px] grid grid-cols-3">
          <Button
            className="w-[270px] justify-items-center"
            onClick={() => handleClick(group2, setGroup2, 0)}
          >
            <img src={group2[0] ? CHECK.src : ""} />
          </Button>
          <Button
            className="w-[270px] justify-items-center"
            onClick={() => handleClick(group2, setGroup2, 1)}
          >
            <img src={group2[1] ? CHECK.src : ""} />
          </Button>
          <Button
            className="w-[270px] justify-items-center"
            onClick={() => handleClick(group2, setGroup2, 2)}
          >
            <img src={group2[2] ? CHECK.src : ""} />
          </Button>
        </div>
        <div className="absolute top-[223px] right-[53px] w-[810px] h-[83px] grid grid-cols-3">
        <Button
            className="w-[270px] justify-items-center"
            onClick={() => handleClick(group3, setGroup3, 0)}
          >
            <img src={group3[0] ? CHECK.src : ""} />
          </Button>
          <Button
            className="w-[270px] justify-items-center"
            onClick={() => handleClick(group3, setGroup3, 1)}
          >
            <img src={group3[1] ? CHECK.src : ""} />
          </Button>
          <Button
            className="w-[270px] justify-items-center"
            onClick={() => handleClick(group3, setGroup3, 2)}
          >
            <img src={group3[2] ? CHECK.src : ""} />
          </Button>
        </div>
      </ContentContainer >
      <img
        src={BACKGROUND2.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
};
