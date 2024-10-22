"use client";

import { UnderstandPageTemplate } from "@/app/pages/understand/understand-page-template";
import BACKGROUND1 from "@/app/bgpng_temp/16/중등한문_제주 거상 김만덕20.png";

export default function Page() {
  return (
    <>
      <UnderstandPageTemplate
        background=""
        texts={[
          {
            text: `
            조선 시대의 거상 김만덕은 백성들이 굶어 죽는 모습을 보고 전 재산을
            내어 쌀을 마련해서 굶주린 백성들에게 나누어 주었다. 만덕의 이야기를
            통해 나눔과 더불어 사는 삶의 의미를 되새겨 보자.
            `,
            sound: "/sound/5/111.mp3",
          },
        ]}
      />
      {/* <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
}
