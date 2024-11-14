import { PageInfoContext } from "@/app/utils/page-info";
import { SOUND } from "@/app/utils/sound-player";
import { PropsWithChildren, useContext, useEffect } from "react";

interface Props extends PropsWithChildren {
  className?: string;
  sound?: string;
  gap?: number;
}

export const HeaderContainer = ({ className, sound, children, gap = 0 }: Props) => {

  const { isPageReady } = useContext(PageInfoContext)

  useEffect(() => {
    if (sound) {
      setTimeout(() => {
        if (isPageReady)
          SOUND(sound).play();
      }, 100 + gap)
    }
  }, [sound]);


  return (
    <header className={`animate__animated animate__fadeIn ${className || ""}`}>
      {children}
    </header>
  );
};
