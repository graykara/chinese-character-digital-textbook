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

export default function Page() {
  const [step, setStep] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(false);
    setDroppedHanja(["", ""]);
  }, [step]);

  const hanjaCards = ["山", "下", "上", "川", "末", "本"];
  const hanjaSounds = [
    "/sound/2/32_008.mp3",
    "/sound/2/32_009.mp3",
    "/sound/2/32_010.mp3",
    "/sound/2/32_011.mp3",
    "/sound/2/32_012.mp3",
    "/sound/2/32_013.mp3",
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
            한자 카드를 결합하여 문장의 빈칸에 해당하는 단어를 만들어
            <br />
            보자.
          </>
        }
        sound=""
      />

      <ContentContainer className="!justify-start !items-start">
        <DndProvider backend={HTML5Backend}>
          <div className="w-full grid grid-cols-6 mb-10">
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
                  <div className="w-32 h-32 bg-[#d9e6e6] border-8 border-[#edf4f3] flex justify-center items-center rounded-xl font-haeseo text-[60px]">
                    {hanja}
                  </div>
                </DraggableHanjaCard>
              </div>
            ))}
          </div>

          <div className={showAnswer ? "text-answer" : ""}>
            {step === 1 && (
              <div className="relative">
                <img src={IMAGE1.src} />

                <div className="absolute left-[115px] top-[85px]">
                  <HanjaDropZone onDrop={(fromIndex) => moveCard(fromIndex, 0)}>
                    <div className="w-[110px] h-[110px] flex justify-center items-center font-haeseo text-[60px]">
                      {showAnswer ? hanjaCards[0] : droppedHanja[0]}
                    </div>
                  </HanjaDropZone>
                </div>
                <div className="absolute left-[265px] top-[85px]">
                  <HanjaDropZone onDrop={(fromIndex) => moveCard(fromIndex, 1)}>
                    <div className="w-[110px] h-[110px] flex justify-center items-center font-haeseo text-[60px]">
                      {showAnswer ? hanjaCards[3] : droppedHanja[1]}
                    </div>
                  </HanjaDropZone>
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="relative">
                <img src={IMAGE2.src} />

                <div className="absolute left-[115px] top-[85px]">
                  <HanjaDropZone onDrop={(fromIndex) => moveCard(fromIndex, 0)}>
                    <div className="w-[110px] h-[110px] flex justify-center items-center font-haeseo text-[60px]">
                      {showAnswer ? hanjaCards[2] : droppedHanja[0]}
                    </div>
                  </HanjaDropZone>
                </div>
                <div className="absolute left-[265px] top-[85px]">
                  <HanjaDropZone onDrop={(fromIndex) => moveCard(fromIndex, 1)}>
                    <div className="w-[110px] h-[110px] flex justify-center items-center font-haeseo text-[60px]">
                      {showAnswer ? hanjaCards[1] : droppedHanja[1]}
                    </div>
                  </HanjaDropZone>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="relative">
                <img src={IMAGE3.src} />

                <div className="absolute left-[115px] top-[85px]">
                  <HanjaDropZone onDrop={(fromIndex) => moveCard(fromIndex, 0)}>
                    <div className="w-[110px] h-[110px] flex justify-center items-center font-haeseo text-[60px]">
                      {showAnswer ? hanjaCards[5] : droppedHanja[0]}
                    </div>
                  </HanjaDropZone>
                </div>
                <div className="absolute left-[265px] top-[85px]">
                  <HanjaDropZone onDrop={(fromIndex) => moveCard(fromIndex, 1)}>
                    <div className="w-[110px] h-[110px] flex justify-center items-center font-haeseo text-[60px]">
                      {showAnswer ? hanjaCards[4] : droppedHanja[1]}
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
    </>
  );
}
