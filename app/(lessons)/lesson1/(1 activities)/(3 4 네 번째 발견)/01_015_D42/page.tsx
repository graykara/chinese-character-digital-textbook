"use client";

import { ExerciseHeader2 } from "@/app/components/exercise-header";
import { Header } from "../assets/header";
import { StepContainer } from "@/app/components/step-container";
import { useContext, useEffect, useState } from "react";
import { ContentContainer } from "@/app/components/content-container";
import { TextareaWithPen } from "@/app/components/textarea/textarea-with-pen";
import IMAGE1 from "./image1.png";
import IMAGE2 from "./image2.png";
import IMAGE3 from "./image3.png";
import IMAGE4 from "./image4.png";
import IMAGE5 from "./image5.png";
import IMAGE6 from "./image6.png";
import { ExampleAnswerButton } from "@/app/components/buttons/example-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/1/중등한문_한자,어디서봤어22.png";
import BACKGROUND2 from "@/app/bgpng_temp/1/중등한문_한자,어디서봤어23.png";
import BACKGROUND3 from "@/app/bgpng_temp/1/중등한문_한자,어디서봤어24.png";
import BACKGROUND4 from "@/app/bgpng_temp/1/중등한문_한자,어디서봤어25.png";
import BACKGROUND5 from "@/app/bgpng_temp/1/중등한문_한자,어디서봤어26.png";
import { PageInfoContext } from "@/app/utils/page-info";
import { SoundText } from "@/app/components/sound-text";

export default function Page() {
  const { currentStep: step, setCurrentStep: setStep } = useContext(PageInfoContext);

  const quizes = [
    {
      image: IMAGE1.src,
      fontSize: 40,
      answers: [<>
        <p>여기는 일본이야.<br />저기 표지판을 봐!</p>
      </>,
      <>
        <p>출구 전용은 ‘나가는 길로만 씀.’이라는 뜻이야.</p>
      </>],
      sounds: ["/sound/1/15/1.mp3", "/sound/1/15/2.mp3"],
      position: { x: 640, y: 30 },
      rows: 4,
    },
    {
      image: IMAGE2.src,
      fontSize: 50,
      answers: [<>
        <p>입구는<br />‘들어가는 길.’<br />이라는 뜻이야.</p>
      </>],
      sounds: ["/sound/1/15/3.mp3"],
      position: { x: 640, y: 40 },
      rows: 3,
    },
    {
      image: IMAGE4.src,
      fontSize: 40,
      answers: [<>
        <p>나는 지금 일본의 어느<br />신호등 앞에 서 있어.</p>
      </>,
      <>
        <p>‘보행자 전용’은 ‘걸어 다니는 사람만 다니는 길’이고,</p>
      </>,
      ],
      sounds: ["/sound/1/15/4.mp3", "/sound/1/15/5.mp3"],
      position: { x: 810, y: 35 },
      rows: 4,
    },
    {
      image: IMAGE3.src,
      fontSize: 50,
      answers: [<>
        <p>‘자전거 전용’은 ‘자전거만 다니는 길’이야.</p>
      </>],
      sounds: ["/sound/1/15/6.mp3"],
      position: { x: 810, y: 50 },
      rows: 4,
    },
    {
      image: IMAGE5.src,
      fontSize: 40,
      answers: [<>
        <p>여기는 중국의 거리야.</p>
      </>,
      <>
        <p>저기 보이는 한자는 ‘열구’라고 읽는데 ‘핫도그’라는 뜻이야.</p>
      </>],
      sounds: ["/sound/1/15/7.mp3", "/sound/1/15/8.mp3"],
      position: { x: 810, y: 60 },
      rows: 4,
    },
    {
      image: IMAGE6.src,
      fontSize: 40,
      answers:
        [<>
          <p>지금 여기 중국에는 방금<br />비가 내렸다가 그쳤어.</p>
        </>,
        <>
          <p>그래서 ‘소심지활’ 즉 ‘바닥이 미끄러우니 조심하세요’라는 뜻의 표지판이 보이네.</p>
        </>],
      sounds: ["/sound/1/15/9.mp3", "/sound/1/15/10.mp3"],
      position: { x: 660, y: 40 },
      rows: 4,
    },
  ];

  const [value, setValue] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentSoundIndex, setCurrentSoundIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setValue("");
    setShowAnswer(false);
  }, [step]);

  const toggleAnswer = (sounds: string[]) => {
    setShowAnswer((prev) => {
      const newShowAnswer = !prev;
      if (newShowAnswer) {
        playAllSounds(sounds);
      } else {
        setValue("");
        setCurrentSoundIndex(0);
      }
      return newShowAnswer;
    });
  };

  const playSound = (soundFile: string, index: number, sounds: string[]) => {
    setCurrentSoundIndex(index);
    setIsPlaying(true);

    const sound = new Howl({
      src: [soundFile],
      onend: () => {
        setIsPlaying(false);
        // Play next sound if available
        if (index < sounds.length - 1) {
          playSound(sounds[index + 1], index + 1, sounds);
        }
      }
    });

    sound.play();
  };

  const playAllSounds = (sounds: string[]) => {
    if (sounds.length > 0) {
      playSound(sounds[0], 0, sounds);
    }
  };

  return (
    <>
      <Header />

      <ExerciseHeader2
        text="한자 문화권 나라의 길거리를 담은 사진이다. 각 사진 속의 한자가 무엇을 뜻하는지 알아 보자."
        sound="/sound/1/15-i2.mp3"
      />

      <ContentContainer className="-top-6 left-20">
        {quizes.map((quiz, index) => {
          return (
            <div
              key={index}
              className={`relative ${step === index + 1 ? "block" : "hidden"}`}
            >
              <img src={quiz.image} />

              <div
                className="absolute"
                style={{
                  left: quiz.position.x,
                  top: quiz.position.y,
                }}
              >
                {showAnswer ? (
                  step !== 6 ? (
                    <>
                      <div className="w-[450px] h-[200px] mt-4 translate-x-3 flex justify-start items-center overflow-y-auto bg-black bg-opacity-0">
                        <p style={{ lineHeight: 1.2 }} className="w-[450px] text-center h-full">
                          {quiz.answers.map((answer, idx) => (
                            <SoundText
                              key={idx}
                              isPlaying={showAnswer && isPlaying && currentSoundIndex === idx}
                              className={`leading-tight tracking-tighter break-keep text-example`}
                              style={{ fontSize: quiz.fontSize + "px" }}
                            >
                              {answer}{" "}
                            </SoundText>
                          ))}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-[400px] h-[190px] mt-4 translate-x-3 flex justify-start items-center overflow-y-auto bg-black bg-opacity-0">
                        <p style={{ lineHeight: 1.2 }} className="w-[450px] text-center h-full">
                          {quiz.answers.map((answer, idx) => (
                            <SoundText
                              key={idx}
                              isPlaying={showAnswer && isPlaying && currentSoundIndex === idx}
                              className={`leading-tight tracking-tighter break-keep text-example`}
                              style={{ fontSize: quiz.fontSize + "px" }}
                            >
                              {answer}{" "}
                            </SoundText>
                          ))}
                        </p>
                      </div>
                    </>
                  )
                ) : (
                  <TextareaWithPen
                    answer={value}
                    showAnswer={false}
                    containerClassName={`w-[380px] mt-5 bg-transparent translate-x-10 resize-none text-center leading-tight tracking-tighter break-keep`}
                    penClassName="h-[55px] top-[27px] left-[60px]"
                    rows={quiz.rows}
                    style={{ fontSize: quiz.fontSize + "px" }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </ContentContainer>

      <StepContainer maxStep={6} />

      <ExampleAnswerButton
        active={showAnswer}
        onClick={() => {
          const currentQuizSounds = quizes[step - 1]?.sounds;
          toggleAnswer(currentQuizSounds);
        }}
      />

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
                  : step === 5
                    ? BACKGROUND5.src
                    : ""
        }
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
