import { clickSound } from "@/app/utils/click-sound";
import { Button } from "./button";

export const ReadingButton = ({
  active,
  onClick,
  className = "",
}: {
  active: boolean;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <Button
      onClick={() => {
        clickSound.play();
        onClick();
      }}
      className={`flex-none ${className}`}
    >
      <img
        src={
          active ? "/ui/reading-button-pressed.png" : "/ui/reading-button.png"
        }
        className="animate__animated animate__pulse animate__repeat-3"
      />
    </Button>
  );
};
