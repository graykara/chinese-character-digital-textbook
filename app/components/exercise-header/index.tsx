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
    <header className="animate__animated animate__flipInX relative w-[1580px] ml-[180px] flex items-center gap-4 mt-10 mb-10">
      <div className="flex items-start gap-4">
        <img src={image} />
        <p className="text-[45px] tracking-tight relative top-4">
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
