"use client";

import { ReadingButton } from "@/app/components/buttons/reading-button";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useEffect, useState } from "react";
import { Howl } from "howler";
import IMAGE2 from "./image2.png";
import { WordStoryHeader } from "@/app/components/headers/word-story-header";

export default function Page() {
  const [step, setStep] = useState(1);

  const [isReading, setIsReading] = useState(false);

  const sound = new Howl({
    src: "/sound/2/41_story.mp3",
    onplay: () => setIsReading(true),
    onend: () => setIsReading(false),
  });

  useEffect(() => {
    return () => {
      sound.stop();
    };
  }, []);

  return (
    <>
      <WordStoryHeader
        title={
          <>
            바다라고 다 같은 바다가 아니다! ‘
            <span className="font-haeseo">海</span>’와 ‘
            <span className="font-haeseo">洋</span>’의 차이
          </>
        }
      />

      <ContentContainer>
        {step === 1 && (
          <div className="relative">
            <ReadingButton
              className="absolute right-0 -top-[100px]"
              active={isReading}
              onClick={() => sound.play()}
            />
            <div
              className={`bg-[#f4ede1] rounded-2xl p-10 ${
                isReading ? "text-reading" : ""
              }`}
            >
              ‘넓고 큰 바다’를 ‘海洋’이라고 일컫는다. 여기서 ‘
              <span className="font-haeseo">海</span>’와 ‘
              <span className="font-haeseo">洋</span>’
              <br />
              모두 바다를 뜻하지만, 그 쓰임에는 차이가 있다. 동해, 서해,
              <br />
              지중해 등의 용례에서 확인되듯이 ‘~
              <span className="font-haeseo">海</span>’는 육지와 접해 있는 <br />
              바다를 가리킬 때 사용하고, ‘~
              <span className="font-haeseo">洋</span>’은 태평양, 대서양, 인도양
              <br />
              등에서 확인되듯이 육지와 멀리 떨어진 큰 바다를 가리킬 때<br />
              사용한다.
              <br />
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="relative">
            <img src={IMAGE2.src} />
          </div>
        )}
      </ContentContainer>

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
    </>
  );
}
