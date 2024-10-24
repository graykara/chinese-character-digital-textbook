"use client";

import { useState } from "react";
import { Modal } from "../modal";
import ReactPlayer from "react-player";

interface Props {
  video: string;
  buttomImage?: string;
  className?: string;
}

export const MainContentVideoButton = ({ className, buttomImage = "/ui/video-button.png", video }: Props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className={`z-[3] ${className ?? ""}`}
        onClick={() => setShowModal(true)}
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
