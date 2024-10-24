import { ReactNode } from "react";
import { Modal } from "../modal";

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
      <div className="fixed w-[1760px] h-[990px] left-[40px] top-[90px] bg-white bg-opacity-50 flex justify-center items-center">
        <div
          className="relative rounded-[20px] w-[900px] px-[20px] pb-[20px]"
          style={{
            backgroundColor: bgColor,
          }}
        >
          <button className="absolute top-5 right-5" onClick={onClose}>
            <img src="/ui/close-icon-white.png" />
          </button>
          <p className="text-white text-[40px] font-bold my-5">{title}</p>
          <div className="bg-white rounded-[20px] p-5">
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
