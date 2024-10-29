"use client";

import { SoundButton2 } from "@/app/components/buttons/sound-button2";
import IMAGE from "./image.png";
import { useEffect, useState } from "react";
import { CreativityPageTemplate } from "@/app/pages/creativity-page-template";
import { CreativityTitleHeader } from "@/app/components/headers/creativity-title-header";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { TitleContainer } from "@/app/components/title-container";
import BACKGROUND1 from "@/app/bgpng_temp/10/중등한문_이야기가 담긴 성어227.png";
import { ContentContainer } from "@/app/components/content-container";
import { BuddyButton } from "@/app/components/buttons/buddy-button";
import { GroupButton } from "@/app/components/buttons/group-button";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(false);
  }, []);

  const [isReading, setIsReading] = useState(false);

  const sound = new Howl({
    src: "/sound/3/83-i.mp3",
    onplay: () => setIsReading(true),
    onend: () => setIsReading(false),
  });

  useEffect(() => {
    return () => {
      sound.stop();
    };
  }, []);

  const items = [
    "자신이 발표하고 싶은 성어를 고르고 성어에 쓰인 한자의 음과 뜻, 풀이, 의미 등을 조사한다.",
    "유래가 있는 성어의 경우 친구들이 이해하기 쉽도록 요약하거나 각색한다.",
    "친구들이 성어를 잘 이해하도록 그림, 만화, 영상 자료를 넣고 신문과 뉴스 자료를 검색하여 오늘날 활용되고 있는 사례를 보여 준다.",
    "성어의 의미나 유래 속 인물에 대해 자신만의 가치관을 담은 설명을 정리한다.",
    "위의 모든 내용을 담은 프레젠테이션 자료를 만들어 개인별 또는 모둠별로 발표한다.",
  ];

  return (
    <>
      <CreativityPageTemplate>
        <CreativityTitleHeader
          title="‘성어 프레젠테이션’ 발표 대회"
          containerClassName="-mt-5 -translate-x-16"
        />

        <SoundButton2
          className="absolute -top-[13px] left-[1125px] animate__animated animate__bounceIn animate__delay-1s z-10"
          active={isReading}
          onClick={() => sound.play()}
        />
        <BuddyButton className="animate__animated animate__fadeIn animate__delay-1s absolute right-[320px] -top-[10px] w-[100px] z-1" />
        <GroupButton className="animate__animated animate__fadeIn animate__delay-2s absolute right-[183px] -top-[5px] z-1" />

        <ContentContainer className="mx-0 -top-8 w-[1600px] pr-[30px]">
          <div className="w-[1540px] grid grid-cols-[800px__1fr] gap-3 mt-[10px]">
            <div className="flex flex-col gap-10 pt-8 ml-1">
              {items.map((item, index) => (
                <div key={index} className="flex items-start gap-5 pr-4">
                  <div className="bg-red-500 text-white w-10 h-10 mt-1 rounded-full flex-none items-start text-[28px] text-center tracking-tightest">
                    {index + 1}
                  </div>
                  <p className="text-[36px] leading-[52px] tracking-tighter break-keep -mb-5">{item}</p>
                </div>
              ))}
            </div>
            <div className="relaitve h-full flex justify-end items-end right-0">
              <img src={IMAGE.src} className="mb-20" />
            </div>
          </div>
        </ContentContainer>
      </CreativityPageTemplate>

      {/* <CreativityPageTemplate>
        <header className="relative width-[1000px] left-[450px] -top-5 text-[50px]">
          <CreativityTitleHeader title="성어 프레젠테이션 발표 대회" />
        </header>

        <BuddyButton className="animate__animated animate__fadeIn animate__delay-1s absolute right-[200px] top-[5px] z-1" />
        <GroupButton className="animate__animated animate__fadeIn animate__delay-2s absolute right-[70px] top-[5px] z-1" />

        <ContentContainer className="!items-start">
          <img src={IMAGE.src} />
        </ContentContainer>
      </CreativityPageTemplate>

      <TitleContainer className="ml-4 mt-4">
        <div className="flex items-center gap-4">
          <img src="/ui/flower-icon-2.png" />
          다음 단어의 뜻을 조사하고 차이점을 발표해 보자.
        </div>
      </TitleContainer> */}

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
