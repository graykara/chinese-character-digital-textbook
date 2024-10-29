"use client";

import { ContentContainer } from "@/app/components/content-container";
import { HeaderContainer } from "@/app/components/headers/header-container";
import { TitleContainer } from "@/app/components/title-container";
import { useState } from "react";
import IMAGE from "./image.png";
import LETTER1 from "./1.png";
import LETTER2 from "./2.png";
import LETTER3 from "./3.png";
import LETTER4 from "./4.png";
import LETTER5 from "./5.png";
import LETTER6 from "./6.png";
import BACKGROUND1 from "@/app/bgpng_temp/14/중등한문_사람만 귀한가요4.png";

export default function Page() {
  const [showLetter, setShowLetter] = useState<number[]>([]);

  return (
    <>
      <HeaderContainer>
        <img src="/header/preview_chinese_characters.png" alt="" />
      </HeaderContainer>

      <TitleContainer className="mt-10" sound="/sound/5/115-i.mp3">
        <p className="tracking-tighter flex items-start gap-5 break-keep">
          <img src="/ui/flower-icon.png" />
          제시된 한자 카드를 보고, 그림에서 숨은 한자를 모두 찾아보자.
        </p>
      </TitleContainer>

      <ContentContainer className="!justify-start pl-12">
        <div className="relative w-full">
          <img src={IMAGE.src} />

          <button
            onClick={() => setShowLetter(showLetter.concat(1))}
            className="absolute left-[1231px] top-[378px]"
          >
            <img
              src={LETTER1.src}
              className={showLetter.includes(1) ? "opacity-100" : "opacity-0"}
            />
          </button>
          <button
            onClick={() => setShowLetter(showLetter.concat(2))}
            className="absolute left-[825px] top-[363px]"
          >
            <img
              src={LETTER2.src}
              className={showLetter.includes(2) ? "opacity-100" : "opacity-0"}
            />
          </button>
          <button
            onClick={() => setShowLetter(showLetter.concat(3))}
            className="absolute left-[742px] top-[199px]"
          >
            <img
              src={LETTER3.src}
              className={showLetter.includes(3) ? "opacity-100" : "opacity-0"}
            />
          </button>
          <button
            onClick={() => setShowLetter(showLetter.concat(4))}
            className="absolute left-[1065px] top-[220px]"
          >
            <img
              src={LETTER4.src}
              className={showLetter.includes(4) ? "opacity-100" : "opacity-0"}
            />
          </button>
          <button
            onClick={() => setShowLetter(showLetter.concat(5))}
            className="absolute left-[967px] top-[380px]"
          >
            <img
              src={LETTER5.src}
              className={showLetter.includes(5) ? "opacity-100" : "opacity-0"}
            />
          </button>
          <button
            onClick={() => setShowLetter(showLetter.concat(6))}
            className="absolute left-[1060px] top-[385px]"
          >
            <img
              src={LETTER6.src}
              className={showLetter.includes(6) ? "opacity-100" : "opacity-0"}
            />
          </button>
        </div>
      </ContentContainer>

      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
