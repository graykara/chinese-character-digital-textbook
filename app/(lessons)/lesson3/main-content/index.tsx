"use client";

import { ReactNode, useState } from "react";
import { PillButton } from "@/app/components/buttons/pill-button";
import { SOUND } from "@/app/utils/sound-player";
import { AdditionalModal } from "./additional-modal";

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
      <div className="relative items-start left-[210px] w-[1100px]">
        <div className="flex items-baseline">
          {chinese.map(
            ({ letter, reading, additional, isKor, className }, index) => {
              return (
                <div key={index} className="relative">
                  {additional &&
                    (index === firstAdditonalIndex ? (
                      <button
                        onClick={() => {
                          setSelectedAdditional(additional);
                          setShowAdditionalModal(true);
                        }}
                        className="w-[128px] absolute bottom-[130px] left-1/2 -translate-x-1/2 flex justify-center"
                      >
                        <img src="/ui/additional-bubble-button.png" />
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setSelectedAdditional(additional);
                          setShowAdditionalModal(true);
                        }}
                        className="w-[128px] absolute bottom-[130px] left-1/2 -translate-x-1/2 flex justify-center"
                      >
                        <img src="/ui/additional-button.png" />
                      </button>
                    ))}
                  <span
                    className={`text-left ${isKor ? "text-[50px]" : "font-haeseo text-[100px]"} ${className || ""}`}
                  >
                    {letter}
                  </span>
                  <div
                    className={`absolute -bottom-24 left-1/2 -translate-x-1/2 animate__animated
                  ${showReading ? "animate__fadeInDown2" : "animate__fadeOutUp2"}`}
                  >
                    {showReading !== null && (
                      <span
                        className={`text-main-content text-[60px] font-chosun font-bold`}
                      >
                        {reading}
                      </span>
                    )}
                  </div>
                </div>
              );
            },
          )}
        </div>
      </div>
      <div className="grid grid-cols-[180px__1fr] gap-10 mt-5">
        <PillButton
          active={showReading ?? false}
          onClick={() => {
            if (!showReading) SOUND(sound).play();
            setShowReading(!showReading);
          }}
          text="읽기"
          checkboxColor="#23425e"
          backgroundColor="#3a5e7c"
        />
      </div>
      <div className="grid grid-cols-[180px__1100px] gap-10 mt-16">
        <PillButton
          active={showMeaning ?? false}
          onClick={() => setShowMeaning(!showMeaning)}
          text="겉뜻"
          checkboxColor="#306875"
          backgroundColor="#4f9aab"
        />
        <div>
          <div>{content1 ?? null}</div>
        </div>
      </div>
      <div className="grid grid-cols-[180px__1100px] gap-10 mt-16">
        <PillButton
          active={showMeaning2}
          onClick={() => setShowMeaning2(!showMeaning2)}
          text="속뜻"
          checkboxColor="#4b4f77"
          backgroundColor="#7e83ac"
        />
        <div>
          <div>{content2 ?? null}</div>
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
