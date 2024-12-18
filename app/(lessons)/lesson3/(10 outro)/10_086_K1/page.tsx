"use client";

import { SolveProblemPageTemplate } from "@/app/pages/solve-problem-page-template";
import IMAGE2 from "./image2.png";
import IMAGE3 from "./image3.png";
import IMAGE4 from "./image4.png";
import IMAGE5 from "./image5.png";
import IMAGE6 from "./image6.png";
import IMAGE7 from "./image7.png";
import { useContext, useEffect, useState } from "react";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { PageInfoContext } from "@/app/utils/page-info";
import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import { SelectionQuiz } from "@/app/components/quiz/selection-quiz";
import { InputWithPen } from "@/app/components/input-with-pen";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { ProblemNumberIcon } from "@/app/components/solve-problem/problem-number-icon";
import { OLD_TextareaWithPen } from "@/app/components/textarea/textarea-with-pen";

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);


  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);
  const [showAnswer, setShowAnswer] = useState(false);

  const questions = [
    <>
      성어 ‘<span className="font-haeseo">十中八九</span>’ 속에 있는 숫자를 모두 더한 값은?
    </>,
    <>
      활동지의 내용으로 보아
      {" "}<span className="text-[42px] rounded-full bg-[#898989] text-white mr-1 pt-1 pb-0 px-2 align-text-top">ㄱ</span>
      에 들어갈 것은?
    </>,
    <>
      풀이 순서가 ‘<span className="font-haeseo">指鹿爲馬</span>’와 같은 것을
      {" "}<span className="text-[42px] border-[3px] border-black rounded-full ml-3 mr-0 pt-1 pb-0 px-4 align-text-top">보기</span>{" "}
      에서
      {" "}<span className="underline underline-offset-[10px]">모두</span>{" "}
      고른 것은?
    </>,
    <>
      게시판의 내용을 보아
      {" "}<span className="text-[42px] rounded-full bg-[#898989] text-white mr-1 pt-1 pb-0 px-2 align-text-top">ㄱ</span>
      에 알맞는 것은?
    </>,
    <>
      글의 내용을 보아
      {" "}<span className="text-[42px] rounded-full bg-[#898989] text-white mr-1 pt-1 pb-0 px-2 align-text-top">ㄱ</span>
      에 들어갈 것은?
    </>,
    <>
      대화의 내용을 보아
      {" "}<span className="text-[42px] rounded-full bg-[#898989] text-white mr-1 pt-1 pb-0 px-2 align-text-top">ㄱ</span>
      에 들어갈 것은?
    </>,
    "대화의 내용으로 보아 빈칸에 들어갈 성어로 옳은 것은?",
    <>
      성어의 활용이 적절하지
      {" "}<span className="underline underline-offset-[10px]">않은</span>{" "}
      것은?
    </>,
    <>
      ‘<span className="font-haeseo">結草報恩</span>’
      의 겉뜻과 속뜻을 쓰고,
      ‘<span className="font-haeseo">結草報恩</span>’
      에서 얻을 수 있는 교훈을 자기의 삶에서 실천해야 할 대상이 있다면 누구인지 밝히고 그 이유를 쓰시오.
    </>
  ];

  useEffect(() => {
    setShowAnswer(false);
  }, [step]);

  return (
    <>
      <RightTopStepContainer
        maxStep={9}
        step={step}

        className="bg-transparent !top-[10px]"
      />
      <SolveProblemPageTemplate
        lesson={2}
        number={step}
        question={questions[step - 1]}
        essayTypeNumbers={[9]}
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
    </>
  );
}

const Question1 = ({ showAnswer }: { showAnswer: boolean }) => {
  return (
    <div className="w-full h-full pl-[85px] pt-[20px] tracking-tight">
      <SelectionQuiz
        showAnswer={showAnswer}
        options={[
          "25",
          "27",
          "29",
          "31",
          "33",
        ]}
        answers={[2]}
        className="flex flex-col gap-[32px]"
      />
    </div>
  );
};

const Question2 = ({ showAnswer }: { showAnswer: boolean }) => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="relative -top-20 left-20 grid grid-cols-2 gap-[32px]">
        <div className="relative">
          <img src={IMAGE2.src} />

          {/* {showAnswer ? (
            <div className="absolute left-[375px] top-[135px] bg-white">
              <p className="text-[80px] font-haeseo">甘</p>
            </div>
          ) : null} */}
        </div>
        <SelectionQuiz
          showAnswer={showAnswer}
          options={[
            <span className="font-haeseo text-[55px]">雪</span>,
            <span className="font-haeseo text-[55px]">四</span>,
            <span className="font-haeseo text-[55px]">甘</span>,
            <span className="font-haeseo text-[55px]">日</span>,
            <span className="font-haeseo text-[55px]">恩</span>,
          ]}
          answers={[3]}
          className="flex flex-col gap-[32px]"
        />
      </div>
    </div>
  );
};

const Question3 = ({ showAnswer }: { showAnswer: boolean }) => {
  return (
    <div className="w-full pt-[40px] text-[40px] tracking-tight">
      <div className="pl-0">
        <img src={IMAGE3.src} className="mb-10" />
      </div>

      <SelectionQuiz
        showAnswer={showAnswer}
        options={[
          <>
            <span className="inline-block w-14 h-14 text-[42px] rounded-full bg-[#898989] text-white px-2">ㄱ</span>,
            <span className="inline-block w-14 h-14 text-[42px] rounded-full bg-[#898989] text-white px-2">ㄷ</span>
          </>,
          <>
            <span className="inline-block w-14 h-14 text-[42px] rounded-full bg-[#898989] text-white px-2">ㄱ</span>,
            <span className="inline-block w-14 h-14 text-[42px] rounded-full bg-[#898989] text-white px-2">ㄹ</span>
          </>,
          <>
            <span className="inline-block w-14 h-14 text-[42px] rounded-full bg-[#898989] text-white px-2">ㄴ</span>,
            <span className="inline-block w-14 h-14 text-[42px] rounded-full bg-[#898989] text-white px-2">ㄷ</span>
          </>,
          <>
            <span className="inline-block w-14 h-14 text-[42px] rounded-full bg-[#898989] text-white px-2">ㄱ</span>,
            <span className="inline-block w-14 h-14 text-[42px] rounded-full bg-[#898989] text-white px-2">ㄴ</span>,
            <span className="inline-block w-14 h-14 text-[42px] rounded-full bg-[#898989] text-white px-2">ㄹ</span>
          </>,
          <>
            <span className="inline-block w-14 h-14 text-[42px] rounded-full bg-[#898989] text-white px-2">ㄴ</span>,
            <span className="inline-block w-14 h-14 text-[42px] rounded-full bg-[#898989] text-white px-2">ㄷ</span>,
            <span className="inline-block w-14 h-14 text-[42px] rounded-full bg-[#898989] text-white px-2">ㄹ</span>
          </>,
        ]}
        answers={[2]}
        className="flex gap-[70px]"
      />
    </div>
  );
};

const Question4 = ({ showAnswer }: { showAnswer: boolean }) => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="relative -top-20 left-20 grid grid-cols-2 gap-[32px]">
        <div className="relative">
          <img src={IMAGE4.src} />

          {/* {showAnswer ? (
            <div className="absolute right-[40px] top-[240px] bg-white">
              우물 안 개구리.
            </div>
          ) : null} */}
        </div>
        <SelectionQuiz
          showAnswer={showAnswer}
          options={[
            "울며 겨자먹가.",
            "우물 안 개구리.",
            "쇠귀에 경 읽기.",
            "가는 말에 채찍질.",
            "하나만 알고 둘은 모른다.",
          ]}
          answers={[2]}
          className="flex flex-col gap-[32px]"
        />
      </div>
    </div>
  );
};

const Question5 = ({ showAnswer }: { showAnswer: boolean }) => {
  return (
    <div className="h-full flex items-center">
      <div className="relative -top-20">
        <img src={IMAGE5.src} />

        <SelectionQuiz
          showAnswer={showAnswer}
          options={[
            <span className="font-haeseo text-[55px]">蛇足</span>,
            <span className="font-haeseo text-[55px]">三人成虎</span>,
            <span className="font-haeseo text-[55px]">易地思之</span>,
            <span className="font-haeseo text-[55px]">十中八九</span>,
            <span className="font-haeseo text-[55px]">雪上加霜</span>,
          ]}
          answers={[5]}
          className="flex gap-[32px] mt-20"
        />
      </div>
    </div>
  );
};

const Question6 = ({ showAnswer }: { showAnswer: boolean }) => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="relative -top-20 left-20 grid grid-cols-2 gap-[32px]">
        <div className="relative">
          <img src={IMAGE6.src} />

          {/* {showAnswer ? (
            <div className="absolute right-[40px] top-[240px] bg-white">
              우물 안 개구리.
            </div>
          ) : null} */}
        </div>
        <SelectionQuiz
          showAnswer={showAnswer}
          options={[
            <span className="font-haeseo text-[55px]">十中八九</span>,
            <span className="font-haeseo text-[55px]">多多益善</span>,
            <span className="font-haeseo text-[55px]">結草報恩</span>,
            <span className="font-haeseo text-[55px]">莫上莫下</span>,
            <span className="font-haeseo text-[55px]">朝三暮四</span>,
          ]}
          answers={[4]}
          className="flex flex-col gap-[32px]"
        />
      </div>
    </div>
  );
};

const Question7 = ({ showAnswer }: { showAnswer: boolean }) => {
  return (
    <div className="h-full flex items-center">
      <div className="relative -top-8">
        <img src={IMAGE7.src} />

        <SelectionQuiz
          showAnswer={showAnswer}
          options={[
            <span className="font-haeseo text-[55px]">蛇足</span>,
            <span className="font-haeseo text-[55px]">背水陣</span>,
            <span className="font-haeseo text-[55px]">朝三暮四</span>,
            <span className="font-haeseo text-[55px]">多多益善</span>,
            <span className="font-haeseo text-[55px]">易地思之</span>,
          ]}
          answers={[2]}
          className="flex gap-[60px] mt-5"
        />
      </div>
    </div>
  );
};

const Question8 = ({ showAnswer }: { showAnswer: boolean }) => {
  return (
    <div className="w-full h-full pl-[85px] pt-[20px] tracking-tight">
      <SelectionQuiz
        showAnswer={showAnswer}
        options={[
          <>
            회의 시간이 이렇게 길어지다니, 군말이
            <span className="font-haeseo text-[50px] leading-[50px] tracking-[-2.5px]">蛇足</span>
            이었어.
          </>,
          <>
            소외된 어려운 이웃을 돕는 손길은
            <span className="font-haeseo text-[50px] leading-[50px] tracking-[-2.5px]">多多益善</span>
            이지요.
          </>,
          <>
            <span className="font-haeseo text-[50px] leading-[50px] tracking-[-2.5px]">龍頭蛇尾</span>
            라더니 정말 거짓말도 여러 사람이 하니 진짜 같아.
          </>,
          <>
            서로 타협점을 찾지 못한다면
            <span className="font-haeseo text-[50px] leading-[50px] tracking-[-2.5px]">易地思之</span>
            해 보는 것이 좋겠습니다.
          </>,
          <>
            앞서 달리던 두 선수가 넘어져 다른 선수가
            <span className="font-haeseo text-[50px] leading-[50px] tracking-[-2.5px]">漁父之利</span>
            로 우승하였다.
          </>,
        ]}
        answers={[3]}
        className="flex flex-col gap-[32px]"
      />
    </div>
  );
};

const Question9 = ({ showAnswer }: { showAnswer: boolean }) => {
  return (
    <div className="w-full">
      <div className="relative ml-20 mt-10">
        <div className="flex flex-col gap-5">
          <div className="flex gap-x-5">
            <p className="flex-none">&#183;겉뜻:</p>
            <InputWithPen
              answer="풀을 엮어 은혜를 갚음."
              showAnswer={showAnswer}
              containerClassName="w-full border-b-2 border-black"
              className="bg-transparent w-[1350px]"
              penClassName="h-[40px]"
            />
          </div>
          <div className="flex gap-x-5">
            <p className="flex-none">&#183;속뜻:</p>
            <InputWithPen
              answer="죽은 뒤에라도 은혜를 잊지 않고 갚음."
              showAnswer={showAnswer}
              containerClassName="w-full border-b-2 border-black"
              className="bg-transparent w-[1350px]"
              penClassName="h-[40px]"
            />
          </div>
          <div className="flex gap-x-5">
            <p className="flex-none">&#183;실천 대상:</p>
            <InputWithPen
              isExample
              answer="선생님"
              showAnswer={showAnswer}
              containerClassName="w-full border-b-2 border-black"
              className="bg-transparent w-[1250px]"
              penClassName="h-[40px]"
            />
          </div>
          <div className="flex gap-x-5">
            <p className="flex-none">&#183;이유:</p>
            <OLD_TextareaWithPen
              isExample
              answer="친구들과의 갈등으로 학교생활에 어려움이 많았는데 선생님께서 따뜻한 위로와 도움으로 잘 적응할 수 있었기 때문이다."
              showAnswer={showAnswer}
              containerClassName="w-full border-b-2 border-black"
              className="bg-transparent w-full break-keep"
              penClassName="h-[40px] top-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
