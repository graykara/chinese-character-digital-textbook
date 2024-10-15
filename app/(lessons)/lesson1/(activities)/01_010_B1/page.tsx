"use client"

import { GoalPageTemplate } from "@/app/pages/goal/goal-page-template";
import BACKGROUND from "./assets/background.png";
import { PageInfoContext } from "@/app/utils/page-info";
import { useContext } from "react";

export default function Page10() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("학습목표");

  return (
    <GoalPageTemplate
      background={BACKGROUND.src}
      goals={[
        {
          text: "한자를 통해 한자어의 뜻을 이해할 수 있다.",
          sound: "/sound/1/10_goal/1.mp3",
        },
        {
          text: "한문 기록에 담긴 전통문화의 의미와 가치를 알고 소중하게\n여기는 태도를 기를 수 있다.",
          sound: "/sound/1/10_goal/2.mp3",
        },
        {
          text: "한자 문화권의 문화에 대한 지식을 알고 상호 이해와 교류\n증진에 참여하려는 태도를 지닐 수 있다.",
          sound: "/sound/1/10_goal/3.mp3",
        },
      ]}
    />
  );
}
