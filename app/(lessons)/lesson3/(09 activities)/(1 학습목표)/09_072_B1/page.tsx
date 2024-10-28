"use client";

import { GoalPageTemplate } from "@/app/pages/goal/goal-page-template";
import IMAGE from "./image.png";
import BACKGROUND1 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어21.png";

export default function Page() {
  return (
    <>
      <GoalPageTemplate
        background={IMAGE.src}
        goals={[
          {
            text: " 성어의 유래를 이해하고 바르게 풀이할 수 있다.",
            sound: "/sound/3/68_goal/1.mp3",
          },
          {
            text: "성어를 맥락에 맞게 활용하여 소통할 수 있다.",
            sound: "/sound/3/68_goal/2.mp3",
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
