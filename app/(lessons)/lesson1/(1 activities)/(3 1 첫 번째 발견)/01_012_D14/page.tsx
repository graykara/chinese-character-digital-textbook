"use client";

import { Header } from "../assets/header";
import { VideoThumbnail } from "@/app/components/video-thumbnail";
import EXERCISE3 from "./exercise3.png";
import THUMBNAIL1 from "./thumbnail1.png";
import THUMBNAIL2 from "./thumbnail2.png";
import { Textarea } from "@/app/components/textarea";
import TEXTAREA from "./bgTextArea1.png";
import { useEffect, useState } from "react";
import { ExerciseHeader } from "@/app/components/exercise-header";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { ContentContainer } from "@/app/components/content-container";
import ROBOT from "./robot.png";
import { StepContainer } from "@/app/components/step-container";
import BACKGROUND from "@/app/bgpng_temp/1/중등한문_한자,어디서봤어8.png"

export default function Page() {
  const [step, setStep] = useState(1);

  const answer1 = "비가 올 때.";
  const answer2 = "연달아 우승을 함.";
  const [showAnswer, setShowAnswer] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue("");
  }, [showAnswer, step]);

  return (
    <>
      <Header />

      <ExerciseHeader
        text="대화 속 밑줄 친 부분의 뜻을 말해 보자."
        image={EXERCISE3.src}
      />

      <img src={ROBOT.src} className="absolute top-[110px] right-[80px]" />

      <ContentContainer className="w-[1600px] h-full ml-[160px] -mt-[130px] flex justify-center items-center">
        <div className="grid grid-cols-[2fr__3fr] gap-9">
          <VideoThumbnail
            thumbnail={step === 1 ? THUMBNAIL1.src : THUMBNAIL2.src}
            video={
              step === 1
                ? "/video/animation/1-1_12-1.mp4"
                : "/video/animation/1-1_12-2.mp4"
            }
            width={620}
            height={330}
          />

          <div className="relative top-1">
            
            <div className="absolute top-5 left-[75px] text-[45px] tracking-tighter">
            {step === 1 ?
              "우천 시" : "연패" }
            </div>
            {!value && !showAnswer ? (
              <img
                src="/ui/textarea-pen.png"
                className="absolute pointer-events-none"
                style={{
                  height: 55,
                  top: 110,
                  left: 60
                }}
              />
            ) : null}
            <textarea
              value={showAnswer ? 
                (step === 1 ? answer1 : answer2)
                 : value}
              onChange={(e) => setValue(e.target.value)}
              className={`absolute resize-none left-0 top-[100px] text-[45px] bg-transparent w-[840px] h-full ml-3 px-16 leading-[81px] tracking-tight break-keep ${showAnswer ? "text-answer ml-3" : ""
                }`}
              rows={3}
            ></textarea>
            <img src={TEXTAREA.src} className="" />
          </div>
        </div>
      </ContentContainer>

      <StepContainer step={step} maxStep={2} onStepChange={setStep} />

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      <img src={BACKGROUND.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
