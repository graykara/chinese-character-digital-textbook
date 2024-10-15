import { clickSound } from "@/app/utils/click-sound";

export const SmartButton = ({
  link,
  className = "",
}: {
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
      <img src="/ui/smart-button.png" className="flex-none w-fit h-fit" />
    </button>
  );
};
