"use client";

import { StrengthenLearningWordHeader } from "@/app/components/headers/strengthen-learning-word-header";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import IMAGE3 from "./image3.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useEffect, useState } from "react";
import { DraggableHanjaCard } from "@/app/components/drag-and-drop/draggable-hanja-card";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { HanjaDropZone } from "@/app/components/drag-and-drop/hanja-drop-zone";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/7/중등한문_언어생활 속의 성어124.png"
import BACKGROUND2 from "@/app/bgpng_temp/7/중등한문_언어생활 속의 성어125.png"
import BACKGROUND3 from "@/app/bgpng_temp/7/중등한문_언어생활 속의 성어126.png"

export default function Page() {
  const [step, setStep] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(false);
    setDroppedHanja(["", ""]);
  }, [step]);

  const hanjaCards = ["天", "上", "下", "中"];
  const hanjaSounds = [
    "/sound/3/p064_word004.mp3",
    "/sound/3/p064_word005.mp3",
    "/sound/3/p064_word006.mp3",
    "/sound/3/p064_word007.mp3",
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
      <StrengthenLearningWordHeader
        title={
          <>
            한자 카드를 결합하여 문장의 빈칸에 해당하는 단어를 만들어 보자.
          </>
        }
        sound="/sound/3/64-i-3.mp3"
      />

      <ContentContainer className="!justify-start !items-start left-[120px]">
        <DndProvider backend={HTML5Backend}>
          <div className="relative w-[950px] grid grid-cols-4 mb-10 left-[150px]">
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
                  moveCard={() => {}}
                >
                  <div className="w-[150px] h-[150px] bg-[#d9e6e6] border-8 border-[#edf4f3] flex justify-center items-center rounded-xl font-haeseo text-[90px]">
                    {hanja}
                  </div>
                </DraggableHanjaCard>
              </div>
            ))}
          </div>

          <div className={showAnswer ? "text-answer" : ""}>
            {step === 1 && (
              <div className="relative left-[105px] top-[40px]">
                <img src={IMAGE1.src} />

                <div className="absolute left-[180px] top-[110px]">
                  <HanjaDropZone onDrop={(fromIndex) => moveCard(fromIndex, 0)}>
                    <div className="w-[110px] h-[110px] flex justify-center items-center font-haeseo text-[80px]">
                      {showAnswer ? hanjaCards[0] : droppedHanja[0]}
                    </div>
                  </HanjaDropZone>
                </div>
                <div className="absolute left-[350px] top-[110px]">
                  <HanjaDropZone onDrop={(fromIndex) => moveCard(fromIndex, 1)}>
                    <div className="w-[110px] h-[110px] flex justify-center items-center font-haeseo text-[80px]">
                      {showAnswer ? hanjaCards[2] : droppedHanja[1]}
                    </div>
                  </HanjaDropZone>
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="relative left-[105px] top-[40px]">
                <img src={IMAGE2.src} />

                <div className="absolute left-[180px] top-[150px]">
                  <HanjaDropZone onDrop={(fromIndex) => moveCard(fromIndex, 0)}>
                    <div className="w-[110px] h-[110px] flex justify-center items-center font-haeseo text-[80px]">
                      {showAnswer ? hanjaCards[3] : droppedHanja[0]}
                    </div>
                  </HanjaDropZone>
                </div>
                <div className="absolute left-[350px] top-[150px]">
                  <HanjaDropZone onDrop={(fromIndex) => moveCard(fromIndex, 1)}>
                    <div className="w-[110px] h-[110px] flex justify-center items-center font-haeseo text-[80px]">
                      {showAnswer ? hanjaCards[1] : droppedHanja[1]}
                    </div>
                  </HanjaDropZone>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="relative left-[105px] top-[40px]">
                <img src={IMAGE3.src} />

                <div className="absolute left-[180px] top-[150px]">
                  <HanjaDropZone onDrop={(fromIndex) => moveCard(fromIndex, 0)}>
                    <div className="w-[110px] h-[110px] flex justify-center items-center font-haeseo text-[80px]">
                      {showAnswer ? hanjaCards[0] : droppedHanja[0]}
                    </div>
                  </HanjaDropZone>
                </div>
                <div className="absolute left-[350px] top-[150px]">
                  <HanjaDropZone onDrop={(fromIndex) => moveCard(fromIndex, 1)}>
                    <div className="w-[110px] h-[110px] flex justify-center items-center font-haeseo text-[80px]">
                      {showAnswer ? hanjaCards[1] : droppedHanja[1]}
                    </div>
                  </HanjaDropZone>
                </div>
                <div className="absolute left-[520px] top-[150px]">
                  <HanjaDropZone onDrop={(fromIndex) => moveCard(fromIndex, 2)}>
                    <div className="w-[110px] h-[110px] flex justify-center items-center font-haeseo text-[80px]">
                      {showAnswer ? hanjaCards[0] : droppedHanja[2]}
                    </div>
                  </HanjaDropZone>
                </div>
                <div className="absolute left-[690px] top-[150px]">
                  <HanjaDropZone onDrop={(fromIndex) => moveCard(fromIndex, 3)}>
                    <div className="w-[110px] h-[110px] flex justify-center items-center font-haeseo text-[80px]">
                      {showAnswer ? hanjaCards[2] : droppedHanja[3]}
                    </div>
                  </HanjaDropZone>
                </div>
              </div>
            )}
          </div>
        </DndProvider>
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />

      <StepContainer maxStep={3} step={step} onStepChange={setStep} />
      {/* <img src={BACKGROUND1.src} className="absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
}
