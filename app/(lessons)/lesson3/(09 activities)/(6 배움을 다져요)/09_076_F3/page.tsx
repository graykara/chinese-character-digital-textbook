"use client";

import { StrengthenLearningWordHeader } from "@/app/components/headers/strengthen-learning-word-header";
import { SmartButton } from "@/app/components/buttons/smart-button";
import IMAGE1 from "./bg_1.png";
import IMAGE2 from "./bg_2.png";
import IMAGE3 from "./bg_3.png";
import IMAGE4 from "./bg_4.png";
import { InputWithPen } from "@/app/components/input-with-pen";
import { ContentContainer } from "@/app/components/content-container";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { useState } from "react";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/9/중등한문_이야기가 담긴 성어124.png";
import BACKGROUND2 from "@/app/bgpng_temp/9/중등한문_이야기가 담긴 성어125.png";
import BACKGROUND3 from "@/app/bgpng_temp/9/중등한문_이야기가 담긴 성어126.png";
import BACKGROUND4 from "@/app/bgpng_temp/9/중등한문_이야기가 담긴 성어127.png";
import { StepContainer } from "@/app/components/step-container";

export default function Page() {
  const [step, setStep] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <StrengthenLearningWordHeader
        title={
          <p className="-mr-20">디지털 도구로 모르는 한자를 찾고 가로 열쇠와 세로 열쇠를 참고하여 빈칸에 들어갈 한자를 써 보자.</p>
        }
        sound="/sound/3/76-i-3.mp3"
      />
      <div><p className="ml-[250px] -mt-5 text-[55px] text-[#1b1b1b] tracking-tighter break-keep leading-[60px] "><span className="text-[#AD6C35] text-[55px]">*</span> 부록의 미니 자전을 이용해도 좋습니다.</p></div>

      <SmartButton
        link="https://hanja.dict.naver.com/#/main"
        className="animate__animated animate__bounceIn animate__delay-2s absolute right-[150px] top-[275px] z-1" />

      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      {step === 4 && <Step4 />}

      <StepContainer maxStep={4} step={step} onStepChange={setStep} />
      <img src={
        step === 1 ? BACKGROUND1.src :
          step === 2 ? BACKGROUND2.src :
            step === 3 ? BACKGROUND3.src :
              step === 4 ? BACKGROUND4.src : ""}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}

const Step1 = () => {
  const answer = "朝";
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ContentContainer className="!justify-start top-[75px] -left-[110px]">
        <img src={IMAGE1.src} />
        {showAnswer ? (<button className="absolute top-[20px] left-[395px] w-[100px] h-[100px] bg-transparent z-10" onClick={() => SOUND("/sound/3/p076_word000.mp3").play()}>
        </button>) : null}
        <button className="absolute top-[20px] left-[610px] w-[100px] h-[100px] bg-transparent z-10" onClick={() => SOUND("/sound/3/p076_word001.mp3").play()}>
        </button>
        <button className="absolute top-[155px] left-[395px] w-[100px] h-[100px] bg-transparent z-10" onClick={() => SOUND("/sound/3/p076_word002.mp3").play()}>
        </button>
        {/* {showAnswer ? (<button className="absolute top-[155px] left-[610px] w-[100px] h-[100px] bg-transparent z-10" onClick={() => SOUND("/sound/3/p076_word000.mp3").play()}>
        </button>) : null} */}
        <InputWithPen
          answer={answer}
          showAnswer={showAnswer}
          className={`w-[200px] text-center bg-transparent font-haeseo text-[90px] tracking-tighter`}
          penClassName="left-[70px] -mt-2 h-[60px]"
          containerClassName="absolute top-[0px] left-[340px] -mt-1 ml-1"
        />
      </ContentContainer>
      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  )
}

const Step2 = () => {
  const answer = "指";
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ContentContainer className="!justify-start top-[75px] left-[95px]">
        <img src={IMAGE2.src} />
        {showAnswer ? (<button className="absolute top-[20px] left-[190px] w-[100px] h-[100px] bg-transparent z-10" onClick={() => SOUND("/sound/3/p076_word003.mp3").play()}>
        </button>) : null}
        <button className="absolute top-[20px] left-[405px] w-[100px] h-[100px] bg-transparent z-10" onClick={() => SOUND("/sound/3/p076_word004.mp3").play()}>
        </button>
        <button className="absolute top-[155px] left-[190px] w-[100px] h-[100px] bg-transparent z-10" onClick={() => SOUND("/sound/3/p076_word005.mp3").play()}>
        </button>
        {/* {showAnswer ? (<button className="absolute top-[155px] left-[405px] w-[100px] h-[100px] bg-transparent z-10" onClick={() => SOUND("/sound/3/p076_word000.mp3").play()}>
        </button>) : null} */}
        <InputWithPen
          answer={answer}
          showAnswer={showAnswer}
          className={`w-[200px] text-center bg-transparent font-haeseo text-[90px] tracking-tighter`}
          penClassName="left-[70px] -mt-2 h-[60px]"
          containerClassName="absolute top-[0px] left-[135px] -mt-1 ml-1"
        />
      </ContentContainer>
      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  )
}

const Step3 = () => {
  const answer = "足";
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ContentContainer className="!justify-start top-[75px] left-[55px]">
        <img src={IMAGE3.src} />
        {/* {showAnswer ? (<button className="absolute top-[20px] left-[230px] w-[100px] h-[100px] bg-black z-10" onClick={() => SOUND("/sound/3/p076_word000.mp3").play()}>
        </button>) : null} */}
        <button className="absolute top-[20px] left-[445px] w-[100px] h-[100px] bg-transparent z-10" onClick={() => SOUND("/sound/3/p076_word008.mp3").play()}>
        </button>
        <button className="absolute top-[155px] left-[230px] w-[100px] h-[100px] bg-transparent z-10" onClick={() => SOUND("/sound/3/p076_word006.mp3").play()}>
        </button>
        {showAnswer ? (<button className="absolute top-[155px] left-[445px] w-[100px] h-[100px] bg-transparent z-10" onClick={() => SOUND("/sound/3/p076_word007.mp3").play()}>
        </button>) : null}
        <InputWithPen
          answer={answer}
          showAnswer={showAnswer}
          className={`w-[200px] text-center bg-transparent font-haeseo text-[90px] tracking-tighter`}
          penClassName="left-[70px] -mt-2 h-[60px]"
          containerClassName="absolute top-[140px] left-[390px] -mt-1 ml-1"
        />
      </ContentContainer>
      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  )
}

const Step4 = () => {
  const answer = "利";
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ContentContainer className="!justify-start top-[75px] left-[100px]">
        <img src={IMAGE4.src} />
        <button className="absolute top-[20px] left-[190px] w-[100px] h-[100px] bg-transparent z-10" onClick={() => SOUND("/sound/3/p076_word009.mp3").play()}>
        </button>
        {/* <button className="absolute top-[20px] left-[405px] w-[100px] h-[100px] bg-transparent z-10" onClick={() => SOUND("/sound/3/p076_word004.mp3").play()}>
        </button> */}
        {showAnswer ? (<button className="absolute top-[155px] left-[190px] w-[100px] h-[100px] bg-transparent z-10" onClick={() => SOUND("/sound/3/p076_word010.mp3").play()}>
        </button>) : null}
        <button className="absolute top-[155px] left-[405px] w-[100px] h-[100px] bg-transparent z-10" onClick={() => SOUND("/sound/3/p076_word011.mp3").play()}>
        </button>
        <InputWithPen
          answer={answer}
          showAnswer={showAnswer}
          className={`w-[200px] text-center bg-transparent font-haeseo text-[90px] tracking-tighter`}
          penClassName="left-[70px] -mt-2 h-[60px]"
          containerClassName="absolute top-[140px] left-[127px] -mt-1 ml-1"
        />
      </ContentContainer>
      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  )
}
