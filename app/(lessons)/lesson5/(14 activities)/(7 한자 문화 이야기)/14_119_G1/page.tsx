"use client";

import { SoundButton2 } from "@/app/components/buttons/sound-button2";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useEffect, useState } from "react";
import { Howl } from "howler";
import IMAGE1 from "./image.png";
import { WordStoryHeader } from "@/app/components/headers/word-story-header";
import BACKGROUND1 from "@/app/bgpng_temp/14/중등한문_사람만 귀한가요20.png";
import BACKGROUND2 from "@/app/bgpng_temp/14/중등한문_사람만 귀한가요21.png";
import { CultureHeader } from "@/app/components/headers/culture-header";

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
      <CultureHeader title={"청렴한 관리 황희 정승"} />

      <SoundButton2
        className="absolute top-[110px] left-[890px] animate__animated animate__bounceIn animate__delay-2s z-10"
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
              우리나라를 비롯한 세계 여러 나라들은 동물의 복지·보호
              <br />
              ·학대 방지를 위한 관련 법을 만들어 시행하고 있다.
              <br />
              그리고 최근에는 동물의 건강이나 안전 및 습성 존중 등<br />
              복지 요소를 강화하는 추세에 있다.
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="-mt-[330px] w-[1460px]">
            <div
              className={`bg-[#f4ede1] rounded-[50px] px-14 pt-8 pb-8 text-[45px] leading-[70px] tracking-[-1.5px] break-keep transition-colors duration-[2000ms] ${
                isReading ? "text-reading" : ""
              }`}
            >
              솜이 삐져나온 관복을 입은 황희의 모습을 본 세종이 그 이유를 듣고
              한 나라의 재상이 어찌 관복 한 벌로 겨울을 나겠냐며 비단을 내리도록
              하였다. 그러자 황희는 “지금 이 나라 백성들은 연이은 흉년에 헐벗고
              굶주리고 있습니다. 그런데 어찌 정승으로서 몸에 비단을
              걸치겠습니까? 이 솜옷 한 벌로 충분합니다.” 라고 말하였다. 이에
              세종은 비단을 내리라는 명을 거두었다.
            </div>
            <div className="absolute bottom-20 mr-20 right-0">
              <img src={IMAGE1.src} />
            </div>
          </div>
        )}
      </ContentContainer>

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
      <img
        src={BACKGROUND2.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
