"use client";

import { ContentContainer } from "@/app/components/content-container";
import { HeaderContainer } from "@/app/components/headers/header-container";
import { TitleContainer } from "@/app/components/title-container";
import { useEffect, useState } from "react";
import { SOUND } from "@/app/utils/sound-player";
import EXAMPLE from "./example.png";
import LEFT from "./left.png";
import RIGHT from "./right.png";
import BLANK1 from "./blank1.png";
import BLANK2 from "./blank2.png";
import BLANK3 from "./blank3.png";
import BLANK4 from "./blank4.png";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { StepContainer } from "@/app/components/step-container";
import { BuddyButton } from "@/app/components/buttons/buddy-button";
import { GroupButton } from "@/app/components/buttons/group-button";
import BACKGROUND1 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어25.png";
import BACKGROUND2 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어26.png";
import BACKGROUND3 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어27.png";
import BACKGROUND4 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어28.png";

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

      <BuddyButton className="animate__animated animate__fadeIn animate__delay-1s absolute right-[1055px] top-[230px] w-[100px] z-1" />
      <GroupButton className="animate__animated animate__fadeIn animate__delay-2s absolute right-[920px] top-[232px] z-1" />

      <TitleContainer className="mt-10" sound="/sound/3/67-i.mp3">
        <p className="tracking-tighter flex items-start gap-5 break-keep">
          <img src="/ui/flower-icon.png" />
          제시된 한자 카드를 보고, 질문에 답하며 개인별 또는 모둠별로 왕관을
          획득해 보자.
        </p>
      </TitleContainer>

      <ContentContainer className="!justify-start mt-5 pl-12">
        <img src={EXAMPLE.src} className="mt-6 -ml-14 mb-10" />
        <div className="absolute left-[0px] top-[40px] grid grid-cols-9 gap-[50px] w-full h-[90px] px-[35px]">
          <button onClick={() => SOUND("/sound/3/p067_word000.mp3").play()}>
          </button>
          <button onClick={() => SOUND("/sound/3/p067_word001.mp3").play()}></button>
          <button onClick={() => SOUND("/sound/3/p067_word002.mp3").play()}></button>
          <button onClick={() => SOUND("/sound/3/p067_word003.mp3").play()}>
          </button>
          <button onClick={() => SOUND("/sound/3/p067_word004.mp3").play()}>
          </button>
          <button onClick={() => SOUND("/sound/3/p067_word005.mp3").play()}>
          </button>
          <button onClick={() => SOUND("/sound/3/p067_word006.mp3").play()}>
          </button>
          <button onClick={() => SOUND("/sound/3/p067_word007.mp3").play()}>
          </button>
          <button onClick={() => SOUND("/sound/3/p067_word008.mp3").play()}>
          </button>
        </div>
        <div className="flex items-center gap-10">
          <button>
            <img src={LEFT.src} />
          </button>
          <div className="-mt-5 -ml-14 w-[800px] h-[300px] flex justify-center items-center">
            {step === 1 && <img src={BLANK1.src} />}
            {step === 2 && <img src={BLANK2.src} />}
            {step === 3 && <img src={BLANK3.src} />}
            {step === 4 && <img src={BLANK4.src} />}
          </div>
          <button>
            <img src={RIGHT.src} />
          </button>
        </div>
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />

      <StepContainer maxStep={4} step={step} onStepChange={setStep} />

      <img src={
        step === 1 ? BACKGROUND1.src :
          step === 2 ? BACKGROUND2.src :
            step === 3 ? BACKGROUND3.src :
              step === 4 ? BACKGROUND4.src : ""
      } className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
