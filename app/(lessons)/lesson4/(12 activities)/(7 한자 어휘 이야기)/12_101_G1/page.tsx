"use client";

import { SoundButton2 } from "@/app/components/buttons/sound-button2";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useEffect, useState } from "react";
import { Howl } from "howler";
import IMAGE2 from "./image2.png";
import QR from "./qr.png";
import { WordStoryHeader } from "@/app/components/headers/word-story-header";
import { CultureHeader } from "@/app/components/headers/culture-header";
import BACKGROUND1 from "@/app/bgpng_temp/12/중등한문_나에게 힘이 되는 글29.png";


export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>
      <CultureHeader title="정조의 인재 등용 산실, 규장각" />

      {step === 1 && <Step1 />}
      {step === 2 && (
        <>
          <img src={QR.src} className="absolute right-[80px] top-[80px]" />
          <ContentContainer className="-top-10 -left-1">
            <img src={IMAGE2.src} />
          </ContentContainer>
        </>
      )}

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
      <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}

const Step1 = () => {
  const [isReading, setIsReading] = useState(false);

  const sound = new Howl({
    src: "/sound/4/101_story.mp3",
    onplay: () => setIsReading(true),
    onend: () => setIsReading(false),
  });
  [
    { text: "규장각은 정조가 즉위한 1776년에 창설된 왕실 도서관이자 학문 연구소이다.", start: 0, end: 7950 },
    { text: "정조는 신분과 당파에 관계없이 문예와 학식이 뛰어난 이를 규장각 실무자로 선발하였는데, “천하에는 하나의 재능도 없는 사람은 없으니 만약 많은 사람을 모아 각각 그의 장점을 써서 재능을 서로 통용하게 한다면, 세상에는 버려진 사람이 없을 것이고 사람은 재능을 버리는 일이 없을 것이다.”라는 신념을 가지고 있었기 때문이다.", start: 7950, end: 32780 },
    { text: "당시 서자라는 신분적 한계에도 규장각을 통해 재능을 펼친 학자로는 이덕무, 유득공, 박제가 등이 있다.", start: 32780, end: 42762 },
  ];

  useEffect(() => {
    return () => {
      sound.stop();
    };
  }, []);

  return (
    <>
      <SoundButton2
        className="absolute left-[1050px] top-[110px]"
        active={isReading}
        onClick={() => sound.play()}
      />
      <ContentContainer>
        <div className="relative -top-[70px] w-[1460px]">
          <div
            className={`bg-[#f4ede1] rounded-[50px] pl-9 pr-2 py-6 text-[45px] leading-[65px] tracking-tight break-keep transition-colors duration-[2000ms] ${isReading ? "text-reading" : ""
              }`}
          >
            규장각은 정조가 즉위한 1776년에 창설된 왕실 도서관이자 학문
            연구소이다.
            <br />
            정조는 신분과 당파에 관계없이 문예와 학식이 뛰어난 이를 규장각
            실무자로
            <br />
            선발하였는데, “천하에는 하나의 재능도 없는 사람은 없으니 만약 많은
            사람을
            <br />
            모아 각각 그의 장점을 써서 재능을 서로 통용하게 한다면, 세상에는
            버려진 사람이
            <br />
            없을 것이고 사람은 재능을 버리는 일이 없을 것이다.”라는 신념을
            가지고 있었기
            <br />
            때문이다. 당시 서자라는 신분적 한계에도 규장각을 통해 재능을 펼친
            학자로는
            <br />
            이덕무, 유득공, 박제가 등이 있다.
          </div>
        </div>
      </ContentContainer>
    </>
  );
};
