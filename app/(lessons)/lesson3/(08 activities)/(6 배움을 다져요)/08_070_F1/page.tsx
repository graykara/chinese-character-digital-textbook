"use client";

import { StrengthenLearningMainContentHeader } from "@/app/components/headers/strengthen-learning-main-content-header";
import { useContext, useEffect, useState } from "react";
import IMAGE1 from "./bg_1.png";
import IMAGE2 from "./bg_2.png";
import IMAGE3 from "./bg_3.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { TextareaWithPen } from "@/app/components/textarea/textarea-with-pen";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어223.png"; //223, 224, 225
import BACKGROUND2 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어224.png"; //223, 224, 225
import BACKGROUND3 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어225.png"; //223, 224, 225
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { SmartButton } from "@/app/components/buttons/smart-button";
import { clickSound } from "@/app/utils/click-sound";
import { PageInfoContext } from "@/app/utils/page-info";
import { Button } from "@/app/components/buttons/button";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  return (
    <>
      {step === 3 ? (
        <StrengthenLearningMainContentHeader
          title={" 풀이 순서가 같은 두 개의 성어를 찾아 ○표 해 보자."}
          sound="/sound/3/70-i-2.mp3"
        />
      ) : (
        <StrengthenLearningMainContentHeader
          title={
            "성어와 의미가 통하는 우리말 속담을 디지털 도구로 찾아 써보자. "
          }
          sound="/sound/3/70-i-1.mp3"
        />
      )}
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      <StepContainer maxStep={3} />
    </>
  );
}

const Step1 = () => {
  const answers = ["엎친 데 덮치다.\n엎친 놈 꼭뒤 차기."];
  const [showAnswer, setShowAnswer] = useState(false);
  const [value, setValue] = useState("");

  return (
    <>
      <SmartButton
        link="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%84%A4%EC%83%81%EA%B0%80%EC%83%81"
        className="animate__animated animate__bounceIn animate__delay-2s absolute top-[280px] left-[1455px] z-1"
      />

      <ContentContainer className="!justify-start top-[30px] ">
        <img src={IMAGE1.src} />
        <Button
          className="absolute top-[20px] left-[550px] w-[400px] h-[100px] bg-transparent z-10"
          onClick={() => SOUND("/sound/3/p070_word000.mp3").play()}
        ></Button>
        <div
          className="w-[320px] absolute grid grid-cols-4 left-1/2 -translate-x-[150px] -ml-4 text-[87px]"
        >
          <span className="font-haeseo">雪</span>
          <span className="font-haeseo">上</span>
          <span className="font-haeseo">加</span>
          <span className="font-haeseo">霜</span>
        </div>
        <TextareaWithPen
          answer={answers[0]}
          showAnswer={showAnswer}
          containerClassName={`absolute resize-none w-[820px] text-center left-[330px] top-[150px] pt-3 ml-3 text-[50px] tracking-tight leading-[70px] bg-transparent ${showAnswer ? "text-answer" : ""}`}
          penClassName="h-[55px] top-[155px] left-[365px]"
          rows={2}
        />
      </ContentContainer>

      <CheckAnswerButton
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
  const answers = ["고생 끝에 낙이 온다."];
  const [showAnswer, setShowAnswer] = useState(false);
  const [value, setValue] = useState("");

  return (
    <>
      <SmartButton
        link="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EA%B3%A0%EC%A7%84%EA%B0%90%EB%9E%98"
        className="animate__animated animate__bounceIn animate__delay-1s absolute top-[280px] left-[1455px] z-1"
      />

      <ContentContainer className="!justify-start top-[30px] ">
        <img src={IMAGE2.src} />
        <Button
          className="absolute top-[20px] left-[550px] w-[400px] h-[100px] bg-transparent z-10"
          onClick={() => SOUND("/sound/3/p070_word001.mp3").play()}
        ></Button>
        <div
          className="w-[320px] absolute grid grid-cols-4 left-1/2 -translate-x-[150px] -ml-4 text-[87px]"
        >
          <span className="font-haeseo">苦</span>
          <span className="font-haeseo">盡</span>
          <span className="font-haeseo">甘</span>
          <span className="font-haeseo">來</span>
        </div>
        <TextareaWithPen
          answer={answers[0]}
          showAnswer={showAnswer}
          containerClassName={`absolute resize-none w-[820px] text-center left-[330px] top-[150px] pt-3 ml-3 text-[50px] tracking-tight leading-[70px] bg-transparent ${showAnswer ? "text-answer" : ""}`}
          penClassName="h-[55px] top-[155px] left-[365px]"
          rows={2}
        />
      </ContentContainer>

      <CheckAnswerButton
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

const Step3 = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const [selectedAnswer, setSelectedAnswer] = useState<number[]>([]);

  useEffect(() => {
    if (showAnswer) setSelectedAnswer([2, 3]);
    else setSelectedAnswer([]);
  }, [showAnswer]);

  return (
    <>
      <ContentContainer className="!justify-start top-[10px] left-0">
        <img src={IMAGE3.src} />
        <Button
          className={`absolute top-[20px] left-[220px] w-[500px] h-[100px] bg-transparent z-10 ${selectedAnswer.includes(1) ? "border-4 rounded-[50%] border-answer" : ""}`}
          onClick={() => {
            clickSound.play();
            if (selectedAnswer.includes(1))
              setSelectedAnswer(selectedAnswer.filter((v) => v !== 1));
            else {
              setSelectedAnswer(selectedAnswer.concat([1]));
              SOUND("/sound/3/p070_word002.mp3").play();
            }
          }}
        ></Button>
        <div
          className="w-[320px] absolute grid grid-cols-4 left-1/2 -translate-x-[425px] -ml-4 text-[87px]"
        >
          <span className="font-haeseo">易</span>
          <span className="font-haeseo">地</span>
          <span className="font-haeseo">思</span>
          <span className="font-haeseo">之</span>
        </div>
        <Button
          className={`absolute top-[20px] left-[870px] w-[500px] h-[100px] bg-transparent z-10 ${selectedAnswer.includes(2) ? "border-4 rounded-[50%] border-answer" : ""}`}
          onClick={() => {
            clickSound.play();
            if (selectedAnswer.includes(2))
              setSelectedAnswer(selectedAnswer.filter((v) => v !== 2));
            else {
              setSelectedAnswer(selectedAnswer.concat([2]));
              SOUND("/sound/3/p070_word001.mp3").play();
            }
          }}
        ></Button>
        <div
          className="w-[320px] absolute grid grid-cols-4 left-1/2 translate-x-[225px] -ml-4 text-[87px]"
        >
          <span className="font-haeseo">苦</span>
          <span className="font-haeseo">盡</span>
          <span className="font-haeseo">甘</span>
          <span className="font-haeseo">來</span>
        </div>
        <Button
          className={`absolute top-[230px] left-[220px] w-[500px] h-[100px] bg-transparent z-10 ${selectedAnswer.includes(3) ? "border-4 rounded-[50%] border-answer" : ""}`}
          onClick={() => {
            clickSound.play();
            if (selectedAnswer.includes(3))
              setSelectedAnswer(selectedAnswer.filter((v) => v !== 3));
            else {
              setSelectedAnswer(selectedAnswer.concat([3]));
              SOUND("/sound/3/p070_word003.mp3").play();
            }
          }}
        ></Button>
        <div
          className="w-[320px] absolute grid grid-cols-4 left-1/2 -translate-x-[425px] top-[220px] -ml-4 text-[87px]"
        >
          <span className="font-haeseo">龍</span>
          <span className="font-haeseo">頭</span>
          <span className="font-haeseo">蛇</span>
          <span className="font-haeseo">尾</span>
        </div>
        <Button
          className={`absolute top-[230px] left-[870px] w-[500px] h-[100px] bg-transparent z-10 ${selectedAnswer.includes(4) ? "border-4 rounded-[50%] border-answer" : ""}`}
          onClick={() => {
            clickSound.play();
            if (selectedAnswer.includes(4))
              setSelectedAnswer(selectedAnswer.filter((v) => v !== 4));
            else {
              setSelectedAnswer(selectedAnswer.concat([4]));
              SOUND("/sound/3/p070_word000.mp3").play();
            }
          }}
        ></Button>
        <div
          className="w-[320px] absolute grid grid-cols-4 left-1/2 translate-x-[225px] top-[220px] -ml-4 text-[87px]"
        >
          <span className="font-haeseo">雪</span>
          <span className="font-haeseo">上</span>
          <span className="font-haeseo">加</span>
          <span className="font-haeseo">霜</span>
        </div>
        <div className="w-[1300px] relative grid grid-cols-[1fr__350px] gap-[100px]"></div>
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      <img
        src={BACKGROUND3.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
};
