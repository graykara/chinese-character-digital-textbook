"use client";

import { SoundButton2 } from "@/app/components/buttons/sound-button2";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useContext, useEffect, useState } from "react";
import { Howl } from "howler";
import IMAGE2 from "./image2.png";
import { WordStoryHeader } from "@/app/components/headers/word-story-header";
import BACKGROUND1 from "@/app/bgpng_temp/5/중등한문_한자를 알면 틀리지 않는 일상 어휘14.png";
import BACKGROUND2 from "@/app/bgpng_temp/5/중등한문_한자를 알면 틀리지 않는 일상 어휘15.png";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  const [isReading, setIsReading] = useState(false);
  const [soundId, setSoundId] = useState<number | null>(null);
  const sound = new Howl({
    src: "/sound/2/47_story.mp3",
    onplay: () => setIsReading(true),
    onend: () => setIsReading(false),
  });
  [
    {
      text: "“심심한 감사를 드립니다.”, “심심한 위로를 표합니다.” 이때의 ‘심심하다’라는 말은 ‘지루하고 재미가 없다’ 라는 뜻이 아니다.",
      start: 0,
      end: 10760,
    },
    {
      text: "‘매우’라는 뜻의 ‘甚(심)’과 ‘깊다’라는 뜻의 ‘深(심)’이 결합된 단어로, ‘매우 깊다’는 의미이다.",
      start: 10760,
      end: 17972,
    },
    {
      text: "따라서 眞心(진심) 어린 감사나 위로를 전하고 싶을 때 ‘심심한 감사’, ‘심심한 위로’ 와 같이 쓸 수 있다.",
      start: 17972,
      end: 26383,
    },
  ];

  useEffect(() => {
    return () => {
      sound.stop();
    };
  }, []);

  return (
    <>
      <WordStoryHeader title={"‘심심한 감사’와 ‘심심한 위로’, 무슨 뜻일까?"} />
      {step === 2 && (
        <>
          <SoundButton2
            className="absolute top-[110px] left-[1300px] animate__animated animate__bounceIn animate__delay-1s z-10"
            active={isReading}
            onClick={() => {
              soundId && sound.stop(soundId);
              setSoundId(sound.play());
            }}
          />

          <ContentContainer>
            <div className="relative -top-[5px] w-[1460px]">
              <div
                className={`bg-[#f4ede1] rounded-[50px] px-20 py-14 text-[55px] leading-[84px] tracking-[-1.5px] break-keep transition-colors duration-[2000ms] ${
                  isReading ? "text-reading" : ""
                }`}
              >
                “심심한 감사를 드립니다.”, “심심한 위로를 표합니다.” 이때의
                ‘심심하다’라는 말은 ‘지루하고 재미가 없다’ 라는 뜻이 아니다.
                ‘매우’라는 뜻의 ‘
                <span className="font-haeseo text-[60px] leading-tight">
                  甚
                </span>
                (심)’과 ‘깊다’라는 뜻의 ‘
                <span className="font-haeseo text-[60px] leading-tight">
                  深
                </span>
                (심)’이 결합된 단어로, ‘매우 깊다’는 의미이다. 따라서{" "}
                <span className="font-haeseo text-[60px] leading-tight">
                  眞心
                </span>
                (진심) 어린 감사나 위로를 전하고 싶을 때 ‘심심한 감사’, ‘심심한
                위로’ 와 같이 쓸 수 있다.
              </div>
            </div>
          </ContentContainer>
        </>
      )}
      {step === 1 && (
        <>
          <ContentContainer>
            <div className="relative -top-12 -left-5">
              <img src={IMAGE2.src} />
            </div>
          </ContentContainer>
        </>
      )}

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
      {/* <img src={BACKGROUND2.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
}
