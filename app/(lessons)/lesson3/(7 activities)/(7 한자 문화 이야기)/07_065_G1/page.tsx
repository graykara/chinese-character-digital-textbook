"use client";

import { ReadingButton } from "@/app/components/buttons/reading-button";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useEffect, useState } from "react";
import { Howl } from "howler";
import IMAGE2 from "./image2.png";
import { CultureHeader } from "@/app/components/headers/culture-header";
import BACKGROUND1 from "@/app/bgpng_temp/7/중등한문_언어생활 속의 성어127.png"

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>
      <CultureHeader title={"천리마를 알아보았던 백락"} />

      <ContentContainer>
        {step === 1 && <Step1 />}
        {step === 2 && (
          <div className="relative">
            <img src={IMAGE2.src} />
          </div>
        )}
      </ContentContainer>

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
      <img src={BACKGROUND1.src} className="absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}

const Step1 = () => {
  const [isReading, setIsReading] = useState(false);

  const sound = new Howl({
    src: "/sound/3/65_story.mp3",
    onplay: () => setIsReading(true),
    onend: () => setIsReading(false),
  });

  useEffect(() => {
    return () => {
      sound.stop();
    };
  }, []);

  return (
    <div className="relative">
      <ReadingButton
        className="absolute right-0 -top-[100px]"
        active={isReading}
        onClick={() => sound.play()}
      />
      <div
        className={`bg-[#f4ede1] rounded-3xl p-10 ${
          isReading ? "text-reading" : ""
        }`}
      >
        중국 춘추 시대에 손양(<span className="font-haeseo">孫陽</span>)이라는
        사람은 *<span className="font-haeseo">千里馬</span>(천리마)를 알아보는
        <br />
        재주를 가졌기에, 옥황상제의 *<span className="font-haeseo">天馬</span>
        (천마)를 관장하는 자리의 이름인
        <br />
        ‘백락(<span className="font-haeseo">伯樂</span>)’으로 불렸다. 그는 병에
        걸려 털이 빠지고 삐쩍 마른 말<br />
        에게서도 숨은 능력과 자질을 알아보는 뛰어난 안목을 가지고 있었다.
        <br />
        훗날 그와 관련하여 “세상에 백락이 있고 나서야 천리마가 있는 것이다.
        <br />
        천리마는 항상 있지만, 백락은 항상 있는 것은 아니다.[한유,『잡설(
        <span className="font-haeseo">雜說</span>)』]”
        <br />
        라는 말이 남아 있을 정도다.이와 같은 백락의 안목은 지금도 여러 사람
        <br />
        중에 재주가 뛰어난 사람을 가려내는 능력으로 비유되기도 한다.
      </div>
    </div>
  );
};
