"use client";

import BUTTON_IMAGE from "./button.png";
import { ContentContainer } from "@/app/components/content-container";
import { HeaderContainer } from "@/app/components/headers/header-container";
import { TitleContainer } from "@/app/components/title-container";
import { useEffect, useState } from "react";
import HOW_BADGE from "./how-badge.png";
import TASK_BADGE from "./task-badge.png";
import IMAGE2_BEFORE from "./image2_before.png";
import IMAGE2_AFTER from "./image2_after.png";
import IMAGE3 from "./image3.png";
import { StepContainer } from "@/app/components/step-container";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/7/중등한문_언어생활 속의 성어14.png";
import BACKGROUND2 from "@/app/bgpng_temp/7/중등한문_언어생활 속의 성어15.png";
import BACKGROUND3 from "@/app/bgpng_temp/7/중등한문_언어생활 속의 성어16.png";
import { clickSound } from "@/app/utils/click-sound";
import { SOUND } from "@/app/utils/sound-player";

export default function Page() {
  const [step, setStep] = useState(1);

  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(false);
  }, [step]);

  return (
    <>
      <HeaderContainer>
        <img src="/header/preview_chinese_characters.png" alt="" />
      </HeaderContainer>

      <TitleContainer className="mt-10" sound="/sound/3/61-i-1.mp3">
        <p className="flex items-start -mr-10 gap-5 tracking-tighter">
          <img src="/ui/flower-icon.png" />
          과제를 풀고 비밀번호의 마지막 숫자를 획득하여 방을 탈출해 보자.
        </p>
      </TitleContainer>

      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}

      <StepContainer maxStep={3} step={step} onStepChange={setStep} />
      <img
        src={
          step === 1
            ? BACKGROUND1.src
            : step === 2
              ? BACKGROUND2.src
              : step === 3
                ? BACKGROUND3.src
                : ""
        }
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}

const Step1 = () => {
  return (
    <ContentContainer className="!justify-start pt-[75px]">
      <div className="-ml-[10px]">
        <header className="mb-5">
          <img src={HOW_BADGE.src} />
        </header>

        <div className="flex gap-5 text-[50px] leading-tight tracking-normal break-keep mt-12">
          <span className="text-[#408ac9] font-bold">1</span>
          빙고 판에 나온 한자 중 과제에 해당하는 한자에 빗금을 친다.
        </div>
        <div className="flex gap-5 text-[50px] leading-tight tracking-normal break-keep mt-5 -mr-20">
          <span className="text-[#408ac9] font-bold">2</span>
          모든 과제를 해결하였을 때 빙고 판에 보이는 숫자를 비밀번호 칸에 쓴다.
        </div>
      </div>
    </ContentContainer>
  );
};

const Step2 = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [showButtons, setShowButtons] = useState([
    true,
    true,
    true,
    true,
    true,
  ]);

  useEffect(() => {
    if (showAnswer) setShowButtons([false, false, false, false, false]);
  }, [showAnswer]);

  return (
    <>
      <ContentContainer className="!justify-start pt-[23px] ml-20 w-[1526px]">
        <div className="">
          <header className="" onClick={() => SOUND("/sound").play()}>
            <img src={TASK_BADGE.src} />
          </header>
          <div className="relative pl-2 mt-1 w-[1526px] ">
            {showAnswer ? (
              <img src={IMAGE2_AFTER.src} />
            ) : (
              <img src={IMAGE2_BEFORE.src} />
            )}

            {showButtons[0] && (
              <button
                onClick={() => {
                  clickSound.play();
                  setShowButtons(
                    showButtons.map((v, i) => (i === 0 ? false : v)),
                  );
                }}
                className="absolute left-[730px] top-[20px]"
              >
                <img src={BUTTON_IMAGE.src} />
              </button>
            )}
            {showButtons[1] && (
              <button
                onClick={() => {
                  clickSound.play();
                  setShowButtons(
                    showButtons.map((v, i) => (i === 1 ? false : v)),
                  );
                }}
                className="absolute left-[730px] top-[110px]"
              >
                <img src={BUTTON_IMAGE.src} />
              </button>
            )}
            {showButtons[2] && (
              <button
                onClick={() => {
                  clickSound.play();
                  setShowButtons(
                    showButtons.map((v, i) => (i === 2 ? false : v)),
                  );
                }}
                className="absolute left-[730px] top-[200px]"
              >
                <img src={BUTTON_IMAGE.src} />
              </button>
            )}
            {showButtons[3] && (
              <button
                onClick={() => {
                  clickSound.play();
                  setShowButtons(
                    showButtons.map((v, i) => (i === 3 ? false : v)),
                  );
                }}
                className="absolute left-[730px] top-[290px]"
              >
                <img src={BUTTON_IMAGE.src} />
              </button>
            )}
            {showButtons[4] && (
              <button
                onClick={() => {
                  clickSound.play();
                  setShowButtons(
                    showButtons.map((v, i) => (i === 4 ? false : v)),
                  );
                }}
                className="absolute left-[730px] top-[460px]"
              >
                <img src={BUTTON_IMAGE.src} />
              </button>
            )}
          </div>
        </div>
      </ContentContainer>
      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
};

const Step3 = () => {
  const answers = ["7"];
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <>
      <ContentContainer className="!justify-start pt-[75px]">
        <div className="overflow-hidden -mt-[45px] -ml-5">
          <img src={IMAGE3.src} />
        </div>
      </ContentContainer>
      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
};
