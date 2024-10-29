"use client";

import { ContentContainer } from "@/app/components/content-container";
import HEADER from "./header.png";
import IMAGE from "./image.png";
import { QRButton } from "@/app/components/buttons/qr-button";
import QR from "./qr.png";
import { HeaderContainer } from "@/app/components/headers/header-container";
import { PageInfoContext } from "@/app/utils/page-info";
import { useContext } from "react";
import BACKGROUND from "@/app/bgpng_temp/2/중등한문_한자,얼마나 알아19-1.png"

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("한자는 어떻게 쓸까?");

  return (
    <>
      <HeaderContainer className="mt-10">
        <img src={HEADER.src} alt="header" />
      </HeaderContainer>

      <QRButton
        src={QR.src}
        className="absolute right-[227px] top-[157px] z-1" />

      <ContentContainer className="-top-7 -left-8">
        <img src={IMAGE.src} alt="" />
      </ContentContainer>
      <img src={BACKGROUND.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
