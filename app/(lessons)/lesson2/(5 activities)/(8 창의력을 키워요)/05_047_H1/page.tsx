"use client";

import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import IMAGE_BEFORE from "./image-before.png";
import IMAGE_AFTER from "./image-after.png";
import { useState } from "react";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      {showAnswer ? (
        <img src={IMAGE_AFTER.src} />
      ) : (
        <img src={IMAGE_BEFORE.src} />
      )}

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />
    </>
  );
}
