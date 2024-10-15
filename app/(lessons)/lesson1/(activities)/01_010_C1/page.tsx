"use client";

import { ThinkTogetherHeader } from "@/app/components/headers/think-together";
import { VideoThumbnail } from "@/app/components/video-thumbnail";
import { useContext, useState } from "react";
import { StepContainer } from "@/app/components/step-container";

import VIDEO_THUMBNAIL from "./assets/video-thumbnail.png";
import SYMBOL from "./assets/symbol.png";
import TEXTAREA from "./assets/textarea.png";
import EXAMPLE_ANSWER from "./assets/example-answer.png";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page11() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("다 함께 생각해요");
  
  const [step, setStep] = useState(1);

  const answer = "도로와 유적 표지판에서 한자 표기를 보았다.";
  const [showAnswer, setShowAnswer] = useState(false);
  const [value, setValue] = useState("");

  return (
    <>
      <ThinkTogetherHeader title="한자를 만난 경험을 떠올려 보자." />

      {step === 1 ? (
        <div className="h-full flex justify-center items-center">
          <VideoThumbnail
            thumbnail={VIDEO_THUMBNAIL.src}
            video="/video/animation/1-1_10.mp4"
            width={972}
            height={526}
          />
        </div>
      ) : null}

      {step === 2 ? (
        <>
          <div className="h-full flex justify-center items-center">
            <div>
              <div className="animate__animated animate__flipInX flex items-center gap-4">
                <img src={SYMBOL.src} className="" />
                <p className="text-[55px]">
                  한자를 어디에서 보았는지 자기 경험을 써 보자.
                </p>
              </div>

              <div className="relative">
                {!value ? (
                  <img
                    src="/ui/textarea-pen.png"
                    className="absolute pointer-events-none"
                    style={{
                      height: 45,
                      top: 60,
                      left: 64
                    }}
                  />
                ) : null}
                <textarea
                  value={showAnswer ? answer : value}
                  onChange={(e) => setValue(e.target.value)}
                  className={`absolute resize-none left-0 top-0 text-[55px] bg-transparent w-full h-full px-16 py-11 leading-[80px] ${
                    showAnswer ? "text-example" : ""
                  }`}
                  rows={3}
                ></textarea>
                <img src={TEXTAREA.src} className="" />
              </div>
            </div>
          </div>
          <button
            className="absolute bottom-0 right-32"
            onClick={() => setShowAnswer(!showAnswer)}
          >
            <img src={EXAMPLE_ANSWER.src} />
          </button>
        </>
      ) : null}

      <StepContainer step={step} maxStep={2} onStepChange={setStep} />
    </>
  );
}
