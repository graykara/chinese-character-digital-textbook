import { SOUND } from "@/app/utils/sound-player";
import { PropsWithChildren, useEffect } from "react";

interface Props extends PropsWithChildren {
  className?: string;
  sound: string;
}

export const HeaderContainer = ({ className, sound, children }: Props) => {
  useEffect(() => {
    sound && SOUND(sound).play();
  }, []);

  return (
    <header className={`animate__animated animate__fadeIn ${className || ""}`}>
      {children}
    </header>
  );
};
