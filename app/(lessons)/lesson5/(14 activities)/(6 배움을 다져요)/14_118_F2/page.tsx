"use client";

import { StrengthenLearningWordHeader } from "@/app/components/headers/strengthen-learning-word-header";
import IMAGE1 from "./bg_1.png";
import { InputWithPen } from "@/app/components/input-with-pen";
import { ContentContainer } from "@/app/components/content-container";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { useEffect, useState } from "react";
import { DraggableHanjaCard } from "@/app/components/drag-and-drop/draggable-hanja-card";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { HanjaDropZone } from "@/app/components/drag-and-drop/hanja-drop-zone";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/14/중등한문_사람만 귀한가요19.png";

export default function Page() {
  const answers = ["共存", "平等", "共生", "易地思之"];
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(false);
    setDroppedHanja(["", ""]);
  }, []);

  const hanjaCards = ["共", "等", "存", "易", "生", "思", "之", "平", "地"];
  const hanjaSounds = [
    "/sound/2/32_008.mp3",
    "/sound/2/32_009.mp3",
    "/sound/2/32_010.mp3",
    "/sound/2/32_011.mp3",
    "/sound/2/32_012.mp3",
    "/sound/2/32_013.mp3",
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
          <p className="-mr-20">
            한자 카드를 결합하여 각각의 풀이에 알맞은 단어를 한자로 써 보자.
          </p>
        }
        sound=""
      />

      <ContentContainer className="!justify-start -top-[50px] left-[100px]">
        <img src={IMAGE1.src} />

        <DndProvider backend={HTML5Backend}>
          <div className="absolute w-[510px] height-[400px] grid grid-cols-3 gap-[30px] left-[60px] ">
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
                  <div className="w-[165px] h-[135px] bg-red-400 flex justify-center items-center font-haeseo text-[80px]">
                    {hanja}
                  </div>
                </DraggableHanjaCard>
              </div>
            ))}
          </div>
          <div className={showAnswer ? "text-answer" : ""}>
            <div className="absolute right-[450px] top-[20px]">
              <div className="absolute left-0 ">
                <HanjaDropZone onDrop={(fromIndex) => moveCard(fromIndex, 0)}>
                  <div className="w-[80px] h-[80px] flex justify-center items-center font-haeseo text-[70px] bg-blue-400">
                    {showAnswer ? hanjaCards[0] : droppedHanja[0]}
                  </div>
                </HanjaDropZone>
              </div>
              <div className="absolute left-[105px]">
                <HanjaDropZone onDrop={(fromIndex) => moveCard(fromIndex, 1)}>
                  <div className="w-[80px] h-[80px] flex justify-center items-center font-haeseo text-[70px] bg-blue-400">
                    {showAnswer ? hanjaCards[2] : droppedHanja[1]}
                  </div>
                </HanjaDropZone>
              </div>
            </div>

            <div className="absolute right-[450px] top-[139px]">
              <div className="absolute left-0 ">
                <HanjaDropZone onDrop={(fromIndex) => moveCard(fromIndex, 0)}>
                  <div className="w-[80px] h-[80px] flex justify-center items-center font-haeseo text-[70px] bg-blue-400">
                    {showAnswer ? hanjaCards[7] : droppedHanja[2]}
                  </div>
                </HanjaDropZone>
              </div>
              <div className="absolute left-[105px]">
                <HanjaDropZone onDrop={(fromIndex) => moveCard(fromIndex, 1)}>
                  <div className="w-[80px] h-[80px] flex justify-center items-center font-haeseo text-[70px] bg-blue-400">
                    {showAnswer ? hanjaCards[1] : droppedHanja[3]}
                  </div>
                </HanjaDropZone>
              </div>
            </div>

            <div className="absolute right-[450px] top-[258px]">
              <div className="absolute left-0 ">
                <HanjaDropZone onDrop={(fromIndex) => moveCard(fromIndex, 0)}>
                  <div className="w-[80px] h-[80px] flex justify-center items-center font-haeseo text-[70px] bg-blue-400">
                    {showAnswer ? hanjaCards[0] : droppedHanja[4]}
                  </div>
                </HanjaDropZone>
              </div>
              <div className="absolute left-[105px]">
                <HanjaDropZone onDrop={(fromIndex) => moveCard(fromIndex, 1)}>
                  <div className="w-[80px] h-[80px] flex justify-center items-center font-haeseo text-[70px] bg-blue-400">
                    {showAnswer ? hanjaCards[4] : droppedHanja[5]}
                  </div>
                </HanjaDropZone>
              </div>
            </div>

            <div className="absolute right-[450px] top-[377px]">
              <div className="absolute left-0 ">
                <HanjaDropZone onDrop={(fromIndex) => moveCard(fromIndex, 0)}>
                  <div className="w-[80px] h-[80px] flex justify-center items-center font-haeseo text-[70px] bg-blue-400">
                    {showAnswer ? hanjaCards[3] : droppedHanja[6]}
                  </div>
                </HanjaDropZone>
              </div>
              <div className="absolute left-[105px]">
                <HanjaDropZone onDrop={(fromIndex) => moveCard(fromIndex, 1)}>
                  <div className="w-[80px] h-[80px] flex justify-center items-center font-haeseo text-[70px] bg-blue-400">
                    {showAnswer ? hanjaCards[8] : droppedHanja[7]}
                  </div>
                </HanjaDropZone>
              </div>
              <div className="absolute left-[210px]">
                <HanjaDropZone onDrop={(fromIndex) => moveCard(fromIndex, 1)}>
                  <div className="w-[80px] h-[80px] flex justify-center items-center font-haeseo text-[70px] bg-blue-400">
                    {showAnswer ? hanjaCards[5] : droppedHanja[8]}
                  </div>
                </HanjaDropZone>
              </div>
              <div className="absolute left-[315px]">
                <HanjaDropZone onDrop={(fromIndex) => moveCard(fromIndex, 1)}>
                  <div className="w-[80px] h-[80px] flex justify-center items-center font-haeseo text-[70px] bg-blue-400">
                    {showAnswer ? hanjaCards[6] : droppedHanja[9]}
                  </div>
                </HanjaDropZone>
              </div>
            </div>

          </div>
        </DndProvider>
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
}
