import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
  sound?: string;
}

export const TitleContainer = ({ className = "", children }: Props) => {
  return (
    <div
      className={`animate__animated animate__flipInX relative ml-[110px] text-[55px] leading-[62px] tracking-[-2.5px] max-w-[1500px] mx-auto break-keep ${className}`} //ml-[172px]
    >
      {children}
    </div>
  );
};

export const TitleContainer2 = ({ className = "", children }: Props) => {
  // flower + sentence 2 lines
  return (
    <div
      className={`animate__animated animate__flipInX relative mt-1 ml-[110px] text-[45px] leading-[58px] tracking-[-2.2px] max-w-[1500px] mx-auto break-keep ${className}`}
    >
      {children}
    </div>
  );
};
