"use client";

import { StrengthenLearningMainContentHeader } from "@/app/components/headers/strengthen-learning-main-content-header";
import { useContext, useState } from "react";
import IMAGE1 from "./bg_3.png";
import IMAGE2 from "./bg_4.png";
import { ContentContainer } from "@/app/components/content-container";
import { SmartButton } from "@/app/components/buttons/smart-button";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { StepContainer } from "@/app/components/step-container";
import { SOUND } from "@/app/utils/sound-player";
import { InputWithPen } from "@/app/components/input-with-pen";
import { TextareaWithPen } from "@/app/components/textarea/textarea-with-pen";
import BACKGROUND1 from "@/app/bgpng_temp/7/중등한문_언어생활 속의 성어122.png";
import BACKGROUND2 from "@/app/bgpng_temp/7/중등한문_언어생활 속의 성어123.png";
import { PageInfoContext } from "@/app/utils/page-info";
import { Button } from "@/app/components/buttons/button";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  return (
    <>
      <StrengthenLearningMainContentHeader
        title={"성어가 사용된 사례를 디지털 도구로 찾아 써 보자."}
        sound="/sound/3/64-i-2.mp3"
      />
      <div className="absolute top-[180px] left-[1320px] flex items-center gap-5"></div>
      {step !== 2 ? (
        <SmartButton
          link="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=%EC%8B%AD%EC%A4%91%ED%8C%94%EA%B5%AC&oquery=%EC%9D%BC%EC%84%9D%EC%9D%B4%EC%A1%B0&tqi=iXMjDspzLiwssQhkuwossssss9C-345908"
          className="animate__animated animate__fadeIn animate__delay-1s absolute right-[220px] top-[176px] z-1"
        />
      ) : null}

      {step !== 1 ? (
        <SmartButton
          link="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=%EB%A7%89%EC%83%81%EB%A7%89%ED%95%98&oquery=%EC%8B%AD%EC%A4%91%ED%8C%94%EA%B5%AC&tqi=iwP8Bdqo1SossD7NtiwssssstL4-456981"
          className="animate__animated animate__fadeIn animate__delay-1s absolute right-[220px] top-[176px] z-1"
        />
      ) : null}

      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      <StepContainer maxStep={2} />
    </>
  );
}

const Step1 = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const answer1 = "치과 의사의 블로그";
  const answer2 =
    "치과 의사의 블로그에 씹을 때 시큰거린다면 십중팔구 치아균열이라는 내용이 있었음.";
  const [value, setValue] = useState("");

  return (
    <>
      <ContentContainer className="!justify-start -top-[90px] left-7">
        <img src={IMAGE1.src} className="-ml-6 mt-16" />
        <Button className="absolute top-[50px] left-[590px] w-[300px] h-[100px] bg_black border-none cursor-pointer z-10" onClick={() => SOUND("/sound/3/p064_word002.mp3").play()}>
          </Button>
        <div
          className="w-[290px] absolute grid grid-cols-4 left-1/2 -translate-x-1/2 top-[65px] -ml-4 text-[72px]"
          // onClick={() => SOUND("/sound/3/64_003.mp3").play()}
        >
          <span className="font-haeseo">十</span>
          <span className="font-haeseo">中</span>
          <span className="font-haeseo">八</span>
          <span className="font-haeseo">九</span>
        </div>
        <InputWithPen
          answer={answer1}
          showAnswer={showAnswer}
          className={`w-[420px] bg-transparent text-[40px]  tracking-tighter ${showAnswer ? "text-example" : ""}`}
          penClassName="-left-1 -mt-2 w-[52px]"
          containerClassName="absolute top-[180px] left-[585px] mt-1 ml-1"
        />
        <TextareaWithPen
          answer={showAnswer ? answer2 : value}
          showAnswer={showAnswer}
          containerClassName={`absolute resize-none w-[480px] left-[550px] top-[258px] pt-0 ml-1 pr-10 text-[40px] tracking-tighter break-keep leading-[72px] bg-transparent ${showAnswer ? "text-example tracking-tighter break-keep" : ""}`}
          penClassName="h-[50px] top-[262px] left-[550px]"
          rows={4}
        />
      </ContentContainer>

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
};

const Step2 = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const answer1 = "자동차 시승 리뷰 기사";
  const answer2 =
    "자동차 시승 리뷰 기사에서 두 가지의 차종을 서로 비교하며 막상막하의 승차감이라는 내용이 있었음.";
  const [value, setValue] = useState("");

  return (
    <>
      <ContentContainer className="!justify-start -top-[90px] left-7">
        <img src={IMAGE2.src} className="-ml-6 mt-16" />
        <Button className="absolute top-[50px] left-[590px] w-[300px] h-[100px] bg_black border-none cursor-pointer z-10" onClick={() => SOUND("/sound/3/p064_word003.mp3").play()}>
          </Button>
        <div
          className="w-[290px] absolute grid grid-cols-4 left-1/2 -translate-x-1/2 top-[65px] -ml-4 text-[72px]"
          // onClick={() => SOUND("/sound/3/64_004.mp3").play()}
        >
          <span className="font-haeseo">莫</span>
          <span className="font-haeseo">上</span>
          <span className="font-haeseo">莫</span>
          <span className="font-haeseo">下</span>
        </div>
        <InputWithPen
          answer={answer1}
          showAnswer={showAnswer}
          className={`w-[480px] bg-transparent text-[40px]  tracking-tighter ${showAnswer ? "text-example" : ""}`}
          penClassName="-left-0 -mt-2 w-[52px]"
          containerClassName="absolute top-[180px] left-[585px] mt-1 ml-1"
        />
        <TextareaWithPen
          answer={showAnswer ? answer2 : value}
          showAnswer={showAnswer}
          containerClassName={`absolute resize-none w-[480px] left-[550px] top-[258px] pt-0 ml-1 pr-10 text-[40px] tracking-tighter break-keep leading-[72px] bg-transparent ${showAnswer ? "text-example tracking-tighter break-keep" : ""}`}
          penClassName="h-[50px] top-[262px] left-[552px]"
          rows={4}
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
