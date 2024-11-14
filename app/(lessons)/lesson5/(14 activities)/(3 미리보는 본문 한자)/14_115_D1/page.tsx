"use client";

import { ContentContainer } from "@/app/components/content-container";
import { HeaderContainer } from "@/app/components/headers/header-container";
import { TitleContainer } from "@/app/components/title-container";
import { useEffect, useState } from "react";
import { SOUND } from "@/app/utils/sound-player";
import IMAGE from "./image.png";
import LETTER1 from "./1.png";
import LETTER2 from "./2.png";
import LETTER3 from "./3.png";
import LETTER4 from "./4.png";
import LETTER5 from "./5.png";
import LETTER6 from "./6.png";
import BACKGROUND1 from "@/app/bgpng_temp/14/중등한문_사람만 귀한가요4.png";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { Button } from "@/app/components/buttons/button";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [showLetter, setShowLetter] = useState<number[]>([]);

  useEffect(() => {
    if (showAnswer)
      setShowLetter([1, 2, 3, 4, 5, 6])
    else setShowLetter([])
  }, [showAnswer])

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
          <div className="absolute left-[30px] top-[180px] grid grid-cols-3 gap-[55px] w-[580px] h-[90px] px-[20px] bg-transparent ">
            <Button onClick={() => SOUND("/sound/5/p115_word000.mp3").play()}>
            </Button>
            <Button onClick={() => SOUND("/sound/5/p115_word001.mp3").play()}></Button>
            <Button onClick={() => SOUND("/sound/5/p115_word002.mp3").play()}></Button>
          </div>
          <div className="absolute left-[30px] top-[475px] grid grid-cols-3 gap-[55px] w-[580px] h-[90px] px-[20px] bg-transparent ">
            <Button onClick={() => SOUND("/sound/5/p115_word003.mp3").play()}>
            </Button>
            <Button onClick={() => SOUND("/sound/5/p115_word004.mp3").play()}></Button>
            <Button onClick={() => SOUND("/sound/5/p115_word005.mp3").play()}></Button>
          </div>

          <Button
            onClick={() => setShowLetter(showLetter.concat(1))}
            className="absolute left-[1231px] top-[378px]"
          >
            <img
              src={LETTER1.src}
              className={showLetter.includes(1) ? "opacity-100" : "opacity-0"}
            />
          </Button>
          <Button
            onClick={() => setShowLetter(showLetter.concat(2))}
            className="absolute left-[825px] top-[363px]"
          >
            <img
              src={LETTER2.src}
              className={showLetter.includes(2) ? "opacity-100" : "opacity-0"}
            />
          </Button>
          <Button
            onClick={() => setShowLetter(showLetter.concat(3))}
            className="absolute left-[742px] top-[199px]"
          >
            <img
              src={LETTER3.src}
              className={showLetter.includes(3) ? "opacity-100" : "opacity-0"}
            />
          </Button>
          <Button
            onClick={() => setShowLetter(showLetter.concat(4))}
            className="absolute left-[1065px] top-[220px]"
          >
            <img
              src={LETTER4.src}
              className={showLetter.includes(4) ? "opacity-100" : "opacity-0"}
            />
          </Button>
          <Button
            onClick={() => setShowLetter(showLetter.concat(5))}
            className="absolute left-[967px] top-[380px]"
          >
            <img
              src={LETTER5.src}
              className={showLetter.includes(5) ? "opacity-100" : "opacity-0"}
            />
          </Button>
          <Button
            onClick={() => setShowLetter(showLetter.concat(6))}
            className="absolute left-[1060px] top-[385px]"
          >
            <img
              src={LETTER6.src}
              className={showLetter.includes(6) ? "opacity-100" : "opacity-0"}
            />
          </Button>
        </div>
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
