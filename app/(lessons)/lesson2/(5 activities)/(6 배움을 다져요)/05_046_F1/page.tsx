"use client";

import { StrengthenLearningMainContentHeader } from "@/app/components/headers/strengthen-learning-main-content-header";
import { useState } from "react";
import IMAGE1 from "./1.png";
import IMAGE2 from "./2.png";
import IMAGE3 from "./3.png";
import IMAGE4 from "./4.png";
import IMAGE5 from "./5.png";
import EXAMPLE from "./example.png";
import ANSWER_BUTTON from "./answer-button.png";
import { InputWithPen } from "@/app/components/input-with-pen";
import { ContentContainer } from "@/app/components/content-container";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/5/중등한문_한자를 알면 틀리지 않는 일상 어휘11.png";
import { Button } from "@/app/components/buttons/button";

export default function Page() {
  const sounds = ["44/4", "45/1", "44/3", "44/2", "45/3"].map(
    (sound) => `/sound/2/${sound}.mp3`,
  );
  const data = [
    {
      resource: IMAGE1.src,
      answer: ["無", "難"],
      x: 571,
      y: 2,
    },
    {
      resource: IMAGE2.src,
      answer: ["食", "水"],
      x: 517,
      y: 35,
    },
    {
      resource: IMAGE3.src,
      answer: ["今", "日"],
      x: 740,
      y: 25,
    },
    {
      resource: IMAGE4.src,
      answer: ["意", "思"],
      x: 512,
      y: 3,
    },
    {
      resource: IMAGE5.src,
      answer: ["休", "業"],
      x: 692,
      y: 37,
    },
  ];
  const [showAnswers, setShowAnswers] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);
  return (
    <>
      <StrengthenLearningMainContentHeader
        title={
          <>
            빈칸에 어울리는 단어를 <span className="text-[45px] border-[3px] border-black rounded-full ml-3 px-5 pt-2 leading-[45px] align-text-top">보기</span>에서 찾아 써 보자.
          </>
        }
        sound="/sound/2/46-i-1.mp3"
      />

      <ContentContainer className="flex-none !h-[120px] -mt-20 mb-10">
        <img src={EXAMPLE.src} />
        <div className="absolute w-[990px] left-[290px] grid grid-cols-5 gap-[50px]">
          {sounds.map((sound) => (
            <Button
              key={sound}
              className="w-100 h-20"
              onClick={() => SOUND(sound).play()}
            />
          ))}
        </div>
      </ContentContainer>

      <ContentContainer className="!justify-start pt-5 pb-20 pr-10 gap-[100px] mb-[50px]">
        {data.map(({ resource, answer, x, y }, index) => (
          <div
            key={resource}
            className="w-full relative flex justify-between items-center pl-[120px]"
          >
            <div className="relative">
              <img src={resource} />
            </div>

            <div className="absolute" style={{ left: x, top: y }}>
              <InputWithPen
                answer={answer[0]}
                showAnswer={showAnswers[index]}
                className="font-haeseo text-[80px] text-center w-[100px] bg-transparent"
                penClassName="left-1/2 -translate-x-1/2"
              />
            </div>
            <div className="absolute" style={{ left: x + 100, top: y }}>
              <InputWithPen
                answer={answer[1]}
                showAnswer={showAnswers[index]}
                className="font-haeseo text-[80px] text-center w-[100px] bg-transparent"
                penClassName="left-1/2 -translate-x-1/2"
              />
            </div>
            <Button
              onClick={() =>
                setShowAnswers(
                  showAnswers.map((v, i) => (i === index ? !v : v)),
                )
              }
            >
              <img src={ANSWER_BUTTON.src} />
            </Button>
          </div>
        ))}
      </ContentContainer>
      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
