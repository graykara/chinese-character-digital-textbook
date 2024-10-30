"use client";

import { StrengthenLearningWordHeader } from "@/app/components/headers/strengthen-learning-word-header";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import IMAGE3 from "./image3.png";
import { ContentContainer } from "@/app/components/content-container";
import { useState } from "react";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { clickSound } from "@/app/utils/click-sound";
import BACKGROUND1 from "@/app/bgpng_temp/5/중등한문_한자를 알면 틀리지 않는 일상 어휘13.png";
import { InputWithPen } from "@/app/components/input-with-pen";

export default function Page() {
  return (
    <>
      <StrengthenLearningWordHeader
        title="단어의 뜻을 생각하며 풀이 순서를 적고, 각각의 한자가 들어간 다른 단어를 찾아 한글로 써 보자."
        sound="/sound/2/46-i-2.mp3"
      />

      <Step1 />
    </>
  );
}

const Step1 = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const [buttonActive, setButtonActive] = useState<number[]>([]);

  const sounds = [
    "/sound/2/40_011.mp3",
    "/sound/2/40_012.mp3",
    "/sound/2/40_013.mp3",
    "/sound/2/40_014.mp3",
    "/sound/2/40_001.mp3",
    "/sound/2/40_015.mp3",
  ];

  return (
    <>
      <ContentContainer className="!justify-start left-10">
        <div className="relative">
          <div className="grid grid-cols-3 gap-16">
            <div className="relative">
              <img src={IMAGE1.src} />
              <InputWithPen
                answer="2"
                showAnswer={showAnswer}
                className="w-[50px] text-[40px] text-center bg-transparent"
                penClassName="w-[40px] left-1/2 -translate-x-1/2"
                containerClassName="absolute top-[62px] left-[150px]"
              />
              <InputWithPen
                answer="1"
                showAnswer={showAnswer}
                className="w-[50px] text-[40px] text-center bg-transparent"
                penClassName="w-[40px] left-1/2 -translate-x-1/2"
                containerClassName="absolute top-[62px] left-[222px]"
              />
              <InputWithPen
                answer="질문"
                showAnswer={showAnswer}
                className="w-[150px] text-[50px] text-center bg-transparent"
                penClassName="w-[40px] left-1/2 -translate-x-1/2"
                containerClassName="absolute bottom-[110px] left-[165px]"
              />
              <InputWithPen
                answer="안부"
                showAnswer={showAnswer}
                className="w-[150px] text-[50px] text-center bg-transparent"
                penClassName="w-[40px] left-1/2 -translate-x-1/2"
                containerClassName="absolute bottom-[30px] left-[165px]"
              />
            </div>
            <div className="relative">
              <img src={IMAGE2.src} />

              <InputWithPen
                answer="2"
                showAnswer={showAnswer}
                className="w-[50px] text-[40px] text-center bg-transparent"
                penClassName="w-[40px] left-1/2 -translate-x-1/2"
                containerClassName="absolute top-[62px] left-[150px]"
              />
              <InputWithPen
                answer="1"
                showAnswer={showAnswer}
                className="w-[50px] text-[40px] text-center bg-transparent"
                penClassName="w-[40px] left-1/2 -translate-x-1/2"
                containerClassName="absolute top-[62px] left-[222px]"
              />
              <InputWithPen
                answer="식물"
                showAnswer={showAnswer}
                className="w-[150px] text-[50px] text-center bg-transparent"
                penClassName="w-[40px] left-1/2 -translate-x-1/2"
                containerClassName="absolute bottom-[110px] left-[165px]"
              />
              <InputWithPen
                answer="수목원"
                showAnswer={showAnswer}
                className="w-[150px] text-[50px] text-center bg-transparent"
                penClassName="w-[40px] left-1/2 -translate-x-1/2"
                containerClassName="absolute bottom-[30px] left-[165px]"
              />
            </div>
            <div className="relative">
              <img src={IMAGE3.src} />

              <InputWithPen
                answer="1"
                showAnswer={showAnswer}
                className="w-[50px] text-[40px] text-center bg-transparent"
                penClassName="w-[40px] left-1/2 -translate-x-1/2"
                containerClassName="absolute top-[62px] left-[150px]"
              />
              <InputWithPen
                answer="2"
                showAnswer={showAnswer}
                className="w-[50px] text-[40px] text-center bg-transparent"
                penClassName="w-[40px] left-1/2 -translate-x-1/2"
                containerClassName="absolute top-[62px] left-[222px]"
              />
              <InputWithPen
                answer="정의"
                showAnswer={showAnswer}
                className="w-[150px] text-[50px] text-center bg-transparent"
                penClassName="w-[40px] left-1/2 -translate-x-1/2"
                containerClassName="absolute bottom-[110px] left-[165px]"
              />
              <InputWithPen
                answer="병사"
                showAnswer={showAnswer}
                className="w-[150px] text-[50px] text-center bg-transparent"
                penClassName="w-[40px] left-1/2 -translate-x-1/2"
                containerClassName="absolute bottom-[30px] left-[165px]"
              />
            </div>
          </div>

          {/* 02_018_D31에서 코드만 복사해둠... */}

          {/* <div className="absolute bottom-[55px] left-[40px] grid grid-cols-5 gap-[90px]">
            {Array.from(Array(5).keys()).map((_, index) =>
              buttonActive.includes(index) ? (
                <div key={index} className="w-[80px] h-[80px]" />
              ) : (
                <button
                  key={index}
                  className="bg-white w-[80px] h-[80px] flex justify-center items-center"
                  onClick={() => {
                    clickSound.play();
                    if (!buttonActive.includes(index)) {
                      new Howl({
                        src: sounds[index],
                      }).play();
                      setButtonActive(buttonActive.concat(index));
                    }
                  }}
                >
                  <img src="/ui/click-icon.png" />
                </button>
              ),
            )}
          </div> */}
        </div>
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
