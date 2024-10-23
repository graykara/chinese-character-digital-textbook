"use client";

import { GoalPageTemplate } from "@/app/pages/goal/goal-page-template";
import IMAGE from "./image.png";
import BACKGROUND1 from "@/app/bgpng_temp/11/중등한문_너와 나, 우리1.png";

export default function Page() {
  return (
    <>
      <GoalPageTemplate
        background={IMAGE.src}
        goals={[
          {
            text: "글을 의미에 맞게 읽고 바르게 풀이할 수 있다.",
            sound: "/sound/4/90_goal/1.mp3",
          },
          {
            text: "문장의 구조를 이해하여 기초적인 한문 독해 능력을 기를 수 있다.",
            sound: "/sound/4/90_goal/2.mp3",
          },
        ]}
      />
      <img src={BACKGROUND1.src} className="absolute left-0 top-0 opacity-35 pointer-events-none" />
    </>
  );
}
