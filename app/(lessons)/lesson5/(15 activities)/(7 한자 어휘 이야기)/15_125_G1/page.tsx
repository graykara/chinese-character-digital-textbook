"use client";

import { SoundButton2 } from "@/app/components/buttons/sound-button2";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useContext, useEffect, useState } from "react";
import { Howl } from "howler";
import IMAGE from "./image.png";
import BACKGROUND1 from "@/app/bgpng_temp/15/중등한문_돌에 꽂힌 화살23.png"; //22, 23
import { CultureHeader } from "@/app/components/headers/culture-header";
import { PageInfoContext } from "@/app/utils/page-info";

const sound1 = new Howl({
  src: "/sound/5/125_story-1.mp3",
});
const sound2 = new Howl({
  src: "/sound/5/125_story-2.mp3",
});

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  const [isReading, setIsReading] = useState(false);

  useEffect(() => {
    sound1.on("play", () => setIsReading(true));
    sound1.on("end", () => setIsReading(false));
    sound1.on("stop", () => setIsReading(false));

    sound2.on("play", () => setIsReading(true));
    sound2.on("end", () => setIsReading(false));
    sound2.on("stop", () => setIsReading(false));
  }, []);

  [
    {
      text: "선천적인 재능보다 중요한 것은 어떤 일을 이루고자 하는 진심 어린 의지이다.",
      start: 0,
      end: 7030,
    },
    {
      text: "그리고 마음을 집중하고 몰두하는 것은 전적으로 나 자신에게 달렸는데 『맹자』에 이와 관련된 이야기가 있다.",
      start: 7030,
      end: 16535,
    },
  ];
  [
    { text: "어느 날 맹자가 말했다.", start: 0, end: 3004 },
    {
      text: "“최고의 바둑 고수인 혁추가 두 사람에게 바둑을 가르치는데, 한 사람은 혁추의 말에 집중하여 몰두하고, 다른 한 사람은 겉으로만 듣고 마음 한편으로 사냥에 나갈 생각만 한다면 똑같이 바둑을 배운다고 해도 그 결과는 서로 다를 것이다. 이것은 다른 생각을 한 사람이 집중한 사람보다 지혜가 부족해서가 아닐 것이다.”",
      start: 3004,
      end: 28316,
    },
  ];

  return (
    <>
      <CultureHeader title={"나로부터 나오는 집중하는 마음"} />

      <SoundButton2
        className="absolute top-[110px] left-[1040px] animate__animated animate__bounceIn animate__delay-2s z-10"
        active={isReading}
        onClick={() => {
          if (isReading) {
            sound1.stop();
            sound2.stop();
          } else {
            if (step === 1) sound1.play();
            else sound2.play();
          }
        }}
      />

      <ContentContainer>
        {step === 1 && (
          <div className="absolute top-[55px] w-[1460px]">
            <div
              className={`bg-[#f4ede1] rounded-[50px] pl-14 pr-2 pt-8 -mt-4 pb-8 text-[45px] leading-[70px] tracking-tight break-keep transition-colors duration-[2000ms] ${isReading ? "text-reading" : ""
                }`}
            >
              선천적인 재능보다 중요한 것은 어떤 일을 이루고자 하는 진심 어린
              의지이다. 그리고 마음을 집중하고 몰두하는 것은 전적으로 나
              자신에게 달렸는데 『맹자』에 이와 관련된 이야기가 있다.
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="-mt-[330px] w-[1460px]">
            <div
              className={`bg-[#f4ede1] rounded-[50px] pl-14 pr-4 pt-8 pb-8 text-[45px] leading-[70px] tracking-tight break-keep transition-colors duration-[2000ms] ${isReading ? "text-reading" : ""
                }`}
            >
              어느 날 맹자가 말했다. “최고의 바둑 고수인 혁추가 두 사람에게
              바둑을 가르치는데, 한 사람은 혁추의 말에 집중하여 몰두하고, 다른
              한 사람은 겉으로만 듣고 마음 한편으로 사냥에 나갈 생각만 한다면
              똑같이 바둑을 배운다고 해도
              <br />그 결과는 서로 다를 것이다. 이것은 다른 생각을 한 사람이
              집중한 사람보다 지혜가 부족해서가 아닐 것이다.” 『맹자』
            </div>
          </div>
        )}
        <div className="absolute bottom-28 mr-24 right-0">
          <img src={IMAGE.src} />
        </div>
      </ContentContainer>

      <StepContainer maxStep={2} />
      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
