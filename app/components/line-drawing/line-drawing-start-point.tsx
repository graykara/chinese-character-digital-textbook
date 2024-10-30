"use client";

import { PropsWithChildren, ReactNode, useEffect } from "react";
import { useDrag } from "react-dnd";

export interface Line {
  start: { x: number; y: number };
  end: { x: number; y: number };
  value: string | ReactNode;
}

interface StartPointProps extends PropsWithChildren {
  value: string | ReactNode;
  className?: string;
  onDragStart: (x: number, y: number, value: string | ReactNode) => void;
  onDrag: (x: number, y: number) => void;
}

export const LineDrawingStartPoint = ({
  value,
  className,
  children,
  onDragStart,
  onDrag,
}: StartPointProps) => {
  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: "line",
      item: (monitor) => {
        const clientOffset = monitor.getClientOffset();
        if (clientOffset) {
          onDragStart(clientOffset.x, clientOffset.y, value);
        }
        return { value };
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [],
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        onDrag(e.clientX, e.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isDragging, onDrag]);

  return (
    <div
      ref={dragRef}
      className={`cursor-move ${isDragging ? "opacity-50" : ""} ${className}`}
    >
      {children}
    </div>
  );
};
