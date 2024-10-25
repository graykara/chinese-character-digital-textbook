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
    <div className={`mx-auto -translate-x-10 ${containerClassName}`}>
      <div
        className={`relative bg-[#963600] px-[60px] rounded-full flex justify-center items-center ${className}`}
      >
        <div className="absolute left-5 w-4 h-4 rounded-full bg-black" />
        <div className="absolute right-5 w-4 h-4 rounded-full bg-black" />
        <p className="text-white text-[50px] tracking-tight">{title}</p>
      </div>
    </div>
  );
};
