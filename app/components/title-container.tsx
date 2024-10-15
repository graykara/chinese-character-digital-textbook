import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
}

export const TitleContainer = ({ className = "", children }: Props) => {
  return (
    <div
      className={`animate__animated animate__flipInX relative max-w-[1500px] ml-[130px] break-keep ${className}`}
    >
      {children}
    </div>
  );
};
