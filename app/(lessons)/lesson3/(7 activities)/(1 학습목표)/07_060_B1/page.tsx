"use client";

import { GoalPageTemplate } from "@/app/pages/goal/goal-page-template";
import IMAGE from "./image.png";
import BACKGROUND1 from "@/app/bgpng_temp/7/중등한문_언어생활 속의 성어11.png"

export default function Page() {
  return (
    <>
    <GoalPageTemplate
      background={IMAGE.src}
      goals={[
        {
          text: "성어를 바르게 읽고 풀이할 수 있다.",
          sound: "/sound/3/60_goal/1.mp3",
        },
        {
          text: "언어생활 속 성어를 알고 맥락에 맞게 활용하며 소통할 수 있다.",
          sound: "/sound/3/60_goal/2.mp3",
        },
      ]}
    />
    <img src={BACKGROUND1.src} className="absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
