import { clickSound } from "@/app/utils/click-sound";

export const SoundButton = ({
  active,
  onClick,
  className = "",
}: {
  active: boolean;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button
      onClick={() => {
        clickSound.play();
        onClick();
      }}
      className={`flex-none ${className}`}
    >
      <img
        src={
          active ? "/ui/sound_button.png" : "/ui/sound_button.png"
        }
        className="animate__animated animate__pulse animate__repeat-3"
      />
    </button>
  );
};
