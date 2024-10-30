"use client";

import { UnderstandPageTemplate } from "@/app/pages/understand/understand-page-template";
import BACKGROUND1 from "@/app/bgpng_temp/15/중등한문_돌에 꽂힌 화살17.png";

export default function Page() {
  return (
    <>
      <UnderstandPageTemplate
        background=""
        texts={[
          {
            text: (
              <span>
                호랑이를 만났다고 생각한 이광이 화살을 돌에 꽂았듯이 사람은
                긴급한 상황에 놓이게 되면 자기도 모르게 초인적인 힘을 발휘하기도
                한다. 이때의 초인적인 힘이란 다른 생각 하나 없이 맞닥뜨린
                상황에만 오롯이 집중하여 자기{" "}
                <span className="font-haeseo">能力</span>(능력)의 최대치를
                끌어내는 것이다. 이처럼 우리도 어떤 일을 할 때 늘 집중하고
                최선을 다하는 마음가짐과 태도를 가져 보자.
              </span>
            ),
            sound: "/sound/5/123.mp3",
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
