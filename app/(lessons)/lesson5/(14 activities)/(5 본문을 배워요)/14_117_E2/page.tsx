"use client";

import { UnderstandPageTemplate } from "@/app/pages/understand/understand-page-template";
import BACKGROUND1 from "@/app/bgpng_temp/14/중등한문_사람만 귀한가요15.png";

export default function Page() {
  return (
    <>
      <UnderstandPageTemplate
        background=""
        texts={[
          {
            text: "이 글은 홍대용이 저술한 『담헌서』 의 「의산문답」에 실린 내용 중 일부로, 넓은 시야에서 바라보면 인간과 생물이 동등하다는 내용을 담고 있다. 생태계의 구성원으로 인간과 생물이 공생할 방법은 무엇인지 생각해 보자.",
            sound: "/sound/5/117.mp3",
          },
        ]}
      />
      <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
