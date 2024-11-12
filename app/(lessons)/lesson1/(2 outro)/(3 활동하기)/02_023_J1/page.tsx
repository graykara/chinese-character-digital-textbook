"use client";

import { SoundButton2 } from "@/app/components/buttons/sound-button2";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import IMAGE3 from "./image3.png";
import IMAGE4 from "./image4.png";
import { StepContainer } from "@/app/components/step-container";
import { useContext, useEffect, useState } from "react";
import { SOUND } from "@/app/utils/sound-player";
import { ActivityPageTemplate } from "@/app/pages/activity-page-template";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { PageInfoContext } from "@/app/utils/page-info";
import BACKGROUND1 from "@/app/bgpng_temp/2/중등한문_한자,얼마나 알아34.png";
import BACKGROUND2 from "@/app/bgpng_temp/2/중등한문_한자,얼마나 알아35.png";
import BACKGROUND3 from "@/app/bgpng_temp/2/중등한문_한자,얼마나 알아36.png";

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("활동하기");

  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  return (
    <>
      <ActivityPageTemplate lesson={2}>
        <div className="h-full flex flex-col justify-center items-center">
          {step === 1 ? <Content1 /> : null}
          {step === 2 ? <Content2 /> : null}
          {step === 3 ? <Content3 /> : null}
          <div className="fixed bottom-0">
            <StepContainer maxStep={3} />
          </div>
        </div>
      </ActivityPageTemplate>
      <img
        src={
          step === 1
            ? BACKGROUND1.src
            : step === 2
              ? BACKGROUND2.src
              : step === 3
                ? BACKGROUND3.src
                : ""
        }
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}

const Content1 = () => {
  const sound = "/sound/1/23-1.mp3"
  useEffect(() => {
    if (sound) {
      const soundInstance = SOUND(sound);
      soundInstance.stop();
      soundInstance.play();

      return () => {
        soundInstance.stop();
      };
    }
  }, [sound]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-start -mt-[220px]">
      <header className="mb-10 -ml-3">
        <img src={IMAGE1.src} />
      </header>

      <p className="ml-3 -mt-2 text-[55px] tracking-tighter">
        문자도는 문자의 뜻과 관계있는 옛이야기의 소재를 문자의 획 안이나
        <br />그 주변에 그려 넣어 글자를 구성한 그림이다. 내 이름의 뜻이나 나와
        <br />관련된 소재 등이 드러나도록 내 이름으로 문자도를 그려 보자.
      </p>

    </div>
  );
};

const sound = new Howl({
  src: "/sound/1/23-2.mp3",
});

const Content2 = () => {
  const [isReading, setIsReading] = useState(false);
  const [soundId, setSoundId] = useState<number | null>(null);

  useEffect(() => {
    sound.on("play", () => setIsReading(true));
    sound.on("end", () => setIsReading(false));
    sound.on("stop", () => setIsReading(false));
  }, []);

  return (
    <div className="h-full flex flex-col justify-center items-center -mt-[120px]">
      <div className="relative">
        <img src={IMAGE2.src} />
      </div>

      <SoundButton2
        className="absolute top-[25px] left-[230px] animate__animated animate__bounceIn animate__delay-1s"
        active={isReading}
        onClick={() => {
          if(isReading) {
            console.log("stop");
            sound.stop();
          }
          else sound.play();
        }}
      />

    </div>
  );
};

const Content3 = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const answers = [
    "김대성",
    "'크게 이루다'는 뜻으로\n큰 인물이 되라는 이름.",
    "노래방, 떡볶이, 미용사",
  ];
  return (
    <>
      <div className="w-full h-full overflow-y-scroll flex justify-center -ml-14 pb-[100px]">
        <div className="relative w-[1283px] h-[1516px] mt-10">
          <img src={IMAGE3.src} className="w-full h-full" />

          {!showAnswer ? (
            <input
              key={1}
              defaultValue={""}
              className="absolute w-[410px] bg-transparent left-[150px] top-[215px] text-center"
            />
          ) : (
            <input
              value="김대성(金大成)"
              className="text-example absolute w-[410px] bg-transparent left-[150px] top-[215px] text-center"
              readOnly
            />
          )}
          {!showAnswer ? (
            <input
              key={2}
              defaultValue={""}
              className="absolute w-[410px] bg-transparent left-[700px] top-[207px] text-center"
            />
          ) : (
            <textarea
              value={`'크게 이루다'는 뜻으로\n큰 인물이 되라는 이름.`}
              className="text-example text-[30px] leading-tight absolute w-[410px] bg-transparent left-[700px] top-[207px] text-center"
              readOnly
            />
          )}
          {!showAnswer ? (
            <input
              key={3}
              defaultValue={""}
              className="absolute w-[960px] bg-transparent left-[170px] top-[380px]"
            />
          ) : (
            <input
              value="노래방, 떡볶이, 미용사"
              className="text-example absolute w-[960px] bg-transparent left-[170px] top-[380px]"
              readOnly
            />
          )}

          {!showAnswer ? (
            <textarea
              key={4}
              defaultValue={""}
              className="absolute w-[900px] bg-transparent left-[170px] top-[1180px] resize-none"
              rows={3}
            />
          ) : (
            <textarea
              value="‘김(金)’에는 내가 좋아하는 것을, ‘대성(大成)에는 미용사가 되어 사람들에게 기쁨을 주고 싶은 나의 꿈을 표현했어."
              className="text-example absolute w-[900px] bg-transparent left-[170px] top-[1180px] resize-none"
              rows={3}
            />
          )}

          {showAnswer ? (
            <img
              src={IMAGE4.src}
              className="absolute left-1/2 top-[620px] -translate-x-1/2"
            />
          ) : null}
        </div>
      </div>
      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
};
