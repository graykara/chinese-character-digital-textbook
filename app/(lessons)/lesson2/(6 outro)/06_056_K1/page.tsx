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
import BACKGROUND2 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘29.png";
import BACKGROUND3 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘30.png";
import BACKGROUND4 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘31.png";
import BACKGROUND5 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘32.png";
import BACKGROUND6 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘33.png";
import BACKGROUND7 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘34.png";
import BACKGROUND8 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘35.png";
import BACKGROUND9 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘36.png";
import { SelectionQuiz } from "@/app/components/quiz/selection-quiz";
import { InputWithPen } from "@/app/components/input-with-pen";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { ProblemNumberIcon } from "@/app/components/solve-problem/problem-number-icon";

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("문제 풀기");

  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);
  const [showAnswer, setShowAnswer] = useState(false);

  const questions = [
    "한자의 음과 뜻이 옳은 것은?",
    "대화 속 밑줄 친 부분을 한자로 바꿔 쓰시오.",
    <>
      <span className="text-[42px] border-[3px] border-black rounded-full mr-1 pt-1 pb-0 px-4 align-text-top">보기</span>와 같은 원리로
      만들어진 한자는?
    </>,
    "빈칸에 알맞은 한자를 쓰시오.",
    <>
      단어장의 내용을 보고 <span className="text-[40px] bg-[#848586] text-white rounded-full pt-1 pb-0 pl-1.5 pr-2 mr-1 tracking-tighter align-text-top">ㄱ</span>에 들어갈 단어를 한자로 쓰시오.
    </>,
    "단어의 짜임이 옳은 것은?",
    <>
      한자 어휘의 활용이 옳지{" "}
      <span className="underline underline-offset-[10px]">않은</span> 것은?
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
        src={
          step === 1
            ? BACKGROUND1.src
            : step === 2
              ? BACKGROUND2.src
              : step === 3
                ? BACKGROUND3.src
                : step === 4
                  ? BACKGROUND4.src
                  : step === 5
                    ? BACKGROUND5.src
                    : step === 6
                      ? BACKGROUND6.src
                      : step === 7
                        ? BACKGROUND7.src
                        : step === 8
                          ? BACKGROUND8.src
                          : step === 9
                            ? BACKGROUND9.src
                            : ""
        }
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}

const Question1 = ({ showAnswer }: { showAnswer: boolean }) => {
  return (
    <div className="w-full h-full pl-[85px] pt-[20px] text-[40px] tracking-tight">
      <SelectionQuiz
        showAnswer={showAnswer}
        options={[
          <p key={1} className="-mt-[2px] -mb-[10px]">
            <span className="font-haeseo text-[55px]">休</span>{" "}
            <span className="text-[50px]">(목) 나무</span>
          </p>,
          <p key={2} className="-mt-[2px] -mb-[10px]">
            <span className="font-haeseo text-[55px]">聞</span>{" "}
            <span className="text-[50px]">(문) 묻다</span>
          </p>,
          <p key={3} className="-mt-[2px] -mb-[10px]">
            <span className="font-haeseo text-[55px]">好</span>{" "}
            <span className="text-[50px]">(호) 좋다</span>
          </p>,
          <p key={4} className="-mt-[2px] -mb-[10px]">
            <span className="font-haeseo text-[55px]">九</span>{" "}
            <span className="text-[50px]">(칠) 일곱</span>
          </p>,
          <p key={5} className="-mt-[2px] -mb-[10px]">
            <span className="font-haeseo text-[55px]">末</span>{" "}
            <span className="text-[50px]">(본) 근본, 뿌리</span>
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
      <div className="relative -top-16 -left-12">
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
    <div className="w-full pl-[80px] pt-[40px] text-[40px] tracking-tight">
      <img src={IMAGE3.src} className="mb-10" />

      <SelectionQuiz
        showAnswer={showAnswer}
        options={[
          <p key={1}>
            <span className="font-haeseo text-[55px]">下</span>
          </p>,
          <p key={2}>
            <span className="font-haeseo text-[55px]">火</span>
          </p>,
          <p key={3}>
            <span className="font-haeseo text-[55px]">洋</span>
          </p>,
          <p key={4}>
            <span className="font-haeseo text-[55px]">休</span>
          </p>,
          <p key={5}>
            <span className="font-haeseo text-[55px]">問</span>
          </p>,
        ]}
        answers={[4]}
        className="flex gap-[135px]"
      />
    </div>
  );
};

const Question4 = ({ showAnswer }: { showAnswer: boolean }) => {
  return (
    <div className="w-full flex gap-[100px] pl-[70px] pt-[80px]">
      <div className="flex items-center text-[60px]">
        <span className="text-[50px]">(1)</span>{" "}
        <span className="font-haeseo">密</span>
        <InputWithPen
          showAnswer={showAnswer}
          answer="林"
          className="font-haeseo bg-transparent text-center w-[75px] h-[75px] relative"
          containerClassName="relative border-[3px] border-[#c4c4c5] rounded-lg w-[80px] h-[80px]"
          penClassName="left-1/2 -translate-x-1/2 w-[50px] -mt-2"
        />{" "}
        : 빽빽한 숲.
      </div>
      <div className="flex items-center text-[60px]">
        <span className="text-[50px]">(2)</span>{" "}
        <InputWithPen
          showAnswer={showAnswer}
          answer="民"
          className="font-haeseo bg-transparent text-center w-[75px] h-[75px] relative"
          containerClassName="relative border-[3px] border-[#c4c4c5] rounded-lg w-[80px] h-[80px]"
          penClassName="left-1/2 -translate-x-1/2 w-[50px] -mt-2"
        />
        <span className="font-haeseo">主</span> : 백성이 주인임.
      </div>
    </div>
  );
};

const Question5 = ({ showAnswer }: { showAnswer: boolean }) => {
  return (
    <div className="h-full flex items-center">
      <div className="relative -top-8">
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
    <div className="w-full h-full pl-[85px] pt-[20px] text-[40px] tracking-tight">
      <SelectionQuiz
        showAnswer={showAnswer}
        options={[
          <p key={1} className="-mt-[2px] -mb-[10px]">
            <span className="font-haeseo text-[55px]">有無</span>{" "}
            <span className="text-[50px]">- 술보 관계</span>
          </p>,
          <p key={2} className="-mt-[2px] -mb-[10px]">
            <span className="font-haeseo text-[55px]">讀書</span>{" "}
            <span className="text-[50px]">- 병렬 관계</span>
          </p>,
          <p key={3} className="-mt-[2px] -mb-[10px]">
            <span className="font-haeseo text-[55px]">年少</span>{" "}
            <span className="text-[50px]">- 술목 관계</span>
          </p>,
          <p key={4} className="-mt-[2px] -mb-[10px]">
            <span className="font-haeseo text-[55px]">休日</span>{" "}
            <span className="text-[50px]">- 수식 관계</span>
          </p>,
          <p key={5} className="-mt-[2px] -mb-[10px]">
            <span className="font-haeseo text-[55px]">難讀</span>{" "}
            <span className="text-[50px]">- 주술 관계</span>
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
    <div className="w-full h-full pl-[85px] pt-[20px] text-[40px] tracking-tight">
      <SelectionQuiz
        showAnswer={showAnswer}
        options={[
          <p key={1} className="-mt-[2px] -mb-[10px]">
            <span className="text-[50px]">매주 월요일은</span>{" "}
            <span className="font-haeseo text-[55px]">休業</span>{" "}
            <span className="text-[50px]">합니다.</span>
          </p>,
          <p key={1} className="-mt-[2px] -mb-[10px]">
            <span className="text-[50px]">그는 예심을</span>{" "}
            <span className="font-haeseo text-[55px]">無難</span>{" "}
            <span className="text-[50px]">하게 통과했다.</span>
          </p>,
          <p key={1} className="-mt-[2px] -mb-[10px]">
            <span className="text-[50px]">이야기할 때는</span>{" "}
            <span className="font-haeseo text-[55px]">聽者</span>{" "}
            <span className="text-[50px]">의 상황을 고려해야 한다.</span>
          </p>,
          <p key={1} className="-mt-[2px] -mb-[10px]">
            <span className="text-[50px]">그 책은 특히 학생들에게 많은 </span>
            <span className="font-haeseo text-[55px]">共感</span>{" "}
            <span className="text-[50px]">을 불러일으켰다.</span>
          </p>,
          <p key={1} className="-mt-[2px] -mb-[10px]">
            <span className="text-[50px]">이번 일은 나의</span>{" "}
            <span className="font-haeseo text-[55px]">義士</span>{" "}
            <span className="text-[50px]">
              와는 상관없이 그가 독단적으로 결정한 것이다.
            </span>
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
        <p className="text-[50px] mt-0 -ml-1 tracking-tighter"><span className="text-[40px] bg-[#848586] text-white rounded-full pt-1 pb-0 pl-1.5 pr-2 tracking-tighter align-text-top">ㄱ</span>~<span className="text-[40px] bg-[#848586] text-white rounded-full pt-1 pb-0 px-2 mr-1 tracking-tighter align-text-top">ㄹ</span>에 들어갈 내용을 한글로 쓰시오.</p>
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
        <p className="text-[45px] mt-1 -ml-1 leading-snug tracking-tighter">칠판에 쓰인 세 개의 단어 중 하나를 선택하고, 그 단어를 활용하여
        <br />
        짧은 글을 쓰시오. ※ 선택한 단어는 한자로 쓰기.</p>
      </div>

      <div className="relative ml-20 -mt-5">
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
          answer={
            <p className="-mt-1">
              아름답게 핀 진달래꽃이{" "}
              <span className="font-haeseo text-[45px]">山川</span>에 가득하다.
            </p>
          }
          showAnswer={showAnswer}
          containerClassName="!absolute left-[420px] top-[78px]"
          className="bg-transparent w-[720px] text-center text-[40px]"
          penClassName="h-[40px] left-1/2 -translate-x-1/2"
        />
      </div>
    </div>
  );
};
