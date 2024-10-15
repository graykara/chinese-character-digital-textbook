import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
}

export const TitleContainer = ({ className = "", children }: Props) => {
  return (
    <div
      className={`animate__animated animate__flipInX relative ml-[172px] text-[55px] leading-[62px] tracking-[-2.5px] max-w-[1400px] mx-auto break-keep ${className}`}
    >
      {children}
    </div>
  );
};
