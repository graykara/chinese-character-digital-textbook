"use client";

import { GoalPageTemplate } from "@/app/pages/goal/goal-page-template";
import IMAGE from "./image.png";
import BACKGROUND1 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어21.png"

export default function Page() {
  return (
    <>
    <GoalPageTemplate
      background={IMAGE.src}
      goals={[
        {
          text: "성어에 사용된 한자의 음과 뜻을 이해할 수 있다.",
          sound: "/sound/3/66_goal/1.mp3",
        },
        {
          text: "성어의 특징을 이해하고 바르게 풀이할 수 있다.",
          sound: "/sound/3/66_goal/2.mp3",
        },
      ]}
    />
    <img src={BACKGROUND1.src} className="absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
