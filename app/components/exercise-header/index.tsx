import { SmartButton } from "../buttons/smart-button";
import { WritingButton } from "../buttons/writing-button";

export const ExerciseHeader = ({
  text,
  showSmartButton = false,
  showWritingButton = false,
  image = "/ui/exercise.png",
  smartLink = "",
}: {
  text: string | React.ReactNode;
  showSmartButton?: boolean;
  showWritingButton?: boolean;
  image?: string;
  smartLink?: string;
}) => {
  return (
    <header className="animate__animated animate__flipInX relative w-[1400px] ml-[175px] flex items-center gap-4 mt-5 mb-10">
      <div className="flex items-start gap-4">
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
  showSmartButton = false,
  showWritingButton = false,
  image = "/ui/exercise.png",
  smartLink = "",
}: {
  text: string | React.ReactNode;
  showSmartButton?: boolean;
  showWritingButton?: boolean;
  image?: string;
  smartLink?: string;
}) => {
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
