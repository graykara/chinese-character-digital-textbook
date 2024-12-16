import { clickSound } from "@/app/utils/click-sound";
import { PropsWithChildren } from "react";
import { Button } from "../buttons/button";

interface Props extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
  hideCloseButtom?: boolean;
  showAnimation?: boolean;
}

export const Modal = ({
  open,
  onClose,
  children,
  hideCloseButtom = false,
  showAnimation = true,
}: Props) => {
  if (!open) return null;
  return (
    <div className="z-30 fixed left-0 top-0 w-[1760px] h-[990px] overflow-hidden">
      <div
        className={`w-full h-full ${showAnimation ? "animate__animated animate__flipInX" : ""}`}
      >
        {!hideCloseButtom ? (
          <Button
            className="absolute z-10 top-10 right-10 animate__animated animate__delay-1s animate__rotateIn"
            onClick={() => {
              clickSound.play();
              onClose();
            }}
          >
            <img src="/ui/close-icon.png" />
          </Button>
        ) : null}
        {children}
      </div>
    </div>
  );
};
