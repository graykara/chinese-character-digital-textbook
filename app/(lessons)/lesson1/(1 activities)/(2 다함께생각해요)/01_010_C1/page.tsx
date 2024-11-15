"use client";

import { ThinkTogetherHeader } from "@/app/components/headers/think-together";
import { VideoThumbnail_big } from "@/app/components/video-thumbnail";
import { useContext, useEffect, useState } from "react";
import { StepContainer } from "@/app/components/step-container";
import { TextareaWithPen } from "@/app/components/textarea/textarea-with-pen";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import VIDEO_THUMBNAIL from "./video-thumbnail.png";
import SYMBOL from "./symbol.png";
import TEXTAREA from "./textarea.png";
import EXAMPLE_ANSWER from "./example-answer.png";
import { PageInfoContext } from "@/app/utils/page-info";
import BACKGROUND1 from "@/app/bgpng_temp/1/중등한문_한자,어디서봤어2.png"
import BACKGROUND2 from "@/app/bgpng_temp/1/중등한문_한자,어디서봤어3.png"
import { SOUND } from "@/app/utils/sound-player";

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  

  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  return (
    <>
      <ThinkTogetherHeader
        title={<p className="-ml-2">한자를 만난 경험을 떠올려 보자.</p>}
        sound="/sound/1/10-i.mp3"
      />
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}

      <StepContainer maxStep={2} />
      <img src={step === 1 ? BACKGROUND1.src : BACKGROUND2.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}

const Step1 = () => {
  return (
    <div className="h-full flex justify-center items-center -mt-10">
      <VideoThumbnail_big
        thumbnail={VIDEO_THUMBNAIL.src}
        video="/video/animation/1-1_10.mp4"
        width={972}
        height={526}
      />
    </div>
  )
};

const Step2 = () => {
  const answer = "도로와 유적 표지판에서 한자 표기를 보았다.";
  const [showAnswer, setShowAnswer] = useState(false);
  const sound = "/sound/1/10-i2.mp3";

  useEffect(() => {
    let soundInstance: Howl | null = null;
    if (sound) {
      soundInstance = new Howl({ src: sound });
      setTimeout(() => {
        Howler.stop();
        soundInstance.play()
      }, 700);
    }
    return () => {
      soundInstance?.unload();
    }
  }, [sound]);

  return (
    <>
      <div className="h-full flex justify-center items-center -mt-[130px]">
        <div>
          <div className="animate__animated animate__flipInX flex items-center gap-4">
            <img src={SYMBOL.src} className="mb-3" />
            <p className="text-[55px]">
              한자를 어디에서 보았는지 자기 경험을 써 보자.
              {/* sound="/sound/1/10-i2.mp3" */}
            </p>
          </div>

          <div className="relative top-3">
            <TextareaWithPen
              answer={answer}
              showAnswer={showAnswer}
              containerClassName={`absolute resize-none left-0 top-11 text-[55px] bg-transparent w-full ml-3 px-16 leading-[76px] ${showAnswer ? "text-example ml-3" : ""}`}
              penClassName="h-[62px] top-[48px] left-[70px]"
              rows={3}
            />
            <img src={TEXTAREA.src} className="" />
          </div>
        </div>
      </div>
      {/* <Button
      className="absolute bottom-0 right-32"
      onClick={() => setShowAnswer(!showAnswer)}
    >
      <img src={EXAMPLE_ANSWER.src} />
    </Button> */}
      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  )
};