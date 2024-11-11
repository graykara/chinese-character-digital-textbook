"use client";

import { SoundButton2 } from "@/app/components/buttons/sound-button2";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useContext, useEffect, useState } from "react";
import { Howl } from "howler";
import IMAGE2 from "./image2.png";
import { CultureHeader } from "@/app/components/headers/culture-header";
import BACKGROUND1 from "@/app/bgpng_temp/7/중등한문_언어생활 속의 성어127.png";
import BACKGROUND2 from "@/app/bgpng_temp/7/중등한문_언어생활 속의 성어128.png";
import BACKGROUND3 from "@/app/bgpng_temp/7/중등한문_언어생활 속의 성어129.png";
import BACKGROUND4 from "@/app/bgpng_temp/7/중등한문_언어생활 속의 성어130.png";
import { AdditionalButton } from "@/app/components/buttons/additional-button";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  return (
    <>
      <CultureHeader title={"천리마를 알아보았던 백락"} />

      {step === 1 && <Step1 />}
      {step === 2 && (
        <ContentContainer>
          <div className="relative -top-5">
            <img src={IMAGE2.src} />
          </div>
        </ContentContainer>
      )}

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
      {/* <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
}

const Step1 = () => {
  const [isReading, setIsReading] = useState(false);
  const [soundId, setSoundId] = useState<number | null>(null);
  const sound = new Howl({
    src: "/sound/3/65_story.mp3",
    onplay: () => setIsReading(true),
    onend: () => setIsReading(false),
  });
  [
    {
      text: "중국 춘추 시대에 손양(孫陽)이라는 사람은 千里馬 (천리마)를 알아보는 재주를 가졌기에, 옥황상제의 天馬 (천마)를 관장하는 자리의 이름인 ‘백락(伯樂)’으로 불렸다.",
      start: 0,
      end: 11222,
    },
    {
      text: "그는 병에 걸려 털이 빠지고 삐쩍 마른 말에게서도 숨은 능력과 자질을 알아보는 뛰어난 안목을 가지고 있었다.",
      start: 11222,
      end: 19600,
    },
    {
      text: "훗날 그와 관련하여 “세상에 백락이 있고 나서야 천리마가 있는 것이다.",
      start: 19600,
      end: 25536,
    },
    {
      text: "천리마는 항상 있지만, 백락은 항상 있는 것은 아니다.[한유, 『잡설(雜說)』]”라는 말이 남아 있을 정도다.",
      start: 25536,
      end: 31992,
    },
    {
      text: "이와 같은 백락의 안목은 지금도 여러 사람 중에 재주가 뛰어난 사람을 가려내는 능력으로 비유되기도 한다.",
      start: 31992,
      end: 40333,
    },
  ];

  useEffect(() => {
    return () => {
      sound.stop();
    };
  }, []);

  return (
    <>
      <SoundButton2
        className="absolute top-[115px] left-[980px] animate__animated animate__bounceIn animate__delay-2s"
        active={isReading}
        onClick={() => {
          soundId && sound.stop(soundId);
          setSoundId(sound.play());
        }}
      />
      <ContentContainer>
        <div className="relative w-[1460px] -top-8">
          <div
            className={`bg-[#f4ede1] rounded-[50px] px-12 pt-6 pb-4 text-[50px] leading-[78px] tracking-tighter break-keep ${
              isReading ? "text-reading" : ""
            }`}
          >
            중국 춘추 시대에 손양(
            <span className="font-haeseo text-[54px] leading-tight">孫陽</span>
            )이라는 사람은 *
            <span className="font-haeseo text-[54px] leading-tight">
              千里馬
            </span>
            (천리마)를 알아보는 재주를 가졌기에, 옥황상제의 *
            <span className="font-haeseo text-[54px] leading-tight">天馬</span>
            (천마)를 관장하는 자리의 이름인 ‘백락(
            <span className="font-haeseo text-[54px] leading-tight">伯樂</span>
            )’으로 불렸다. 그는 병에 걸려 털이 빠지고 삐쩍 마른 말에게서도 숨은
            능력과 자질을 알아보는 뛰어난 안목을 가지고 있었다. 훗날 그와
            관련하여 “세상에 백락이 있고 나서야 천리마가 있는 것이다. 천리마는
            항상 있지만, 백락은 항상 있는 것은 아니다. [한유,『잡설(
            <span className="font-haeseo text-[54px] leading-tight">雜說</span>
            )』]” 라는 말이 남아 있을 정도다. 이와 같은 백락의 안목은 지금도 여러
            사람 중에 재주가 뛰어난 사람을 가려내는 능력으로 비유되기도 한다.
          </div>

          <AdditionalButton
            className="absolute left-[1100px] -top-[10px] w-10 h-10"
            additional={
              <p>
                •<span className="font-haeseo">千里馬</span>
                <span className="font-bold">(천리마)</span>: 하루에 천 리를 달릴
                수 있는 좋은 말.
              </p>
            }
          />
          <AdditionalButton
            className="absolute left-[930px] top-[73px] w-10 h-10"
            additional={
              <p>
                •<span className="font-haeseo">天馬</span>
                <span className="font-bold">(천마)</span>: 옥황상제가 타고
                다닌다는 말.
              </p>
            }
          />
        </div>
      </ContentContainer>
    </>
  );
};
