"use client";

import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import IMAGE from "./image.png";
import { useState } from "react";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <img src={IMAGE.src} />

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
}
