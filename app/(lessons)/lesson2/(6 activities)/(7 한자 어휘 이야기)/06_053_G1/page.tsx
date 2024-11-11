"use client";

import { SoundButton2 } from "@/app/components/buttons/sound-button2";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useContext, useEffect, useState } from "react";
import { Howl } from "howler";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import IMAGE3 from "./image3.png";
import { WordStoryHeader } from "@/app/components/headers/word-story-header";
import BACKGROUND1 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘19.png";
import BACKGROUND2 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘20.png";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);
  const sound = [
    {
      text: "둘 이상의 한자가 모여 한자 어휘를 형성할 때, 한자 사이의 결합 관계를 단어의 짜임이라고 한다.",
      start: 0,
      end: 8374,
    },
    {
      text: "단어의 짜임에는 병렬 관계, 수식 관계, 주술 관계, 술목 관계, 술보 관계 등이 있다.",
      start: 8374,
      end: 16744,
    },
  ];

  return (
    <>
      <WordStoryHeader title={"단어의 짜임"} />
      {step === 1 && <Step1 />}
      {step === 2 && (
        <>
          <ContentContainer>
            <div className="relative w-[1500px]">
              <img src={IMAGE2.src} />
            </div>
          </ContentContainer>
        </>
      )}
      {step === 3 && (
        <>
          <ContentContainer>
            <div className="relative w-[1500px]">
              <img src={IMAGE3.src} />
            </div>
          </ContentContainer>
        </>
      )}
      <StepContainer maxStep={3} />
      {/* <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
}

const sound = new Howl({
  src: "/sound/2/53_story.mp3",
});
const Step1 = () => {
  const [isReading, setIsReading] = useState(false);
  const [soundId, setSoundId] = useState<number | null>(null);

  useEffect(() => {
    sound.on("play", () => setIsReading(true));
    sound.on("end", () => setIsReading(false));
    sound.on("stop", () => setIsReading(false));
  }, []);

  return (
    <>
      <SoundButton2
        className="absolute top-[110px] left-[710px] animate__animated animate__bounceIn animate__delay-2s z-10"
        active={isReading}
        onClick={() => {
          if (isReading) sound.stop();
          else setSoundId(sound.play());
        }}
      />

      <ContentContainer>
        <div className="relative w-[1460px]">
          <div
            className={`bg-[#f4ede1] rounded-[50px] px-12 pt-6 pb-4 text-[55px] leading-[82px] tracking-[-1px] break-keep ${isReading ? "text-reading" : ""
              }`}
          >
            둘 이상의 한자가 모여 한자 어휘를 형성할 때, 한자 사이의 결합 관계를
            단어의 짜임이라고 한다. 단어의 짜임에는 병렬 관계, 수식 관계, 주술
            관계, 술목 관계, 술보 관계 등이 있다.
          </div>

          <div className="w-[1500px]">
            <img src={IMAGE1.src} className="mt-10" />
          </div>
        </div>
      </ContentContainer>
    </>
  );
};
