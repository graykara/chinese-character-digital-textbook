"use client";

import { ThinkTogetherHeader2 } from "@/app/components/headers/think-together";
import IMAGE from "./image.png";
import IMAGE2 from "./bgTextArea.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useState } from "react";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { InputWithPen } from "@/app/components/input-with-pen";
import { VideoThumbnail } from "@/app/components/video-thumbnail";
import { Textarea } from "@/app/components/textarea";
import { SmartButton } from "@/app/components/buttons/smart-button";
import BACKGROUND1 from "@/app/bgpng_temp/5/중등한문_한자를 알면 틀리지 않는 일상 어휘2.png";
import BACKGROUND2 from "@/app/bgpng_temp/5/중등한문_한자를 알면 틀리지 않는 일상 어휘3.png";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";

export default function Page() {
  return (
    <>
      <ThinkTogetherHeader2 title="말풍선 속의 말을 긍정적이거나 칭찬하는 표현으로 바꾸어 빈칸에 써 보자." />

      <Step1 />
    </>
  );
}

const Step1 = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <>
      <ContentContainer className="py-2">
        <img src={IMAGE.src} />
      </ContentContainer>

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
};
