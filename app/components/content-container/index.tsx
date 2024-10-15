import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
}

export const ContentContainer = ({
  children,
  className = "",
  style = {},
}: Props) => {
  return (
    <div
      className={`relative h-full w-[1500px] mx-auto flex flex-col justify-center items-center overflow-x-hidden overflow-y-auto ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};
