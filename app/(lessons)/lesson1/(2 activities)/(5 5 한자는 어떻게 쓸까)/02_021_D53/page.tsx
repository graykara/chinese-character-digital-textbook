"use client";

import { ContentContainer } from "@/app/components/content-container";
import { HeaderContainer } from "@/app/components/headers/header-container";
import HEADER from "./header.png";
import { PageInfoContext } from "@/app/utils/page-info";
import { TitleContainer2 } from "@/app/components/title-container";
import { useContext, useState } from "react";
import IMAGE from "./image.png";
import BACKGROUND1 from "@/app/bgpng_temp/2/중등한문_한자,얼마나 알아28-1.png"

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("한자는 어떻게 쓸까?");

  return (
    <>
      <HeaderContainer className="mt-10">
        <img src={HEADER.src} alt="header" />
      </HeaderContainer>

      <TitleContainer2 className="mt-14 left-10 flex items-start gap-3">
        <img src="/ui/flower-icon.png" />
        <p className="text-[55px] tracking-tighter">
          새로 익힐 한자를 순서에 맞게 써 보자.
        </p>
      </TitleContainer2>

      <ContentContainer className="!justify-start top-20">
        <img src={IMAGE.src} alt="" />
      </ContentContainer>

      <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
