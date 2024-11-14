"use client";

import { StrengthenLearningWordHeader } from "@/app/components/headers/strengthen-learning-word-header";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import { ContentContainer } from "@/app/components/content-container";
import { StepContainer } from "@/app/components/step-container";
import { useContext, useState } from "react";
import { InputWithPen } from "@/app/components/input-with-pen";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import { SOUND } from "@/app/utils/sound-player";
import BACKGROUND1 from "@/app/bgpng_temp/11/중등한문_너와 나, 우리29.png";
import BACKGROUND2 from "@/app/bgpng_temp/11/중등한문_너와 나, 우리30.png";
import { PageInfoContext } from "@/app/utils/page-info";
import { Button } from "@/app/components/buttons/button";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  const sounds = [
    "/sound/4/p094_word000.mp3", //거언0
    "/sound/4/p094_word001.mp3", //미1
    "/sound/4/p094_word002.mp3", //인2
    "/sound/4/p094_word003.mp3", //항3
    "/sound/4/p094_word004.mp3", //애4
    "/sound/4/p094_word005.mp3", //지5

    "/sound/4/p094_word006.mp3", //학6
    "/sound/4/p094_word007.mp3", //난7
    "/sound/4/p094_word008.mp3", //성8
    "/sound/4/p094_word009.mp3", //공자9
    "/sound/4/p094_word010.mp3", //문10
    "/sound/4/p094_word011.mp3", //예11
    "/sound/4/p094_word012.mp3", //어노자12
  ]
  return (
    <>
      <StrengthenLearningWordHeader
        title="다음 설명을 보고 문장의 구조를 살펴보자."
        sound="/sound/4/94-i-3.mp3"
      />

      <ContentContainer className="!justify-start !items-start left-[160px] -top-12">
        {step === 1 && (
          <div>
            <img src={IMAGE1.src} />
            <p className="absolute top-[87px] left-[135px] w-[1250px] text-[55px] leading-tight tracking-tighter">
              <span className="tracking-[-5px]">(</span>
              <span className="font-haeseo text-[55px] tracking-[-5px]">去</span>
              )
              <span className="font-haeseo text-[55px] tracking-[-2px]">言</span>
              [(가는) 말이] + 
              <span className="font-haeseo text-[55px] tracking-[-5px]"> 美</span>
              [곱다]
            </p>
            <Button className="absolute top-[80px] left-[140px] w-[150px] h-[80px] z-10" onClick={() => SOUND(sounds[0]).play()}>
            </Button>
            <Button className="absolute top-[80px] left-[600px] w-[80px] h-[80px] z-10" onClick={() => SOUND(sounds[1]).play()}>
            </Button>

            <p className="absolute top-[380px] left-[135px] w-[1250px] text-[55px] leading-tight tracking-tighter">
              <span className="font-haeseo text-[55px] tracking-[0px]">人</span>
              [남이] + (
              <span className="font-haeseo text-[55px] tracking-[-5px]">恒</span>
              ) 
              <span className="font-haeseo text-[55px] tracking-[0px]">愛</span>
              [(항상)사랑하다] + 
              <span className="font-haeseo text-[55px] tracking-[-5px]"> 之</span>
              [그를]
            </p>
            <Button className="absolute top-[375px] left-[120px] w-[80px] h-[80px] z-10" onClick={() => SOUND(sounds[2]).play()}>
            </Button>
            <Button className="absolute top-[375px] left-[380px] w-[80px] h-[80px] z-10" onClick={() => SOUND(sounds[3]).play()}>
            </Button>
            <Button className="absolute top-[375px] left-[455px] w-[80px] h-[80px] z-10" onClick={() => SOUND(sounds[4]).play()}>
            </Button>
            <Button className="absolute top-[375px] left-[925px] w-[80px] h-[80px] z-10" onClick={() => SOUND(sounds[5]).play()}>
            </Button>

          </div>
        )}
        {step === 2 && (
          <div>
            <img src={IMAGE2.src} />
            <p className="absolute top-[87px] left-[135px] w-[1250px] text-[55px] leading-tight tracking-tighter">
              <span className="font-haeseo text-[55px] tracking-[-2px]">學</span>
              [배움은] + 
              <span className="font-haeseo text-[55px] tracking-[-5px]"> 難</span>
              [어렵다] + 
              <span className="font-haeseo text-[55px] tracking-[-5px]"> 成</span>
              [이루기가]
            </p>
            <Button className="absolute top-[80px] left-[120px] w-[80px] h-[80px] z-10" onClick={() => SOUND(sounds[6]).play()}>
            </Button>
            <Button className="absolute top-[80px] left-[405px] w-[80px] h-[80px] z-10" onClick={() => SOUND(sounds[7]).play()}>
            </Button>
            <Button className="absolute top-[80px] left-[690px] w-[80px] h-[80px] z-10" onClick={() => SOUND(sounds[8]).play()}>
            </Button>

            <p className="absolute top-[380px] left-[135px] w-[1250px] text-[55px] leading-tight tracking-tighter">
              <span className="font-haeseo text-[55px] tracking-[2px]">孔子</span>
              [공자가] +
              <span className="font-haeseo text-[55px] tracking-[-5px]"> 問</span>
              [묻다] + 
              <span className="font-haeseo text-[55px] tracking-[-1px]"> 禮</span>
              [예를] + 
              <span className="font-haeseo text-[55px] tracking-[-5px]"> 於老子</span>
              [노자에게]
            </p>
            <Button className="absolute top-[375px] left-[130px] w-[135px] h-[80px] z-10" onClick={() => SOUND(sounds[9]).play()}>
            </Button>
            <Button className="absolute top-[375px] left-[465px] w-[80px] h-[80px] z-10" onClick={() => SOUND(sounds[10]).play()}>
            </Button>
            <Button className="absolute top-[375px] left-[710px] w-[80px] h-[80px] z-10" onClick={() => SOUND(sounds[11]).play()}>
            </Button>
            <Button className="absolute top-[375px] left-[945px] w-[180px] h-[80px] z-10" onClick={() => SOUND(sounds[12]).play()}>
            </Button>
          </div>
        )}
      </ContentContainer>

      <StepContainer maxStep={2} />
      <img src={
        step === 1 ? BACKGROUND1.src :
          step === 2 ? BACKGROUND2.src : ""
      } className="debug absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
