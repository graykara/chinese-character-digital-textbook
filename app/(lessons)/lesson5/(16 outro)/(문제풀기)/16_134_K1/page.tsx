"use client";

import { SolveProblemPageTemplate } from "@/app/pages/solve-problem-page-template";
import IMAGE1 from "./1.png";
import IMAGE3 from "./3.png";
import IMAGE3_1 from "./3-1.png";
import IMAGE5 from "./5.png";
import IMAGE5_1 from "./5-1.png";
import IMAGE7 from "./7.png";
import IMAGE9_1 from "./9-1.png";
import { useContext, useEffect, useState } from "react";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { PageInfoContext } from "@/app/utils/page-info";
import { RightTopStepContainer } from "@/app/components/right-top-step-container";
import BACKGROUND1 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕35.png";
import BACKGROUND2 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕36.png";
import BACKGROUND3 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕37.png";
import BACKGROUND4 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕38.png";
import BACKGROUND5 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕39.png";
import BACKGROUND6 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕40.png";
import BACKGROUND7 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕41.png";
import BACKGROUND8 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕42.png";
import BACKGROUND9 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕43.png";
import BACKGROUND10 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕44.png";
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
    "[3-4] 다음 글을 읽고, 물음에 답하시오.",
    "[3-4] 다음 글을 읽고, 물음에 답하시오.",
    "[5-6] 다음 글을 읽고, 물음에 답하시오.",
    "[5-6] 다음 글을 읽고, 물음에 답하시오.",
    "[7-8] 다음 글을 읽고, 물음에 답하시오.",
    "[7-8] 다음 글을 읽고, 물음에 답하시오.",
    "< 서답형, 논술형 문제 >",
    "< 서답형, 논술형 문제 >",
  ];

  useEffect(() => {
    setShowAnswer(false);
  }, [step]);

  return (
    <>
      <RightTopStepContainer
        maxStep={10}
        step={step}
        onStepChange={setStep}
        className="bg-transparent !top-[120px] !right-[200px]"
      />
      <SolveProblemPageTemplate
        lesson={5}
        number={step}
        question={questions[step - 1]}
        hideIconNumbers={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        essayTypeNumbers={[9, 10]}
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
        {step === 10 && <Question10 />}
      </SolveProblemPageTemplate>

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
                            : step === 10
                              ? BACKGROUND10.src
                              : ""
        }
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}

const Question1 = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ContentContainer className="!justify-start top-5 w-[1560px]">
        <img src={IMAGE1.src} />

        <div className="w-full mt-14 -ml-1">
          <header className="flex items-center gap-5">
            <ProblemNumberIcon number={1} />
            <p className="text-[55px] mt-3 -ml-1 tracking-tighter">
              윗글에서 <span className="text-[40px] bg-[#848586] text-white rounded-full ml-2 pt-1 pb-0 pl-1.5 pr-2.5 mr-1 tracking-tighter align-text-top">ㄱ</span>과 상대되는 뜻을 가진 한자를 찾아 쓰시오.
            </p>
          </header>

          <div className="ml-[90px] mt-[25px] w-[130px] h-[130px] rounded-[15px] border-[3px] border-[#939292] flex justify-center items-center">
            <InputWithPen
              answer="劣​"
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
      <ContentContainer className="!justify-start top-6 w-[1560px]">
        <img src={IMAGE1.src} />

        <div className="w-full mt-12 -ml-1">
          <header className="flex items-center gap-5">
            <ProblemNumberIcon number={2} />
            <p className="text-[55px] mt-3 -ml-1 tracking-tighter">
              윗글의 내용으로 보아 <span className="text-[40px] bg-[#848586] text-white rounded-full ml-2 pt-1 pb-0 px-2 mr-1 tracking-tighter align-text-top">ㄴ</span>을 바르게 이해한 사람은?
            </p>
          </header>

          <div className="ml-[100px] mt-10">
            <SelectionQuiz
              answers={[3]}
              showAnswer={showAnswer}
              options={[
                "불평의 원인을 찾아야 해.",
                "단점이 없는 사람은 없어.",
                "불평하는 마음을 가질 수 있어.",
                "긍정적으로 생각하는 태도가 필요해.",
                "단점을 고칠 수 있도록 알려 주어야 해.",
              ]}
              className="grid grid-cols-2 gap-y-6 text-[45px] tracking-tight"
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
      <ContentContainer className="!justify-start top-5 w-[1560px]">
        <img src={IMAGE3.src} />

        <div className="w-full mt-14 -ml-1">
          <header className="flex items-center gap-5">
            <ProblemNumberIcon number={3} />
            <p className="text-[55px] mt-3 -ml-1 tracking-tighter">
              <span className="text-[42px] border-[3px] border-black rounded-full pt-1 pb-0 px-4 align-text-top">보기</span>의 한자를 바르게 배열하여 <span className="text-[40px] bg-[#848586] text-white rounded-full ml-2 pt-1 pb-0 px-2 mr-1 tracking-tighter align-text-top">가</span>에 들어갈 내용을 완성하시오.
            </p>
          </header>

          <div className="ml-[10px] mt-12 relative">
            <img src={IMAGE3_1.src} />

            <InputWithPen
              answer="物貴而人賤​"
              showAnswer={showAnswer}
              className="w-[500px] text-[72px] font-haeseo text-center bg-transparent"
              containerClassName="absolute left-[970px] top-[30px]"
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

const Question4 = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ContentContainer className="!justify-start top-5 w-[1560px]">
        <img src={IMAGE3.src} />

        <div className="w-full mt-14 -ml-1">
          <header className="flex items-center gap-5">
            <ProblemNumberIcon number={4} />
            <p className="text-[55px] mt-3 -ml-1 tracking-tighter">
              윗글의 내용으로 보아 <span className="text-[40px] bg-[#848586] text-white rounded-full ml-2 pt-1 pb-0 pl-1.5 pr-2.5 mr-1 tracking-tighter align-text-top">ㄱ</span>이 가리키는 것을 찾아 쓰시오.
            </p>
          </header>

          <div className="ml-[105px] mt-2 relative">
            <InputWithPen
              answer="人與物​"
              showAnswer={showAnswer}
              className="w-[1200px] text-[72px] font-haeseo bg-transparent"
              containerClassName="w-[1200px] border-b-2 border-black"
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
      <ContentContainer className="!justify-start top-5 w-[1560px]">
        <img src={IMAGE5.src} />

        <div className="w-full mt-14 -ml-1">
          <header className="flex items-center gap-5">
            <ProblemNumberIcon number={5} />
            <p className="text-[55px] mt-3 -ml-1 tracking-tighter">
              윗글에서 <span className="text-[40px] bg-[#848586] text-white rounded-full ml-2 pt-1 pb-0 pl-1.5 pr-2.5 mr-1 tracking-tighter align-text-top">ㄱ</span>이 가리키는 것을 찾아 한자로 쓰고 우리말로 풀이하시오.
            </p>
          </header>

          <div className="ml-[100px] mt-16 relative">
            <img src={IMAGE5_1.src} />
            <InputWithPen
              answer="草中石​"
              showAnswer={showAnswer}
              className="w-[850px] text-center text-[65px] font-haeseo bg-transparent"
              penClassName="left-1/2 -translate-x-1/2"
              containerClassName="absolute left-[450px] top-[-45px]"
            />
            <InputWithPen
              answer="풀 속의 돌​"
              showAnswer={showAnswer}
              className="w-[1000px] text-center text-[60px] bg-transparent"
              penClassName="left-1/2 -translate-x-1/2"
              containerClassName="absolute left-[300px] top-[95px]"
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
      <ContentContainer className="!justify-start top-5 w-[1560px]">
        <img src={IMAGE5.src} />

        <div className="w-full mt-14 -ml-1">
          <header className="flex items-center gap-5">
            <ProblemNumberIcon number={6} />
            <p className="text-[55px] mt-3 -ml-1 tracking-tighter">
            <span className="text-[40px] bg-[#848586] text-white rounded-full ml-2 pt-1 pb-0 px-2 tracking-tighter align-text-top">가</span>~<span className="text-[40px] bg-[#848586] text-white rounded-full pt-1 pb-0 px-2 mr-1 tracking-tighter align-text-top">마</span>의 설명으로 옳지 <span className="underline underline-offset-[10px]">않은</span> 것은?
            </p>
          </header>

          <div className="ml-[100px] mt-10 relative">
            <SelectionQuiz
              answers={[1]}
              showAnswer={showAnswer}
              options={[
                "㉮는 ‘적중하다’로 풀이한다.",
                "㉯의 음은 ‘몰’이다.",
                "㉰는 ‘다시’로 풀이한다.",
                "㉱의 음은 ‘불’이다.",
                "㉲의 음은 ‘부’이다.",
              ]}
              className="grid grid-cols-2 gap-y-6 text-[45px] tracking-tight"
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
      <ContentContainer className="!justify-start top-5 w-[1560px]">
        <img src={IMAGE7.src} />

        <div className="w-full mt-14 -ml-1">
          <header className="flex items-center gap-5">
            <ProblemNumberIcon number={7} />
            <p className="text-[55px] mt-3 -ml-1 tracking-tighter">
            <span className="text-[40px] bg-[#848586] text-white rounded-full ml-2 pt-1 pb-0 pl-1.5 pr-2.5 mr-1 tracking-tighter align-text-top">ㄱ</span>을 숫자로 바르게 표기한 것은?
            </p>
          </header>

          <div className="ml-[100px] mt-10 relative">
            <SelectionQuiz
              answers={[4]}
              showAnswer={showAnswer}
              options={["1", "10", "11", "1/10", "1/100"]} // 분수 표시 필요
              className="grid grid-cols-3 gap-y-6 text-[45px] tracking-tight"
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
      <ContentContainer className="!justify-start top-5 w-[1560px]">
        <img src={IMAGE7.src} />

        <div className="w-full mt-14 -ml-1">
          <header className="flex items-center gap-5">
            <ProblemNumberIcon number={8} />
            <p className="text-[55px] mt-3 -ml-1 tracking-tighter">
            <span className="text-[40px] bg-[#848586] text-white rounded-full ml-2 pt-1 pb-0 px-2 tracking-tighter align-text-top">가</span>~<span className="text-[40px] bg-[#848586] text-white rounded-full pt-1 pb-0 px-2 mr-1 tracking-tighter align-text-top">마</span>의 설명으로 옳지{" "}
              <span className="underline underline-offset-2">않은</span> 것은?
            </p>
          </header>

          <div className="ml-[100px] mt-10 relative">
            <SelectionQuiz
              answers={[2]}
              showAnswer={showAnswer}
              options={[
                "㉮는 ‘굶주려 병든 사람’을 뜻한다.",
                "㉯는 ‘만덕’을 뜻한다.",
                "㉰는 ‘~와/과 같이’로 풀이한다.",
                "㉱는 ‘~와/과’로 풀이한다.",
                "㉲는 ‘칭송하다’라는 뜻이다.",
              ]}
              className="grid grid-cols-2 gap-y-6 text-[45px] tracking-tight"
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

const Question9 = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ContentContainer className="!justify-start top-5 -mt-[9px] w-[1560px]">
        <div className="w-full -mt-0 ml-0">
          <header className="flex items-start -mt-0 gap-10">
            <ProblemNumberIcon number={9} type="2" />
            <p className="text-[55px] -mt-2 -ml-6 tracking-tight break-keep ">
              ‘
              <span className="font-haeseo text-[60px] tracking-[-5px]">
                自天而視之, 人與物均也.
              </span>
              ’를 우리말로 풀이하고 문장에서 얻을 수 있는 교훈을 쓰시오.
            </p>
          </header>

          <div className="ml-[100px] mt-16 relative">
            <img src={IMAGE9_1.src} />

            <InputWithPen
              answer="하늘로부터 그것을 보면, 사람과 사물이 모두 동등하다.​"
              showAnswer={showAnswer}
              className="w-[1200px] bg-transparent
              text-[55px] tracking-tighter"
              penClassName="-mt-3"
              containerClassName="absolute left-[150px] top-[-15px]"
            />
            <InputWithPen
              answer="사람과 만물은 모두 함께 어울려 상생하는 관계여야 한다.​"
              showAnswer={showAnswer}
              className="w-[1200px] bg-transparent text-[55px] tracking-tighter"
              penClassName="-mt-3"
              containerClassName="absolute left-[150px] top-[135px]"
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

const Question10 = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  //#293071
  return (
    <>
      <ContentContainer className="!justify-start -left-6 top-0">
        <div className="w-full -ml-1">
          <header className="flex items-center gap-5">
            <ProblemNumberIcon number={10} type="2" />
            <p className="text-[55px] mt-3 -ml-1 tracking-tighter">
              사람들이 만덕을 칭송한 이유를 쓰시오.
            </p>
          </header>

          <div className="ml-[100px] mt-10 relative">
            <InputWithPen
              answer="흉년이 들어 굶주려 병든 사람들에게 쌀을 나누어 주었기 때문이다.​"
              showAnswer={showAnswer}
              className="w-[1300px] bg-transparent text-[50px] tracking-tighter"
              containerClassName="w-[1300px] mt-[60px] -ml-2 border-b-2 border-black"
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
