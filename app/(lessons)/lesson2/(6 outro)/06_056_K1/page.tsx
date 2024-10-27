"use client";

import { SolveProblemPageTemplate } from "@/app/pages/solve-problem-page-template";
import IMAGE2 from "./image2.png";
import IMAGE3 from "./image3.png";
import IMAGE5 from "./image5.png";
import IMAGE8 from "./image8.png";
import IMAGE9 from "./image9.png";
import { useContext, useEffect, useState } from "react";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { PageInfoContext } from "@/app/utils/page-info";
import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import BACKGROUND1 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘28.png";
import { SelectionQuiz } from "@/app/components/quiz/selection-quiz";
import { InputWithPen } from "@/app/components/input-with-pen";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { ProblemNumberIcon } from "@/app/components/solve-problem/problem-number-icon";

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
        lesson={2}
        number={step}
        question={questions[step - 1]}
        hideIconNumbers={[8, 9]}
      >
        <div className="h-full flex flex-col justify-between items-center">
          {step === 1 ? <Question1 showAnswer={showAnswer} /> : null}
          {step === 2 ? <Question2 showAnswer={showAnswer} /> : null}
          {step === 3 ? <Question3 showAnswer={showAnswer} /> : null}
          {step === 4 ? <Question4 showAnswer={showAnswer} /> : null}
          {step === 5 ? <Question5 showAnswer={showAnswer} /> : null}
          {step === 6 ? <Question6 showAnswer={showAnswer} /> : null}
          {step === 7 ? <Question7 showAnswer={showAnswer} /> : null}
          {step === 8 ? <Question8 showAnswer={showAnswer} /> : null}
          {step === 9 ? <Question9 showAnswer={showAnswer} /> : null}
        </div>
      </SolveProblemPageTemplate>

      {step !== 9 ? (
        <CheckAnswerButton
          active={showAnswer}
          onClick={() => setShowAnswer(!showAnswer)}
        />
      ) : (
        <ExampleAnswerButton
          active={showAnswer}
          onClick={() => setShowAnswer(!showAnswer)}
        />
      )}
      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}

const Question1 = ({ showAnswer }: { showAnswer: boolean }) => {
  return (
    <div className="w-full h-full pl-[85px] pt-[20px]">
      <SelectionQuiz
        showAnswer={showAnswer}
        options={[
          <p key={1}>
            <span className="font-haeseo">休</span> (목) 나무
          </p>,
          <p key={2}>
            <span className="font-haeseo">聞</span> (문) 묻다
          </p>,
          <p key={3}>
            <span className="font-haeseo">好</span> (호) 좋다
          </p>,
          <p key={4}>
            <span className="font-haeseo">九</span> (칠) 일곱
          </p>,
          <p key={5}>
            <span className="font-haeseo">末</span> (본) 근본, 뿌리
          </p>,
        ]}
        answers={[3]}
        className="flex flex-col gap-[16px]"
      />
    </div>
  );
};

const Question2 = ({ showAnswer }: { showAnswer: boolean }) => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="relative">
        <img src={IMAGE2.src} />
        <InputWithPen
          answer="五月八日"
          showAnswer={showAnswer}
          containerClassName={`absolute left-[900px] top-[340px] w-[200px] text-center bg-transparent font-haeseo text-[55px]`}
          className="text-center"
          penClassName="left-1/2 -translate-x-1/2 h-[40px]"
        />
      </div>
    </div>
  );
};

const Question3 = ({ showAnswer }: { showAnswer: boolean }) => {
  return (
    <div className="w-full pl-[80px]">
      <img src={IMAGE3.src} className="mb-10" />

      <SelectionQuiz
        showAnswer={showAnswer}
        options={[
          <p key={1}>
            <span className="font-haeseo">下</span>
          </p>,
          <p key={2}>
            <span className="font-haeseo">火</span>
          </p>,
          <p key={3}>
            <span className="font-haeseo">洋</span>
          </p>,
          <p key={4}>
            <span className="font-haeseo">休</span>
          </p>,
          <p key={5}>
            <span className="font-haeseo">問</span>
          </p>,
        ]}
        answers={[4]}
        className="flex gap-[150px]"
      />
    </div>
  );
};

const Question4 = ({ showAnswer }: { showAnswer: boolean }) => {
  return (
    <div className="w-full flex gap-[100px] pl-[80px] pt-[80px]">
      <div className="flex items-center text-[60px]">
        <span className="text-[50px]">(1)</span>{" "}
        <span className="font-haeseo">密</span>
        <InputWithPen
          showAnswer={showAnswer}
          answer="林"
          className="font-haeseo bg-transparent text-center w-[80px] h-[80px] relative -top-1"
          containerClassName="relative border-[3px] border-[#c4c4c5] rounded-lg w-[80px] h-[80px]"
          penClassName="left-1/2 -translate-x-1/2 w-[50px]"
        />{" "}
        : 빽빽한 숲.
      </div>
      <div className="flex items-center text-[60px]">
        <span className="text-[50px]">(2)</span>{" "}
        <InputWithPen
          showAnswer={showAnswer}
          answer="民"
          className="font-haeseo bg-transparent text-center w-[80px] h-[80px] relative -top-1"
          containerClassName="relative border-[3px] border-[#c4c4c5] rounded-lg w-[80px] h-[80px]"
          penClassName="left-1/2 -translate-x-1/2 w-[50px]"
        />
        <span className="font-haeseo">主</span> : 백성이 주인임.
      </div>
    </div>
  );
};

const Question5 = ({ showAnswer }: { showAnswer: boolean }) => {
  return (
    <div className="h-full flex items-center">
      <div className="relative">
        <img src={IMAGE5.src} />

        <InputWithPen
          showAnswer={showAnswer}
          answer="本末"
          className="font-haeseo text-[65px] bg-transparent w-[300px] text-center"
          penClassName="left-1/2 -translate-x-1/2"
          containerClassName="!absolute left-[535px] top-[70px]"
        />
      </div>
    </div>
  );
};

const Question6 = ({ showAnswer }: { showAnswer: boolean }) => {
  return (
    <div className="w-full h-full pl-[85px] pt-[20px]">
      <SelectionQuiz
        showAnswer={showAnswer}
        options={[
          <p key={1}>
            <span className="font-haeseo">有無</span> - 술보 관계
          </p>,
          <p key={2}>
            <span className="font-haeseo">讀書</span> - 병렬 관계
          </p>,
          <p key={3}>
            <span className="font-haeseo">年少</span> - 술목 관계
          </p>,
          <p key={4}>
            <span className="font-haeseo">休日</span> - 수식 관계
          </p>,
          <p key={5}>
            <span className="font-haeseo">難讀</span> - 주술 관계
          </p>,
        ]}
        answers={[4]}
        className="flex flex-col gap-[16px]"
      />
    </div>
  );
};

const Question7 = ({ showAnswer }: { showAnswer: boolean }) => {
  return (
    <div className="w-full h-full pl-[85px] pt-[20px]">
      <SelectionQuiz
        showAnswer={showAnswer}
        options={[
          <p key={1}>
            매주 월요일은 <span className="font-haeseo">休業</span> 합니다.
          </p>,
          <p key={1}>
            그는 예심을 <span className="font-haeseo">無難</span> 하게 통과했다.
          </p>,
          <p key={1}>
            이야기할 때는 <span className="font-haeseo">聽者</span> 의 상황을
            고려해야 한다.
          </p>,
          <p key={1}>
            그 책은 특히 학생들에게 많은{" "}
            <span className="font-haeseo">共感</span> 을 불러일으켰다.
          </p>,
          <p key={1}>
            이번 일은 나의 <span className="font-haeseo">義士</span> 와는
            상관없이 그가 독단적으로 결정한 것이다.
          </p>,
        ]}
        answers={[5]}
        className="flex flex-col gap-[16px]"
      />
    </div>
  );
};

const Question8 = ({ showAnswer }: { showAnswer: boolean }) => {
  return (
    <div className="w-full">
      <div className="flex justify-center mb-5">
        <img src={IMAGE8.src} />
      </div>
      <div className="flex items-center gap-4 mb-5">
        <ProblemNumberIcon number={8} />
        ㉠~㉣에 들어갈 내용을 한글로 쓰시오.
      </div>

      <div className="grid grid-cols-2 w-[1300px] gap-y-[32px] px-[32px] pl-10">
        <div className="flex items-center">
          (1) ㉠ :{" "}
          <InputWithPen
            answer="자연"
            showAnswer={showAnswer}
            containerClassName="border-b border-black ml-4"
            className="bg-transparent w-[400px] text-center"
            penClassName="h-[40px] left-1/2 -translate-x-1/2"
          />
        </div>
        <div className="flex items-center">
          (2) ㉡ :{" "}
          <InputWithPen
            answer="상하"
            showAnswer={showAnswer}
            containerClassName="border-b border-black ml-4"
            className="bg-transparent w-[400px] text-center"
            penClassName="h-[40px] left-1/2 -translate-x-1/2"
          />
        </div>
        <div className="flex items-center">
          (3) ㉢ :{" "}
          <InputWithPen
            answer="물수"
            showAnswer={showAnswer}
            containerClassName="border-b border-black ml-4"
            className="bg-transparent w-[400px] text-center"
            penClassName="h-[40px] left-1/2 -translate-x-1/2"
          />
        </div>
        <div className="flex items-center">
          (4) ㉣ :{" "}
          <InputWithPen
            answer="물"
            showAnswer={showAnswer}
            containerClassName="border-b border-black ml-4"
            className="bg-transparent w-[400px] text-center"
            penClassName="h-[40px] left-1/2 -translate-x-1/2"
          />
        </div>
      </div>
    </div>
  );
};

const Question9 = ({ showAnswer }: { showAnswer: boolean }) => {
  return (
    <div className="w-full">
      <div className="flex justify-center mb-5">
        <img src={IMAGE8.src} />
      </div>
      <div className="flex items-start gap-4 mb-5">
        <ProblemNumberIcon number={9} />
        칠판에 쓰인 세 개의 단어 중 하나를 선택하고, 그 단어를 활용하여
        <br />
        짧은 글을 쓰시오. ※ 선택한 단어는 한자로 쓰기.
      </div>

      <div className="relative ml-20">
        <img src={IMAGE9.src} />

        <InputWithPen
          isExample
          answer="산천"
          showAnswer={showAnswer}
          containerClassName="!absolute left-[12px] top-[78px]"
          className="bg-transparent w-[400px] text-center text-[40px]"
          penClassName="h-[40px] left-1/2 -translate-x-1/2"
        />

        <InputWithPen
          isExample
          answer="아름답게 핀 진달래꽃이 山川에 가득하다."
          showAnswer={showAnswer}
          containerClassName="!absolute left-[420px] top-[78px]"
          className="bg-transparent w-[720px] text-center text-[40px]"
          penClassName="h-[40px] left-1/2 -translate-x-1/2"
        />
      </div>
    </div>
  );
};
