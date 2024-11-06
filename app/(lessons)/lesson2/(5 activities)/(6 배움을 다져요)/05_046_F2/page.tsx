"use client";

import { StrengthenLearningWordHeader } from "@/app/components/headers/strengthen-learning-word-header";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import IMAGE3 from "./image3.png";
import { ContentContainer } from "@/app/components/content-container";
import { useState } from "react";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/5/중등한문_한자를 알면 틀리지 않는 일상 어휘13.png";
import { InputWithPen } from "@/app/components/input-with-pen";
import { SOUND } from "@/app/utils/sound-player";

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

  const sounds = ["44/1", "45/2", "45/4"].map(
    (sound) => `/sound/2/${sound}.mp3`,
  );

  return (
    <>
      <ContentContainer className="!justify-start left-10">
        <div className="relative">

          <div className="absolute w-[1070px] top-[125px] left-[120px] grid grid-cols-3 gap-[250px] z-10">
            {sounds.map((sound) => (
              <button
                key={sound}
                className="h-20"
                onClick={() => SOUND(sound).play()}
              />
            ))}
          </div>

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
