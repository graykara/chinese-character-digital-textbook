"use client";

import { HeaderContainer } from "@/app/components/headers/header-container";
import HEADER from "./header.png";
import IMAGE from "./image.png";
import { ContentContainer } from "@/app/components/content-container";
//import { AdditionalDataButton } from "@/app/components/buttons/additional-data-button";
import { PageInfoContext } from "@/app/utils/page-info";
import { useContext } from "react";
import BACKGROUND from "@/app/bgpng_temp/2/중등한문_한자,얼마나 알아15.png"
import { QRButton } from "@/app/components/buttons/qr-button";
import QR from "./qr.png";

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  

  return (
    <>
      <HeaderContainer className="mt-10 mb-10">
        <img src={HEADER.src} alt="header" />
      </HeaderContainer>

      <QRButton 
        src={QR.src}
        link="http://ybmqr.com/acj003"
        className="absolute right-[230px] top-[156px] z-10" />

      <ContentContainer className="!justify-start !items-start pt-10">
        <div className="absolute w-full top-[205px] left-[150px]">
          <img src={IMAGE.src} />
        </div>
      </ContentContainer>
      <img src={BACKGROUND.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
