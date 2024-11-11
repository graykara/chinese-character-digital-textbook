"use client";

import { ThinkTogetherHeader } from "@/app/components/headers/think-together";
import BG from "./bg.png";
import BTN1 from "./button1.png";
import BTN1p from "./button1-pressed.png";
import BTN2 from "./button2.png";
import BTN2p from "./button2-pressed.png";
import BTN3 from "./button3.png";
import BTN3p from "./button3-pressed.png";
import BTN4 from "./button4.png";
import BTN4p from "./button4-pressed.png";
import BTN5 from "./button5.png";
import BTN5p from "./button5-pressed.png";
import RESULT1 from "./results1.png";
import RESULT2 from "./results2.png";
import RESULT3 from "./results3.png";
import RESULT4 from "./results4.png";
import RESULT5 from "./results5.png";
import { ContentContainer } from "@/app/components/content-container";
import { useState } from "react";
import BACKGROUND1 from "@/app/bgpng_temp/10/중등한문_이야기가 담긴 성어22.png";
import { StepContainer } from "@/app/components/step-container";
import { clickSound } from "@/app/utils/click-sound";

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>
      <ThinkTogetherHeader
        title={<p className="-ml-2">성어 성격 유형 검사를 풀어 보자.</p>}
        sound="/sound/3/78-i.mp3"
      />

      <ContentContainer>
        {/* 시작 */}
        {step === 1 && <Step1 setStep={setStep} />}
        {/* 내일은 한문 수행 평가 보는 날! */}
        {step === 2 && <Step2 setStep={setStep} />}
        {/* 이해가 가지 않는 부분은 밤을 새우는 한이 있더라도 끝까지 해결한다. */}
        {step === 3 && <Step3 setStep={setStep} />}
        {/* 학교에 갔더니 친구들이 수행 평가 준비로 바쁘다. 나도 늦었지만 동참한다. */}
        {step === 4 && <Step4 setStep={setStep} />}
        {/* 한문 수행 평가 결과가 그다지 좋지 않다. 어떻게 할 것인가? */}
        {step === 5 && <Step5 setStep={setStep} />}

        {/* 대기만성형 */}
        {step === 6 && <Step6 />}
        {/* 무사태평형 */}
        {step === 7 && <Step7 />}
        {/* 형설지공형 */}
        {step === 8 && <Step8 />}
        {/* 괄목상대형 */}
        {step === 9 && <Step9 />}
        {/* 우공이산형 */}
        {step === 10 && <Step10 />}

        {/* restart button hidden */}
        <button
          onClick={() => { setStep(1) }}
          className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-black bg-opacity-0"
        >
        </button>
      </ContentContainer>

      {/* <StepContainer maxStep={10} step={step} onStepChange={setStep} /> */}
      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}

const Step1 = ({ setStep }) => { 
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleClick = () => {
    setIsClicked(true);
    setStep(2);
    clickSound.play();
  };
  return (
    <>
      <img src={BG.src} className="ml-5 -mt-24" />
      <p className="absolute top-[220px] text-[40px] text-[#154f71]">
        성어 성격 유형 검사를 풀어 보자.</p>
      <button
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="absolute translate-y-[10px]"
      >
        <img
          src={isClicked ? BTN1p.src : isHovered ? BTN1p.src : BTN1.src}
          alt="Step 1 Button"
        />
      </button>
    </>
  )
};

const Step2 = ({ setStep }) => { 
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const handleMouseEnter1 = () => setIsHovered1(true);
  const handleMouseLeave1 = () => setIsHovered1(false);
  const handleMouseEnter2 = () => setIsHovered2(true);
  const handleMouseLeave2 = () => setIsHovered2(false);
  const handleClick1 = () => {
    setIsClicked(true);
    setStep(3);
    clickSound.play();
  };
  const handleClick2 = () => {
    setIsClicked(true);
    setStep(4);
    clickSound.play();
  };
  return (
    <>
      <img src={BG.src} className="ml-5 -mt-24" />
      <p className="absolute top-[150px] w-[550px] text-center leading-tight break-keep text-[40px] text-[#154f71]">
        내일은 한문 수행 평가 보는 날!
        준비가 안 된 상태로 등교하는 것은
        있을 수 없다.</p>
      <div className="absolute translate-y-[45px] grid grid-cols-2 gap-[60px] ">
        <button
          onClick={handleClick1}
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
        >
          <img
            src={isClicked ? BTN2p.src : isHovered1 ? BTN2p.src : BTN2.src}
            alt="Step 2 Button 1"
          />
        </button>
        <button
          onClick={handleClick2}
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          <img
            src={isClicked ? BTN3p.src : isHovered2 ? BTN3p.src : BTN3.src}
            alt="Step 2 Button 2"
          />
        </button>
      </div>
    </>
  )
};

const Step3 = ({ setStep }) => { 
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const handleMouseEnter1 = () => setIsHovered1(true);
  const handleMouseLeave1 = () => setIsHovered1(false);
  const handleMouseEnter2 = () => setIsHovered2(true);
  const handleMouseLeave2 = () => setIsHovered2(false);
  const handleClick1 = () => {
    setIsClicked(true);
    setStep(8);
    clickSound.play();
  };
  const handleClick2 = () => {
    setIsClicked(true);
    setStep(5);
    clickSound.play();
  };
  return (
    <>
      <img src={BG.src} className="ml-5 -mt-24" />
      <p className="absolute top-[150px] w-[550px] text-center leading-tight break-keep text-[40px] text-[#154f71]">
        이해가 가지 않는 부분은<br />밤을 새우는 한이 있더라도<br />끝까지 해결한다.</p>
      <div className="absolute translate-y-[45px] grid grid-cols-2 gap-[60px] ">
        <button
          onClick={handleClick1}
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
        >
          <img
            src={isClicked ? BTN2p.src : isHovered1 ? BTN2p.src : BTN2.src}
            alt="Step 3 Button 1"
          />
        </button>
        <button
          onClick={handleClick2}
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          <img
            src={isClicked ? BTN3p.src : isHovered2 ? BTN3p.src : BTN3.src}
            alt="Step 3 Button 2"
          />
        </button>
      </div>
    </>
  )
};

const Step4 = ({ setStep }) => { 
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const handleMouseEnter1 = () => setIsHovered1(true);
  const handleMouseLeave1 = () => setIsHovered1(false);
  const handleMouseEnter2 = () => setIsHovered2(true);
  const handleMouseLeave2 = () => setIsHovered2(false);
  const handleClick1 = () => {
    setIsClicked(true);
    setStep(6);
    clickSound.play();
  };
  const handleClick2 = () => {
    setIsClicked(true);
    setStep(7);
    clickSound.play();
  };
  return (
    <>
      <img src={BG.src} className="ml-5 -mt-24" />
      <p className="absolute top-[150px] w-[550px] text-center leading-tight break-keep text-[40px] text-[#154f71]">
        학교에 갔더니 친구들이<br />수행 평가 준비로 바쁘다.<br />나도 늦었지만 동참한다.</p>
      <div className="absolute translate-y-[45px] grid grid-cols-2 gap-[60px] ">
        <button
          onClick={handleClick1}
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
        >
          <img
            src={isClicked ? BTN2p.src : isHovered1 ? BTN2p.src : BTN2.src}
            alt="Step 4 Button 1"
          />
        </button>
        <button
          onClick={handleClick2}
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          <img
            src={isClicked ? BTN3p.src : isHovered2 ? BTN3p.src : BTN3.src}
            alt="Step 4 Button 2"
          />
        </button>
      </div>
    </>
  )
};

const Step5 = ({ setStep }) => { 
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const handleMouseEnter1 = () => setIsHovered1(true);
  const handleMouseLeave1 = () => setIsHovered1(false);
  const handleMouseEnter2 = () => setIsHovered2(true);
  const handleMouseLeave2 = () => setIsHovered2(false);
  const handleClick1 = () => {
    setIsClicked(true);
    setStep(9);
    clickSound.play();
  };
  const handleClick2 = () => {
    setIsClicked(true);
    setStep(10);
    clickSound.play();
  };
  return (
    <>
      <img src={BG.src} className="ml-5 -mt-24" />
      <p className="absolute top-[240px] left-[275px] w-[350px] text-center leading-tight break-keep text-[40px] text-[#154f71]">
        한문 수행 평가 결과가 그다지 좋지 않다. 어떻게 할 것인가?</p>
      <div className="absolute translate-x-[205px] -translate-y-[50px] grid grid-rows-2 gap-[40px] ">
        <button
          onClick={handleClick1}
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
        >
          <img
            src={isClicked ? BTN4p.src : isHovered1 ? BTN4p.src : BTN4.src}
            alt="Step 5 Button 1"
          />
        </button>
        <button
          onClick={handleClick2}
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          <img
            src={isClicked ? BTN5p.src : isHovered2 ? BTN5p.src : BTN5.src}
            alt="Step 5 Button 2"
          />
        </button>
      </div>
    </>
  )
};

const Step6 = () => { 
  return (
    <img src={RESULT1.src} className="ml-5 -mt-32" />
  )
};

const Step7 = () => { 
  return (
    <img src={RESULT2.src} className="ml-5 -mt-32" />
  )
};

const Step8 = () => { 
  return (
    <img src={RESULT3.src} className="ml-5 -mt-32" />
  )
};

const Step9 = () => {
  return (
    <img src={RESULT4.src} className="ml-5 -mt-32" />
  )
};

const Step10 = () => { 
  return (
    <img src={RESULT5.src} className="ml-5 -mt-32" />
  )
};


