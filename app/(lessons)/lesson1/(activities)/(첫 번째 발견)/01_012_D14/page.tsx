"use client";

import { StepContainer } from "@/app/components/step-container";
import HEADER from "../assets/header.png";
import EXERCISE3 from "./exercise3.png";
import { useEffect, useState } from "react";
import { VideoThumbnail } from "@/app/components/video-thumbnail";
import THUMBNAIL1 from "./thumbnail1.png";
import THUMBNAIL2 from "./thumbnail2.png";
import { ContentContainer } from "@/app/components/content-container";
import { Textarea } from "@/app/components/textarea";
import ROBOT from "./robot.png";
import { ExerciseHeader } from "@/app/components/exercise-header";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";

export default function Page13_3() {
  const [step, setStep] = useState(1);

  const answer1 = "우천시: 비가 올 때.";
  const answer2 = "연패: 연달아우승을 함.";
  const [showAnswer, setShowAnswer] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue("");
  }, [showAnswer, step]);

  return (
    <>
      <header className="pt-5 animate__animated animate__fadeIn">
        <img src={HEADER.src} />
      </header>

      <ExerciseHeader
        text="대화 속 밑줄 친 부분의 뜻을 말해 보자."
        image={EXERCISE3.src}
      />

      <img src={ROBOT.src} className="absolute top-[100px] right-[180px]" />
      <ContentContainer>
        <div className="grid grid-cols-[2fr__3fr] mx-auto gap-5">
          <VideoThumbnail
            thumbnail={step === 1 ? THUMBNAIL1.src : THUMBNAIL2.src}
            video={
              step === 1
                ? "/video/animation/1-1_12-1.mp4"
                : "/video/animation/1-1_12-2.mp4"
            }
            width={550}
            height={320}
          />
          <div className="relative h-[320px]">
            <Textarea
              value={showAnswer ? (step === 1 ? answer1 : answer2) : value}
              onChange={setValue}
              className={showAnswer ? "text-red-500" : ""}
            />
          </div>
        </div>
      </ContentContainer>

      <StepContainer step={step} maxStep={2} onStepChange={setStep} />

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
}
