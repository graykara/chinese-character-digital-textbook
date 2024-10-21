"use client";

import { UnderstandPageTemplate } from "@/app/pages/understand/understand-page-template";
import BACKGROUND1 from "@/app/bgpng_temp/13/중등한문_귀에 대고 말한 까닭17.png"

export default function Page() {
  return (
    <>
      <UnderstandPageTemplate
        background=""
        texts={[
          {
            text: "이 글은 사려 깊은 농부와 겸손한 명재상 황희의 일화이다. 소에게조차 우열을 말하지 않은 농부의 배려와 높은 지위에 있음에도 불구하고 하층 농민으로부터 큰 깨우침을 얻는 황희 정승의 열린 자세가 인상적이다. 이 일화를 통해 신중한 언행의 중요성을 생각해 보자.",
            sound: "/sound/5/111.mp3",
          },
        ]}
      />
      {/* <img src={BACKGROUND1.src} className="absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
}
