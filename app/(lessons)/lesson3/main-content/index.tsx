"use client";

import { ReactNode, useState, useEffect, useRef, memo, useMemo } from "react";
import { PillButton } from "@/app/components/buttons/pill-button";
import { SOUND } from "@/app/utils/sound-player";
import { AdditionalModal } from "./additional-modal";
import { clickSound } from "@/app/utils/click-sound";
import { Button } from "@/app/components/buttons/button";

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
}

const checkAllFlippableCardsActive = async (
  ref: React.RefObject<HTMLDivElement>,
  setShow: (value: boolean | null) => void
): Promise<boolean> => {
  try {
    if (!ref.current) {
      setShow(false);
      return false;
    }

    const result = await new Promise<boolean>((resolve) => {
      setTimeout(() => {
        try {
          const cards = ref.current?.querySelectorAll('.flippable-card');

          // If no cards found, consider it as "shown"
          if (!cards || cards.length === 0) {
            resolve(true);
            return;
          }

          // Check if all cards are active
          const allActive = Array.from(cards).every(card =>
            card.getAttribute('data-active') === 'true'
          );

          resolve(allActive);
        } catch (error) {
          console.error('Error checking flippable cards:', error);
          resolve(false);
        }
      }, 100); // Small delay to ensure DOM is ready
    });

    setShow(result);
    return result;
  } catch (error) {
    console.error('Error in checkAllFlippableCardsActive:', error);
    setShow(false);
    return false;
  }
};

export const MainContent = memo(({
  data: _data,
}: Props) => {
  const data = useMemo(() => {
    return _data;
  }, [_data]);
  const { chinese, content1, content2, sound } = data;

  const [showAdditionalModal, setShowAdditionalModal] = useState(false);
  const [selectedAdditional, setSelectedAdditional] = useState<
    string | ReactNode | null
  >(null);

  const firstAdditonalIndex = chinese.findIndex((c) => c.additional);

  const meaning1Ref = useRef<HTMLDivElement>(null);
  const meaning2Ref = useRef<HTMLDivElement>(null);

  const [showReading, setShowReading] = useState<boolean | null>(null);
  const [showMeaning, setShowMeaning] = useState<boolean | null>(null);
  const [showMeaning2, setShowMeaning2] = useState<boolean | null>(null);

  useEffect(() => {
    setShowReading(null);
    setShowMeaning(null);
    setShowMeaning2(null);
  }, [data])

  useEffect(() => {
    checkAllFlippableCardsActive(meaning1Ref, setShowMeaning);
  }, []);

  const handleMeaning1Click = () => {
    if (!showMeaning) {
      const cards = meaning1Ref.current?.querySelectorAll('.flippable-card');
      cards?.forEach(card => card.setAttribute('data-active', 'true'));
    } else {
      const cards = meaning1Ref.current?.querySelectorAll('.flippable-card');
      cards?.forEach(card => card.setAttribute('data-active', 'false'));
    }
    setShowMeaning(!showMeaning);
  };

  const handleMeaning2Click = () => {
    setShowMeaning2(!showMeaning2);
  };

  if (!data) return null;

  return (
    <>
      <div key={data.chinese[0].letter} className="absolute top-[150px] pl-[120px]">
        <div className="relative items-start left-[210px] w-[1100px]">
          <div className="flex mr-[250px]">
            {chinese.map(
              ({ letter, reading, additional, isKor, className }, index) => {
                return (
                  <div key={index} className="justify-items-center mx-auto">
                    <div className="relative">
                      {additional &&
                        (index === firstAdditonalIndex ? (
                          <Button
                            onClick={() => {
                              clickSound.play();
                              setSelectedAdditional(additional);
                              setShowAdditionalModal(true);
                            }}
                            className="w-[128px] absolute -top-[110px] left-1/2 -translate-x-1/2 flex justify-center"
                          >
                            <img src="/ui/additional-bubble-button.png" />
                          </Button>
                        ) : (
                          <Button
                            onClick={() => {
                              clickSound.play();
                              setSelectedAdditional(additional);
                              setShowAdditionalModal(true);
                            }}
                            className="w-[128px] absolute -top-[40px] left-1/2 -translate-x-1/2 flex justify-center"
                          >
                            <img src="/ui/additional-button.png" />
                          </Button>
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
            onClick={handleMeaning1Click}
            text="겉뜻"
            checkboxColor="#306875"
            backgroundColor="#4f9aab"
          />
          <div>
            <div ref={meaning1Ref} onClick={() => checkAllFlippableCardsActive(meaning1Ref, setShowMeaning)} className="-mt-1">
              {content1 ?? null}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[180px__1100px] gap-10 mt-12">
          <PillButton
            active={showMeaning2 || false}
            onClick={handleMeaning2Click}
            text="속뜻"
            checkboxColor="#4b4f77"
            backgroundColor="#7e83ac"
          />
          <div>
            <div
              ref={meaning2Ref}
              className={`-mt-1 ${showMeaning2 ? "animate__animated animate__fadeIn animate__flipInX" : "hidden"}`}
            >
              {content2 ?? null}
            </div>
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
}, (prev, next) => {
  return prev.data === next.data;
});

export const MainContent_SM = ({
  data,
}: Props) => {
  const { chinese, content1, content2, sound } = data;

  const meaning1Ref = useRef<HTMLDivElement>(null);
  const meaning2Ref = useRef<HTMLDivElement>(null);

  const [showReading, setShowReading] = useState<boolean | null>(null);
  const [showMeaning, setShowMeaning] = useState<boolean | null>(null);
  const [showMeaning2, setShowMeaning2] = useState<boolean | null>(null);

  useEffect(() => {
    setShowReading(null);
    setShowMeaning(null);
    setShowMeaning2(null);
  }, [data])

  const [showAdditionalModal, setShowAdditionalModal] = useState(false);
  const [selectedAdditional, setSelectedAdditional] = useState<
    string | ReactNode | null
  >(null);

  const firstAdditonalIndex = chinese.findIndex((c) => c.additional);

  const handleMeaning1Click = () => {
    if (!showMeaning) {
      const cards = meaning1Ref.current?.querySelectorAll('.flippable-card');
      cards?.forEach(card => card.setAttribute('data-active', 'true'));
    } else {
      const cards = meaning1Ref.current?.querySelectorAll('.flippable-card');
      cards?.forEach(card => card.setAttribute('data-active', 'false'));
    }
    setShowMeaning(!showMeaning);
  };

  const handleMeaning2Click = () => {
    setShowMeaning2(!showMeaning2);
  };

  if (!data) return null;

  return (
    <>
      <div key={data.chinese[0].letter} className="absolute top-[200px] pl-[120px]">
        <div className="relative items-start left-[210px] w-[1100px]">
          <div className="flex ml-[140px] mr-[440px] bg-transparent">
            {chinese.map(
              ({ letter, reading, additional, isKor, className }, index) => {
                return (
                  <div key={index} className="justify-items-center mx-auto">
                    <div className="relative">
                      {additional &&
                        (index === firstAdditonalIndex ? (
                          <Button
                            onClick={() => {
                              clickSound.play();
                              setSelectedAdditional(additional);
                              setShowAdditionalModal(true);
                            }}
                            className="w-[128px] absolute -top-[100px] left-1/2 -translate-x-1/2 flex justify-center"
                          >
                            <img src="/ui/additional-bubble-button.png" />
                          </Button>
                        ) : (
                          <Button
                            onClick={() => {
                              clickSound.play();
                              setSelectedAdditional(additional);
                              setShowAdditionalModal(true);
                            }}
                            className="w-[128px] absolute -top-[30px] left-1/2 -translate-x-1/2 flex justify-center"
                          >
                            <img src="/ui/additional-button.png" />
                          </Button>
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
            onClick={handleMeaning1Click}
            text="겉뜻"
            checkboxColor="#306875"
            backgroundColor="#4f9aab"
          />
          <div>
            <div ref={meaning1Ref} onClick={() => checkAllFlippableCardsActive(meaning1Ref, setShowMeaning)} className="-mt-1">
              {content1 ?? null}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[180px__1100px] gap-10 mt-12">
          <PillButton
            active={showMeaning2 || false}
            onClick={handleMeaning2Click}
            text="속뜻"
            checkboxColor="#4b4f77"
            backgroundColor="#7e83ac"
          />
          <div>
            <div
              ref={meaning2Ref}
              className={`mt-1 leading-tight ${showMeaning2 ? "animate__animated animate__fadeIn animate__flipInX" : "hidden"}`}
            >
              {content2 ?? null}
            </div>
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
