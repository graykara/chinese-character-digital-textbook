"use client";

import { SolveProblemPageTemplate } from "@/app/pages/solve-problem-page-template";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import { StepContainer } from "@/app/components/step-container";
import { useContext, useEffect, useState } from "react";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { PageInfoContext } from "@/app/utils/page-info";
import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import BACKGROUND1 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘28.png"

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("문제 풀기");

  const [step, setStep] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);

  const questions = [
    "한자의 음과 뜻이 옳은 것은?",
    "대화 속 밑줄 친 부분을 한자로 바꿔 쓰시오.",
    <>
      <span className="border border-black rounded-lg">보기</span>와 같은 원리로
      만들어진 한자는?
    </>,
    "빈칸에 알맞은 한자를 쓰시오.",
    "단어장의 내용을 보고 ㉠에 들어갈 단어를 한자로 쓰시오.",
    "단어의 짜임이 옳은 것은?",
    <>
      한자 어휘의 활용이 옳지 <span className="underline">않은</span> 것은?
    </>,
    "[8-9] 다음 대화의 내용을 보고, 물음에 답하시오.",
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
        lesson={1}
        number={step}
        question={questions[step - 1]}
      >
        <div className="h-full flex flex-col justify-between items-center">
          {step === 1 ? <Question1 showAnswer={showAnswer} /> : null}
          {step === 2 ? <Question2 showAnswer={showAnswer} /> : null}
          {step === 3 ? <Question3 showAnswer={showAnswer} /> : null}
        </div>
      </SolveProblemPageTemplate>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      <img src={BACKGROUND1.src} className="absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}

const Question1 = ({ showAnswer }: { showAnswer: boolean }) => {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");

  useEffect(() => {
    if (showAnswer) {
      setAnswer1("文");
      setAnswer2("대");
    } else {
      setAnswer1("");
      setAnswer2("");
    }
  }, [showAnswer]);

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="relative">
        <img src={IMAGE1.src} />
        <input
          value={answer1}
          onChange={(e) => setAnswer1(e.target.value)}
          className={`absolute left-[243px] top-[50px] w-[100px] text-center bg-transparent font-haeseo text-[100px] ${
            showAnswer ? "text-answer" : ""
          }`}
          readOnly={showAnswer}
        />
        <input
          value={answer2}
          onChange={(e) => setAnswer2(e.target.value)}
          className={`absolute left-[723px] top-[275px] w-[100px] text-center bg-transparent text-[80px] ${
            showAnswer ? "text-answer" : ""
          }`}
          readOnly={showAnswer}
        />
      </div>
    </div>
  );
};

const Question2 = ({ showAnswer }: { showAnswer: boolean }) => {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");

  useEffect(() => {
    if (showAnswer) {
      setAnswer1("日");
      setAnswer2("出");
      setAnswer3("口");
    } else {
      setAnswer1("");
      setAnswer2("");
      setAnswer3("");
    }
  }, [showAnswer]);

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="relative">
        <img src={IMAGE2.src} />
        <input
          value={answer1}
          onChange={(e) => setAnswer1(e.target.value)}
          className={`absolute left-[840px] top-[40px] w-[200px] text-center bg-transparent font-haeseo text-[130px] ${
            showAnswer ? "text-answer" : ""
          }`}
          readOnly={showAnswer}
        />
        <input
          value={answer2}
          onChange={(e) => setAnswer2(e.target.value)}
          className={`absolute left-[1062px] top-[40px] w-[200px] text-center bg-transparent font-haeseo text-[130px] ${
            showAnswer ? "text-answer" : ""
          }`}
          readOnly={showAnswer}
        />
        <input
          value={answer3}
          onChange={(e) => setAnswer3(e.target.value)}
          className={`absolute left-[1062px] top-[250px] w-[200px] text-center bg-transparent font-haeseo text-[130px] ${
            showAnswer ? "text-answer" : ""
          }`}
          readOnly={showAnswer}
        />
      </div>
    </div>
  );
};

const Question3 = ({ showAnswer }: { showAnswer: boolean }) => {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");

  useEffect(() => {
    if (showAnswer) {
      setAnswer1("X");
      setAnswer2("O");
      setAnswer3("O");
      setAnswer4("X");
      setAnswer5("O");
    } else {
      setAnswer1("");
      setAnswer2("");
      setAnswer3("");
      setAnswer4("");
      setAnswer5("");
    }
  }, [showAnswer]);

  return (
    <div className="w-[1400px] h-full flex flex-col justify-center">
      <div className="flex justify-between">
        <p>(1) 받침은 맨 처음에 쓴다.</p>
        <div>
          (
          <input
            value={answer1}
            onChange={(e) => setAnswer1(e.currentTarget.value)}
            className={`w-[100px] text-center ${
              showAnswer ? "text-answer" : ""
            }`}
            readOnly={showAnswer}
          />
          )
        </div>
      </div>
      <div className="flex justify-between">
        <p>(2) 꿰뚫는 획은 나중에 쓴다.</p>
        <div>
          (
          <input
            value={answer2}
            onChange={(e) => setAnswer2(e.currentTarget.value)}
            className={`w-[100px] text-center ${
              showAnswer ? "text-answer" : ""
            }`}
            readOnly={showAnswer}
          />
          )
        </div>
      </div>
      <div className="flex justify-between">
        <p>(3) 왼쪽에서 오른쪽으로 쓴다.</p>
        <div>
          (
          <input
            value={answer3}
            onChange={(e) => setAnswer3(e.currentTarget.value)}
            className={`w-[100px] text-center ${
              showAnswer ? "text-answer" : ""
            }`}
            readOnly={showAnswer}
          />
          )
        </div>
      </div>
      <div className="flex justify-between">
        <p>(4) 안쪽과 바깥쪽이 있을 때는 안쪽을 먼저 쓴다.</p>
        <div>
          (
          <input
            value={answer4}
            onChange={(e) => setAnswer4(e.currentTarget.value)}
            className={`w-[100px] text-center ${
              showAnswer ? "text-answer" : ""
            }`}
            readOnly={showAnswer}
          />
          )
        </div>
      </div>
      <div className="flex justify-between">
        <p>(5) 가로획과 세로획이 교차하면 가로획을 먼저 쓴다.</p>
        <div>
          (
          <input
            value={answer5}
            onChange={(e) => setAnswer5(e.currentTarget.value)}
            className={`w-[100px] text-center ${
              showAnswer ? "text-answer" : ""
            }`}
            readOnly={showAnswer}
          />
          )
        </div>
      </div>
    </div>
  );
};
