"use client";

import { SoundButton2 } from "@/app/components/buttons/sound-button2";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useEffect, useState } from "react";
import { Howl } from "howler";
import VIDEO from "./video.png";
import VIDEO2 from "./video2.png";
import IMAGE1 from "./text1.png";
import IMAGE2 from "./text2.png";
import BACKGROUND1 from "@/app/bgpng_temp/10/중등한문_이야기가 담긴 성어225.png";
import BACKGROUND2 from "@/app/bgpng_temp/10/중등한문_이야기가 담긴 성어226.png";
import { CultureHeader } from "@/app/components/headers/culture-header";
import { VideoThumbnail } from "@/app/components/video-thumbnail";

export default function Page() {
  const [step, setStep] = useState(1);

  const [isReading, setIsReading] = useState(false);
  const [soundId, setSoundId] = useState<number | null>(null);
  const sound = new Howl({
    src: sounds[step - 1],
    onplay: () => setIsReading(true),
    onend: () => setIsReading(false),
  });
  [
    {
      text: "우리 선조들의 이야기에서 유래한 대표적인 성어로는 ‘함흥차사(咸興差使)’와 ‘계란유골(鷄卵有骨)’이 있는데 그 유래를 소개하면 다음과 같다.",
      start: 0,
      end: 10700,
    },
    {
      text: "태종 이방원이 즉위한 후, 이성계가 함흥에 있을 때 자신을 한양으로 데려가기 위해 온 차사들을 죽이거나 가두어 돌려보내지 않은 것에서 유래하였다.",
      start: 10700,
      end: 22604,
    },
    {
      text: "세종 대왕이 황희(黃喜)의 검소함을 안타깝게 여겨 하루 동안 숭례문으로 들어오는 물건을 모두 가져다주라고 하였다.",
      start: 22604,
      end: 31586,
    },
    {
      text: "그러나 이날은 큰비가 와서 들어온 물건이 달걀 한 꾸러미뿐이었는데 이것 마저 모두 곯아서 먹을 수가 없었던 것에서 유래하였다.",
      start: 31586,
      end: 42553,
    },
  ];

  const sounds = ["/sound/3/83_story_1.mp3", "/sound/3/83_story_2.mp3"];

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
        className="absolute top-[110px] left-[1320px] animate__animated animate__bounceIn animate__delay-2s z-10"
        active={isReading}
        onClick={() => {
          soundId && sound.stop(soundId);
          setSoundId(sound.play());
        }}
      />

      <ContentContainer>
        {step === 1 && (
          <div className="absolute top-[105px] w-[1460px]">
            <div
              className={`bg-[#f4ede1] rounded-[50px] pl-16 pr-4 pt-10 -mt-4 pb-10 text-[45px] leading-[65px] tracking-tight break-keep transition-colors duration-[2000ms] ${
                isReading ? "text-reading" : ""
              }`}
            >
              우리 선조들의 이야기에서 유래한 대표적인 성어로는 ‘함흥차사(
              <span className="font-haeseo">咸興差使</span>)’와 ‘계란유골(
              <span className="font-haeseo">鷄卵有骨</span>)’이 있는데 그 유래를
              소개하면 다음과 같다.
            </div>

            <div className="grid grid-cols-[500px__1fr] gap-5 mt-[85px] ml-[35px]">
              <VideoThumbnail
                thumbnail={VIDEO.src}
                video=""
                width={490}
                height={265}
              />
              <div>
                <img src={IMAGE1.src} className="-mt-8 ml-16" />
                <p className="ml-[70px] mt-6 text-[40px] text-[#1b1b1b] tracking-tight break-keep leading-[55px] ">
                  태종 이방원이 즉위한 후, 이성계가 함흥에 있을 때 자신을
                  한양으로 데려가기 위해 온 차사들을 죽이거나 가두어 돌려보내지
                  않은 것에서 유래하였다.
                </p>
                <p className="ml-[70px] mt-1 text-[30px] text-[#1b1b1b] tracking-tight break-keep leading-[55px] ">
                  <span className="text-[#86482e] text-[40px]">*</span> 차사:
                  임금이 중요한 임무를 위하여 파견하던 임시 벼슬.
                </p>
              </div>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="absolute top-[115px] w-[1460px] left-[50px] bg-transparent">
            <div className="grid grid-cols-[1fr__500px] items-center gap-8 ml-1">
              <div>
                <img src={IMAGE2.src} />
                <p className="ml-1 mt-11 text-[40px] text-[#1b1b1b] tracking-tight break-keep leading-[55px] ">
                  세종 대왕이 황희(
                  <span className="font-haeseo text-[40px] leading-tight">
                    黃喜
                  </span>
                  )의 검소함을 안타깝게 여겨 하루 동안 숭례문으로 들어오는
                  물건을 모두 가져다주라고 하였다. 그러나 이날은 큰비가 와서
                  들어온 물건이 달걀 한 꾸러미뿐이었는데 이것 마저 모두 곯아서
                  먹을 수가 없었던 것에서 유래하였다.
                </p>
                <p className="ml-1 mt-1 text-[30px] text-[#1b1b1b] tracking-tight break-keep leading-[35px] ">
                  <span className="text-[#86482e] text-[40px]">*</span> ‘골(
                  <span className="font-haeseo text-[30px] leading-tight">
                    骨
                  </span>
                  )’자는 ‘곯았다’의 ‘곯’에 해당하는 한자음이 없기 때문에 비슷한
                  발음의
                  <br />
                  <span className="ml-[22px]">
                    ‘골’을 사용한 것이다. 따라서 본래 뜻(뼈)과 관계없이 쓰였다.
                  </span>
                </p>
              </div>
              <VideoThumbnail
                thumbnail={VIDEO2.src}
                video=""
                width={490}
                height={265}
              />
            </div>
          </div>
        )}
      </ContentContainer>

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
      <img
        src={step === 1 ? BACKGROUND1.src : BACKGROUND2.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
