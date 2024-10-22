"use client";

import { SolveProblemPageTemplate } from "@/app/pages/solve-problem-page-template";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import { StepContainer } from "@/app/components/step-container";
import { useContext, useEffect, useState } from "react";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { PageInfoContext } from "@/app/utils/page-info";
import BACKGROUND1 from "@/app/bgpng_temp/2/중등한문_한자,얼마나 알아31.png"

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("문제 풀기");

  const [step, setStep] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);

  const questions = [
    "한자의 모양·음·뜻을 고려하여 빈칸에 알맞은 것을 쓰시오.",
    "주어진 풀이를 참고하여 알맞은 한자를 써 넣어 퍼즐을 완성하시오.",
    "한자를 쓰는 순서에 대한 설명으로 맞으면 ○, 틀리면 X 표 하시오.",
  ];

  useEffect(() => {
    setShowAnswer(false);
  }, [step]);

  return (
    <>
      <SolveProblemPageTemplate
        lesson={2}
        number={step}
        question={questions[step - 1]}
      >
        <div className="h-full flex flex-col justify-between items-center -mt-[45px] -ml-[30px]">
          {step === 1 ? <Question1 showAnswer={showAnswer} /> : null}
          {step === 2 ? <Question2 showAnswer={showAnswer} /> : null}
          {step === 3 ? <Question3 showAnswer={showAnswer} /> : null}
          <StepContainer maxStep={3} step={step} onStepChange={setStep} />
        </div>
      </SolveProblemPageTemplate>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
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
    <div className="h-full flex flex-col justify-center items-center -mt-[40px] -ml-4">
      <div className="relative">
        <img src={IMAGE1.src} />
        {!answer1 && !showAnswer ? (
          <img
            src="/ui/textarea-pen.png"
            className="absolute pointer-events-none"
            style={{
              height: 65,
              top: 90,
              left: 260
            }}
          />
        ) : null}
        <input
          value={answer1}
          onChange={(e) => setAnswer1(e.target.value)}
          className={`absolute left-[243px] top-[45px] w-[100px] text-center bg-transparent font-haeseo text-[100px] ${showAnswer ? "text-answer" : ""
            }`}
          readOnly={showAnswer}
        />
        {!answer2 && !showAnswer ? (
          <img
            src="/ui/textarea-pen.png"
            className="absolute pointer-events-none"
            style={{
              height: 65,
              top: 300,
              left: 740
            }}
          />
        ) : null}
        <input
          value={answer2}
          onChange={(e) => setAnswer2(e.target.value)}
          className={`absolute left-[723px] top-[280px] w-[100px] text-center bg-transparent text-[80px] ${showAnswer ? "text-answer" : ""
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
        {!answer1 && !showAnswer ? (
          <img
            src="/ui/textarea-pen.png"
            className="absolute pointer-events-none"
            style={{
              height: 65,
              top: 90,
              left: 910
            }}
          />
        ) : null}
        <input
          value={answer1}
          onChange={(e) => setAnswer1(e.target.value)}
          className={`absolute left-[840px] top-[40px] w-[200px] text-center bg-transparent font-haeseo text-[130px] ${showAnswer ? "text-answer" : ""
            }`}
          readOnly={showAnswer}
        />
        {!answer2 && !showAnswer ? (
          <img
            src="/ui/textarea-pen.png"
            className="absolute pointer-events-none"
            style={{
              height: 65,
              top: 90,
              left: 1130
            }}
          />
        ) : null}
        <input
          value={answer2}
          onChange={(e) => setAnswer2(e.target.value)}
          className={`absolute left-[1062px] top-[40px] w-[200px] text-center bg-transparent font-haeseo text-[130px] ${showAnswer ? "text-answer" : ""
            }`}
          readOnly={showAnswer}
        />
        {!answer3 && !showAnswer ? (
          <img
            src="/ui/textarea-pen.png"
            className="absolute pointer-events-none"
            style={{
              height: 65,
              top: 310,
              left: 1130
            }}
          />
        ) : null}
        <input
          value={answer3}
          onChange={(e) => setAnswer3(e.target.value)}
          className={`absolute left-[1062px] top-[250px] w-[200px] text-center bg-transparent font-haeseo text-[130px] ${showAnswer ? "text-answer" : ""
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
    <div className="w-[1400px] h-full flex flex-col justify-center -mt-[30px] ml-[70px] pr-[10px] text-[55px] tracking-tighter leading-[90px]">
      <div className="flex justify-between">
        <p>(1) 받침은 맨 처음에 쓴다.</p>
        <div>
          (
          {!answer1 && !showAnswer ? (
            <img
              src="/ui/textarea-pen.png"
              className="absolute pointer-events-none"
              style={{
                height: 52,
                top: 170,
                left: 1420
              }}
            />
          ) : null}
          <input
            value={answer1}
            onChange={(e) => setAnswer1(e.currentTarget.value)}
            className={`w-[160px] text-center ${showAnswer ? "text-answer" : ""
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
          {!answer2 && !showAnswer ? (
            <img
              src="/ui/textarea-pen.png"
              className="absolute pointer-events-none"
              style={{
                height: 52,
                top: 170 + 90 * 1,
                left: 1420
              }}
            />
          ) : null}
          <input
            value={answer2}
            onChange={(e) => setAnswer2(e.currentTarget.value)}
            className={`w-[160px] text-center ${showAnswer ? "text-answer" : ""
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
          {!answer3 && !showAnswer ? (
            <img
              src="/ui/textarea-pen.png"
              className="absolute pointer-events-none"
              style={{
                height: 52,
                top: 170 + 90 * 2,
                left: 1420
              }}
            />
          ) : null}
          <input
            value={answer3}
            onChange={(e) => setAnswer3(e.currentTarget.value)}
            className={`w-[160px] text-center ${showAnswer ? "text-answer" : ""
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
          {!answer4 && !showAnswer ? (
            <img
              src="/ui/textarea-pen.png"
              className="absolute pointer-events-none"
              style={{
                height: 52,
                top: 170 + 90 * 3,
                left: 1420
              }}
            />
          ) : null}
          <input
            value={answer4}
            onChange={(e) => setAnswer4(e.currentTarget.value)}
            className={`w-[160px] text-center ${showAnswer ? "text-answer" : ""
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
          {!answer5 && !showAnswer ? (
            <img
              src="/ui/textarea-pen.png"
              className="absolute pointer-events-none"
              style={{
                height: 52,
                top: 170 + 90 * 4,
                left: 1420
              }}
            />
          ) : null}
          <input
            value={answer5}
            onChange={(e) => setAnswer5(e.currentTarget.value)}
            className={`w-[160px] text-center ${showAnswer ? "text-answer" : ""
              }`}
            readOnly={showAnswer}
          />
          )
        </div>
      </div>
    </div>
  );
};
