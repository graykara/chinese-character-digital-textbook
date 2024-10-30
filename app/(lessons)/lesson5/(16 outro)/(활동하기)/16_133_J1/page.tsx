"use client";

import IMAGE from "./image.png";
import { useState } from "react";
import { ActivityPageTemplate } from "@/app/pages/activity-page-template";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import { HeaderContainer } from "@/app/components/headers/header-container";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <ActivityPageTemplate lesson={5}>
        <div className="w-full h-full flex flex-col justify-start items-center overflow-y-scroll">
          <header className="mb-10">
            <h1 className="text-[60px] text-[#da722c] font-bold text-center">
              나의 기업 운영 계획서 및 명함 만들기
            </h1>
            <HeaderContainer
              sound="/sound/5/133-1.mp3"
              className="text-center text-[35px] animate__animated animate__flipInX"
            >
              거상 김만덕은 자신이 가진 부를 어려운 사람에게 나눠 주는 나눔의
              정신을 보여 주었다. 만약 한 기업
              <br />
              의 경영자가 되어 사회 공헌 사업을 펼친다면 어떻게 나눔을 베풀 수
              있을지 나의 기업 운영 계획서와 <br />
              기업의 가치를 담은 명함을 만들어 보자.
            </HeaderContainer>
          </header>
          <img src={IMAGE.src} className="w-full" />
        </div>
      </ActivityPageTemplate>

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />

      {/* <img src={BACKGROUND2.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
}
