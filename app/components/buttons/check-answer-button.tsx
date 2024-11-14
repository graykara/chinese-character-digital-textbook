import { clickSound } from "@/app/utils/click-sound";
import { Button } from "./button";

export const CheckAnswerButton = ({
  active,
  onClick,
}: {
  active: boolean;
  onClick: () => void;
}) => {
  return (
    <Button
      className="absolute bottom-0 right-28"
      onClick={() => {
        clickSound.play();
        onClick();
      }}
    >
      <img
        src="/ui/check-answer-button.png"
        className={active ? "hidden" : ""}
      />
      <img
        src="/ui/check-answer-button-again.png"
        className={active ? "" : "hidden"}
      />
    </Button>
  );
};
