"use client";

import { PropsWithChildren, ReactNode } from "react";
import { useDrag } from "react-dnd";

interface Props extends PropsWithChildren {
  value: string | ReactNode;
  className?: string;
}

export const DraggableCard = ({ value, className, children }: Props) => {
  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: "card",
      item: { value },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [],
  );

  return (
    <div
      ref={dragRef}
      className={`cursor-move ${isDragging ? "opacity-50" : ""} ${className}`}
    >
      {children}
    </div>
  );
};
