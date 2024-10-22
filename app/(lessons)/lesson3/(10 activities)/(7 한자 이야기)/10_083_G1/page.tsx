"use client";

import { SoundButton2 } from "@/app/components/buttons/sound-button2";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useEffect, useState } from "react";
import { Howl } from "howler";
import VIDEO from "./video.png";
import VIDEO2 from "./video2.png";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import BACKGROUND1 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕25.png";
import BACKGROUND2 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕26.png";
import { CultureHeader } from "@/app/components/headers/culture-header";
import { VideoThumbnail } from "@/app/components/video-thumbnail";

export default function Page() {
  const [step, setStep] = useState(1);

  const [isReading, setIsReading] = useState(false);
  const sounds = ["/sound/5/113_story-1.mp3", "/sound/5/113_story-2.mp3"];

  const sound = new Howl({
    src: sounds[step - 1],
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
      <CultureHeader title={"우리 선조들의 이야기에서 유래한 한자 성어"} />

      <SoundButton2
        className="absolute top-[110px] left-[980px] animate__animated animate__bounceIn animate__delay-2s z-10"
        active={isReading}
        onClick={() => sound.play()}
      />

      <ContentContainer>
        {step === 1 && (
          <div className="relative -top-[95px] w-[1460px]">
            <div
              className={`bg-[#f4ede1] rounded-[50px] px-14 pt-8 pb-8 text-[45px] leading-[70px] tracking-[-1.5px] break-keep transition-colors duration-[2000ms] ${
                isReading ? "text-reading" : ""
              }`}
            >
              우리 선조들의 이야기에서 유래한 대표적인 성어로는 ‘함흥차사(
              <span className="font-haeseo">咸興差使</span>)’와 ‘계란유골(
              <span className="font-haeseo">鷄卵有骨</span>)’이 있는데 그 유래를
              소개하면 다음과 같다.
            </div>

            <div className="grid grid-cols-[500px__1fr] gap-5 mt-[50px]">
              <VideoThumbnail
                thumbnail={VIDEO.src}
                video=""
                width={486}
                height={261}
              />
              <img src={IMAGE1.src} />
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="-mt-[330px] w-[1460px]">
            <div className="grid grid-cols-[1fr__500px] items-center gap-5 mt-[50px]">
              <img src={IMAGE2.src} />
              <VideoThumbnail
                thumbnail={VIDEO2.src}
                video=""
                width={486}
                height={261}
              />
            </div>
          </div>
        )}
      </ContentContainer>

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
