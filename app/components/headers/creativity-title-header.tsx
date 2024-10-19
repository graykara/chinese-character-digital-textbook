import { ReactNode } from "react";

export const CreativityTitleHeader = ({
  title,
  className = "",
  containerClassName = "",
}: {
  title: string | ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div className={containerClassName}>
      <div
        className={`animate__animated animate__flipInX w-fit flex justify-center items-center ${className}`}
      >
        <img src="/header/creativity-title.png" />
        <p className="absolute text-white">{title}</p>
      </div>
    </div>
  );
};
