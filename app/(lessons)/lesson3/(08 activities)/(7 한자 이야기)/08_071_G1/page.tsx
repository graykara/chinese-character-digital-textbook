"use client";

import { SoundButton2 } from "@/app/components/buttons/sound-button2";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useContext, useEffect, useState } from "react";
import { Howl } from "howler";
import IMAGE2 from "./image2.png";
import BACKGROUND1 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어229.png"; //228, 229
import { CultureHeader } from "@/app/components/headers/culture-header";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  const [isReading, setIsReading] = useState(false);
  const sounds = ["/sound/3/71_story.mp3", ""];
  const [soundId, setSoundId] = useState<number | null>(null);

  const sound = new Howl({
    src: sounds[step - 1],
    onplay: () => setIsReading(true),
    onend: () => setIsReading(false),
  });
  [
    {
      text: "한·중·일 삼국은 지리적으로 매우 가깝고 ‘한자 문화권’이라는 공통점이 있는 만큼 성어를 사용하는 문화 역시 비슷하다.",
      start: 0,
      end: 10308,
    },
    {
      text: "다만 각 나라의 문화적 특성, 한자 사용의 차이에 따라 성어를 표현하는 방식이 다르게 나타나기도 한다.",
      start: 10308,
      end: 18830,
    },
    {
      text: "이는 ‘결심이 굳지 못함.’을 뜻하는 성어에서도 확인해 볼 수 있다.",
      start: 18830,
      end: 24868,
    },
  ];

  useEffect(() => {
    return () => {
      sound.stop();
    };
  }, []);

  return (
    <>
      <CultureHeader title={"같지만 다른 표현, 한·중·일 성어 엿보기"} />

      {step === 1 && (
        <SoundButton2
          className="absolute top-[110px] left-[1210px] animate__animated animate__bounceIn animate__delay-2s z-10"
          active={isReading}
          onClick={() => {
            if(isReading) sound.stop();
            else setSoundId(sound.play());
          }}
        />
      )}

      <ContentContainer>
        {step === 1 && (
          <div className="absolute top-[105px] w-[1460px]">
            <div
              className={`bg-[#f4ede1] rounded-[50px] px-20 py-[100px] -mt-4 text-[55px] leading-[85px] tracking-tight break-keep transition-colors duration-[2000ms] ${
                isReading ? "text-reading" : ""
              }`}
            >
              한·중·일 삼국은 지리적으로 매우 가깝고 ‘한자 문화권’이라는 공통점이 있는 만큼 성어를 사용하는 문화 역시 비슷하다.
              <br />
              다만 각 나라의 문화적 특성, 한자 사용의 차이에 따라 성어를 표현하는 방식이 다르게 나타나기도 한다. 이는 ‘결심이 굳지 못함.’을 뜻하는 성어에서도 확인해 볼 수 있다.
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="absolute top-[105px] w-[1460px]">
            <img src={IMAGE2.src} className="mt-10 ml-5" />
          </div>
        )}
      </ContentContainer>

      <StepContainer maxStep={2} />
      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
