"use client";

import { GoalPageTemplate } from "@/app/pages/goal/goal-page-template";
import IMAGE from "./image.png";
import BACKGROUND1 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘1.png"

export default function Page() {
  return (
    <>
    <GoalPageTemplate
      background={IMAGE.src}
      goals={[
        {
          text: "단어를 읽고 풀이할 수 있다.",
          sound: "/sound/2/34_goal/1.mp3",
        },
        {
          text: "단어의 짜임을 구별할 수 있다.",
          sound: "/sound/2/34_goal/2.mp3",
        },
      ]}
    />
    <img src={BACKGROUND1.src} className="absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
