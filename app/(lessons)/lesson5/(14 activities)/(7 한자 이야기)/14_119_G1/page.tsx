"use client";

import { SoundButton2 } from "@/app/components/buttons/sound-button2";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useEffect, useState } from "react";
import { Howl } from "howler";
import IMAGE1 from "./image.png";
import { WordStoryHeader } from "@/app/components/headers/word-story-header";
import BACKGROUND1 from "@/app/bgpng_temp/14/중등한문_사람만 귀한가요21.png"; //20, 21
import { CultureHeader } from "@/app/components/headers/culture-header";

export default function Page() {
  const [step, setStep] = useState(1);

  const [isReading, setIsReading] = useState(false);
  const sounds = ["/sound/5/119_story-1.mp3", "/sound/5/119_story-2.mp3"];

  const sound = new Howl({
    src: sounds[step - 1],
    onplay: () => setIsReading(true),
    onend: () => setIsReading(false),
  });
  [
    { text: "우리나라를 비롯한 세계 여러 나라들은 동물의 복지·보호·학대 방지를 위한 관련 법을 만들어 시행하고 있다.", start: 0, end: 9432 },
    { text: "그리고 최근에는 동물의 건강이나 안전 및 습성 존중 등 복지 요소를 강화하는 추세에 있다.", start: 9432, end: 17371 },
  ];
  [
    { text: "이는 수십 년에 걸쳐 반려동물을 키우는 가정이 크게 늘었으나 성숙한 동물 관리 문화가 정착되지 못하여 동물을 학대하거나 유기하는 등의 사례 또한 늘어 사회 문제가 되기 때문이다.", start: 0, end: 14206 },
    { text: "이뿐만 아니라 실험동물, 전시 동물, 야생 동물 등의 관리 및 처우 문제에 대한 대책도 필요한 만큼 동물 보호, 복지 관련 법 준수를 바탕으로 동물과 사람이 공존해야 한다는 사회적 인식이 필요하다.", start: 14206, end: 29988 },
  ];

  useEffect(() => {
    return () => {
      sound.stop();
    };
  }, []);

  return (
    <>
      <CultureHeader title={"생명 존중의 첫걸음, 동물 보호와 복지에 관한 법"} />

      <SoundButton2
        className="absolute top-[110px] left-[1370px] animate__animated animate__bounceIn animate__delay-2s z-10"
        active={isReading}
        onClick={() => sound.play()}
      />

      <ContentContainer>
        {step === 1 && (
          <div className="absolute top-[55px] w-[1460px]">
            <div
              className={`bg-[#f4ede1] rounded-[50px] w-[1065px] pl-14 pr-2 pt-8 -mt-4 pb-8 text-[45px] leading-[70px] tracking-tight break-keep transition-colors duration-[2000ms] ${isReading ? "text-reading" : ""
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
          <div className="absolute top-[55px] w-[1460px]">
            <div
              className={`bg-[#f4ede1] rounded-[50px] w-[1065px] pl-14 pr-4 pt-8 -mt-4 pb-8 text-[45px] leading-[70px] tracking-tight break-keep transition-colors duration-[2000ms] ${isReading ? "text-reading" : ""
                }`}
            >
              이는 수십 년에 걸쳐 반려동물을 키우는 가정이 크게 늘었으나 성숙한 동물 관리 문화가 정착되지 못하여 동물을 학대하거나 유기하는 등의 사례 또한 늘어 사회 문제가 되기 때문이다. 이뿐만 아니라 실험동물, 전시 동물, 야생동물 등의 관리 및 처우 문제에 대한 대책도 필요한 만큼 동물 보호, 복지 관련 법 준수를 바탕으로 동물과 사람이 공존해야 한다는 사회적 인식이 필요하다.
            </div>

          </div>

        )}
        <div className="absolute top-12 mr-20 right-0">
          <img src={IMAGE1.src} />
        </div>
      </ContentContainer>

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
