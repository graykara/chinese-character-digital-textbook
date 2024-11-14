"use client";

import IMAGE_BEFORE from "./image_before.png";
import IMAGE_AFTER from "./image_after.png";
import IMAGE_AFTER_Z from "./image_after_zoom.png";
import MODAL1 from "./modal1.png";
import MODAL2 from "./modal2.png";
import MODAL3 from "./modal3.png";
import MODAL4 from "./modal4.png";
import CLOSE from "./close.png";
import { useState } from "react";
import { CreativityPageTemplate } from "@/app/pages/creativity-page-template";
import { CreativityTitleHeader } from "@/app/components/headers/creativity-title-header";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { TitleContainer } from "@/app/components/title-container";
import BACKGROUND1 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어230.png";
import { ContentContainer } from "@/app/components/content-container";
import { clickSound } from "@/app/utils/click-sound";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);

  return (
    <>
      <CreativityPageTemplate>
        <CreativityTitleHeader
          title="4단 만화로 그리는 성어"
          containerClassName="-mt-5 -translate-x-[65px]"
        />
        <TitleContainer
          className="ml-[85px] mt-2"
          sound="/sound/3/71-i.mp3">
          <div className="flex items-center gap-1 text-[40px] tracking-[-0.5px] ml-[165px]">
            학습한 성어 두 개 이상을 담아낸 내용으로 4단 만화를 그려 보자.
          </div>
        </TitleContainer>

        <div className="ml-5 mt-6">
          <img src={!showAnswer ? IMAGE_BEFORE.src : IMAGE_AFTER.src} />
          {/* <img src={!showAnswer ? IMAGE_BEFORE.src : IMAGE_AFTER_Z.src} /> */}
        </div>

        {/* 11/8 zoom 기능 추가하였는데 삭제한다고 해서 일단 기능 저장 */}

        {/* {showAnswer ? (
          <>
            <Button
              className="absolute top-[150px] left-1/2 -translate-x-[265px] w-[100px] h-[100px] bg-black bg-opacity-50"
              onClick={() => {
                clickSound.play();
                setShowModal1(true);
              }}
            >
            </Button>
            <Button
              className="absolute top-[150px] left-1/2 translate-x-[495px] w-[100px] h-[100px] bg-black bg-opacity-50"
              onClick={() => {
                clickSound.play();
                setShowModal2(true);
              }}
            >
            </Button>
            <Button
              className="absolute top-[465px] left-1/2 -translate-x-[265px] w-[100px] h-[100px] bg-black bg-opacity-50"
              onClick={() => {
                clickSound.play();
                setShowModal3(true);
              }}
            >
            </Button>
            <Button
              className="absolute top-[465px] left-1/2 translate-x-[495px] w-[100px] h-[100px] bg-black bg-opacity-50"
              onClick={() => {
                clickSound.play();
                setShowModal4(true);
              }}
            >
            </Button>

            {showModal1 ? (
              <div className="fixed left-[80px] top-[90px] w-[1760px] h-[990px] bg-white bg-opacity-80 flex justify-center items-center">
                <div className="animate__animated animate__flipInX relative">
                  <img src={MODAL1.src} />
                  <Button
                    className="absolute top-5 right-5 animate__animated animate__delay-1s animate__rotateIn"
                    onClick={() => {
                      clickSound.play();
                      setShowModal1(false);
                    }}
                  >
                    <img src={CLOSE.src} />
                  </Button>
                </div>
              </div>
            ) : null}

            {showModal2 ? (
              <div className="fixed left-[80px] top-[90px] w-[1760px] h-[990px] bg-white bg-opacity-80 flex justify-center items-center">
                <div className="animate__animated animate__flipInX relative">
                  <img src={MODAL2.src} />
                  <Button
                    className="absolute top-5 right-5 animate__animated animate__delay-1s animate__rotateIn"
                    onClick={() => {
                      clickSound.play();
                      setShowModal2(false);
                    }}
                  >
                    <img src={CLOSE.src} />
                  </Button>
                </div>
              </div>
            ) : null}

            {showModal3 ? (
              <div className="fixed left-[80px] top-[90px] w-[1760px] h-[990px] bg-white bg-opacity-80 flex justify-center items-center">
                <div className="animate__animated animate__flipInX relative">
                  <img src={MODAL3.src} />
                  <Button
                    className="absolute top-5 right-5 animate__animated animate__delay-1s animate__rotateIn"
                    onClick={() => {
                      clickSound.play();
                      setShowModal3(false);
                    }}
                  >
                    <img src={CLOSE.src} />
                  </Button>
                </div>
              </div>
            ) : null}

            {showModal4 ? (
              <div className="fixed left-[80px] top-[90px] w-[1760px] h-[990px] bg-white bg-opacity-80 flex justify-center items-center">
                <div className="animate__animated animate__flipInX relative">
                  <img src={MODAL4.src} />
                  <Button
                    className="absolute top-5 right-5 animate__animated animate__delay-1s animate__rotateIn"
                    onClick={() => {
                      clickSound.play();
                      setShowModal4(false);
                    }}
                  >
                    <img src={CLOSE.src} />
                  </Button>
                </div>
              </div>
            ) : null}

          </>
        ) : null} */}

      </CreativityPageTemplate>

      <ExampleAnswerButton
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
