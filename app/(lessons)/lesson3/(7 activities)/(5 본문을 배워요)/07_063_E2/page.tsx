"use client";

import { UnderstandPageTemplate } from "@/app/pages/understand/understand-page-template";
import { useEffect, useState } from "react";
import { Howl } from "howler";
import BACKGROUND1 from "@/app/bgpng_temp/13/중등한문_귀에 대고 말한 까닭17.png"

export default function Page() {
  const [step, setStep] = useState(1);

  const [isReading, setIsReading] = useState(false);

  const sound = new Howl({
    src: "/sound/2/47_story.mp3",
    onplay: () => setIsReading(true),
    onend: () => setIsReading(false),
  });

  useEffect(() => {
    return () => {
      sound.stop();
    };
  }, []);

  return (
    <>
      <UnderstandPageTemplate
        background=""
        texts={[
          {
            text: "옛사람들이 한자로 만든 숙어 중 오늘날에도 자주 사용하는 관용구를 ‘한자 성어’ 또는 ‘성어’라고 한다. 성어에는 그 말이 만들어진 시대 상황과 인물들의 다양한 철학이 담겨 있다. 따라서 성어를 잘 이해하면 수천 년간 쌓인 삶의 지혜를 얻을 수 있고, 일상에서 성어를 맥락에 맞게 활용하면 자기의 생각을 효과적으로 표현할 수 있다.",
            sound: "/sound/3/063/1.mp3",
          },
        ]}
        type="1"
      />
      {/* <img src={BACKGROUND1.src} className="absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
}
