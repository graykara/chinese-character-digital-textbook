import { ReactNode } from "react";
import { Modal } from "@/app/components/modal";
import { clickSound } from "@/app/utils/click-sound";
import { Button } from "@/app/components/buttons/button";

interface Props {
  open: boolean;
  onClose: () => void;
  items: (string | ReactNode)[];
}

export const AdditionalModal = ({ open, onClose, items }: Props) => {
  return (
    <Modal open={open} onClose={onClose} hideCloseButtom showAnimation={false}>
      <div className="fixed w-[1760px] h-[990px] left-[40px] bg-white bg-opacity-50 flex justify-center items-center">
        <div className="relative bg-[#7278a6] rounded-[24px] w-[850px] px-[24px] pb-[24px] -translate-y-[10%]">
          <Button
            className="absolute top-5 right-5 animate__animated animate__delay-1s animate__rotateIn"
            onClick={() => {
              clickSound.play();
              onClose?.();
            }}
          >
            <img src="/ui/close-icon-white.png" />
          </Button>
          <p className="text-white text-[40px] mt-4 mb-2 ml-4">보충</p>
          <div className="bg-white rounded-[20px] px-[24px] py-[24px]">
            {items.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
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
