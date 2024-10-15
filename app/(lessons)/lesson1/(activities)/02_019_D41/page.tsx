"use client";

import { HeaderContainer } from "@/app/components/headers/header-container";
import HEADER from "./header.png";
import IMAGE from "./image.png";
import { ContentContainer } from "@/app/components/content-container";
import { PageInfoContext } from "@/app/utils/page-info";
import { useContext } from "react";

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("모르는 한자는 어떻게 찾을까?");

  return (
    <>
      <HeaderContainer className="mt-10 mb-10">
        <img src={HEADER.src} alt="header" />
      </HeaderContainer>

      <ContentContainer>
        <img src={IMAGE.src} />
      </ContentContainer>
    </>
  );
}
