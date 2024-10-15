import { clickSound } from "@/app/utils/click-sound";

export const SmartButton = ({ link }: { link: string }) => {
  return (
    <button
      onClick={() => {
        clickSound.play();
        window.open(link);
      }}
    >
      <img src="/ui/smart-button.png" className="flex-none w-fit h-fit" />
    </button>
  );
};
