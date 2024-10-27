"use client";

import { ThinkTogetherHeader } from "@/app/components/headers/think-together";
import IMAGE from "./image.png";
import { ContentContainer } from "@/app/components/content-container";
import { useState } from "react";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕2.png";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);
  const answers = [
    "도움이 필요한 사람에게 도움을 주는 것.",
    "마을의 어르신들에게 스마트 기기 활용 방법을 알려 드림."
  ];
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  return (
    <>
      <ThinkTogetherHeader
        title={<p className="-ml-2 leading-[60px]">다양한 나눔의 사례를 보고 내가 생각하는 나눔과 내가 실천한 나눔의 사례를 적어 보자.</p>}
        sound="/sound/5/126-i.mp3"
      />

      <ContentContainer className="-top-9 left-10">
        <img src={IMAGE.src} />
      </ContentContainer>
      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />

      {!value1 && !showAnswer ? (
        <img
          src="/ui/textarea-pen.png"
          className="absolute pointer-events-none"
          style={{
            height: 40,
            top: 485,
            left: 870+225
          }}
        />
      ) : null}
      <textarea
        value={showAnswer ? answers[0] : value1}
        onChange={(e) => setValue1(e.target.value)}
        className={`absolute resize-none w-[720px] left-[870px] top-[485px] text-[37px] leading-[46px] tracking-tighter indent-[225px] break-keep bg-transparent py-1  ${showAnswer ? "text-example" : ""
          }`}
        rows={2}
      ></textarea>

      {!value2 && !showAnswer ? (
        <img
          src="/ui/textarea-pen.png"
          className="absolute pointer-events-none"
          style={{
            height: 40,
            top: 597,
            left: 870+270
          }}
        />
      ) : null}
      <textarea
        value={showAnswer ? answers[1] : value2}
        onChange={(e) => setValue1(e.target.value)}
        className={`absolute resize-none w-[720px] left-[870px] top-[597px] text-[37px] leading-[46px] tracking-tighter indent-[270px] break-keep bg-transparent py-1  ${showAnswer ? "text-example" : ""
          }`}
        rows={2}
      ></textarea>

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
}

const Step1 = () => {
  return (
    <>

    </>
  );
};
