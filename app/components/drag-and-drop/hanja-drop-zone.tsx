import { PropsWithChildren } from "react";
import { useDrop } from "react-dnd";

interface Props extends PropsWithChildren {
  onDrop: (index: number) => void;
}

export const HanjaDropZone = ({ onDrop, children }: Props) => {
  const [{ isOver }, drop] = useDrop({
    accept: "hanja",
    drop: (item) => onDrop(item.index),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className={`${isOver ? "opacity-50" : ""}`}>
      {children}
    </div>
  );
};
