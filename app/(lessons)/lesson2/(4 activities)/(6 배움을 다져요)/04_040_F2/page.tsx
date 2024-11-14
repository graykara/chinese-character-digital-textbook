"use client";

import { StrengthenLearningWordHeader } from "@/app/components/headers/strengthen-learning-word-header";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useContext, useState } from "react";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { InputWithPen } from "@/app/components/input-with-pen";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/4/중등한문_합쳐서 만든 한자21.png";
import BACKGROUND2 from "@/app/bgpng_temp/4/중등한문_합쳐서 만든 한자22.png";
import { PageInfoContext } from "@/app/utils/page-info";
import { Button } from "@/app/components/buttons/button";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  return (
    <>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}

      <StepContainer maxStep={2} />
    </>
  );
}

const Step1 = () => {
  const answers = ["쉬는 날.", "산과 숲.", "넓고 큰 바다."];
  const answers2 = ["休", "日", "山", "林", "海", "洋"];
  const [showAnswer, setShowAnswer] = useState(false);

  const sounds = ["010", "011", "012", "013", "000", "014"].map(
    (sound) => `/sound/2/p040_word${sound}.mp3`,
  );

  return (
    <>
      <StrengthenLearningWordHeader
        title={
          <div>
            <span className="text-[42px] border-[3px] border-black rounded-full mr-1 pt-1 pb-0 px-4 align-text-top">보기</span>
            의 한자를 활용하여 다음 글의 밑줄 친 부분을 한자로 쓰고,
            <br />그 뜻도 써 보자.
          </div>
        }
        sound="/sound/2/40-i-2.mp3"
      />

      <ContentContainer className="!justify-start left-14 -top-7">
        <div className="relative">

            <img src={IMAGE1.src} />


          <div className="absolute w-[800px] left-[350px] top-[220px] grid grid-cols-6 gap-[55px]">
            {sounds.map((sound) => (
              <Button
                key={sound}
                className="w-20 h-20"
                onClick={() => SOUND(sound).play()}
              />
            ))}
          </div>

          <InputWithPen
            answer={answers2[0]}
            showAnswer={showAnswer}
            className="text-center w-[120px] h-[120px] mt-4 bg-transparent"
            penClassName="left-[33px] top-[75px] h-[55px]"
            containerClassName="absolute top-[315px] left-[86px] font-haeseo text-[83px]"
          />
          <InputWithPen
            answer={answers2[1]}
            showAnswer={showAnswer}
            className="text-center w-[120px] h-[120px] mt-4 bg-transparent"
            penClassName="left-[33px] top-[75px] h-[55px]"
            containerClassName="absolute top-[315px] left-[205px] font-haeseo text-[83px]"
          />
           <InputWithPen
            answer={answers[0]}
            showAnswer={showAnswer}
            className="text-center w-[320px] mt-4 bg-transparent"
            penClassName="left-7 -translate-x-1/2 h-[55px]"
            containerClassName="absolute -bottom-2 left-[63px] text-[50px]"
          />

          <InputWithPen
            answer={answers2[2]}
            showAnswer={showAnswer}
            className="text-center w-[120px] h-[120px] mt-4 bg-transparent"
            penClassName="left-[33px] top-[75px] h-[55px]"
            containerClassName="absolute top-[315px] left-[585px] font-haeseo text-[83px]"
          />
          <InputWithPen
            answer={answers2[3]}
            showAnswer={showAnswer}
            className="text-center w-[120px] h-[120px] mt-4 bg-transparent"
            penClassName="left-[33px] top-[75px] h-[55px]"
            containerClassName="absolute top-[315px] left-[705px] font-haeseo text-[83px]"
          />
          <InputWithPen
            answer={answers[1]}
            showAnswer={showAnswer}
            className="text-center w-[320px] mt-4 bg-transparent"
            penClassName="left-7 -translate-x-1/2 h-[55px]"
            containerClassName="absolute -bottom-2 left-[570px] text-[50px]"
          />

          <InputWithPen
            answer={answers2[4]}
            showAnswer={showAnswer}
            className="text-center w-[120px] h-[120px] mt-4 bg-transparent"
            penClassName="left-[33px] top-[75px] h-[55px]"
            containerClassName="absolute top-[315px] left-[1083px] font-haeseo text-[83px]"
          />
          <InputWithPen
            answer={answers2[5]}
            showAnswer={showAnswer}
            className="text-center w-[120px] h-[120px] mt-4 bg-transparent"
            penClassName="left-[33px] top-[75px] h-[55px]"
            containerClassName="absolute top-[315px] left-[1202px] font-haeseo text-[83px]"
          />
          <InputWithPen
            answer={answers[2]}
            showAnswer={showAnswer}
            className="text-center w-[320px] mt-4 bg-transparent"
            penClassName="left-7 -translate-x-1/2 h-[55px]"
            containerClassName="absolute -bottom-2 left-[1070px] text-[50px]"
          />

        </div>
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      {/* <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
};

const Step2 = () => {
  const answers = ["쉬는", "바다", "서양"];
  const [showAnswer, setShowAnswer] = useState(false);

  const sounds = ["015", "016", "017"].map(
    (sound) => `/sound/2/p040_word${sound}.mp3`,
  );

  return (
    <>
      <StrengthenLearningWordHeader
        title={
          <div>
            밑줄 친 한자의 뜻을 활용하여 자연스러운 풀이가 되도록 빈칸을 채워
            보자.
          </div>
        }
        sound="/sound/2/40-i-3.mp3"
      />

      <ContentContainer className="!justify-start left-12 top-6">
        <div className="relative mt-10">
          <img src={IMAGE2.src} />

          <div className="absolute left-[50px] top-[0px] grid grid-cols-6 gap-[500px]">
            {sounds.map((sound) => (
              <Button
                key={sound}
                className="w-[400px] h-[150px]"
                onClick={() => SOUND(sound).play()}
              />
            ))}
          </div>

          <InputWithPen
            answer={answers[0]}
            showAnswer={showAnswer}
            className="text-center w-[138px] bg-transparent"
            penClassName="left-7 -translate-x-1/2 h-[42px] top-[32px]"
            containerClassName="absolute bottom-[40px] left-[78px]"
          />
          <InputWithPen
            answer={answers[1]}
            showAnswer={showAnswer}
            className="text-center w-[163px] bg-transparent"
            penClassName="left-7 -translate-x-1/2 h-[42px] top-[32px]"
            containerClassName="absolute -bottom-[14px] left-[656px]"
          />
          <InputWithPen
            answer={answers[2]}
            showAnswer={showAnswer}
            className="text-center w-[154px] bg-transparent"
            penClassName="left-7 -translate-x-1/2 h-[42px] top-[32px]"
            containerClassName="absolute bottom-[95px] left-[1147px]"
          />
        </div>
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      {/* <img src={BACKGROUND2.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
};
