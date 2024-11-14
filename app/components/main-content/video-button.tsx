"use client";

import { useState } from "react";
import { Modal } from "../modal";
import ReactPlayer from "react-player";
import { clickSound } from "@/app/utils/click-sound";
import { VideoPlayer } from "@/app/components/video-player";
import { Button } from "../buttons/button";

interface Props {
  video: string;
  buttomImage?: string;
  className?: string;
}

export const MainContentVideoButton = ({ className, buttomImage = "/ui/video-button.png", video }: Props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button
        className={`z-[3] ${className ?? ""}`}
        onClick={() => {
          clickSound.play();
          setShowModal(true);
        }}
      >
        <img src={buttomImage} />
      </Button>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <div className="w-full h-full bg-white">
          {video ? (
            // <ReactPlayer
            //   url={video}
            //   playing
            //   controls
            //   width={1760}
            //   height={990}
            // />
            <VideoPlayer src={video} />
          ) : null}
        </div>
      </Modal>
    </>
  );
};
