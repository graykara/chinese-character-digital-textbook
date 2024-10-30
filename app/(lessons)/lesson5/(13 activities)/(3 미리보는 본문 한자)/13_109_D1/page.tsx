"use client";

import { ContentContainer } from "@/app/components/content-container";
import { HeaderContainer } from "@/app/components/headers/header-container";
import { TitleContainer } from "@/app/components/title-container";
import { ReactNode, useEffect, useRef, useState } from "react";
import IMAGE from "./bg_1.png";
import { CheckAnswerButton } from "@/app/components/buttons/check-answer-button";
import BACKGROUND1 from "@/app/bgpng_temp/13/중등한문_귀에 대고 말한 까닭4.png";
import {
  Line,
  LineDrawingStartPoint,
} from "@/app/components/line-drawing/line-drawing-start-point";
import { LineDrawingEndPoint } from "@/app/components/line-drawing/line-drawing-end-point";

export default function Page() {
  const [step, setStep] = useState(1);

  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(false);
  }, [step]);

  const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<Line[]>([]);
  const [currentLine, setCurrentLine] = useState<Partial<Line> | null>(null);

  const getRelativeCoordinates = (x: number, y: number) => {
    const container = containerRef.current;
    if (container) {
      const rect = container.getBoundingClientRect();
      return {
        x: x - rect.left,
        y: y - rect.top,
      };
    }
    return { x, y };
  };

  const handleDragStart = (x: number, y: number, value: string | ReactNode) => {
    const coords = getRelativeCoordinates(x, y);
    setCurrentLine({
      start: coords,
      value,
    });
  };

  const handleDrag = (x: number, y: number) => {
    if (currentLine?.start) {
      const coords = getRelativeCoordinates(x, y);
      setCurrentLine({
        ...currentLine,
        end: coords,
      });
    }
  };

  const handleDrop = (value: string | ReactNode, x: number, y: number) => {
    if (currentLine?.start) {
      const coords = getRelativeCoordinates(x, y);
      setLines([
        ...lines,
        {
          start: currentLine.start,
          end: coords,
          value,
        } as Line,
      ]);
      setCurrentLine(null);
    }
  };

  return (
    <>
      <HeaderContainer>
        <img src="/header/preview_chinese_characters.png" alt="" />
      </HeaderContainer>

      <TitleContainer className="mt-10" sound="/sound/5/109-i-1.mp3">
        <p className="tracking-tighter flex items-start gap-5 break-keep">
          <img src="/ui/flower-icon.png" />
          제시된 한자 카드를 보고, 한자의 뜻을 찾아 적은 뒤 뜻이 서로 상대되는
          것 끼리 선으로 이어 보자.
        </p>
      </TitleContainer>

      <ContentContainer className="!justify-start mt-5 pl-12">
        <div className="relative w-full flex">
          <img src={IMAGE.src} />

          <div
            className="absolute left-0 top-0 w-[1500px] h-[500px]"
            ref={containerRef}
          >
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {lines.map((line, i) => (
                <line
                  key={i}
                  x1={line.start.x}
                  y1={line.start.y}
                  x2={line.end.x}
                  y2={line.end.y}
                  stroke="blue"
                  strokeWidth="2"
                />
              ))}
              {currentLine?.start && currentLine?.end && (
                <line
                  x1={currentLine.start.x}
                  y1={currentLine.start.y}
                  x2={currentLine.end.x}
                  y2={currentLine.end.y}
                  stroke="blue"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              )}
            </svg>

            <div className="flex justify-between p-4">
              <LineDrawingStartPoint
                value="시작점"
                onDragStart={handleDragStart}
                onDrag={handleDrag}
                className="p-4 bg-blue-100 rounded"
              >
                드래그 시작점
              </LineDrawingStartPoint>

              <LineDrawingEndPoint
                onDrop={handleDrop}
                className="p-4 bg-green-100 rounded w-32 h-32"
              />
            </div>
          </div>
        </div>
      </ContentContainer>

      <CheckAnswerButton
        active={showAnswer}
        onClick={() => setShowAnswer(!showAnswer)}
      />

      <img
        src={BACKGROUND1.src}
        className="debug absolute left-0 top-0 opacity-25 pointer-events-none"
      />
    </>
  );
}
