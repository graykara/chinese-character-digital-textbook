import { ReactNode, useState } from "react";
import { useDrop } from "react-dnd";

interface Props {
  className?: string;
  onDrop?: (value: string | ReactNode) => void;
}

export const DropZone = ({ className, onDrop }: Props) => {
  const [droppedValue, setDroppedValue] = useState<string | ReactNode | null>(
    null,
  );

  const [{ isOver }, drop] = useDrop({
    accept: "card",
    drop: (item) => {
      onDrop?.(item);
      setDroppedValue(item.value);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className={`${isOver ? "opacity-50" : ""} ${className}`}>
      {droppedValue}
    </div>
  );
};
