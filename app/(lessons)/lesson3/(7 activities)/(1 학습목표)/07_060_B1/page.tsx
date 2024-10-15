"use client";

import { GoalPageTemplate } from "@/app/pages/goal/goal-page-template";
import IMAGE from "./image.png";

export default function Page() {
  return (
    <GoalPageTemplate
      background={IMAGE.src}
      goals={[
        {
          text: "단어를 읽고 풀이할 수 있다.",
          sound: "/sound/2/34_goal/1.mp3",
        },
        {
          text: "단어의 짜임을 구변할 수 있다.",
          sound: "/sound/2/34_goal/2.mp3",
        },
      ]}
    />
  );
}
