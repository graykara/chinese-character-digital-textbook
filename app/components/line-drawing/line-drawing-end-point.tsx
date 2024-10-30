import { ReactNode } from "react";
import { useDrop } from "react-dnd";

interface LineDrawingEndPointProps {
  className?: string;
  onDrop?: (value: string | ReactNode, x: number, y: number) => void;
}

export const LineDrawingEndPoint = ({
  className,
  onDrop,
}: LineDrawingEndPointProps) => {
  const [{ isOver }, drop] = useDrop({
    accept: "line",
    drop: (item: { value: string | ReactNode }, monitor) => {
      const clientOffset = monitor.getClientOffset();
      if (clientOffset && onDrop) {
        onDrop(item.value, clientOffset.x, clientOffset.y);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className={`${isOver ? "opacity-50" : ""} ${className}`} />
  );
};
