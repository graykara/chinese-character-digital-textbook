"use client";

import { useState } from "react";
import { Modal } from "../modal";
import ReactPlayer from "react-player";
import { clickSound } from "@/app/utils/click-sound";

interface Props {
  video: string;
  buttomImage?: string;
  className?: string;
}

export const MainContentVideoButton2 = ({ className, buttomImage = "/ui/video-button3.png", video }: Props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className={`z-[3] ${className ?? ""}`}
        onClick={() => {
          clickSound.play();
          setShowModal(true);
        }}
      >
        <img src={buttomImage} />
      </button>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <div className="w-full h-full bg-white">
          {video ? (
            <ReactPlayer
              url={video}
              playing
              controls
              width={1760}
              height={990}
            />
          ) : null}
        </div>
      </Modal>
    </>
  );
};
