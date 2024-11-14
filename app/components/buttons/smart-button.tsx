import { clickSound } from "@/app/utils/click-sound";
import { Button } from "./button";

export const SmartButton = ({
  link,
  className = "",
}: {
  link: string;
  className?: string;
}) => {
  return (
    <Button
      onClick={() => {
        clickSound.play();
        window.open(link);
      }}
      className={className}
    >
      <img src="/ui/smart-button.png" className="flex-none w-fit h-fit" />
    </Button>
  );
};
