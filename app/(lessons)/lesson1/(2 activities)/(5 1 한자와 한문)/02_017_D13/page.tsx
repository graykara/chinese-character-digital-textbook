"use client";

import { ExerciseHeader } from "@/app/components/exercise-header";
import { HeaderContainer } from "@/app/components/headers/header-container";
import HEADER from "./header.png";
import IMAGE_BEFORE from "./image.png";
import IMAGE_AFTER from "./image_after.png";
import { PageInfoContext } from "@/app/utils/page-info";
import { useState } from "react";
import { useContext } from "react";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import BACKGROUND from "@/app/bgpng_temp/2/중등한문_한자,얼마나 알아10.png"

export default function Page() {
  //const answer = "책상, 의자, 공책, 연필, 필통, 칠판, 창문, 시계,게시판, 휴지통";
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");
  const [value7, setValue7] = useState("");
  const [value8, setValue8] = useState("");
  const [value9, setValue9] = useState("");
  const [value10, setValue10] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("한자와 한문");

  return (
    <>
      <HeaderContainer className="mt-10">
        <img src={HEADER.src} alt="header" />
      </HeaderContainer>

      <ExerciseHeader text="내 이름을 한자로 쓰고 그 뜻을 사용하여 이름의 의미를 써보자." />

      <div className="w-[1400px] h-full mx-auto flex justify-center items-center ">

        <img
          src={showAnswer ? IMAGE_AFTER.src : IMAGE_BEFORE.src}
          className="absolute translate-x-2 -translate-y-5" />

        <div className="relative w-[850px] mb-[450px]">
          <div className="relative top-2">
            {!value1 && !showAnswer ? (
              <img
                src="/ui/textarea-pen.png"
                className="absolute pointer-events-none"
                style={{
                  height: 48,
                  top: 20,
                  left: 50
                }}
              />
            ) : null}
            {!showAnswer ? (
              <input
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
                className={`absolute resize-none w-[195px] left-14 top-8 text-center text-[30px] tracking-tighter break-keep bg-transparent }`}
              ></input>
            ) : null}
            {!value2 && !showAnswer ? (
              <img
                src="/ui/textarea-pen.png"
                className="absolute pointer-events-none"
                style={{
                  height: 48,
                  top: 155,
                  left: -45
                }}
              />
            ) : null}
            {!showAnswer ? (
              <textarea
                value={showAnswer ? '' : value2}
                onChange={(e) => setValue2(e.target.value)}
                className={`absolute resize-none w-[380px] -left-[50px] top-[160px] text-center text-[30px] leading-[60px] tracking-tighter break-keep bg-transparent }`}
                rows={2}
              ></textarea>
            ) : null}

            {!value3 && !showAnswer ? (
              <img
                src="/ui/textarea-pen.png"
                className="absolute pointer-events-none"
                style={{
                  height: 48,
                  top: 20,
                  left: 480
                }}
              />
            ) : null}
            {!showAnswer ? (
              <input
                value={showAnswer ? '' : value3}
                onChange={(e) => setValue3(e.target.value)}
                className={`absolute resize-none w-[110px] left-[476px] top-1 text-center text-[60px] tracking-tighter break-keep bg-transparent }`}
              ></input>
            ) : null}
            {!value4 && !showAnswer ? (
              <img
                src="/ui/textarea-pen.png"
                className="absolute pointer-events-none"
                style={{
                  height: 48,
                  top: 20,
                  left: 660
                }}
              />
            ) : null}
            {!showAnswer ? (
              <input
                value={showAnswer ? '' : value4}
                onChange={(e) => setValue4(e.target.value)}
                className={`absolute resize-none w-[205px] left-[651px] top-1 text-center text-[60px]  break-keep bg-transparent }`}
              ></input>
            ) : null}
            {!value5 && !showAnswer ? (
              <img
                src="/ui/textarea-pen.png"
                className="absolute pointer-events-none"
                style={{
                  height: 48,
                  top: 20,
                  left: 930
                }}
              />
            ) : null}
            {!showAnswer ? (
              <input
                value={showAnswer ? '' : value5}
                onChange={(e) => setValue5(e.target.value)}
                className={`absolute resize-none w-[205px] left-[925px] top-1 text-center text-[60px]  break-keep bg-transparent }`}
              ></input>
            ) : null}

            {!value6 && !showAnswer ? (
              <img
                src="/ui/textarea-pen.png"
                className="absolute pointer-events-none"
                style={{
                  height: 48,
                  top: 128,
                  left: 480
                }}
              />
            ) : null}
            {!showAnswer ? (
              <input
                value={showAnswer ? '' : value6}
                onChange={(e) => setValue6(e.target.value)}
                className={`absolute resize-none w-[110px] left-[477px] top-[113px] text-center text-[60px] tracking-tighter break-keep bg-transparent }`}
              ></input>
            ) : null}
            {!value7 && !showAnswer ? (
              <img
                src="/ui/textarea-pen.png"
                className="absolute pointer-events-none"
                style={{
                  height: 48,
                  top: 128,
                  left: 660
                }}
              />
            ) : null}
            {!showAnswer ? (
              <input
                value={showAnswer ? '' : value7}
                onChange={(e) => setValue7(e.target.value)}
                className={`absolute resize-none w-[205px] left-[651px] top-[113px] text-center text-[60px] tracking-tighter break-keep bg-transparent }`}
              ></input>
            ) : null}
            {!value8 && !showAnswer ? (
              <img
                src="/ui/textarea-pen.png"
                className="absolute pointer-events-none"
                style={{
                  height: 48,
                  top: 128,
                  left: 930
                }}
              />
            ) : null}
            {!showAnswer ? (
              <input
                value={showAnswer ? '' : value8}
                onChange={(e) => setValue8(e.target.value)}
                className={`absolute resize-none w-[205px] left-[925px] top-[113px] text-center text-[60px]  break-keep bg-transparent }`}
              ></input>
            ) : null}

            {!value9 && !showAnswer ? (
              <img
                src="/ui/textarea-pen.png"
                className="absolute pointer-events-none"
                style={{
                  height: 48,
                  top: 236,
                  left: 660
                }}
              />
            ) : null}
            {!showAnswer ? (
              <input
                value={value9}
                onChange={(e) => setValue9(e.target.value)}
                className={`absolute resize-none w-[205px] left-[657px] top-[222px] text-center text-[60px]  break-keep bg-transparent }`}
              ></input>
            ) : null}
            {!value10 && !showAnswer ? (
              <img
                src="/ui/textarea-pen.png"
                className="absolute pointer-events-none"
                style={{
                  height: 48,
                  top: 236,
                  left: 930
                }}
              />
            ) : null}
            {!showAnswer ? (
              <input
                value={showAnswer ? '' : value10}
                onChange={(e) => setValue10(e.target.value)}
                className={`absolute resize-none w-[205px] left-[927px] top-[222px] text-center text-[60px]  break-keep bg-transparent }`}
              ></input>
            ) : null}


          </div>
        </div>
      </div>

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      <img src={BACKGROUND.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>

  );
}
