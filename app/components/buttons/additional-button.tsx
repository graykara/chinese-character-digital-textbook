import { ReactNode, useState } from "react";
import { clickSound } from "@/app/utils/click-sound";
import { Modal } from "../modal";

interface Props {
  onClick?: () => void;
  className?: string;
  additional: string | ReactNode;
  modalTitle?: string | ReactNode;
  modalBgColor?: string;
}

export const AdditionalButton = ({
  className,
  onClick,
  additional,
  modalTitle,
  modalBgColor,
}: Props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          clickSound.play();
          setShowModal(true);
          onClick?.();
        }}
        className={className}
      >
        <img src="/ui/additional-button.png" />
      </button>

      <AdditionalModal
        open={showModal}
        onClose={() => setShowModal(false)}
        title={modalTitle}
        bgColor={modalBgColor}
        additional={additional}
      />
    </>
  );
};

interface ModalProps {
  open: boolean;
  onClose: () => void;
  additional: string | ReactNode;
  title?: string | ReactNode;
  bgColor?: string;
}

const AdditionalModal = ({
  open,
  onClose,
  additional,
  title = "보충",
  bgColor = "#7278a6",
}: ModalProps) => {
  return (
    <Modal open={open} onClose={onClose} hideCloseButtom>
      <div className="fixed w-[1760px] h-[990px] left-[40px] bg-white bg-opacity-50 flex justify-center items-center">
        <div
          className="relative rounded-[24px] min-w-[850px] px-[24px] pb-[24px] -translate-y-[10%]"
          style={{
            backgroundColor: bgColor,
          }}
        >
          <button
            className="absolute top-5 right-5 animate__animated animate__delay-1s animate__rotateIn"
            onClick={() => {
              clickSound.play();
              onClose?.();
            }}
          >
            <img src="/ui/close-icon-white.png" />
          </button>
          <p className="text-white text-[40px] mt-4 mb-2 ml-4">{title}</p>
          <div className="bg-white rounded-[20px] px-[24px] pt-[30px] pb-[30px]">
            {additional}
          </div>
        </div>
      </div>
    </Modal>
  );
};
