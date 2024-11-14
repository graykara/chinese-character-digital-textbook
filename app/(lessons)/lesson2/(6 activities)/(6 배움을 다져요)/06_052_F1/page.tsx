"use client";

import { StrengthenLearningMainContentHeader } from "@/app/components/headers/strengthen-learning-main-content-header";
import { useState } from "react";
import EXAMPLE from "./example.png";
import { ContentContainer } from "@/app/components/content-container";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘17.png";
import { InputWithPen } from "@/app/components/input-with-pen";
import { Button } from "@/app/components/buttons/button";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);

  const data: { chinese: string; meaning: string; sound: string }[] = [
    {
      chinese: "聽",
      meaning: "청 듣다",
      sound: "/sound/2/p052_word000.mp3",
    },
    {
      chinese: "民",
      meaning: "민 백성",
      sound: "/sound/2/p052_word001.mp3",
    },
    {
      chinese: "寒",
      meaning: "한 차다",
      sound: "/sound/2/p052_word002.mp3",
    },
    {
      chinese: "冷",
      meaning: "랭 차다",
      sound: "/sound/2/p052_word003.mp3",
    },
    {
      chinese: "溫",
      meaning: "온 따뜻하다",
      sound: "/sound/2/p052_word004.mp3",
    },
    {
      chinese: "主",
      meaning: "주 주인",
      sound: "/sound/2/p052_word005.mp3",
    },
    {
      chinese: "投",
      meaning: "투 던지다",
      sound: "/sound/2/p052_word006.mp3",
    },
    {
      chinese: "密",
      meaning: "밀 빽빽하다",
      sound: "/sound/2/p052_word007.mp3",
    },
    {
      chinese: "暖",
      meaning: "난 따뜻하다",
      sound: "/sound/2/p052_word008.mp3",
    },
    {
      chinese: "感",
      meaning: "감 느끼다",
      sound: "/sound/2/p052_word009.mp3",
    },
    {
      chinese: "票",
      meaning: "표 표하다",
      sound: "/sound/2/p052_word010.mp3",
    },
    {
      chinese: "林",
      meaning: "림 수풀",
      sound: "/sound/2/p052_word011.mp3",
    },
    {
      chinese: "話",
      meaning: "화 말하다",
      sound: "/sound/2/p052_word012.mp3",
    },
    {
      chinese: "者",
      meaning: "자 사람",
      sound: "/sound/2/p052_word013.mp3",
    },
    {
      chinese: "多",
      meaning: "다 많다",
      sound: "/sound/2/p052_word014.mp3",
    },
    {
      chinese: "濕",
      meaning: "습 젖다",
      sound: "/sound/2/p052_word015.mp3",
    },
  ];

  return (
    <>
      <StrengthenLearningMainContentHeader
        title={
          <p>
            빈칸에 한자의 뜻과 음을 적고,<span className="text-[45px] bg-[#5F9055] text-white rounded-full ml-3 mr-1 px-5 pt-2  align-text-top">보기</span>의 설명에 해당하는 어휘가 되도록 가로 또는 세로로 묶어 보자.
          </p>
        }
        sound="/sound/2/52-i-1.mp3"
      />

      <ContentContainer className="!justify-start">
        <div className="w-[1300px] relative grid grid-cols-[1fr__350px] gap-[100px] pb-[100px]">
          <div className="relative">
            <table className="table border-8 border-[#d2c5ac] border-collapse">
              {[0, 4, 8, 12].map((index) => {
                return (
                  <tr key={index}>
                    {data.slice(index, index + 4).map((item, i) => {
                      const { chinese, meaning, sound } = item;
                      return (
                        <td
                          key={chinese}
                          className="w-[200px] border-b-4 border-x-4 border-[#d2c5ac]"
                        >
                          <Button
                            onClick={() => SOUND(sound).play()}
                            className="w-full flex items-center justify-center font-haeseo text-[80px] border-b-4 border-[#d2c5ac]"
                          >
                            {chinese}
                          </Button>
                          <div className="text-center text-[35px] py-1">
                            <InputWithPen
                              answer={meaning}
                              showAnswer={showAnswer}
                              className="w-[200px] text-[35px] text-center"
                              penClassName="w-[35px] left-1/2 -translate-x-1/2"
                            />
                            {/* <p
                            className={`text-answer ${showAnswer ? "opacity-100" : "opacity-0"}`}
                          >
                            {meaning}
                          </p> */}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </table>
            <table className={`${showAnswer ? "opacity-100" : "opacity-0"} absolute left-0 top-0 table border-8 border-transparent border-collapse pointer-events-none`}>
              <tr>
                <td className="w-[207px] h-[192px] border-b-4 border-x-4 border-transparent p-1"><div className="w-full h-full" /></td>
                <td rowSpan={2} className="w-[207px] h-[382px] border-b-4 border-x-4 border-transparent p-1"><div className="w-full h-full border-8 border-[#f19394]" /></td>
                <td colSpan={2} className="w-[207px] h-[192px] border-b-4 border-x-4 border-transparent p-1"><div className="w-full h-full border-8 border-[#3c49ac]" /></td>
              </tr>
              <tr>
                <td rowSpan={2} className="w-[207px] h-[382px] border-b-4 border-x-4 border-transparent p-1"><div className="w-full h-full border-8 border-[#323763]" /></td>
                <td rowSpan={2} className="w-[207px] h-[382px] border-b-4 border-x-4 border-transparent p-1"><div className="w-full h-full border-8 border-[#ff762e]" /></td>
                <td rowSpan={2} className="w-[207px] h-[382px] border-b-4 border-x-4 border-transparent p-1"><div className="w-full h-full border-8 border-[#ffc64c]" /></td>
              </tr>
              <tr>
                <td className="w-[207px] h-[192px] border-b-4 border-x-4 border-transparent p-1"><div className="w-full h-full" /></td>
              </tr>
              <tr>
                <td colSpan={2} className="w-[207px] h-[192px] border-b-4 border-x-4 border-transparent p-1"><div className="w-full h-full border-8 border-[#156729]" /></td>
                <td colSpan={2} className="w-[207px] h-[192px] border-b-4 border-x-4 border-transparent p-1"><div className="w-full h-full border-8 border-[#a91ac1]" /></td>
              </tr>
            </table>
          </div>
          <img src={EXAMPLE.src} className="flex-none" />
        </div>
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      {/* <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
}
