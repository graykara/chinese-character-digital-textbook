"use client";

import { GoalPageTemplate } from "@/app/pages/goal/goal-page-template";
import IMAGE from "./image.png";

export default function Page() {
  return (
    <GoalPageTemplate
      background={IMAGE.src}
      goals={[
        {
          text: "한자의 모양·음·뜻을 구별할 수 있다.",
          sound: "/sound/2/34_goal/1.mp3",
        },
        {
          text: "한자가 만들어진 원리 중 회의와 형성을 이해할 수 있다.",
          sound: "/sound/2/34_goal/2.mp3",
        },
      ]}
    />
  );
}
