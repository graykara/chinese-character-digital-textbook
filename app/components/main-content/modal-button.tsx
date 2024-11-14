"use client";

import { ReactNode, useEffect, useState } from "react";
import { Modal } from "../modal";
import { clickSound } from "@/app/utils/click-sound";
import { Button } from "../buttons/button";

type Data = {
  className?: string;
  bgColor?: string;
  image?: string;
  meaningsTitle: string | ReactNode;
  content: ReactNode;
};

interface Props {
  modal_data: Data;
}

export const MainContentModalButton = ({
  modal_data,
}: Props) => {
  const { className, bgColor, image, meaningsTitle, content } = modal_data;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="relative mr-4 z-10">
        <Button
          onClick={() => {
            clickSound.play();
            setShowModal(true);
          }}
        >
          <img src={image} />
        </Button>
      </div>

      <Modal open={showModal} onClose={() => setShowModal(false)} hideCloseButtom>
        {/* <div className="fixed w-[1760px] h-[990px] left-[40px] bg-white bg-opacity-50 flex justify-center items-center"> */}
        <div className="fixed w-[1760px] h-[990px] bg-white bg-opacity-50 flex justify-center items-center">
          <div
            className={`relative rounded-[24px] min-w-[400px] px-[24px] pb-[24px] ${className}`}
            style={{
              backgroundColor: bgColor,
            }}
          >
            <Button
              className="absolute top-5 right-5 animate__animated animate__delay-1s animate__rotateIn"
              onClick={() => {
                clickSound.play();
                setShowModal(false);
              }}
            >
              <img src="/ui/close-icon-white.png" />
            </Button>
            <div className="flex items-center gap-4 ml-2 mt-4 mb-2 text-white text-[45px]">
              {meaningsTitle}
            </div>
            <div className="bg-white rounded-[20px] px-[30px] pt-[20px] pb-[20px]">
              {content}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
