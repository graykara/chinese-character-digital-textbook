"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { PillButton } from "../buttons/pill-button";
import { SOUND } from "@/app/utils/sound-player";
import { AdditionalModal } from "./additional-modal";
import { clickSound } from "@/app/utils/click-sound";

type Data = {
  chinese: {
    letter: string;
    reading?: string;
    additional?: string | ReactNode;
    additionalTitle?: string | ReactNode;
    isKor?: boolean;
    className?: string;
  }[];
  sound: string;
  content: ReactNode;
  flippableCardData?: boolean;
};

interface Props {
  data: Data;
  showReading: boolean;
  setShowReading: (value: boolean) => void;
}

export const MainContentChineseAndReading = ({
  data,
  showReading,
  setShowReading,
}: Props) => {
  const meaningRef = useRef<HTMLDivElement>(null);

  const { chinese, content, sound, flippableCardData } = data;

  const [showAdditionalModal, setShowAdditionalModal] = useState(false);
  const [selectedAdditional, setSelectedAdditional] = useState<
    string | ReactNode | null
  >(null);
  const [additionalTitle, setAdditionalTitle] = useState<
    string | ReactNode | null
  >("보충");

  const [showMeaning, setShowMeaning] = useState(false);

  const firstAdditonalIndex = chinese.findIndex((c) => c.additional);

  if (!data) return null;

  // content 내의 모든 FlippableCard가 active인지 확인하는 함수
  const checkAllFlippableCardsActive = async () => {
    let show = false;
    if (!meaningRef.current) show = false;
    show = await new Promise<boolean>((resolve) => {
      setTimeout(() => {
        // meaningRef 내부의 모든 flippable-card를 찾음
        const cards = meaningRef.current?.querySelectorAll('.flippable-card');

        // flippable card가 없는 경우 true 반환
        if (!cards || cards.length === 0) {
          resolve(true);
          return;
        }

        // 모든 카드가 data-active를 가지고 있고, 모든 값이 true인지 확인
        const result = Array.from(cards).every(card =>
          card.getAttribute('data-active') === 'true'
        );
        resolve(result);
      }, 100);
    });
    setShowMeaning(show);
    return show;
  };

  useEffect(() => {
    checkAllFlippableCardsActive();
  }, []);

  // PillButton 클릭 핸들러 수정
  const handleMeaningClick = () => {
    if(!showMeaning) {
      const cards = meaningRef.current?.querySelectorAll('.flippable-card');
      if (cards) {
        cards.forEach(card => {
          card.setAttribute('data-active', 'true');
        });
      }
    } else {
      const cards = meaningRef.current?.querySelectorAll('.flippable-card');
      if (cards) {
        cards.forEach(card => {
          card.setAttribute('data-active', 'false');
        });
      }
    }
    const newShowMeaning = !showMeaning;
    setShowMeaning(newShowMeaning);
  };

  return (
    <>
      <div className="relative items-start left-[210px] w-[1270px]">
        <div className="flex items-end">
          {chinese.map(
            (
              {
                letter,
                reading,
                additional,
                isKor,
                className,
                additionalTitle,
              },
              index,
            ) => {
              return (
                <div key={index} className="relative">
                  {additional &&
                    (index === firstAdditonalIndex ? (
                      <button
                        onClick={() => {
                          clickSound.play();
                          setSelectedAdditional(additional);
                          setShowAdditionalModal(true);
                          setAdditionalTitle(additionalTitle || "보충");
                        }}
                        className="w-[128px] absolute bottom-[150px] left-1/2 -translate-x-1/2 flex justify-center"
                      >
                        <img src="/ui/additional-bubble-button.png" />
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          clickSound.play();
                          setSelectedAdditional(additional);
                          setAdditionalTitle(additionalTitle || "보충");
                          setShowAdditionalModal(true);
                        }}
                        className="w-[128px] absolute bottom-[150px] left-1/2 -translate-x-1/2 flex justify-center"
                      >
                        <img src="/ui/additional-button.png" />
                      </button>
                    ))}
                  <span
                    className={`text-left ${isKor ? "text-[50px] relative bottom-3" : "font-haeseo text-[100px]"} ${className || ""}`}
                  >
                    {letter}
                  </span>
                  <div
                    className={`w-full absolute -bottom-24 left-1/2 -translate-x-1/2 animate__animated
                  ${showReading ? "animate__fadeInDown2" : "animate__fadeOutUp2"}`}
                  >
                    {showReading ? (
                      <span
                        className={`flex justify-around w-full text-main-content text-[60px] font-chosun`}
                      >
                        {reading
                          ?.split("")
                          .map((char) => <span key={char}>{char}</span>)}
                      </span>
                    ) : null}
                  </div>
                </div>
              );
            },
          )}
        </div>
      </div>
      <div className="grid grid-cols-[180px__1fr] gap-10 mt-5">
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
      <div className="grid grid-cols-[180px__1300px] gap-10 mt-12">
        <PillButton
          active={showMeaning}
          onClick={handleMeaningClick}
          text="풀이"
          checkboxColor="#306875"
          backgroundColor="#4f9aab"
        />
        <div ref={meaningRef} onClick={() => checkAllFlippableCardsActive()}>
          {flippableCardData || showMeaning === null ? (
            <div>{content ?? null}</div>
          ) : (
            <div
              className={`-mt-1 ${showMeaning ? 'animate__animated animate__fadeIn animate__flipInX' : 'hidden'}`}
            >
              {content ?? null}
            </div>
          )}
        </div>
      </div>

      <AdditionalModal
        open={showAdditionalModal}
        onClose={() => setShowAdditionalModal(false)}
        items={[selectedAdditional]}
        title={additionalTitle}
      />
    </>
  );
};
