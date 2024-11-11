"use client";

import { HeaderContainer } from "@/app/components/headers/header-container";
import HEADER from "./header.png";
import IMAGE from "./image.png";
import IMAGE2 from "./image2.png";
import TITLE from "./title.png";
import { ContentContainer } from "@/app/components/content-container";
import { AdditionalDataButton } from "@/app/components/buttons/additional-data-button";
import { SoundButton2 } from "@/app/components/buttons/sound-button2";
import { StepContainer } from "@/app/components/step-container";
import { useContext, useEffect, useState } from "react";
import { SmartButton } from "@/app/components/buttons/smart-button";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { PageInfoContext } from "@/app/utils/page-info";
import BACKGROUND1 from "@/app/bgpng_temp/2/중등한문_한자,얼마나 알아16.png";
import BACKGROUND2 from "@/app/bgpng_temp/2/중등한문_한자,얼마나 알아17.png";

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("모르는 한자는 어떻게 찾을까?");

  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  const [isReading, setIsReading] = useState(false);
  const [soundId, setSoundId] = useState<number | null>(null);
  const sound = new Howl({
    src: "/sound/1/19-2.mp3",
    onplay: () => setIsReading(true),
    onend: () => setIsReading(false),
  });
  useEffect(() => {
    sound.stop();
  }, []);

  useEffect(() => {
    return () => {
      sound.stop();
    };
  }, []);

  const [showAnswer, setShowAnswer] = useState(false);
  const answers = ["휴", "바다", "언", "말씀"];
  const [values, setValues] = useState(["", "", "", ""]);

  return (
    <>
      <HeaderContainer className="mt-10 mb-10">
        <img src={HEADER.src} alt="header" />
      </HeaderContainer>

      {step === 2 ? (
        <SmartButton
          link="https://hanja.dict.naver.com"
          className="animate__animated animate__bounceIn animate__delay-1s absolute right-[234px] top-[230px] z-10"
        />
      ) : null}

      <ContentContainer className="!justify-start pt-[45px] ml-[175px]">
        <div className="relative w-full mb-10">
          <img src={TITLE.src} alt="title" className="-ml-5" />
          <SoundButton2
            active={isReading}
            onClick={() => {
              soundId && sound.stop(soundId);
              setSoundId(sound.play());
            }}
            className="absolute top-1/2 -translate-y-1/2 left-[400px]"
          />
        </div>
        <p className="w-[1500px] left-0 -mt-5 text-[50px] tracking-tighter leading-[68px] break-keep">
          디지털 사전의 검색창을 이용하여 한자를 손쉽게 검색할 수 있다.
        </p>
        {step === 1 ? (
          <div className="w-full flex justify-center mt-[110px] -ml-14">
            <img src={IMAGE.src} />
          </div>
        ) : (
          <div className="w-full flex justify-center mt-[45px] -ml-[110px]">
            <div className="relative">
              <img src={IMAGE2.src} />

              {!values[0] && !showAnswer ? (
                <img
                  src="/ui/textarea-pen.png"
                  className="absolute pointer-events-none"
                  style={{
                    height: 48,
                    top: 295,
                    left: 125,
                  }}
                />
              ) : null}
              <input
                value={showAnswer ? answers[0] : values[0]}
                onChange={(e) =>
                  setValues(
                    values.map((_, index) =>
                      index === 0 ? e.currentTarget.value : _,
                    ),
                  )
                }
                className={`absolute left-[120px] bottom-[30px] w-[100px] bg-transparent text-center text-[50px] ${
                  showAnswer ? "text-answer" : ""
                }`}
              />
              {!values[1] && !showAnswer ? (
                <img
                  src="/ui/textarea-pen.png"
                  className="absolute pointer-events-none"
                  style={{
                    height: 48,
                    top: 295,
                    left: 805,
                  }}
                />
              ) : null}
              <input
                value={showAnswer ? answers[1] : values[1]}
                onChange={(e) =>
                  setValues(
                    values.map((_, index) =>
                      index === 1 ? e.currentTarget.value : _,
                    ),
                  )
                }
                className={`absolute left-[800px] bottom-[30px] w-[100px] bg-transparent text-center text-[50px] ${
                  showAnswer ? "text-answer" : ""
                }`}
              />
              {!values[2] && !showAnswer ? (
                <img
                  src="/ui/textarea-pen.png"
                  className="absolute pointer-events-none"
                  style={{
                    height: 48,
                    top: 295,
                    left: 1115,
                  }}
                />
              ) : null}
              <input
                value={showAnswer ? answers[2] : values[2]}
                onChange={(e) =>
                  setValues(
                    values.map((_, index) =>
                      index === 2 ? e.currentTarget.value : _,
                    ),
                  )
                }
                className={`absolute left-[1110px] bottom-[30px] w-[100px] bg-transparent text-center text-[50px] ${
                  showAnswer ? "text-answer" : ""
                }`}
              />
              {!values[3] && !showAnswer ? (
                <img
                  src="/ui/textarea-pen.png"
                  className="absolute pointer-events-none"
                  style={{
                    height: 48,
                    top: 295,
                    left: 1295,
                  }}
                />
              ) : null}
              <input
                value={showAnswer ? answers[3] : values[3]}
                onChange={(e) =>
                  setValues(
                    values.map((_, index) =>
                      index === 3 ? e.currentTarget.value : _,
                    ),
                  )
                }
                className={`absolute left-[1290px] bottom-[30px] w-[100px] bg-transparent text-center text-[50px] ${
                  showAnswer ? "text-answer" : ""
                }`}
              />
            </div>
          </div>
        )}
      </ContentContainer>

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />

      {step === 2 ? (
        <CheckAnswerButton
          active={showAnswer}
          onClick={() => setShowAnswer(!showAnswer)}
        />
      ) : null}

      <img
        src={step === 1 ? BACKGROUND1.src : BACKGROUND2.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
