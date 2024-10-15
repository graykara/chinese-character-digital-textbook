"use client";

import VIDEO_PLAY from "./assets/video-play.png";
import { useState } from "react";
import { Modal } from "../modal";
import ReactPlayer from "react-player";
import { clickSound } from "@/app/utils/click-sound";

export const VideoThumbnail = ({
  thumbnail,
  video,
  width = 900,
  height = 500,
}: {
  thumbnail: string;
  video: string;
  width?: number;
  height?: number;
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        style={{ width, height }}
        className="relative bg-white rounded-3xl border-[5px] border-[#7178a3] flex justify-center items-center p-10"
      >
        <img src={thumbnail} className="w-full h-full object-contain" />

        <button
          className="w-[95px] h-[95px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 hover:opacity-100 transition-opacity"
          onClick={() => {
            clickSound.play();
            setShowModal(true);
          }}
        >
          <img src={VIDEO_PLAY.src} />
        </button>
      </div>

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
