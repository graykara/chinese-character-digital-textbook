import { SmartButton } from "../buttons/smart-button";
import { WritingButton } from "../buttons/writing-button";
import { ReactNode, useEffect } from "react";
import { SOUND } from "@/app/utils/sound-player";

export const ExerciseHeader = ({
  text,
  sound,
  showSmartButton = false,
  showWritingButton = false,
  image = "/ui/exercise.png",
  smartLink = "",
}: {
  text: string | React.ReactNode;
  sound: string;
  showSmartButton?: boolean;
  showWritingButton?: boolean;
  image?: string;
  smartLink?: string;
}) => {
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
    <header className="animate__animated animate__flipInX relative w-[1500px] ml-[175px] flex items-center gap-4 mt-5 mb-10">
      <div className="flex items-start gap-3">
        <img src={image} />
        <p className="text-[47px] tracking-tighter relative top-7">
          {text}
        </p>
      </div>

      <div className="relative top-2 flex items-center gap-5">
        {showWritingButton ? <WritingButton /> : null}
        {showSmartButton && smartLink ? <SmartButton link={smartLink} /> : null}
      </div>
    </header>
  );
};

export const ExerciseHeader2 = ({
  text,
  sound,
  showSmartButton = false,
  showWritingButton = false,
  image = "/ui/exercise.png",
  smartLink = "",
}: {
  text: string | React.ReactNode;
  sound: string;
  showSmartButton?: boolean;
  showWritingButton?: boolean;
  image?: string;
  smartLink?: string;
}) => {
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
    <header className="animate__animated animate__flipInX relative w-[1380px] ml-[185px] flex items-center gap-4 mt-5 mb-10">
      <div className="flex items-start gap-4">
        <img src={image} />
        <p className="text-[45px] leading-tight tracking-tighter relative top-7 ml-2">
          {text}
        </p>
      </div>

      <div className="relative top-2 flex items-center gap-5">
        {showWritingButton ? <WritingButton /> : null}
        {showSmartButton && smartLink ? <SmartButton link={smartLink} /> : null}
      </div>
    </header>
  );
};
