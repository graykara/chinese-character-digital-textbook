"use client";

import { ReadingButton } from "@/app/components/buttons/reading-button";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useEffect, useState } from "react";
import { Howl } from "howler";
import IMAGE2 from "./image2.png";
import { WordStoryHeader } from "@/app/components/headers/word-story-header";
import BACKGROUND1 from "@/app/bgpng_temp/5/중등한문_한자를 알면 틀리지 않는 일상 어휘14.png"
import BACKGROUND2 from "@/app/bgpng_temp/5/중등한문_한자를 알면 틀리지 않는 일상 어휘15.png"

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
      <WordStoryHeader title={"‘심심한 감사’와 ‘심심한 위로’, 무슨 뜻일까?"}/>

      <ContentContainer>
        {step === 2 && (
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
              “심심한 감사를 드립니다.”, “심심한 위로를 표합니다.” 이때의
              <br />
              ‘심심하다’라는 말은 ‘지루하고 재미가 없다’ 라는 뜻이 아니다.
              <br />
              ‘매우’라는 뜻의 ‘<span className="font-haeseo">甚</span>(심)’과
              ‘깊다’라는 뜻의 ‘<span className="font-haeseo">深</span>(심)’이
              결합된
              <br />
              단어로, ‘매우 깊다’는 의미이다. 따라서{" "}
              <span className="font-haeseo">眞心</span>(진심) 어린
              <br />
              감사나 위로를 전하고 싶을 때 ‘심심한 감사’, ‘심심한 위로’ 와<br />
              같이 쓸 수 있다.
            </div>
          </div>
        )}
        {step === 1 && (
          <div className="relative -top-10 -left-5">
            <img src={IMAGE2.src} />
          </div>
        )}
      </ContentContainer>

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
      <img src={BACKGROUND1.src} className="absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
