"use client";

import { HeaderContainer } from "@/app/components/headers/header-container";
import HEADER from "./header.png";
import IMAGE from "./image.png";
import IMAGE2 from "./image2.png";
import TITLE from "./title.png";
import { ContentContainer } from "@/app/components/content-container";
import { AdditionalDataButton } from "@/app/components/buttons/additional-data-button";
import { ReadingButton } from "@/app/components/buttons/reading-button";
import { StepContainer } from "@/app/components/step-container";
import { useContext, useState } from "react";
import { SmartButton } from "@/app/components/buttons/smart-button";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("모르는 한자는 어떻게 찾을까?");

  const [step, setStep] = useState(1);

  const [showAnswer, setShowAnswer] = useState(false);
  const answers = ["휴", "바다", "언", "말씀"];
  const [values, setValues] = useState(["", "", "", ""]);

  return (
    <>
      <HeaderContainer className="mt-10 mb-10">
        <img src={HEADER.src} alt="header" />
      </HeaderContainer>

      <AdditionalDataButton
        className="absolute top-12 right-[100px]"
        onClick={() => {}}
      />

      <ContentContainer className="!justify-start !items-start pt-10">
        <div className="relative w-full">
          <img src={TITLE.src} className="relative -ml-5 -mt-1" />
          {step === 1 ? (
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <ReadingButton active={false} onClick={() => {}} />
            </div>
          ) : null}
        </div>
        <p className="relative w-full my-5">
          디지털 사전의 검색창을 이용하여 한자를 손쉽게 검색할 수 있다.
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            {step === 2 ? (
              <SmartButton link="https://hanja.dict.naver.com" />
            ) : null}
          </div>
        </p>
        {step === 1 ? (
          <div className="w-full flex justify-center mt-10">
            <img src={IMAGE.src} />
          </div>
        ) : (
          <div className="w-full flex justify-center mt-10">
            <div className="relative">
              <img src={IMAGE2.src} />
              <input
                value={showAnswer ? answers[0] : values[0]}
                onChange={(e) =>
                  setValues(
                    values.map((_, index) =>
                      index === 0 ? e.currentTarget.value : _,
                    ),
                  )
                }
                className={`absolute left-[120px] bottom-[28px] w-[100px] bg-transparent text-center ${
                  showAnswer ? "text-answer" : ""
                }`}
              />
              <input
                value={showAnswer ? answers[1] : values[1]}
                onChange={(e) =>
                  setValues(
                    values.map((_, index) =>
                      index === 1 ? e.currentTarget.value : _,
                    ),
                  )
                }
                className={`absolute left-[770px] bottom-[28px] w-[100px] bg-transparent text-center ${
                  showAnswer ? "text-answer" : ""
                }`}
              />
              <input
                value={showAnswer ? answers[2] : values[2]}
                onChange={(e) =>
                  setValues(
                    values.map((_, index) =>
                      index === 2 ? e.currentTarget.value : _,
                    ),
                  )
                }
                className={`absolute left-[1070px] bottom-[28px] w-[100px] bg-transparent text-center ${
                  showAnswer ? "text-answer" : ""
                }`}
              />
              <input
                value={showAnswer ? answers[3] : values[3]}
                onChange={(e) =>
                  setValues(
                    values.map((_, index) =>
                      index === 3 ? e.currentTarget.value : _,
                    ),
                  )
                }
                className={`absolute left-[1245px] bottom-[28px] w-[100px] bg-transparent text-center ${
                  showAnswer ? "text-answer" : ""
                }`}
              />
            </div>
          </div>
        )}
      </ContentContainer>

      <StepContainer maxStep={2} step={step} onStepChange={setStep} />

      {step === 2 ? (
        <CheckAnswerButton
          active={showAnswer}
          onClick={() => setShowAnswer(!showAnswer)}
        />
      ) : null}
    </>
  );
}
