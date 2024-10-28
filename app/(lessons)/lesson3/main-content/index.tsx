"use client";

import { ReactNode, useState } from "react";
import { PillButton } from "@/app/components/buttons/pill-button";
import { SOUND } from "@/app/utils/sound-player";
import { AdditionalModal } from "./additional-modal";
import { clickSound } from "@/app/utils/click-sound";

type Data = {
  chinese: {
    letter: string;
    reading?: string;
    additional?: string | ReactNode;
    isKor?: boolean;
    className?: string;
  }[];
  sound: string;
  content1: ReactNode;
  content2: ReactNode;
};

interface Props {
  data: Data;
  showReading: boolean | null;
  showMeaning: boolean | null;
  showMeaning2: boolean;
  setShowReading: (value: boolean) => void;
  setShowMeaning: (value: boolean) => void;
  setShowMeaning2: (value: boolean) => void;
}

export const MainContent = ({
  data,
  showReading,
  showMeaning,
  showMeaning2,
  setShowReading,
  setShowMeaning,
  setShowMeaning2,
}: Props) => {
  const { chinese, content1, content2, sound } = data;

  const [showAdditionalModal, setShowAdditionalModal] = useState(false);
  const [selectedAdditional, setSelectedAdditional] = useState<
    string | ReactNode | null
  >(null);

  const firstAdditonalIndex = chinese.findIndex((c) => c.additional);

  if (!data) return null;

  return (
    <>
      <div className="absolute top-[150px] pl-[120px]">
        <div className="relative items-start left-[210px] w-[1100px]">
          <div className="flex mr-[250px]">
            {chinese.map(
              ({ letter, reading, additional, isKor, className }, index) => {
                return (
                  <div key={index} className="justify-items-center mx-auto">
                    <div className="relative">
                      {additional &&
                        (index === firstAdditonalIndex ? (
                          <button
                            onClick={() => {
                              clickSound.play();
                              setSelectedAdditional(additional);
                              setShowAdditionalModal(true);
                            }}
                            className="w-[128px] absolute -top-[110px] left-1/2 -translate-x-1/2 flex justify-center"
                          >
                            <img src="/ui/additional-bubble-button.png" />
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              clickSound.play();
                              setSelectedAdditional(additional);
                              setShowAdditionalModal(true);
                            }}
                            className="w-[128px] absolute -top-[40px] left-1/2 -translate-x-1/2 flex justify-center"
                          >
                            <img src="/ui/additional-button.png" />
                          </button>
                        ))}
                      <span
                        className={`${isKor ? "text-[50px]" : "font-haeseo text-[180px]"} mx-2 ${className || ""}`}
                      >
                        {letter}
                      </span>
                      <div
                        className={`absolute -mt-10 left-1/2 -translate-x-1/2 animate__animated
                  ${showReading ? "animate__fadeInDown2" : "animate__fadeOutUp2"}`}
                      >
                        {showReading ? (
                          <span
                            className={`text-main-content text-[60px] font-chosun`}
                          >
                            {reading}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              },
            )}
          </div>
        </div>
        <div className="grid grid-cols-[180px__1fr] gap-10 -mt-6">
          <PillButton
            active={showReading}
            onClick={() => {
              if (!showReading) SOUND(sound).play();
              setShowReading(!showReading);
            }}
            text="읽기"
            checkboxColor="#23425e"
            backgroundColor="#3a5e7c"
          />
        </div>
        <div className="grid grid-cols-[180px__1100px] gap-10 mt-14">
          <PillButton
            active={showMeaning || false}
            onClick={() => setShowMeaning(!showMeaning)}
            text="겉뜻"
            checkboxColor="#306875"
            backgroundColor="#4f9aab"
          />
          <div>
            <div className="-mt-1">{content1 ?? null}</div>
          </div>
        </div>
        <div className="grid grid-cols-[180px__1100px] gap-10 mt-12">
          <PillButton
            active={showMeaning2}
            onClick={() => setShowMeaning2(!showMeaning2)}
            text="속뜻"
            checkboxColor="#4b4f77"
            backgroundColor="#7e83ac"
          />
          <div>
            <div className="-mt-1">{content2 ?? null}</div>
          </div>
        </div>
      </div>
      <AdditionalModal
        open={showAdditionalModal}
        onClose={() => setShowAdditionalModal(false)}
        items={[selectedAdditional]}
      />
    </>
  );
};

export const MainContent_SM = ({
  data,
  showReading,
  showMeaning,
  showMeaning2,
  setShowReading,
  setShowMeaning,
  setShowMeaning2,
}: Props) => {
  const { chinese, content1, content2, sound } = data;

  const [showAdditionalModal, setShowAdditionalModal] = useState(false);
  const [selectedAdditional, setSelectedAdditional] = useState<
    string | ReactNode | null
  >(null);

  const firstAdditonalIndex = chinese.findIndex((c) => c.additional);

  if (!data) return null;

  return (
    <>
      <div className="absolute top-[200px] pl-[120px]">
        <div className="relative items-start left-[210px] w-[1100px]">
          <div className="flex ml-[140px] mr-[440px] bg-blue-400">
            {chinese.map(
              ({ letter, reading, additional, isKor, className }, index) => {
                return (
                  <div key={index} className="justify-items-center mx-auto">
                    <div className="relative">
                      {additional &&
                        (index === firstAdditonalIndex ? (
                          <button
                            onClick={() => {
                              setSelectedAdditional(additional);
                              setShowAdditionalModal(true);
                            }}
                            className="w-[128px] absolute -top-[100px] left-1/2 -translate-x-1/2 flex justify-center"
                          >
                            <img src="/ui/additional-bubble-button.png" />
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              setSelectedAdditional(additional);
                              setShowAdditionalModal(true);
                            }}
                            className="w-[128px] absolute -top-[30px] left-1/2 -translate-x-1/2 flex justify-center"
                          >
                            <img src="/ui/additional-button.png" />
                          </button>
                        ))}
                      <span
                        className={`${isKor ? "text-[50px]" : "font-haeseo text-[130px]"} ${className || ""}`}
                      >
                        {letter}
                      </span>
                      <div
                        className={`absolute -mt-3 left-1/2 -translate-x-1/2 animate__animated
                  ${showReading ? "animate__fadeInDown2" : "animate__fadeOutUp2"}`}
                      >
                        {showReading ? (
                          <span
                            className={`text-main-content text-[60px] font-chosun`}
                          >
                            {reading}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              },
            )}
          </div>
        </div>
        <div className="grid grid-cols-[180px__1fr] gap-10 mt-0">
          <PillButton
            active={showReading || false}
            onClick={() => {
              if (!showReading) SOUND(sound).play();
              setShowReading(!showReading);
            }}
            text="읽기"
            checkboxColor="#23425e"
            backgroundColor="#3a5e7c"
          />
        </div>
        <div className="grid grid-cols-[180px__1100px] gap-10 mt-14">
          <PillButton
            active={showMeaning || false}
            onClick={() => setShowMeaning(!showMeaning)}
            text="겉뜻"
            checkboxColor="#306875"
            backgroundColor="#4f9aab"
          />
          <div>
            <div className="-mt-1">{content1 ?? null}</div>
          </div>
        </div>
        <div className="grid grid-cols-[180px__1100px] gap-10 mt-12">
          <PillButton
            active={showMeaning2}
            onClick={() => setShowMeaning2(!showMeaning2)}
            text="속뜻"
            checkboxColor="#4b4f77"
            backgroundColor="#7e83ac"
          />
          <div>
            <div className="mt-1 leading-tight">{content2 ?? null}</div>
          </div>
        </div>
      </div>
      <AdditionalModal
        open={showAdditionalModal}
        onClose={() => setShowAdditionalModal(false)}
        items={[selectedAdditional]}
      />
    </>
  );
};
