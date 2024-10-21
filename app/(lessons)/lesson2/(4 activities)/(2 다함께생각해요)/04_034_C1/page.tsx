"use client";

import { ThinkTogetherHeader } from "@/app/components/headers/think-together";
import IMAGE from "./image.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useContext, useState } from "react";
import { PageInfoContext } from "@/app/utils/page-info";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { VideoThumbnail_big } from "@/app/components/video-thumbnail";
import { Textarea } from "@/app/components/textarea";
import BACKGROUND1 from "@/app/bgpng_temp/4/중등한문_합쳐서 만든 한자2.png";
import BACKGROUND2 from "@/app/bgpng_temp/4/중등한문_합쳐서 만든 한자3.png";

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("다 함께 생각해");

  const [step, setStep] = useState(1);

  return (
    <>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      <StepContainer step={step} maxStep={2} onStepChange={setStep} />
    </>
  );
}

const Step1 = () => {
  return (
    <>
      <ThinkTogetherHeader title="만화의 내용을 보고 ㉠에 들어갈 말을 추측하여 써 보자." />

      <ContentContainer>
        <VideoThumbnail_big
          thumbnail={IMAGE.src}
          video="/video/animation/2-4_34.mp4"
        />
      </ContentContainer>
      {/* <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
};

const Step2 = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [answer, setAnswer] = useState("");

  return (
    <>
      <ThinkTogetherHeader title="만화의 내용을 보고 ㉠에 들어갈 말을 추측하여 써 보자." />

      <ContentContainer>
        <Textarea
          value={
            showAnswer
              ? "합쳐서 표현하고 싶은 한자들을 새롭게 만들어 내면 "
              : answer
          }
          onChange={(e) => setAnswer(e)}
          className={`${showAnswer ? "text-example" : ""}`}
        />
      </ContentContainer>

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      <img
        src={BACKGROUND2.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
};
