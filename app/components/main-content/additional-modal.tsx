import { ReactNode } from "react";
import { Modal } from "../modal";
import { clickSound } from "@/app/utils/click-sound";

interface Props {
  open: boolean;
  onClose: () => void;
  items: (string | ReactNode)[];
  title?: string | ReactNode;
  bgColor?: string;
}

export const AdditionalModal = ({
  open,
  onClose,
  items,
  title = "보충",
  bgColor = "#7278a6",
}: Props) => {
  return (
    <Modal open={open} onClose={onClose} hideCloseButtom showAnimation={false}>
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
            {items.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                {/* <div className="flex-none h-[67px] flex items-center"> */}
                <div className="flex-none h-[67px] flex items-center">
                  <img src="/ui/additional-list-icon.png" />
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};
