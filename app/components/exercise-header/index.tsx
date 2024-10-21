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
    <header className="animate__animated animate__flipInX relative w-[1580px] ml-[175px] flex items-center gap-4 mt-5 mb-10">
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
