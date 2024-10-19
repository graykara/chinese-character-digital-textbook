"use client";

import { ContentContainer } from "@/app/components/content-container";
import HEADER from "./header.png";
import IMAGE from "./image.png";
import { VideoThumbnail } from "@/app/components/video-thumbnail";
import { HeaderContainer } from "@/app/components/headers/header-container";
import { PageInfoContext } from "@/app/utils/page-info";
import { useContext } from "react";

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("한자는 어떻게 쓸까?");

  return (
    <>
      <HeaderContainer className="mt-10">
        <img src={HEADER.src} alt="header" />
      </HeaderContainer>
      <ContentContainer>
        <VideoThumbnail
          thumbnail={IMAGE.src}
          video="/video/animation/1-2_20.mp4"
        />
      </ContentContainer>
    </>
  );
}
