"use client";

import { PropsWithChildren } from "react";
import { useDrag } from "react-dnd";

interface Props extends PropsWithChildren {
  hanja: string;
  index: number;
  moveCard: () => {};
}

export const DraggableHanjaCard = ({
  hanja,
  index,
  moveCard,
  children,
}: Props) => {
  const [{ isDragging }, drag] = useDrag({
    type: "hanja",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} className={`cursor-move ${isDragging ? "opacity-50" : ""}`}>
      {children}
    </div>
  );
};
