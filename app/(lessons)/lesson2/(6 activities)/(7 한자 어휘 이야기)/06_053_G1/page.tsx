"use client";

import { ReadingButton } from "@/app/components/buttons/reading-button";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useEffect, useState } from "react";
import { Howl } from "howler";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import IMAGE3 from "./image3.png";
import { WordStoryHeader } from "@/app/components/headers/word-story-header";

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>
      <WordStoryHeader title={"단어의 짜임"} />

      <ContentContainer>
        {step === 1 && <Step1 />}
        {step === 2 && (
          <div className="relative w-[1500px]">
            <img src={IMAGE2.src} />
          </div>
        )}
        {step === 3 && (
          <div className="relative w-[1500px]">
            <img src={IMAGE3.src} />
          </div>
        )}
      </ContentContainer>

      <StepContainer maxStep={3} step={step} onStepChange={setStep} />
    </>
  );
}

const Step1 = () => {
  const [isReading, setIsReading] = useState(false);

  const sound = new Howl({
    src: "/sound/2/53_story.mp3",
    onplay: () => setIsReading(true),
    onend: () => setIsReading(false),
  });

  useEffect(() => {
    return () => {
      sound.stop();
    };
  }, []);

  return (
    <div className="relative">
      <ReadingButton
        className="absolute right-0 -top-[100px]"
        active={isReading}
        onClick={() => sound.play()}
      />
      <div
        className={`bg-[#f4ede1] rounded-3xl p-10 ${
          isReading ? "text-reading" : ""
        }`}
      >
        둘 이상의 한자가 모여 한자 어휘를 형성할 때, 한자 사이의
        <br />
        결합 관계를 단어의 짜임이라고 한다. 단어의 짜임에는
        <br />
        병렬 관계, 수식 관계, 주술 관계, 술목 관계, 술보 관계 등이 있다.
      </div>

      <div className="w-[1500px]">
        <img src={IMAGE1.src} className="mt-10" />
      </div>
    </div>
  );
};
