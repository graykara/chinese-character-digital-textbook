"use client";

import { StepContainer } from "@/app/components/step-container";
import { Header } from "../assets/header";
import { useState } from "react";
import { ContentContainer } from "@/app/components/content-container";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import { VideoThumbnail, VideoThumbnail_big  } from "@/app/components/video-thumbnail";
import HEADER from "../assets/header.png";
import BACKGROUND from "@/app/bgpng_temp/1/중등한문_한자,어디서봤어20.png"

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>
      <Header />

      <ContentContainer>
        {step === 1 ? <VideoThumbnail_big thumbnail={IMAGE1.src} video="/video/animation/1-1_14-1.mp4" /> : null}
        {step === 2 ? <VideoThumbnail_big thumbnail={IMAGE2.src} video="/video/animation/1-1_14-2.mp4" /> : null}
      </ContentContainer>

      <StepContainer step={step} maxStep={2} onStepChange={setStep} />
    </>
  );
}
