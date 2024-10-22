"use client";

import { useEffect, useState } from "react";
import { Header } from "../components/header";
import IMAGE from "./image.png";
import PLUS from "./plus.png";
import MODAL from "./modal.png";
import CLOSE from "./close.png";
import { ReadingButton } from "@/app/components/buttons/reading-button";
import { Howl } from "howler";

export default function Page24() {
  const [showModal, setShowModal] = useState(false);

  const [isReading, setIsReading] = useState(false);

  const sound = new Howl({
    src: "/sound/1/15_story.mp3",
    onplay: () => setIsReading(true),
    onend: () => setIsReading(false),
  });

  useEffect(() => {
    return () => {
      sound.stop();
    };
  }, []);

  return (
    <>
      <Header />

      <div className="relative w-full h-full flex justify-end items-center">
        <div className="relative">
          <div className="absolute -top-28 right-[150px]">
            <ReadingButton active={isReading} onClick={() => sound.play()} />
          </div>

          <div className="relative">
            <img src={IMAGE.src} />
            <p
              className={`absolute left-8 top-4 w-[1300px] text-[55px] tracking-tight ${
                isReading ? "text-reading" : ""
              }`}
            >
              한·중·일 3국에서 숫자 ‘4’는 불길한 숫자로 통한다. 이는 한자 문화권
              3국 언어의 ‘4’ 발음[사, 쓰(sì), 시(し)]에서 ‘죽을 사(死)’ 가
              연상되기 때문이다. 한국의 인천 국제공항에는 44번 탑승구가 없으며,
              많은 호텔이나 병원도 4층을 F층으로 표기한다. 일본도 4층이나 4호
              병실이 없는 병원이 많으며, 중국은 전화번호나 자동차 번호에 ‘4’
              자가 들어가는 것을 꺼린다.
            </p>
          </div>

          <button
            className="absolute right-[180px] bottom-[150px]"
            onClick={() => setShowModal(true)}
          >
            <img src={PLUS.src} />
          </button>
        </div>
      </div>

      {showModal ? (
        <div className="fixed left-[80px] top-[90px] w-[1760px] h-[990px] bg-white bg-opacity-80 flex justify-center items-center">
          <div className="animate__animated animate__flipInX relative">
            <img src={MODAL.src} />

            <button
              className="absolute top-5 right-5"
              onClick={() => setShowModal(false)}
            >
              <img src={CLOSE.src} />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
