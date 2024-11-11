"use client";

import { StrengthenLearningMainContentHeader } from "@/app/components/headers/strengthen-learning-main-content-header";
import { useContext, useState } from "react";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import { ContentContainer } from "@/app/components/content-container";
import { TextareaWithPen } from "@/app/components/textarea/textarea-with-pen";
import BACKGROUND1 from "@/app/bgpng_temp/12/중등한문_나에게 힘이 되는 글24.png";
import BACKGROUND2 from "@/app/bgpng_temp/12/중등한문_나에게 힘이 되는 글25.png";
import { StepContainer } from "@/app/components/step-container";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { GroupButton } from "@/app/components/buttons/group-button";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  return (
    <>
      <StrengthenLearningMainContentHeader
        title={<p className="tracking-[-2px]">문장의 의미를 생각해 보고 어떨 때, 누구에게 하면 좋을지<br/>적어 보자.</p>}
        sound="/sound/4/100-i-1.mp3"
      />

      <GroupButton className="animate__animated animate__fadeIn animate__delay-2s absolute top-[206px] right-[167px] h-[49px] flex items-center gap-5" />
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}

      <StepContainer maxStep={2} />
      <img src={step === 1 ? BACKGROUND1.src : BACKGROUND2.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}

const Step1 = () => {
  return (
    <>
      <ContentContainer className="!justify-start left-8 -mt-20">
        <div className="relative mt-20">
          <img src={IMAGE1.src} />
          <p className="absolute top-[155px] left-[40px] font-haeseo text-[62px] tracking-[-5px]">天下無無一能之人.</p>
        </div>
      </ContentContainer>
    </>
  );
}

const Step2 = () => {
  const answers = [
    "열심히 했지만 좋은 결과를 얻지 못해 꿈을 포기하려고 하는 친구",
    "네가 포기만 하지 않는다면, 시간이 좀 걸리더라도 언젠가는 꿈을 이룰 수 있을거야.",
    "실수를 자책하는 친구",
    "이번 실수로 인해 새롭게 알게 된 게 있잖아.\n이렇게 성장하는 거야!"];
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ContentContainer className="!justify-start left-8 -mt-20">
        <div className="relative ml-1">
          <img src={IMAGE2.src} />
          <p className="absolute top-[75px] left-[40px] font-haeseo text-[62px] tracking-[-3px]">有志者, 事竟成也.</p>
          <p className="absolute top-[350px] left-[40px] font-haeseo text-[62px] tracking-[-3px]">不經一事, 不長一智.</p>
        </div>

        <TextareaWithPen
          answer={answers[0]}
          showAnswer={showAnswer}
          containerClassName={`absolute resize-none w-[220px] left-[710px] top-[20px] pt-1 ml-5 text-[35px] tracking-tighter break-keep leading-[42px] bg-transparent ${showAnswer ? "text-example tracking-tighter break-keep" : ""}`}
          penClassName="h-[48px] top-[20px] left-[710px]"
          rows={5}
        />

        <TextareaWithPen
          answer={answers[1]}
          showAnswer={showAnswer}
          containerClassName={`absolute resize-none w-[380px] left-[1010px] top-[20px] pt-1 ml-5 pr-1 text-[35px] tracking-tighter break-keep leading-[42px] bg-transparent ${showAnswer ? "text-example tracking-tighter break-keep" : ""}`}
          penClassName="h-[48px] top-[20px] left-[1010px]"
          rows={5}
        />

        <TextareaWithPen
          answer={answers[2]}
          showAnswer={showAnswer}
          containerClassName={`absolute resize-none w-[220px] left-[710px] top-[320px] pt-1 ml-5 text-[35px] tracking-tighter break-keep leading-[42px] bg-transparent ${showAnswer ? "text-example tracking-tighter break-keep" : ""}`}
          penClassName="h-[48px] top-[320px] left-[710px]"
          rows={5}
        />

        <TextareaWithPen
          answer={answers[3]}
          showAnswer={showAnswer}
          containerClassName={`absolute resize-none w-[380px] left-[1010px] top-[320px] pt-1 ml-5 pr-1 text-[35px] tracking-tighter break-keep leading-[42px] bg-transparent ${showAnswer ? "text-example tracking-tighter break-keep" : ""}`}
          penClassName="h-[48px] top-[320px] left-[1010px]"
          rows={5}
        />

      </ContentContainer>

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />


    </>
  );
};
