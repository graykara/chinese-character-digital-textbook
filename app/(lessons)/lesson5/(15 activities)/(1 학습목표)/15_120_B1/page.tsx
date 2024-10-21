"use client";

import { GoalPageTemplate } from "@/app/pages/goal/goal-page-template";
import IMAGE from "./image.png";
import BACKGROUND1 from "@/app/bgpng_temp/13/중등한문_귀에 대고 말한 까닭1.png"

export default function Page() {
  return (
    <>
    <GoalPageTemplate
      background={IMAGE.src}
      goals={[
        {
          text: "글을 의미에 맞게 읽고 바르게 풀이할 수 있다.",
          sound: "/sound/5/108_goal/1.mp3",
        },
        {
          text: "신중한 언행으로 상대를 배려하는 선인들의 가르침을 본받아 바람직한 인성을 함양할 수 있다.",
          sound: "/sound/5/108_goal/2.mp3",
        },
      ]}
    />
    <img src={BACKGROUND1.src} className="absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
