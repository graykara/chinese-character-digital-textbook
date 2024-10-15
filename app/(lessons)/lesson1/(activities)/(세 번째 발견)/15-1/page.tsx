"use client";

import { StepContainer } from "@/app/components/step-container";
import { Header } from "../components/header";
import { useState } from "react";
import { ContentContainer } from "@/app/components/content-container";
import IMAGE1 from "./assets/image1.png";
import IMAGE2 from "./assets/image2.png";
import { VideoThumbnail } from "@/app/components/video-thumbnail";

export default function Page15_1() {
  const [step, setStep] = useState(1);

  return (
    <>
      <Header />

      <ContentContainer>
        {step === 1 ? <VideoThumbnail thumbnail={IMAGE1.src} video="/video/animation/1-1_14-1.mp4" /> : null}
        {step === 2 ? <VideoThumbnail thumbnail={IMAGE2.src} video="/video/animation/1-1_14-2.mp4" /> : null}
      </ContentContainer>

      <StepContainer step={step} maxStep={2} onStepChange={setStep} />
    </>
  );
}
