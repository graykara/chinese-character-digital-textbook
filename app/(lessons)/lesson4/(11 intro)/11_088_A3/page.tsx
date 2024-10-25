"use client";

import ReactPlayer from "react-player";
import BACKGROUND1 from "@/app/bgpng_temp/intro/2단원_왜 배워요_.png";

export default function Page() {
  const sound = [
    { text: "이 단원에서 우리는 한문에 대한 기초적인 지식을 익혀, 비교적 길이가 짧은 글을 바르게 읽고 풀이하는 방법을 배웁니다.", start: 0, end: 10926 },
    { text: "그리고 한문 문장의 구조를 살펴서 우리말과 같은 점과 다른 점도 알아보겠습니다.", start: 10926, end: 18188 },
    { text: "또한 그 속에 담긴 선인들의 지혜와 의미를 찾아 현재 우리의 삶에 적용해 보는 다양한 활동을 해 봅시다.", start: 18188, end: 28133 },
  ];

  return (
    <>
      <ReactPlayer
        url="/video/intro/4_what.mp4"
        width={1760}
        height={990}
        muted
        playing
      />
      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
