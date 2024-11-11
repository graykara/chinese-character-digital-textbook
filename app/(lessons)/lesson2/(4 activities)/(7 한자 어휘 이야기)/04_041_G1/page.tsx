"use client";

import { SoundButton2 } from "@/app/components/buttons/sound-button2";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useContext, useEffect, useState } from "react";
import { Howl } from "howler";
import IMAGE2 from "./image2.png";
import { WordStoryHeader } from "@/app/components/headers/word-story-header";
import BACKGROUND1 from "@/app/bgpng_temp/4/중등한문_합쳐서 만든 한자23.png";
import BACKGROUND2 from "@/app/bgpng_temp/4/중등한문_합쳐서 만든 한자24.png";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  const [isReading, setIsReading] = useState(false);
  const [soundId, setSoundId] = useState<number | null>(null);
  const sound = new Howl({
    src: "/sound/2/41_story.mp3",
    onplay: () => setIsReading(true),
    onend: () => setIsReading(false),
  });
  [
    { text: "‘넓고 큰 바다’를 ‘海洋’이라고 일컫는다.", start: 0, end: 4432 },
    {
      text: "여기서 ‘海’와 ‘洋’ 모두 바다를 뜻하지만, 그 쓰임에는 차이가 있다.",
      start: 4432,
      end: 10320,
    },
    {
      text: "동해, 서해, 지중해 등의 용례에서 확인되듯이 ‘~海’는 육지와 접해 있는 바다를 가리킬 때 사용하고, ‘~洋’은 태평양, 대서양, 인도양 등에서 확인되듯이 육지와 멀리 떨어진 큰 바다를 가리킬 때 사용한다.",
      start: 10320,
      end: 27794,
    },
  ];

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
      {step === 1 && (
        <>
          <SoundButton2
            className="absolute top-[110px] left-[1460px] animate__animated animate__bounceIn animate__delay-2s z-10"
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
                ‘넓고 큰 바다’를 ‘
                <span className="font-haeseo text-[60px] leading-tight">
                  海洋
                </span>
                ’이라고 일컫는다. 여기서 ‘
                <span className="font-haeseo text-[60px] leading-tight">
                  海
                </span>
                ’와 ‘
                <span className="font-haeseo text-[60px] leading-tight">
                  洋
                </span>
                ’
                <br />
                모두 바다를 뜻하지만, 그 쓰임에는 차이가 있다. 동해, 서해,
                <br />
                지중해 등의 용례에서 확인되듯이 ‘~
                <span className="font-haeseo text-[60px] leading-tight">
                  海
                </span>
                ’는 육지와 접해 있는 <br />
                바다를 가리킬 때 사용하고, ‘~
                <span className="font-haeseo text-[60px] leading-tight">
                  洋
                </span>
                ’은 태평양, 대서양, 인도양
                <br />
                등에서 확인되듯이 육지와 멀리 떨어진 큰 바다를 가리킬 때<br />
                사용한다.
                <br />
              </div>
            </div>
          </ContentContainer>
        </>
      )}
      {step === 2 && (
        <>
          <ContentContainer>
            <div className="relative -top-10">
              <img src={IMAGE2.src} />
            </div>
          </ContentContainer>
        </>
      )}

      <StepContainer maxStep={2} />
      {/* <img src={BACKGROUND2.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
}
