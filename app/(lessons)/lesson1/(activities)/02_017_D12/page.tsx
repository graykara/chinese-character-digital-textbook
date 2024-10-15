"use client";

import { HeaderContainer } from "@/app/components/headers/header-container";
import HEADER from "./header.png";
import TITLE from "./title.png";
import IMAGE from "./image.png";
import { ContentContainer } from "@/app/components/content-container";
import { useContext, useState } from "react";
import { ReadingButton } from "@/app/components/buttons/reading-button";
import { clickSound } from "@/app/utils/click-sound";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("한자와 한문");
  
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  return (
    <>
      <HeaderContainer className="mt-10">
        <img src={HEADER.src} alt="header" />
      </HeaderContainer>

      <ContentContainer className="!justify-start pt-20">
        <div className="relative w-full mb-10">
          <img src={TITLE.src} alt="title" />
          <ReadingButton
            active
            onClick={() => {}}
            className="absolute top-1/2 -translate-y-1/2 right-0"
          />
        </div>

        <p className="w-full mb-20">
          한자는 하나하나의 낱글자이다. 낱글자인 한자가 모여 이루어진 문장을
          <br />
          漢文(한문)이라고 한다.
        </p>

        <div className="relative">
          <img src={IMAGE.src} />

          {show1 ? null : (
            <button
              onClick={() => {
                clickSound.play();
                setShow1(true);
              }}
              className="absolute left-[-20px] top-[40px] flex justify-center items-center bg-white w-[150px] h-[150px]"
            >
              <img src="/ui/click-icon.png" />
            </button>
          )}
          {show2 ? null : (
            <button
              onClick={() => {
                clickSound.play();
                setShow2(true);
              }}
              className="absolute left-[240px] top-[40px] flex justify-center items-center bg-white w-[150px] h-[150px]"
            >
              <img src="/ui/click-icon.png" />
            </button>
          )}
          {show3 ? null : (
            <button
              onClick={() => {
                clickSound.play();
                setShow3(true);
              }}
              className="absolute left-[550px] top-[40px] flex justify-center items-center bg-white w-[220px] h-[150px]"
            >
              <img src="/ui/click-icon.png" />
            </button>
          )}
        </div>
      </ContentContainer>
    </>
  );
}
