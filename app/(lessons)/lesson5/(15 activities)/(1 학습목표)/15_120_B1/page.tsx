"use client";

import { GoalPageTemplate } from "@/app/pages/goal/goal-page-template";
import IMAGE from "./image.png";
import BACKGROUND1 from "@/app/bgpng_temp/15/중등한문_돌에 꽂힌 화살1.png";

export default function Page() {
  return (
    <>
      <GoalPageTemplate
        background={IMAGE.src}
        goals={[
          {
            text: "글을 의미에 맞게 읽고 바르게 풀이할 수 있다.",
            sound: "/sound/5/120_goal/1.mp3",
          },
          {
            text: "이광의 일화를 이해하고 주제를 파악할 수 있다.",
            sound: "/sound/5/120_goal/2.mp3",
          },
        ]}
      />
      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
