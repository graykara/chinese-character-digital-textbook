"use client";

import IMAGE from "./image.png";
import IMAGE_BUTTON from "./button.png";
import { useState, useEffect } from "react";
import { CreativityPageTemplate } from "@/app/pages/creativity-page-template";
import { CreativityTitleHeader } from "@/app/components/headers/creativity-title-header";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/13/중등한문_귀에 대고 말한 까닭24.png";
import { GroupButton } from "@/app/components/buttons/group-button";
import { clickSound } from "@/app/utils/click-sound";
import {
  OLD_TextareaWithPen,
} from "@/app/components/textarea/textarea-with-pen";
import { Howl } from "howler";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const sound1 = new Howl({
      src: ["/sound/5/113-i-1.mp3"],
      autoplay: true,
      onend: () => {
        // 첫 번째 사운드가 끝나면 두 번째 사운드 재생
        const sound2 = new Howl({
          src: ["/sound/5/113-i-2.mp3"],
          autoplay: true,
        });
      }
    });

    return () => {
      sound1.unload();
    };
  }, []);

  return (
    <>
      <CreativityPageTemplate>
        <CreativityTitleHeader
          title="말과 관련된 속담으로 짧은 영상 만들기"
          containerClassName="-mt-5"
        />
        <div className="relative left-[150px] top-[40px]">
          <img src={IMAGE.src} />
        </div>
      </CreativityPageTemplate>

      <GroupButton className="animate__animated animate__fadeIn animate__delay-2s absolute right-[78px] top-[662px] h-[50px] z-1" />

      <OLD_TextareaWithPen
        isExample
        answer={"낮말은 새가 듣고 밤말은 쥐가 듣는다."}
        showAnswer={showAnswer}
        className="text-[40px] w-[480px] leading-[68px] break-keep bg-transparent"
        containerClassName="!absolute top-[450px] left-[360px]"
        penClassName="w-[40px] left-0 top-[10px]"
        rows={3}
      />
      <OLD_TextareaWithPen
        isExample
        answer={"아무도 안 듣는데서라도 말조심을 해야한다."}
        showAnswer={showAnswer}
        className="text-[40px] w-[480px] leading-[68px] break-keep bg-transparent"
        containerClassName="!absolute top-[450px] left-[930px]"
        penClassName="w-[40px] left-0 top-[10px]"
        rows={3}
      />

      <button
        onClick={(e) => {
          clickSound.play();
          e.currentTarget.remove();
        }}
        className="absolute left-[580px] bottom-[93px]"
      >
        <img src={IMAGE_BUTTON.src} className="w-[187px] h-[100px]" />
      </button>
      <button
        onClick={(e) => {
          clickSound.play();
          e.currentTarget.remove();
        }}
        className="absolute left-[827px] bottom-[93px]"
      >
        <img src={IMAGE_BUTTON.src} className="w-[187px] h-[100px]" />
      </button>
      <button
        onClick={(e) => {
          clickSound.play();
          e.currentTarget.remove();
        }}
        className="absolute left-[1074px] bottom-[93px]"
      >
        <img src={IMAGE_BUTTON.src} className="w-[187px] h-[100px]" />
      </button>
      <button
        onClick={(e) => {
          clickSound.play();
          e.currentTarget.remove();
        }}
        className="absolute left-[1322px] bottom-[93px]"
      >
        <img src={IMAGE_BUTTON.src} className="w-[187px] h-[100px]" />
      </button>

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
