"use client";

import { SolveProblemPageTemplate } from "@/app/pages/solve-problem-page-template";
import IMAGE1 from "./1.png";
import IMAGE2 from "./2.png";
import IMAGE3 from "./3.png";
import IMAGE4 from "./4.png";
import IMAGE4_1 from "./4-1.png";
import IMAGE5 from "./5.png";
import IMAGE5_1 from "./5-1.png";
import IMAGE6 from "./6.png";
import IMAGE6_1 from "./6-1.png";
import IMAGE8 from "./8.png";
import IMAGE9 from "./9.png";
import { useContext, useEffect, useState } from "react";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { PageInfoContext } from "@/app/utils/page-info";
import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import BACKGROUND1 from "@/app/bgpng_temp/12/중등한문_나에게 힘이 되는 글38.png";
import { ContentContainer } from "@/app/components/content-container";
import { ProblemNumberIcon } from "@/app/components/solve-problem/problem-number-icon";
import { InputWithPen } from "@/app/components/input-with-pen";
import { SelectionQuiz } from "@/app/components/quiz/selection-quiz";

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("문제 풀기");

  const [step, setStep] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);

  const questions = [
    "[1-2] 다음 글을 읽고, 물음에 답하시오.",
    "[1-2] 다음 글을 읽고, 물음에 답하시오.",
    "글의 교훈과 관련된 속담은?",
    "글을 읽고 ㉠, ㉡이 가리키는 것을 찾아 한자로 쓰시오.",
    "문장의 독음과 풀이를 쓰시오.",
    "[6-7] 다음 글을 읽고, 물음에 답하시오.",
    "[6-7] 다음 글을 읽고, 물음에 답하시오.",
    "㉠~㉤의 설명 중 옳지 않은 것은?",
    "㉠~㉤ 중 마지막으로 풀이되는 것은?",
  ];

  useEffect(() => {
    setShowAnswer(false);
  }, [step]);

  return (
    <>
      <RightTopStepContainer
        maxStep={9}
        step={step}
        onStepChange={setStep}
        className="bg-transparent !top-[120px] !right-[200px]"
      />
      <SolveProblemPageTemplate
        lesson={2}
        number={step}
        question={questions[step - 1]}
        hideIconNumbers={[1, 2, 6, 7]}
      >
        {step === 1 && <Question1 />}
        {step === 2 && <Question2 />}
        {step === 3 && <Question3 />}
        {step === 4 && <Question4 />}
        {step === 5 && <Question5 />}
        {step === 6 && <Question6 />}
        {step === 7 && <Question7 />}
        {step === 8 && <Question8 />}
        {step === 9 && <Question9 />}
      </SolveProblemPageTemplate>

      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}

const Question1 = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ContentContainer className="!justify-start">
        <img src={IMAGE1.src} />

        <div className="w-full mt-10">
          <header className="flex items-center gap-5">
            <ProblemNumberIcon number={1} />
            <p>의미상 ㉠과 바꾸어 쓸 수 있는 한자를 (나)에서 찾아 쓰시오.</p>
          </header>

          <div className="ml-[100px] w-[120px] h-[120px] rounded-[15px] border-[3px] border-[#939292] flex justify-center items-center">
            <InputWithPen
              answer="無"
              showAnswer={showAnswer}
              className="w-[120px] text-[100px] text-center bg-transparent font-haeseo"
              penClassName="left-1/2 -translate-x-1/2"
            />
          </div>
        </div>
      </ContentContainer>
      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
};

const Question2 = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ContentContainer className="!justify-start">
        <img src={IMAGE1.src} />

        <div className="w-full mt-10">
          <header className="flex items-center gap-5">
            <ProblemNumberIcon number={2} />
            <p>
              <span className="border border-black rounded-lg">보기</span> 의
              한자 카드를 바르게 배열하여 ㉡에 들어갈 내용을 완성하시오.
            </p>
          </header>

          <div className="ml-[100px] mt-10 relative">
            <img src={IMAGE2.src} />

            <InputWithPen
              answer="無說己之長"
              showAnswer={showAnswer}
              className="w-[500px] text-[90px] font-haeseo bg-transparent"
              containerClassName="absolute left-[890px] top-[0px]"
            />
          </div>
        </div>
      </ContentContainer>
      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
};

const Question3 = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ContentContainer className="!justify-start">
        <img src={IMAGE3.src} />

        <div className="w-full mt-10">
          <SelectionQuiz
            answers={[3]}
            showAnswer={showAnswer}
            options={[
              "등잔 밑이 어둡다.",
              "발 없는 말이 천 리 간다.",
              "가는 떡이 커야 오는 떡이 크다.",
              "세 살 적 버릇이 여든까지 간다.",
              "낮말은 새가 듣고 밤말은 쥐가 듣는다.",
            ]}
            className="space-y-5"
          />
        </div>
      </ContentContainer>
      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
};

const Question4 = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ContentContainer className="!justify-start">
        <img src={IMAGE4.src} />

        <div className="w-full mt-20">
          <div className="relative">
            <img src={IMAGE4_1.src} />

            <InputWithPen
              answer="愛人者"
              showAnswer={showAnswer}
              className="w-[500px] text-[60px] text-center bg-transparent font-haeseo"
              containerClassName="absolute left-[150px] top-[-35px]"
              penClassName="w-[50px]"
            />
            <InputWithPen
              answer="敬人者"
              showAnswer={showAnswer}
              className="w-[500px] text-[60px] text-center bg-transparent font-haeseo"
              containerClassName="absolute left-[900px] top-[-35px]"
              penClassName="w-[50px]"
            />
          </div>
        </div>
      </ContentContainer>
      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
};

const Question5 = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ContentContainer className="!justify-start">
        <img src={IMAGE5.src} />

        <div className="w-full mt-20">
          <div className="relative">
            <img src={IMAGE5_1.src} />

            <InputWithPen
              answer="유지자 사경성야"
              showAnswer={showAnswer}
              className="w-[1200px] text-[50px] text-center bg-transparent"
              containerClassName="absolute left-[200px] top-[-30px]"
              penClassName="w-[50px]"
            />
            <InputWithPen
              answer="뜻이 있는 사람은 일이 마침내 이루어진다."
              showAnswer={showAnswer}
              className="w-[1200px] text-[50px] text-center bg-transparent"
              containerClassName="absolute left-[200px] top-[110px]"
              penClassName="w-[50px]"
            />
          </div>
        </div>
      </ContentContainer>
      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
};

const Question6 = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ContentContainer className="!justify-start">
        <img src={IMAGE6.src} />

        <div className="w-full mt-10">
          <header className="flex items-center gap-5">
            <ProblemNumberIcon number={6} />
            <p>㉠, ㉡의 독음을 쓰시오.</p>
          </header>

          <div className="ml-[100px] mt-10 relative">
            <img src={IMAGE6_1.src} />

            <InputWithPen
              answer="불"
              showAnswer={showAnswer}
              containerClassName="absolute left-[140px] top-[-30px]"
              className="w-[350px] text-[50px] text-center bg-transparent absolute"
              penClassName="left-1/2 -translate-x-1/2"
            />

            <InputWithPen
              answer="부"
              showAnswer={showAnswer}
              containerClassName="absolute left-[820px] top-[-30px]"
              className="w-[350px] text-[50px] text-center bg-transparent absolute"
              penClassName="left-1/2 -translate-x-1/2"
            />
          </div>
        </div>
      </ContentContainer>
      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
};

const Question7 = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ContentContainer className="!justify-start">
        <img src={IMAGE6.src} />

        <div className="w-full mt-10">
          <header className="flex items-center gap-5">
            <ProblemNumberIcon number={7} />
            <p>윗글에서 얻을 수 있는 교훈이 가장 필요한 사람은?</p>
          </header>

          <div className="ml-[100px] mt-10 relative">
            <SelectionQuiz
              answers={[5]}
              showAnswer={showAnswer}
              options={[
                "남을 배려하지 않는 사람.",
                "자기 자랑에만 힘쓰는 사람.",
                "모르는 것을 안다고 우기는 사람.",
                "남의 단점을 말하기 좋아하는 사람.",
                "실패가 두려워서 시도조차 하지 않는 사람.",
              ]}
              className="space-y-5"
            />
          </div>
        </div>
      </ContentContainer>
      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
};

const Question8 = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ContentContainer className="!justify-start">
        <img src={IMAGE8.src} />

        <div className="mt-10 relative">
          <SelectionQuiz
            answers={[4]}
            showAnswer={showAnswer}
            options={[
              "㉠은 ‘남’으로 풀이한다.",
              "㉡은 ‘할 수 있다’로 풀이한다.",
              "㉢은 ‘나’로 풀이한다.",
              "㉣은 ‘~의’로 풀이한다.",
              "㉤은 ‘주술목 구조’이다.",
            ]}
            className="grid grid-cols-2 gap-y-5"
          />
        </div>
      </ContentContainer>
      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
};

const Question9 = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ContentContainer className="!justify-start">
        <img src={IMAGE8.src} />

        <div className="ml-[100px] mt-10 relative">
          <SelectionQuiz
            answers={[1]}
            showAnswer={showAnswer}
            options={["㉠", "㉡", "㉢", "㉣", "㉤"]}
            className="w-[1500px] grid grid-cols-5 gap-5"
          />
        </div>
      </ContentContainer>
      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
};
