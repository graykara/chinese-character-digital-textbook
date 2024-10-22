"use client";

import { GoalPageTemplate } from "@/app/pages/goal/goal-page-template";
import IMAGE from "./image.png";
import BACKGROUND1 from "@/app/bgpng_temp/6/중등한문_한자를 알면 쉬운 교과서 속 어휘1.png";

export default function Page() {
  return (
    <>
      <GoalPageTemplate
        background={IMAGE.src}
        goals={[
          {
            text: "글을 의미에 맞게 읽고 바르게 풀이할 수 있다.",
            sound: "/sound/4/96_goal/1.mp3",
          },
          {
            text: "한문으로 된 짧은 글을 읽고 주제를 파악할 수 있다.",
            sound: "/sound/4/96_goal/2.mp3",
          },
        ]}
      />
      <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
