import { clickSound } from "@/app/utils/click-sound";

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
    <button
      onClick={() => {
        clickSound.play();
        window.open(link);
      }}
      className={className}
    >
      <img src={src} className="flex-none w-fit h-fit" />
    </button>
  );
};

