import { SOUND } from "@/app/utils/sound-player";
import { PropsWithChildren, useEffect } from "react";

interface Props extends PropsWithChildren {
  className?: string;
  sound?: string;
}

export const HeaderContainer = ({ className, sound, children }: Props) => {

  // before
  // useEffect(() => {
  //   sound && SOUND(sound).play();
  // }, []);

  // after
  useEffect(() => {
    if (sound) {
      const soundInstance = SOUND(sound);
      soundInstance.stop();
      soundInstance.play();

      return () => {
        soundInstance.stop();
      };
    }
  }, [sound]);


  return (
    <header className={`animate__animated animate__fadeIn ${className || ""}`}>
      {children}
    </header>
  );
};
