"use client";

import { HeaderContainer } from "@/app/components/headers/header-container";
import HEADER from "./header.png";
import IMAGE from "./image.png";
import TITLE from "./title.png";
import { ContentContainer } from "@/app/components/content-container";
import { AdditionalDataButton } from "@/app/components/buttons/additional-data-button";
import { ReadingButton } from "@/app/components/buttons/reading-button";
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

      <AdditionalDataButton
        className="absolute top-12 right-[100px]"
        onClick={() => {}}
      />

      <ContentContainer className="!justify-start !items-start pt-10">
        <div className="w-full relative">
          <img src={TITLE.src} />
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <ReadingButton active={false} onClick={() => {}} />
          </div>
        </div>
        <p className="my-5">
          부수를 알면 자전의 ‘부수색인’을 이용하여 한자를 찾을 수 있다.
          <br />
          또한 음을 알면 ‘자음 색인’을, 총획을 알면 ‘총획색인’을 이용할 수도
          있다.
        </p>
        <div className="w-full flex justify-center mt-10">
          <img src={IMAGE.src} />
        </div>
      </ContentContainer>
    </>
  );
}
