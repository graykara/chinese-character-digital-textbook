"use client";

import { StrengthenLearningMainContentHeader } from "@/app/components/headers/strengthen-learning-main-content-header";
import { Children, useState } from "react";
import EXAMPLE from "./example.png";
import { ContentContainer } from "@/app/components/content-container";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { SOUND } from "@/app/utils/sound-player";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);

  const data: { chinese: string; meaning: string; sound: string }[] = [
    {
      chinese: "聽",
      meaning: "청 듣다",
      sound: "/sound/2/52_001.mp3",
    },
    {
      chinese: "民",
      meaning: "민 백성",
      sound: "/sound/2/52_002.mp3",
    },
    {
      chinese: "寒",
      meaning: "한 차다",
      sound: "/sound/2/52_003.mp3",
    },
    {
      chinese: "冷",
      meaning: "랭 차다",
      sound: "/sound/2/52_004.mp3",
    },
    {
      chinese: "溫",
      meaning: "온 따뜻하다",
      sound: "/sound/2/52_005.mp3",
    },
    {
      chinese: "主",
      meaning: "주 주인",
      sound: "/sound/2/52_006.mp3",
    },
    {
      chinese: "投",
      meaning: "투 던지다",
      sound: "/sound/2/52_007.mp3",
    },
    {
      chinese: "密",
      meaning: "밀 빽빽하다",
      sound: "/sound/2/52_008.mp3",
    },
    {
      chinese: "暖",
      meaning: "난 따뜻하다",
      sound: "/sound/2/52_009.mp3",
    },
    {
      chinese: "感",
      meaning: "감 느끼다",
      sound: "/sound/2/52_010.mp3",
    },
    {
      chinese: "票",
      meaning: "표 표하다",
      sound: "/sound/2/52_011.mp3",
    },
    {
      chinese: "林",
      meaning: "림 수풀",
      sound: "/sound/2/52_012.mp3",
    },
    {
      chinese: "話",
      meaning: "화 말하다",
      sound: "/sound/2/52_013.mp3",
    },
    {
      chinese: "者",
      meaning: "자 사람",
      sound: "/sound/2/52_014.mp3",
    },
    {
      chinese: "多",
      meaning: "다 많다",
      sound: "/sound/2/52_015.mp3",
    },
    {
      chinese: "濕",
      meaning: "습 젖다",
      sound: "/sound/2/52_016.mp3",
    },
  ];

  return (
    <>
      <StrengthenLearningMainContentHeader
        title={"성어의 풀이 순서를 빈칸에 숫자로 써 보자."}
        sound=""
      />

      <ContentContainer className="!justify-start">
        <div className="w-[1300px] relative grid grid-cols-[1fr__350px] gap-[100px] pb-[100px]">
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
                        <button
                          onClick={() => SOUND(sound).play()}
                          className="w-full flex items-center justify-center font-haeseo text-[80px] border-b-4 border-[#d2c5ac]"
                        >
                          {chinese}
                        </button>
                        <div className="text-center text-[35px] py-1">
                          <p
                            className={`text-answer ${showAnswer ? "opacity-100" : "opacity-0"}`}
                          >
                            {meaning}
                          </p>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </table>
          <img src={EXAMPLE.src} className="flex-none" />
        </div>
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
}
