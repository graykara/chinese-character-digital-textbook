"use client";

import { HeaderContainer } from "@/app/components/headers/header-container";
import HEADER from "./header.png";
import TITLE from "./title_1.png";
import IMAGE from "./image.png";
import { ContentContainer } from "@/app/components/content-container";
import { PageInfoContext } from "@/app/utils/page-info";
import { useContext, useEffect, useState } from "react";
import { SoundButton2 } from "@/app/components/buttons/sound-button2";
import BACKGROUND from "@/app/bgpng_temp/2/중등한문_한자,얼마나 알아14.png";

const sound = new Howl({
  src: "/sound/1/19-1.mp3",
});

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("모르는 한자는 어떻게 찾을까?");

  const [isReading, setIsReading] = useState(false);
  const [soundId, setSoundId] = useState<number | null>(null);

  useEffect(() => {
    sound.on("play", () => setIsReading(true));
    sound.on("end", () => setIsReading(false));
    sound.on("stop", () => setIsReading(false));
  }, []);

  return (
    <>
      <HeaderContainer className="mt-10 mb-10">
        <img src={HEADER.src} alt="header" />
      </HeaderContainer>

      <ContentContainer className="!justify-start pt-[45px] ml-[175px]">
        <div className="relative w-full mb-10">
          <img src={TITLE.src} alt="title" />
          <SoundButton2
            active={isReading}
            onClick={() => {
              if(isReading) sound.stop();
              else setSoundId(sound.play());
            }}
            className="absolute top-1/2 -translate-y-1/2 left-[285px]"
          />
        </div>

        <p className="w-[1500px] left-0 -mt-5 text-[50px] tracking-tighter leading-[68px] break-keep">
          부수를 알면 자전의 ‘부수색인’을 이용하여 한자를 찾을 수 있다.
          <br />
          또한 음을 알면 ‘자음 색인’을, 총획을 알면 ‘총획색인’을 이용할 수도
          있다.
        </p>

        <div className="relative mt-20 -ml-24">
          <img src={IMAGE.src} className="" />
        </div>
      </ContentContainer>
      <img
        src={BACKGROUND.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
