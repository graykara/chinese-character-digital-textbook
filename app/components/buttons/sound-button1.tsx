import { clickSound } from "@/app/utils/click-sound";

export const SoundButton1 = ({
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
          active ? "/ui/sound_button1.png" : "/ui/sound_button1.png"
        }
        className="animate__animated animate__pulse animate__repeat-3"
      />
    </button>
  );
};