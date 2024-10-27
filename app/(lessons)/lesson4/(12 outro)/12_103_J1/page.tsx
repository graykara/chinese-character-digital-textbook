"use client";

import IMAGE1 from "./image1.png";
import { useEffect, useState } from "react";
import { ActivityPageTemplate } from "@/app/pages/activity-page-template";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/12/중등한문_나에게 힘이 되는 글36.png";
import { Howl } from "howler";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [isReading, setIsReading] = useState(false);

  const sound = new Howl({
    src: "/sound/4/103_001.mp3",
    onplay: () => setIsReading(true),
    onstop: () => setIsReading(false),
    onend: () => setIsReading(false),
  });

  useEffect(() => {}, []);

  return (
    <>
      <ActivityPageTemplate lesson={2}>
        <div className="w-full h-full flex flex-col justify-center items-start -mt-20 -ml-5">
          <img src={IMAGE1.src} />

          <p>asdfasdf</p>
        </div>
      </ActivityPageTemplate>

      <ExampleAnswerButton
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
