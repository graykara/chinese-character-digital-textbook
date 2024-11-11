"use client";

import { StrengthenLearningWordHeader } from "@/app/components/headers/strengthen-learning-word-header";
import IMAGE1 from "./bg_1-2.png";
import { ContentContainer } from "@/app/components/content-container";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { useEffect, useState } from "react";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/14/중등한문_사람만 귀한가요19.png";
import { DraggableCard } from "@/app/components/new-drag-and-drop/draggable-card";
import { DropZone } from "@/app/components/new-drag-and-drop/drop-zone";

export default function Page() {
  const answers = ["共存", "平等", "共生", "易地思之"];
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(false);
    setDroppedHanja(["", ""]);
  }, []);

  const hanjaCards = ["共", "等", "存", "易", "生", "思", "之", "平", "地"];
  const hanjaSounds = [
    "/sound/5/p118_word000.mp3",
    "/sound/5/p118_word001.mp3",
    "/sound/5/p118_word002.mp3",
    "/sound/5/p118_word003.mp3",
    "/sound/5/p118_word004.mp3",
    "/sound/5/p118_word005.mp3",
    "/sound/5/p118_word006.mp3",
    "/sound/5/p118_word007.mp3",
    "/sound/5/p118_word008.mp3",
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
        sound="/sound/5/118-i-3.mp3"
      />

      <ContentContainer className="!justify-start -top-[50px] left-[100px]">
        <img src={IMAGE1.src} />

        <div className="absolute w-[520px] height-[400px] grid grid-cols-3 gap-[30px] left-[60px] ">
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
              <DraggableCard key={index} value={hanja}>
                <div className="w-[165px] h-[135px] pb-[15px] flex justify-center items-center font-haeseo text-[80px]">
                  {hanja}
                </div>
              </DraggableCard>
            </div>
          ))}
        </div>
        {!showAnswer ? (
          <div>
            <div className="absolute right-[450px] top-[20px]">
              <div className="absolute left-0 ">
                <DropZone className="w-[80px] h-[80px] flex justify-center items-center font-haeseo text-[70px]" />
              </div>
              <div className="absolute left-[105px]">
                <DropZone className="w-[80px] h-[80px] flex justify-center items-center font-haeseo text-[70px]" />
              </div>
            </div>

            <div className="absolute right-[450px] top-[139px]">
              <div className="absolute left-0 ">
                <DropZone className="w-[80px] h-[80px] flex justify-center items-center font-haeseo text-[70px]" />
              </div>
              <div className="absolute left-[105px]">
                <DropZone className="w-[80px] h-[80px] flex justify-center items-center font-haeseo text-[70px]" />
              </div>
            </div>

            <div className="absolute right-[450px] top-[258px]">
              <div className="absolute left-0 ">
                <DropZone className="w-[80px] h-[80px] flex justify-center items-center font-haeseo text-[70px]" />
              </div>
              <div className="absolute left-[105px]">
                <DropZone className="w-[80px] h-[80px] flex justify-center items-center font-haeseo text-[70px]" />
              </div>
            </div>

            <div className="absolute right-[450px] top-[377px]">
              <div className="absolute left-0 ">
                <DropZone className="w-[80px] h-[80px] flex justify-center items-center font-haeseo text-[70px]" />
              </div>
              <div className="absolute left-[105px]">
                <DropZone className="w-[80px] h-[80px] flex justify-center items-center font-haeseo text-[70px]" />
              </div>
              <div className="absolute left-[210px]">
                <DropZone className="w-[80px] h-[80px] flex justify-center items-center font-haeseo text-[70px]" />
              </div>
              <div className="absolute left-[315px]">
                <DropZone className="w-[80px] h-[80px] flex justify-center items-center font-haeseo text-[70px]" />
              </div>
            </div>
          </div>
        ) : (
          <div className="text-answer">
            <div className="absolute right-[450px] top-[20px]">
              <div className="absolute left-0 ">
                <div className="w-[80px] h-[80px] flex justify-center items-center font-haeseo text-[70px]">
                  共
                </div>
              </div>
              <div className="absolute left-[105px]">
                <div className="w-[80px] h-[80px] flex justify-center items-center font-haeseo text-[70px]">
                  存
                </div>
              </div>
            </div>

            <div className="absolute right-[450px] top-[139px]">
              <div className="absolute left-0 ">
                <div className="w-[80px] h-[80px] flex justify-center items-center font-haeseo text-[70px]">
                  平
                </div>
              </div>
              <div className="absolute left-[105px]">
                <div className="w-[80px] h-[80px] flex justify-center items-center font-haeseo text-[70px]">
                  等
                </div>
              </div>
            </div>

            <div className="absolute right-[450px] top-[258px]">
              <div className="absolute left-0 ">
                <div className="w-[80px] h-[80px] flex justify-center items-center font-haeseo text-[70px]">
                  共
                </div>
              </div>
              <div className="absolute left-[105px]">
                <div className="w-[80px] h-[80px] flex justify-center items-center font-haeseo text-[70px]">
                  生
                </div>
              </div>
            </div>

            <div className="absolute right-[450px] top-[377px]">
              <div className="absolute left-0 ">
                <div className="w-[80px] h-[80px] flex justify-center items-center font-haeseo text-[70px]">
                  易
                </div>
              </div>
              <div className="absolute left-[105px]">
                <div className="w-[80px] h-[80px] flex justify-center items-center font-haeseo text-[70px]">
                  地
                </div>
              </div>
              <div className="absolute left-[210px]">
                <div className="w-[80px] h-[80px] flex justify-center items-center font-haeseo text-[70px]">
                  思
                </div>
              </div>
              <div className="absolute left-[315px]">
                <div className="w-[80px] h-[80px] flex justify-center items-center font-haeseo text-[70px]">
                  之
                </div>
              </div>
            </div>
          </div>
        )}
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
