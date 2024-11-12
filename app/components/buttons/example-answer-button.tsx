import { clickSound } from "@/app/utils/click-sound";
import { Howler } from "howler";

export const ExampleAnswerButton = ({
  active,
  onClick,
}: {
  active: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className="absolute bottom-0 right-28"
      onClick={() => {
        Howler.stop();
        clickSound.play();
        onClick();
      }}
    >
      <img
        src="/ui/example-answer-button.png"
        className={active ? "hidden" : ""}
      />
      <img
        src="/ui/example-answer-button-again.png"
        className={active ? "" : "hidden"}
      />
    </button>
  );
};
