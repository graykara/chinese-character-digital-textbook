import { PageInfoContext } from "@/app/utils/page-info";
import React, { useState, useRef, useContext, useEffect } from "react";

interface Props {
  startDots: { id: number; x: number; y: number; label: string }[];
  endDots: { id: number; x: number; y: number; label: string }[];
  answers: { startId: number; endId: number }[];
  showAnswer: boolean;
  isDebugMode?: boolean;
}

const DotConnectionQuiz = ({
  startDots = [],
  endDots = [],
  answers = [],
  showAnswer = false,
  isDebugMode = false,
}: Props) => {
  const { scale } = useContext(PageInfoContext);
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(null);
  const containerRef = useRef(null);

  // showAnswer가 false로 바뀔 때 lines 초기화
  useEffect(() => {
    if (!showAnswer) {
      setLines([]);
    }
  }, [showAnswer]);

  const isStartDotConnected = (dotId) => {
    return lines.some((line) => line.start.id === dotId);
  };

  const getScaledPosition = (clientX, clientY) => {
    if (!containerRef.current) return { x: 0, y: 0 };

    const rect = containerRef.current.getBoundingClientRect();
    return {
      x: (clientX - rect.left) / scale,
      y: (clientY - rect.top) / scale,
    };
  };

  const handleDotMouseDown = (dot) => (e) => {
    if (isStartDotConnected(dot.id) || showAnswer) return;

    const pos = getScaledPosition(e.clientX, e.clientY);
    setCurrentLine({
      startDot: dot,
      start: { x: dot.x, y: dot.y },
      end: { x: pos.x, y: pos.y },
    });
  };

  const handleMouseMove = (e) => {
    if (!currentLine || showAnswer) return;

    const pos = getScaledPosition(e.clientX, e.clientY);
    setCurrentLine((prev) => ({
      ...prev,
      end: { x: pos.x, y: pos.y },
    }));
  };

  const handleMouseUp = (e) => {
    if (!currentLine || showAnswer) return;

    const pos = getScaledPosition(e.clientX, e.clientY);
    const endDot = endDots.find((dot) => {
      const dx = dot.x - pos.x;
      const dy = dot.y - pos.y;
      return Math.sqrt(dx * dx + dy * dy) < 20;
    });

    if (endDot) {
      const isEndDotConnected = lines.some((line) => line.end.id === endDot.id);

      if (!isEndDotConnected) {
        setLines((prev) => [
          ...prev,
          {
            id: `${currentLine.startDot.id}-${endDot.id}`,
            start: currentLine.startDot,
            end: endDot,
            isCorrect: answers.some(
              (answer) =>
                answer.startId === currentLine.startDot.id &&
                answer.endId === endDot.id,
            ),
          },
        ]);
      }
    }

    setCurrentLine(null);
  };

  const renderAnswerLines = () => {
    return answers.map((answer) => {
      const startDot = startDots.find((dot) => dot.id === answer.startId);
      const endDot = endDots.find((dot) => dot.id === answer.endId);

      if (!startDot || !endDot) return null;

      return (
        <line
          key={`answer-${answer.startId}-${answer.endId}`}
          x1={startDot.x}
          y1={startDot.y}
          x2={endDot.x}
          y2={endDot.y}
          stroke="red"
          strokeWidth="2"
        />
      );
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full rounded-lg"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => setCurrentLine(null)}
    >
      <svg className="absolute inset-0 w-full h-full">
        {/* 정답 또는 사용자의 선 표시 */}
        {showAnswer ? (
          renderAnswerLines()
        ) : (
          <>
            {lines.map((line) => (
              <line
                key={line.id}
                x1={line.start.x}
                y1={line.start.y}
                x2={line.end.x}
                y2={line.end.y}
                stroke={line.isCorrect ? "red" : "red"}
                strokeWidth="2"
              />
            ))}
            {currentLine && (
              <line
                x1={currentLine.start.x}
                y1={currentLine.start.y}
                x2={currentLine.end.x}
                y2={currentLine.end.y}
                stroke="gray"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
            )}
          </>
        )}
      </svg>

      {/* 시작점 */}
      {startDots.map((dot) => (
        <div
          key={dot.id}
          className={`absolute w-2 h-2 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2
            ${
              isDebugMode
                ? "border border-black bg-black"
                : isStartDotConnected(dot.id)
                  ? "cursor-not-allowed"
                  : "bcursor-pointer"
            }`}
          style={{
            left: dot.x,
            top: dot.y,
          }}
          onMouseDown={handleDotMouseDown(dot)}
        >
          {dot.label}
        </div>
      ))}

      {/* 종료점 */}
      {endDots.map((dot) => (
        <div
          key={dot.id}
          className={`absolute w-2 h-2 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2
            ${
              isDebugMode
                ? "border border-black bg-black"
                : lines.some((line) => line.end.id === dot.id)
                  ? ""
                  : ""
            }`}
          style={{
            left: dot.x,
            top: dot.y,
          }}
        >
          {dot.label}
        </div>
      ))}
    </div>
  );
};

export default DotConnectionQuiz;
