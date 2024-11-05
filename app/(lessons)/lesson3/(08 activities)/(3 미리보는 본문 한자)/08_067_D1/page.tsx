"use client";

import { ContentContainer } from "@/app/components/content-container";
import { HeaderContainer } from "@/app/components/headers/header-container";
import { TitleContainer } from "@/app/components/title-container";
import { useEffect, useState } from "react";
import { SOUND } from "@/app/utils/sound-player";
import EXAMPLE from "./example.png";
import LEFT from "./left.png";
import RIGHT from "./right.png";
import BLANK1 from "./blank1.png";
import BLANK2 from "./blank2.png";
import BLANK3 from "./blank3.png";
import BLANK4 from "./blank4.png";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { StepContainer } from "@/app/components/step-container";
import { BuddyButton } from "@/app/components/buttons/buddy-button";
import { GroupButton } from "@/app/components/buttons/group-button";
import BACKGROUND1 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어25.png";
import BACKGROUND2 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어26.png";
import BACKGROUND3 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어27.png";
import BACKGROUND4 from "@/app/bgpng_temp/8/중등한문_언어생활 속의 성어28.png";
import { DraggableCard } from "@/app/components/new-drag-and-drop/draggable-card";
import { DropZone } from "@/app/components/new-drag-and-drop/drop-zone";
import { InputWithPen } from "@/app/components/input-with-pen";
import { TextareaWithPen } from "@/app/components/textarea/textarea-with-pen";

export default function Page() {
  const [step, setStep] = useState(1);

  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(false);
  }, [step]);

  return (
    <>
      <HeaderContainer>
        <img src="/header/preview_chinese_characters.png" alt="" />
      </HeaderContainer>

      <BuddyButton className="animate__animated animate__fadeIn animate__delay-1s absolute right-[1055px] top-[230px] w-[100px] z-1" />
      <GroupButton className="animate__animated animate__fadeIn animate__delay-2s absolute right-[920px] top-[232px] z-1" />

      <TitleContainer className="mt-10" sound="/sound/3/67-i.mp3">
        <p className="tracking-tighter flex items-start gap-5 break-keep">
          <img src="/ui/flower-icon.png" />
          제시된 한자 카드를 보고, 질문에 답하며 개인별 또는 모둠별로 왕관을 획득해 보자.
        </p>
      </TitleContainer>

      <ContentContainer className="!justify-start mt-5 pl-12">
        <img src={EXAMPLE.src} className="mt-6 -ml-14 mb-10" />
        <div className="absolute left-[0px] top-[40px] grid grid-cols-9 gap-[50px] w-full h-[90px] px-[35px]">
          <button onClick={() => SOUND("/sound/3/p067_word000.mp3").play()} />
          <button onClick={() => SOUND("/sound/3/p067_word001.mp3").play()} />
          <button onClick={() => SOUND("/sound/3/p067_word002.mp3").play()} />
          <button onClick={() => SOUND("/sound/3/p067_word003.mp3").play()} />
          <button onClick={() => SOUND("/sound/3/p067_word004.mp3").play()} />
          <button onClick={() => SOUND("/sound/3/p067_word005.mp3").play()} />
          <button onClick={() => SOUND("/sound/3/p067_word006.mp3").play()} />
          <button onClick={() => SOUND("/sound/3/p067_word007.mp3").play()} />
          <button onClick={() => SOUND("/sound/3/p067_word008.mp3").play()} />
        </div>

        <div className="absolute left-[15px] top-[30px] grid grid-cols-9 gap-[15px]">
          <DraggableCard value="頭" className="w-[150px] h-[220px]" />
          <DraggableCard value="霜" className="w-[150px] h-[220px]" />
          <DraggableCard value="尾" className="w-[150px] h-[220px]" />
          <DraggableCard value="甘" className="w-[150px] h-[220px]" />
          <DraggableCard value="地" className="w-[150px] h-[220px]" />
          <DraggableCard value="雪" className="w-[150px] h-[220px]" />
          <DraggableCard value="龍" className="w-[150px] h-[220px]" />
          <DraggableCard value="苦" className="w-[150px] h-[220px]" />
          <DraggableCard value="蛇" className="w-[150px] h-[220px]" />
        </div>

        <div className="flex items-center gap-10">

          <div className="-mt-5 -ml-14 w-[800px] h-[300px] flex justify-center items-center">
            {step === 1 && (
              <div className="relative">
                <img src={BLANK1.src} />

                {!showAnswer ? (
                  <>
                    <DropZone className="absolute left-[300px] top-0 w-[200px] h-[190px] font-haeseo text-[100px] flex justify-center items-center" />
                    <DropZone className="absolute left-[530px] top-0 w-[200px] h-[190px] font-haeseo text-[100px] flex justify-center items-center" />
                    <InputWithPen
                      showAnswer={showAnswer}
                      className={`w-[200px] h-[190px] text-center bg-transparent font-haeseo text-[100px] flex justify-center items-center`}
                      penClassName="left-[70px] -mt-1 h-[60px]"
                      containerClassName="absolute left-[300px] top-0"
                    />
                    <InputWithPen
                      showAnswer={showAnswer}
                      className={`w-[200px] h-[190px] text-center bg-transparent font-haeseo text-[100px] flex justify-center items-center`}
                      penClassName="left-[70px] -mt-1 h-[60px]"
                      containerClassName="absolute left-[530px] top-0"
                    />
                  </>
                ) : (
                  <>
                    <div className="text-answer absolute left-[300px] top-0 w-[200px] h-[190px] font-haeseo text-[100px] flex justify-center items-center">
                      龍
                    </div>
                    <div className="text-answer absolute left-[530px] top-0 w-[200px] h-[190px] font-haeseo text-[100px] flex justify-center items-center">
                      蛇
                    </div>
                  </>
                )}
              </div>
            )}
            {step === 2 && (
              <div className="relative">
                <img src={BLANK2.src} />

                {!showAnswer ? (
                  <>
                    <DropZone className="absolute left-[350px] top-0 w-[200px] h-[190px] font-haeseo text-[100px] flex justify-center items-center" />
                    <InputWithPen
                      showAnswer={showAnswer}
                      className={`w-[200px] h-[190px] text-center bg-transparent font-haeseo text-[100px] flex justify-center items-center`}
                      penClassName="left-[70px] -mt-1 h-[60px]"
                      containerClassName="absolute left-[355px] top-0"
                    />
                  </>
                ) : (
                  <div className="text-answer absolute left-[355px] top-0 w-[200px] h-[190px] font-haeseo text-[100px] flex justify-center items-center">
                    地
                  </div>
                )}
              </div>
            )}
            {step === 3 && (
              <div className="relative">
                <img src={BLANK3.src} />

                {!showAnswer ? (
                  <>
                    <DropZone className="absolute left-[235px] top-[35px] w-[100px] h-[100px] font-haeseo text-[80px] flex justify-center items-center" />
                    <DropZone className="absolute left-[370px] top-[35px] w-[100px] h-[100px] font-haeseo text-[80px] flex justify-center items-center" />
                    <DropZone className="absolute left-[520px] top-[35px] w-[100px] h-[100px] font-haeseo text-[80px] flex justify-center items-center" />
                    <DropZone className="absolute left-[660px] top-[35px] w-[100px] h-[100px] font-haeseo text-[80px] flex justify-center items-center" />
                    <InputWithPen
                      showAnswer={showAnswer}
                      className={`w-[100px] h-[100px] text-center bg-transparent font-haeseo text-[80px] flex justify-center items-center`}
                      penClassName="left-1/2 -translate-x-1/2 -mt-1 h-[60px]"
                      containerClassName="absolute left-[235px] top-[35px]"
                    />
                    <InputWithPen
                      showAnswer={showAnswer}
                      className={`w-[100px] h-[100px] text-center bg-transparent font-haeseo text-[80px] flex justify-center items-center`}
                      penClassName="left-1/2 -translate-x-1/2 -mt-1 h-[60px]"
                      containerClassName="absolute left-[375px] top-[35px]"
                    />
                    <InputWithPen
                      showAnswer={showAnswer}
                      className={`w-[100px] h-[100px] text-center bg-transparent font-haeseo text-[80px] flex justify-center items-center`}
                      penClassName="left-1/2 -translate-x-1/2 -mt-1 h-[60px]"
                      containerClassName="absolute left-[525px] top-[35px]"
                    />
                    <InputWithPen
                      showAnswer={showAnswer}
                      className={`w-[100px] h-[100px] text-center bg-transparent font-haeseo text-[80px] flex justify-center items-center`}
                      penClassName="left-1/2 -translate-x-1/2 -mt-1 h-[60px]"
                      containerClassName="absolute left-[665px] top-[35px]"
                    />
                  </>
                ) : (
                  <>
                    <div className="text-answer absolute left-[235px] top-[35px] w-[100px] h-[100px] font-haeseo text-[80px] flex justify-center items-center">
                      두
                    </div>
                    <div className="text-answer absolute left-[375px] top-[35px] w-[100px] h-[100px] font-haeseo text-[80px] flex justify-center items-center">
                      미
                    </div>
                    <div className="text-answer absolute left-[525px] top-[35px] w-[100px] h-[100px] font-haeseo text-[80px] flex justify-center items-center">
                      감
                    </div>
                    <div className="text-answer absolute left-[665px] top-[35px] w-[100px] h-[100px] font-haeseo text-[80px] flex justify-center items-center">
                      고
                    </div>
                  </>
                )}
              </div>
            )}
            {step === 4 && (
              <div className="relative">
                <img src={BLANK4.src} />

                {!showAnswer ? (
                  <>
                    <DropZone className="absolute left-[250px] top-0 w-[100px] h-[100px] font-haeseo text-[80px] flex justify-center items-center" />
                    <DropZone className="absolute left-[380px] top-0 w-[100px] h-[100px] font-haeseo text-[80px] flex justify-center items-center" />
                    <InputWithPen
                      showAnswer={showAnswer}
                      className={`w-[100px] h-[100px] text-center bg-transparent font-haeseo text-[80px] flex justify-center items-center`}
                      penClassName="left-1/2 -translate-x-1/2 -mt-1 h-[60px]"
                      containerClassName="absolute left-[247px] top-0"
                    />
                    <InputWithPen
                      showAnswer={showAnswer}
                      className={`w-[100px] h-[100px] text-center bg-transparent font-haeseo text-[80px] flex justify-center items-center`}
                      penClassName="left-1/2 -translate-x-1/2 -mt-1 h-[60px]"
                      containerClassName="absolute left-[380px] top-0"
                    />
                    <TextareaWithPen
                      showAnswer={showAnswer}
                      containerClassName={`absolute resize-none left-[550px] top-1 w-[200px] h-[100px] text-[40px] flex justify-center items-center text-center break-keep leading-tight bg-transparent ${showAnswer ? "text-example ml-3" : ""}`}
                      penClassName="left-[620px] top-4 h-[60px]"
                      rows={2}
                    />
                  </>
                ) : (
                  <>
                    <div className="text-answer absolute left-[247px] top-0 w-[100px] h-[100px] font-haeseo text-[80px] flex justify-center items-center">
                      霜
                    </div>
                    <div className="text-answer absolute left-[380px] top-0 w-[100px] h-[100px] font-haeseo text-[80px] flex justify-center items-center">
                      雪
                    </div>
                    <div className="text-answer absolute left-[550px] -top-10 w-[200px] h-[200px] text-[40px] flex justify-center items-center text-center break-keep leading-tight">
                      날씨와 관련이 있다.
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

        </div>
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />

      <StepContainer maxStep={4} step={step} onStepChange={setStep} />

      <img
        src={
          step === 1
            ? BACKGROUND1.src
            : step === 2
              ? BACKGROUND2.src
              : step === 3
                ? BACKGROUND3.src
                : step === 4
                  ? BACKGROUND4.src
                  : ""
        }
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
