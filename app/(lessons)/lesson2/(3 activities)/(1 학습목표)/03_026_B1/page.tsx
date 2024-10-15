"use client";

import { GoalPageTemplate } from "@/app/pages/goal/goal-page-template";
import IMAGE from "./image.png";
import { PageInfoContext } from "@/app/utils/page-info";
import { useContext } from "react";
import BACKGROUND from "@/app/bgpng_temp/3/중등한문_그려서 만든 한자1.png"

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("학습목표");

  return (
    <>
      <GoalPageTemplate
        background={IMAGE.src}
        goals={[
          {
            text: "한자의 모양·음·뜻을 구별할 수 있다. ",
            sound: "/sound/2/26_goal/1.mp3",
          },
          {
            text: "한자가 만들어진 원리 중 상형과 지사를 이해할 수 있다.",
            sound: "/sound/2/26_goal/2.mp3",
          },
        ]}
      />
      <img src={BACKGROUND.src} className="absolute left-0 top-0 opacity-30" />
    </>
  );
}
