"use client";

import { ThinkTogetherHeader } from "@/app/components/headers/think-together";
import IMAGE from "./image.png";
import IMAGE2_BEFORE from "./image2-before.png";
import IMAGE2_AFTER from "./image2-after.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useState } from "react";
import { VideoThumbnail_big } from "@/app/components/video-thumbnail";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { InputWithPen } from "@/app/components/input-with-pen";
import BACKGROUND1 from "@/app/bgpng_temp/12/중등한문_나에게 힘이 되는 글2.png";
import BACKGROUND2 from "@/app/bgpng_temp/12/중등한문_나에게 힘이 되는 글3.png";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { BuddyButton } from "@/app/components/buttons/buddy-button";
import { GroupButton } from "@/app/components/buttons/group-button";

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      <StepContainer step={step} maxStep={2} onStepChange={setStep} />
    </>
  );
}

const Step1 = () => {
  const answers = [
    "너는 할 수 있어.",
    "네가 하는 게 그렇지 뭐."
  ];
  const [showAnswer, setShowAnswer] = useState(false);
  const [value, setValue] = useState("");
  return (
    <>
      <ThinkTogetherHeader
        title={<p className="-ml-2">나에게 힘이 되었던 말을 써 보자.</p>}
        sound=""
      />

      <ContentContainer className="!justify-start">
        <div className="bg-[#f2efec] p-5 rounded-3xl w-[1400px] h-[200px]"></div>

        {!value && !showAnswer ? (
          <img
            src="/ui/textarea-pen.png"
            className="absolute pointer-events-none"
            style={{
              height: 60,
              top: 10,
              left: 80
            }}
          />
        ) : null}
        <textarea
          value={showAnswer ? answers[0] : value}
          onChange={(e) => setValue(e.target.value)}
          className={`absolute resize-none w-[1350px] left-[80px] top-[10px] text-[55px] leading-[65px] tracking-tighter break-keep bg-transparent py-1  ${showAnswer ? "text-example" : ""
            }`}
          rows={3}
        ></textarea>

        <div className="bg-[#f2efec] p-5 rounded-3xl w-[1400px] h-[200px] mt-[150px]"></div>

        {!value && !showAnswer ? (
          <img
            src="/ui/textarea-pen.png"
            className="absolute pointer-events-none"
            style={{
              height: 60,
              top: 360,
              left: 80
            }}
          />
        ) : null}
        <textarea
          value={showAnswer ? answers[1] : value}
          onChange={(e) => setValue(e.target.value)}
          className={`absolute resize-none w-[1350px] left-[80px] top-[360px] text-[55px] leading-[65px] tracking-tighter break-keep bg-transparent py-1  ${showAnswer ? "text-example" : ""
            }`}
          rows={3}
        ></textarea>

      </ContentContainer>

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
};

const Step2 = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <ThinkTogetherHeader
        title={<p className="-ml-2">학급 친구들과 함께 ‘힘이 되는 말’ 세 가지를 뽑아 보자.</p>}
        sound=""
      />

      <BuddyButton className="animate__animated animate__fadeIn animate__delay-1s absolute right-[350px] top-[181px] w-[100px] z-1" />
      <GroupButton className="animate__animated animate__fadeIn animate__delay-2s absolute right-[220px] top-[186px] z-1" />

      <ContentContainer className="!justify-start">
        <div className="bg-[#f2efec] p-5 rounded-3xl w-[1400px] h-[450px]"></div>
        {!value ? (
          <img
            src="/ui/textarea-pen.png"
            className="absolute pointer-events-none"
            style={{
              height: 60,
              top: 10,
              left: 80
            }}
          />
        ) : null}
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={`absolute resize-none w-[1350px] left-[80px] top-[10px] text-[55px] leading-[70px] tracking-tighter break-keep bg-transparent py-1"
            }`}
          rows={6}
        ></textarea>
      </ContentContainer>

      
      <img src={BACKGROUND2.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
};
