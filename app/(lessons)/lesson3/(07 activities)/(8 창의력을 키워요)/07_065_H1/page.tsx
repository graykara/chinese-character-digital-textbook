"use client";

import { SoundButton2 } from "@/app/components/buttons/sound-button2";
import IMAGE from "./image.png";
import { useContext, useEffect, useState } from "react";
import { CreativityPageTemplate } from "@/app/pages/creativity-page-template";
import { CreativityTitleHeader } from "@/app/components/headers/creativity-title-header";
import { TitleContainer } from "@/app/components/title-container";
import { ContentContainer } from "@/app/components/content-container";
import BACKGROUND1 from "@/app/bgpng_temp/7/중등한문_언어생활 속의 성어131.png";
import { PageInfoContext } from "@/app/utils/page-info";

const sound = new Howl({
  src: "/sound/3/65-i.mp3",
});

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  useEffect(() => {
    setShowAnswer(false);
  }, [step]);

  const [isReading, setIsReading] = useState(false);
  const [soundId, setSoundId] = useState<number | null>(null);

  useEffect(() => {
    sound.on("play", () => setIsReading(true));
    sound.on("end", () => setIsReading(false));
    sound.on("stop", () => setIsReading(false));
  }, []);

  const items = [
    "마음에 드는 성어를 검색하여 찾는다.",
    "두꺼운 색종이를 준비하여 가로 5㎝, 세로 10㎝ 크기로 자른다.",
    "자른 종이에 자신이 찾은 성어를 쓰고 그 내용에 어울리는 글을 적거나 그림을 그린다.",
    "자신의 개성을 살려 색을 칠하거나 예쁘게 꾸민다.",
    "코팅하고 오려 낸 뒤 구멍을 뚫어 노끈 등으로 묶는다.",
    "친구와 서로 교환하거나 주고 싶은 친구에게 선물을 한다.",
  ];

  return (
    <>
      <CreativityPageTemplate>
        <CreativityTitleHeader
          title="‘성어 책갈피’ 만들기"
          containerClassName="-mt-5"
        />

        <SoundButton2
          className="absolute -top-[13px] left-[1095px] animate__animated animate__bounceIn animate__delay-1s z-10"
          active={isReading}
          onClick={() => {
            if (isReading) sound.stop();
            else setSoundId(sound.play());
          }}
        />

        <ContentContainer className="-left-16 -top-2">
          <div className="grid grid-cols-[450px__1fr] gap-3 mt-5">
            <div className="relaitve h-full flex justify-end items-end pr-5 pl-4">
              <img src={IMAGE.src} />
            </div>

            <div className="flex flex-col gap-14 pt-8">
              {items.map((item, index) => (
                <div key={index} className="flex items-center gap-5 pr-4">
                  <div className="bg-red-500 text-white w-9 h-9 rounded-full flex justify-center items-center text-[28px] tracking-tightest">
                    {index + 1}
                  </div>
                  <p className="text-[30px] tracking-tight mb-1">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </ContentContainer>
      </CreativityPageTemplate>

      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
