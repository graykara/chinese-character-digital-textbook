"use client";

import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import CHECK from "./check.png";
import { useEffect, useState } from "react";
import { CreativityPageTemplate } from "@/app/pages/creativity-page-template";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { InputWithPen } from "@/app/components/input-with-pen";
import { TextareaWithPen } from "@/app/components/textarea/textarea-with-pen";
import { TitleContainer } from "@/app/components/title-container";
import { StepContainer } from "@/app/components/step-container";
import BACKGROUND1 from "@/app/bgpng_temp/15/중등한문_돌에 꽂힌 화살24.png";
import BACKGROUND2 from "@/app/bgpng_temp/15/중등한문_돌에 꽂힌 화살25.png";
import { ContentContainer } from "@/app/components/content-container";
import { clickSound } from "@/app/utils/click-sound";

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>
      <CreativityPageTemplate>
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
      </CreativityPageTemplate>

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />
      <img src={step === 1 ? BACKGROUND1.src : BACKGROUND2.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}

const Step1 = () => {
  const [checked, setChecked] = useState(
    Array(10).fill({ left: false, right: false })
  );

  // 클릭 시 체크 상태를 업데이트하고 사운드를 재생
  const handleButtonClick = (row, side) => {
    const updatedChecked = [...checked];

    // 각 행에서 왼쪽(그렇다) 버튼만 체크하거나 오른쪽(아니다) 버튼만 체크 가능
    if (side === 'left') {
      updatedChecked[row] = { left: true, right: false };
    } else if (side === 'right') {
      updatedChecked[row] = { left: false, right: true };
    }

    setChecked(updatedChecked);
    clickSound.play();  // 클릭 시 사운드 재생
  };

  return (
    <>
      <TitleContainer
        className="left-5 mt-14"
        sound="/sound/5/125/1.mp3">
        <div className="flex items-center gap-1 text-[40px] tracking-tight -mr-10">
          <img src="/ui/flower-icon-2.png" width={38} height={38} />
          질문에 답하며 자신의 공부 집중도를 확인해 보자.
        </div>
      </TitleContainer>
      <div className="relative left-[170px] top-[10px]">
        <img src={IMAGE1.src} />

        <div className="absolute top-[40px] left-[645px]">
          <table>
            <tbody>
              {checked.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="w-[90px] h-[54.5px] justify-items-center pl-4">
                    <button
                      onClick={() => handleButtonClick(rowIndex, 'left')}
                      className="w-[50px] h-[50px] flex justify-center items-center"
                    >
                      {row.left ? (
                        <img src={CHECK.src} alt="checked" />
                      ) : (
                        null
                      )}
                    </button>
                  </td>
                  <td className="w-[90px] h-[54.5px] justify-items-center">
                    <button
                      onClick={() => handleButtonClick(rowIndex, 'right')}
                      className="w-[50px] h-[50px] flex justify-center items-center"
                    >
                      {row.right ? (
                        <img src={CHECK.src} alt="checked" />
                      ) : (
                        null
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </div>
    </>
  );
};

const Step2 = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const answers = ["구체적인 계획 없이 공부한다.", "나의 진로에 필요한 공부를 생각해 보고 목표와 계획을 구체적으로 세운다."]
  return (
    <>
      <TitleContainer
        className="left-5 mt-14"
        sound="/sound/5/125/2.mp3">
        <div className="flex items-center gap-1 text-[40px] tracking-tight -mr-10">
          <img src="/ui/flower-icon-2.png" width={38} height={38} />
          위의 항목 중 자신의 가장 좋지 않은 습관을 하나 고르고 극복할 방법을 써 보자.
        </div>
      </TitleContainer>

      <div className="relative left-[175px] top-[30px]">
        <img src={IMAGE2.src} />
      </div>

      <InputWithPen
        answer={answers[0]}
        showAnswer={showAnswer}
        className="text-[45px] w-[1000px] bg-transparent"
        penClassName="left-[-25px] h-[50px] top-[30px]"
        containerClassName="absolute top-[180px] left-[525px]"
        isExample
      />

      <TextareaWithPen
        answer={answers[1]}
        showAnswer={showAnswer}
        containerClassName={`absolute resize-none top-[305px] left-[450px] text-[45px] bg-transparent w-[1100px] ml-3 pl-16 leading-[60px] tracking-tight break-keep ${showAnswer ? "text-example ml-3" : ""}`}
        penClassName="h-[50px] top-[305px] left-[500px]"
        rows={2}
      />

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
};

