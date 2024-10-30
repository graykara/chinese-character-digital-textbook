"use client";

import { StrengthenLearningMainContentHeader } from "@/app/components/headers/strengthen-learning-main-content-header";
import IMAGE1 from "./bg_1-2.png";
import IMAGE2 from "./bg_2.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useEffect, useState } from "react";
import { DraggableHanjaCard } from "@/app/components/drag-and-drop/draggable-hanja-card";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { HanjaDropZone } from "@/app/components/drag-and-drop/hanja-drop-zone";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { InputWithPen } from "@/app/components/input-with-pen";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕22.png";
import BACKGROUND2 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕23.png";

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      <StepContainer step={step} maxStep={2} onStepChange={setStep} />
    </>
  );
}

const Step1 = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  useEffect(() => {
    setShowAnswer(false);
    setDroppedHanja(["", ""]);
  }, []);

  const hanjaCards = ["官", "如", "庭", "集", "雲"];
  const hanjaSounds = [
    "/sound/5/p130_word000.mp3",
    "/sound/5/p130_word001.mp3",
    "/sound/5/p130_word002.mp3",
    "/sound/5/p130_word003.mp3",
    "/sound/5/p130_word004.mp3",
  ];
  const [droppedHanja, setDroppedHanja] = useState(["", ""]);

  useEffect(() => {
    if (!showAnswer) setDroppedHanja(["", ""]);
  }, [showAnswer]);

  const moveCard = (fromIndex: number, targetIndex: number) => {
    const newHanjaCards = [...hanjaCards];
    const [movedHanja] = newHanjaCards.splice(fromIndex, 1);
    const newDroppedHanja = [...droppedHanja];
    newDroppedHanja[targetIndex] = movedHanja;
    setDroppedHanja(newDroppedHanja);
  };

  return (
    <>
      <StrengthenLearningMainContentHeader
        title={<p className="tracking-tighter">풀이에 맞도록 한자 카드를 배열하여 써 보자.</p>}
        sound="/sound/5/130-i-1.mp3"
      />

      <ContentContainer className="!justify-start -top-[15px] left-5">
        <img src={IMAGE1.src} />
        <DndProvider backend={HTML5Backend}>
          <div className="absolute w-[950px] grid grid-cols-5 gap-[48px] pt-[10px] left-[475px] bg-transparent">
            {hanjaCards.map((hanja, index) => (
              <div
                key={index}
                className="flex justify-center"
                onClick={() => {
                  new Howl({
                    src: hanjaSounds[index],
                  }).play();
                }}
              >
                <DraggableHanjaCard
                  key={index}
                  hanja={hanja}
                  index={index}
                  moveCard={() => { }}
                >
                  <div className="w-[150px] h-[145px] pb-[15px] bg-transparent flex justify-center items-center font-haeseo text-[95px]">
                    {hanja}
                  </div>
                </DraggableHanjaCard>
              </div>
            ))}
          </div>

          <div className={showAnswer ? "text-answer" : ""}>
            <div className="absolute w-[950px] grid grid-cols-5 gap-[48px] pt-[0px] left-[475px] top-[230px]">
              <div>
                <HanjaDropZone onDrop={(fromIndex) => moveCard(fromIndex, 0)}>
                  <div className="w-[150px] h-[145px] flex justify-center items-center font-haeseo text-[110px]">
                    {showAnswer ? hanjaCards[3] : droppedHanja[0]}
                  </div>
                </HanjaDropZone>
              </div>
              <div>
                <HanjaDropZone onDrop={(fromIndex) => moveCard(fromIndex, 1)}>
                  <div className="w-[150px] h-[145px] flex justify-center items-center font-haeseo text-[110px]">
                    {showAnswer ? hanjaCards[0] : droppedHanja[1]}
                  </div>
                </HanjaDropZone>
              </div>
              <div>
                <HanjaDropZone onDrop={(fromIndex) => moveCard(fromIndex, 2)}>
                  <div className="w-[150px] h-[145px] flex justify-center items-center font-haeseo text-[110px]">
                    {showAnswer ? hanjaCards[2] : droppedHanja[1]}
                  </div>
                </HanjaDropZone>
              </div>
              <div>
                <HanjaDropZone onDrop={(fromIndex) => moveCard(fromIndex, 3)}>
                  <div className="w-[150px] h-[145px] flex justify-center items-center font-haeseo text-[110px]">
                    {showAnswer ? hanjaCards[1] : droppedHanja[1]}
                  </div>
                </HanjaDropZone>
              </div>
              <div>
                <HanjaDropZone onDrop={(fromIndex) => moveCard(fromIndex, 4)}>
                  <div className="w-[150px] h-[145px] flex justify-center items-center font-haeseo text-[110px]">
                    {showAnswer ? hanjaCards[4] : droppedHanja[1]}
                  </div>
                </HanjaDropZone>
              </div>
            </div>
          </div>
        </DndProvider>
      </ContentContainer>

      {/* <ContentContainer className="!justify-start -top-[20px] left-4">
        <img src={IMAGE1.src} />
        <InputWithPen
          answer={answers[0]}
          showAnswer={showAnswer}
          className="font-haeseo text-[105px] text-center w-[140px] bg-transparent"
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[230px] left-[485px]"
        />
        <InputWithPen
          answer={answers[1]}
          showAnswer={showAnswer}
          className="font-haeseo text-[105px] text-center w-[140px] bg-transparent"
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[230px] left-[685px]"
        />
        <InputWithPen
          answer={answers[2]}
          showAnswer={showAnswer}
          className="font-haeseo text-[105px] text-center w-[140px] bg-transparent"
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[230px] left-[885px]"
        />
        <InputWithPen
          answer={answers[3]}
          showAnswer={showAnswer}
          className="font-haeseo text-[105px] text-center w-[140px] bg-transparent"
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[230px] left-[1085px]"
        />
        <InputWithPen
          answer={answers[4]}
          showAnswer={showAnswer}
          className="font-haeseo text-[105px] text-center w-[140px] bg-transparent"
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[230px] left-[1285px]"
        />
      </ContentContainer> */}
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
  const [showAnswer, setShowAnswer] = useState(false);
  const answers = ["배려", "공감", "관심", "도움"];
  return (
    <>
      <StrengthenLearningMainContentHeader
        title={<p className="tracking-tighter">‘나눔’하면 연상되는 단어를 써서 의미망을 완성해 보자.</p>}
        sound="/sound/5/130-i-3.mp3"
      />
      <ContentContainer className="!justify-start -top-[90px] left-1">
        <img src={IMAGE2.src} />
        <InputWithPen
          answer={answers[0]}
          showAnswer={showAnswer}
          className={`text-[55px] text-center w-[200px] bg-transparent ${showAnswer ? "text-example" : ""}`}
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[20px] left-[990px]"
        />
        <InputWithPen
          answer={answers[1]}
          showAnswer={showAnswer}
          className={`text-[55px] text-center w-[200px] bg-transparent ${showAnswer ? "text-example" : ""}`}
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[455px] left-[320px]"
        />
        <InputWithPen
          answer={answers[2]}
          showAnswer={showAnswer}
          className={`text-[55px] text-center w-[200px] bg-transparent ${showAnswer ? "text-example" : ""}`}
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[455px] left-[660px]"
        />
        <InputWithPen
          answer={answers[3]}
          showAnswer={showAnswer}
          className={`text-[55px] text-center w-[200px] bg-transparent ${showAnswer ? "text-example" : ""}`}
          penClassName="left-1/2 -translate-x-1/2 -mt-2"
          containerClassName="absolute top-[455px] left-[990px]"
        />
      </ContentContainer>
      <ExampleAnswerButton
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
