import { clickSound } from "@/app/utils/click-sound";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
  hideCloseButtom?: boolean;
}

export const Modal = ({
  open,
  onClose,
  children,
  hideCloseButtom = false,
}: Props) => {
  if (!open) return null;
  return (
    <div className="z-30 fixed left-[40px] top-[90px] w-[1760px] h-[990px] overflow-hidden">
      <div className="animate__animated animate__flipInX">
        {!hideCloseButtom ? (
          <button
            className="absolute z-10 top-10 right-10 animate__animated animate__delay-1s animate__rotateIn"
            onClick={() => {
              clickSound.play();
              onClose();
            }}
          >
            <img src="/ui/close-icon.png" />
          </button>
        ) : null}
        {children}
      </div>
    </div>
  );
};
