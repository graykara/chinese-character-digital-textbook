import { clickSound } from "@/app/utils/click-sound";
import { Button } from "./button";

export const QRButton = ({
  src,
  link,
  className = "",
}: {
  src: string;
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
      <img src={src} className="flex-none w-fit h-fit" />
    </Button>
  );
};

