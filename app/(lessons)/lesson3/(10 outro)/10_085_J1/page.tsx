"use client";

import { SoundButton2 } from "@/app/components/buttons/sound-button2";
import IMAGE1_1 from "./image1-1.png";
import IMAGE1_2 from "./image1-2.png";
import IMAGE1_11 from "./image1-11.png";
import IMAGE1_12 from "./image1-12.png";
import IMAGE1_13 from "./image1-13.png";
import IMAGE2 from "./image2.png";
import IMAGE3 from "./image3.png";
import { StepContainer } from "@/app/components/step-container";
import { useContext, useEffect, useState } from "react";
import { ActivityPageTemplate } from "@/app/pages/activity-page-template";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘25.png";
import BACKGROUND2 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘26.png";
import { InputWithPen } from "@/app/components/input-with-pen";
import {
  OLD_TextareaWithPen,
  TextareaWithPen,
} from "@/app/components/textarea/textarea-with-pen";
import { SOUND } from "@/app/utils/sound-player";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  return (
    <>
      {step === 3 ? <Content3 /> :
        <ActivityPageTemplate lesson={3}>
          {step === 1 ? <Content1 /> : null}
          {step === 2 ? <Content2 /> : null}
        </ActivityPageTemplate>}
      <StepContainer maxStep={3} />
      <img
        src={step === 1 ? BACKGROUND1.src : BACKGROUND2.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}

const sound = new Howl({
  src: "/sound/2/55-i-2.mp3",
});

const Content1 = () => {
  const [isReading, setIsReading] = useState(false);
  const [soundId, setSoundId] = useState<number | null>(null);

  useEffect(() => {
    sound.on("play", () => setIsReading(true));
    sound.on("end", () => setIsReading(false));
    sound.on("stop", () => setIsReading(false));
  }, []);

  useEffect(() => {
    SOUND("/sound/2/55-i-1.mp3").play();
  }, []);

  return (
    <div className="animate__animated animate__fadeIn w-full h-full flex flex-col justify-center items-start">
      <div className="relative -top-[45px] w-[1600px] h-full">
        <img src={IMAGE1_1.src} />
        <img src={IMAGE1_2.src} className="absolute top-0 right-0 z-[1]" />

        <div className="absolute left-[260px] top-[350px]">
          <img src={IMAGE1_11.src} className="animate__animated animate__delay-0_2s animate__fadeInBottomRight" />
          <img src={IMAGE1_12.src} className="animate__animated animate__delay-0_4s animate__fadeInRight" />
          <img src={IMAGE1_13.src} className="animate__animated animate__delay-0_6s animate__fadeInTopRight" />
        </div>
      </div>

    </div>
  );
};

const Content2 = () => {
  return (
    <div className="animate__animated animate__fadeIn h-full flex justify-center overflow-y-hidden">
      <div className="relative h-fit">
        <div className="relative">
          <img src={IMAGE2.src} />
        </div>
      </div>
    </div>
  );
};

const Content3 = () => {
  return (
    <div className="animate__animated animate__fadeIn h-full flex justify-center overflow-y-hidden">
      <div className="relative h-fit">
        <div className="relative">
          <img src={IMAGE3.src} />
        </div>
      </div>
    </div>
  );
};
