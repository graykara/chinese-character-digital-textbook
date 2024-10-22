"use client";

import { GoalPageTemplate } from "@/app/pages/goal/goal-page-template";
import IMAGE from "./image.png";
import { PageInfoContext } from "@/app/utils/page-info";
import { useContext } from "react";
import BACKGROUND from "@/app/bgpng_temp/2/중등한문_한자,얼마나 알아1.png"

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
            sound: "/sound/1/16_goal/1.mp3",
          },
          {
            text: "모르는 한자의 모양·음·뜻을 활용하여 자전이나 디지털\n도구로 한자를 찾을 수 있다.",
            sound: "/sound/1/16_goal/2.mp3",
          },
          {
            text: "한자를 순서에 따라 바르게 쓸 수 있다.",
            sound: "/sound/1/16_goal/3.mp3",
          },
        ]}
      />
      <img src={BACKGROUND.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
