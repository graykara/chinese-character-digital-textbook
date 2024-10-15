"use client";

import { HeaderContainer } from "@/app/components/headers/header-container";
import HEADER from "./header.png";
import TEXT1 from "./text1.png";
import TEXT2 from "./text2.png";
import IMAGE from "./image.png";
import { ReadingButton } from "@/app/components/buttons/reading-button";
import { ContentContainer } from "@/app/components/content-container";
import { useContext, useState } from "react";
import { Howl } from "howler";
import { clickSound } from "@/app/utils/click-sound";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("한자의 부수");

  const [buttonActive, setButtonActive] = useState<number[]>([]);

  const sounds = [
    "/sound/1/18_004.mp3",
    "/sound/1/18_005.mp3",
    "/sound/1/18_006.mp3",
    "/sound/1/18_007.mp3",
    "/sound/1/18_008.mp3",
  ];

  return (
    <>
      <HeaderContainer className="mt-10 mb-10">
        <img src={HEADER.src} alt="header" />
      </HeaderContainer>

      <ReadingButton
        className="absolute top-10 right-[100px]"
        active
        onClick={() => {}}
      />

      <ContentContainer className="!justify-start !items-start">
        <div className="relative mb-[50px]">
          <p>
            부수(部首)는 자전에서 한자를 찾을 때 기준이 되는 글자의 한 부분으로
            대개 한자의 의미와 관련이 깊다.
          </p>
          <img
            src={TEXT1.src}
            alt="text1"
            className="absolute left-[350px] top-[75px]"
          />
        </div>

        <div className="relative">
          <p>부수는 때로 위치에 따라 모양이 변하기도 한다. </p>
          <img src={TEXT2.src} alt="text1" />
        </div>

        <div className="w-full flex justify-center mt-10">
          <div className="relative">
            <img src={IMAGE.src} />

            <div className="absolute bottom-[55px] left-[40px] grid grid-cols-5 gap-[90px]">
              {Array.from(Array(5).keys()).map((_, index) =>
                buttonActive.includes(index) ? (
                  <div className="w-[80px] h-[80px]" />
                ) : (
                  <button
                    className="bg-white w-[80px] h-[80px] flex justify-center items-center"
                    onClick={() => {
                      clickSound.play();
                      if (!buttonActive.includes(index)) {
                        new Howl({
                          src: sounds[index],
                        }).play();
                        setButtonActive(buttonActive.concat(index));
                      }
                    }}
                  >
                    <img src="/ui/click-icon.png" />
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </ContentContainer>
    </>
  );
}
