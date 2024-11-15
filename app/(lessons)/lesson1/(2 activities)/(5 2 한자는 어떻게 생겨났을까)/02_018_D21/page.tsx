"use client";

import { ContentContainer } from "@/app/components/content-container";
import HEADER from "./header.png";
import IMAGE from "./image.png";
import { VideoThumbnail_big } from "@/app/components/video-thumbnail";
import { HeaderContainer } from "@/app/components/headers/header-container";
import BACKGROUND from "@/app/bgpng_temp/2/중등한문_한자,얼마나 알아12.png"

export default function Page() {
  return (
    <>
      <HeaderContainer className="mt-10">
        <img src={HEADER.src} alt="header" />
      </HeaderContainer>
      <ContentContainer>
        <VideoThumbnail_big
          thumbnail={IMAGE.src}
          video="/video/animation/1-2_18.mp4"
        />
      </ContentContainer>
      <img src={BACKGROUND.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
