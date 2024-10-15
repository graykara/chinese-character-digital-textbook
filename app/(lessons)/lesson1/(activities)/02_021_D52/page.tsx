"use client";

import { HeaderContainer } from "@/app/components/headers/header-container";
import HEADER from "./header.png";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import IMAGE3 from "./image3.png";
import IMAGE4 from "./image4.png";
import IMAGE5 from "./image5.png";
import IMAGE6 from "./image6.png";
import IMAGE7 from "./image7.png";
import IMAGE8 from "./image8.png";
import IMAGE9 from "./image9.png";
import TITLE from "./title.png";
import ICON from "./image.png";
import { ContentContainer } from "@/app/components/content-container";
import { useContext, useState } from "react";
import { VideoThumbnail } from "@/app/components/video-thumbnail";
import { StepContainerArrow } from "@/app/components/step-container-arrow/step-container-arrow";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("한자는 어떻게 쓸까?");
  
  const data = [
    {
      image: IMAGE1.src,
      video: "/video/writing/order1.mp4",
    },
    {
      image: IMAGE2.src,
      video: "/video/writing/order2.mp4",
    },
    {
      image: IMAGE3.src,
      video: "/video/writing/order3.mp4",
    },
    {
      image: IMAGE4.src,
      video: "/video/writing/order4.mp4",
    },
    {
      image: IMAGE5.src,
      video: "/video/writing/order5.mp4",
    },
    {
      image: IMAGE6.src,
      video: "/video/writing/order6.mp4",
    },
    {
      image: IMAGE7.src,
      video: "/video/writing/order7.mp4",
    },
    {
      image: IMAGE8.src,
      video: "/video/writing/order8.mp4",
    },
    {
      image: IMAGE9.src,
      video: "/video/writing/order9.mp4",
    },
  ];

  const [step, setStep] = useState(1);

  return (
    <>
      <HeaderContainer className="mt-10">
        <img src={HEADER.src} alt="header" />
      </HeaderContainer>

      <ContentContainer>
        <div className="relative">
          <div className="relative -left-[120px] mb-20">
            <img src={TITLE.src} alt="title" className="mb-4" />
            <img src={ICON.src} alt="icon" className="absolute" />
          </div>
          {data
            .filter((_, index) => index + 1 === step)
            .map(({ image, video }) => (
              <VideoThumbnail key={image} thumbnail={image} video={video} />
            ))}
        </div>
      </ContentContainer>

      <StepContainerArrow maxStep={9} step={step} onStepChange={setStep} />
    </>
  );
}
