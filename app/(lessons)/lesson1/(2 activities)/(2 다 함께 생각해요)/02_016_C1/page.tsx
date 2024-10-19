"use client";

import { ThinkTogetherHeader } from "@/app/components/headers/think-together";
import { VideoThumbnail } from "@/app/components/video-thumbnail";
import { useContext, useState } from "react";

import VIDEO_THUMBNAIL from "./video-thumbnail.png";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { Modal } from "@/app/components/modal";
import { PageInfoContext } from "@/app/utils/page-info";

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("다 함께 생각해요");

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ThinkTogetherHeader title="밑줄 친 부분의 뜻이 무엇일지 생각해 보자." />

      <div className="h-full flex justify-center items-center">
        <VideoThumbnail
          thumbnail={VIDEO_THUMBNAIL.src}
          video="/video/animation/1-2_16.mp4"
          width={972}
          height={526}
        />
      </div>

      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <div className="bg-white w-[1760px] h-[990px] bg-opacity-50 flex justify-center items-center">
          <div className="bg-white">
            <li>
              탕수육 대짜 : 탕수육 큰 것. →<br />
              <span className="font-haeseo">大</span>의 ‘크다’라는 뜻을 반영한
              말
            </li>
            <li>
              팔보채(<span className="font-haeseo">八寶菜</span>) : 여덟 가지
              보배로운 채소. →<br />
              <span className="font-haeseo">八</span>의 ‘여덟’이라는 뜻을 반영한
              말
            </li>
            <li>
              대자로 누웠다 :<span className="font-haeseo">大</span>의 모양처럼
              팔다리를 크게 벌리고 누움. →<br />
              <span className="font-haeseo">大</span>의 모양을 반영한 말
            </li>
            <li>
              팔자걸음 : <span className="font-haeseo">八</span>
              의 모양처럼 발끝을 바깥쪽으로 향하여 걷는 걸음. →<br />
              <span className="font-haeseo">八</span>의 모양을 반영한 말
            </li>
          </div>
        </div>
      </Modal>

      <CheckAnswerButton active={false} onClick={() => setShowModal(true)} />
    </>
  );
}
