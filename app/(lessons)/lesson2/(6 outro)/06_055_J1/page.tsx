"use client";

import { SoundButton2 } from "@/app/components/buttons/sound-button2";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import IMAGE2_AFTER from "./image2-after.png";
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
      <ActivityPageTemplate lesson={2}>
        {step === 1 ? <Content1 /> : null}
        {step === 2 ? <Content2 /> : null}
      </ActivityPageTemplate>
      <StepContainer maxStep={2} />
      <img
        src={step === 1 ? BACKGROUND1.src : BACKGROUND2.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}

const Content1 = () => {
  const [isReading, setIsReading] = useState(false);
  const [soundId, setSoundId] = useState<number | null>(null);
  const sound = new Howl({
    src: "/sound/2/55-i-2.mp3",
    onplay: () => setIsReading(true),
    onend: () => setIsReading(false),
  });

  useEffect(() => {
    return () => {
      sound.stop();
    };
  }, []);

  useEffect(() => {
    SOUND("/sound/2/55-i-1.mp3").play();
  }, []);

  return (
    <div className="animate__animated animate__fadeIn w-full h-full flex flex-col justify-center items-start -mt-20 -ml-5">
      <img src={IMAGE1.src} />

      <SoundButton2
        className="absolute top-[300px] left-[300px] animate__animated animate__bounceIn animate__delay-1s"
        active={isReading}
        onClick={() => {
          if (soundId) {
            console.log("stop");
            sound.stop(soundId);
          }
          setTimeout(() => setSoundId(sound.play()), 100);
        }}
      />

    </div>
  );
};

const Content2 = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <>
      <div className="animate__animated animate__fadeIn h-full flex justify-center overflow-y-auto pt-20 pb-[120px]">
        <div className="relative h-fit -mt-3 -ml-12">
          <div className="relative">
            <img src={IMAGE2.src} />

            <InputWithPen
              answer="병행"
              showAnswer={showAnswer}
              containerClassName="absolute top-[370px] left-[171px] text-[50px]"
              className="text-center w-[130px] mt-4"
              penClassName="left-10 top-12 h-[55px]"
              isExample
            />
            <InputWithPen
              answer="竝"
              showAnswer={showAnswer}
              containerClassName="absolute top-[335px] left-[371px] font-haeseo text-[90px] leading-0"
              className="text-center w-[130px] mt-4 bg-transparent"
              penClassName="left-10 top-[85px] h-[55px]"
              isExample
            />
            <InputWithPen
              answer="行"
              showAnswer={showAnswer}
              containerClassName="absolute top-[335px] left-[501px] font-haeseo text-[90px]"
              className="text-center w-[130px] mt-4 bg-transparent"
              penClassName="left-10 top-[85px] h-[55px]"
              isExample
            />

            <InputWithPen
              answer="저출산 가장 큰 요인은, ‘일·육아 병행 어려움’"
              showAnswer={showAnswer}
              containerClassName="absolute left-[500px] top-[115px]"
              className="text-center bg-transparent text-[35px] tracking-tighter w-[570px]"
              penClassName="left-1/2 -translate-x-1/2 w-[35px]"
              isExample
            />

            <InputWithPen
            answer="(두 가지 일을 한꺼번에)
아울러 행함.​"
            showAnswer={showAnswer}
              containerClassName="absolute left-[770px] top-[352px]"
              className="bg-transparent text-[35px] w-[180px]"
              penClassName="w-[35px]"
              isExample
            />
            <InputWithPen
            answer="수식 관계​"
            showAnswer={showAnswer}
              containerClassName="absolute left-[770px] top-[419px]"
              className="bg-transparent text-[35px] w-[180px]"
              penClassName="w-[35px]"
              isExample
            />
            <OLD_TextareaWithPen
              answer="다이어트를 위해 운동과 식단 조절을 <span className='font-heaser'>竝行하는 중이다.</span>"
              showAnswer={showAnswer}
              containerClassName="!absolute left-[1020px] top-[350px]"
              className="bg-transparent text-center text-[35px] leading-[50px] w-[300px] break-keep"
              penClassName="top-[45px] left-1/2 -translate-x-1/2 h-[35px]"
              rows={3}
              isExample
            />
          </div>

        </div>
      </div>
      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
};
