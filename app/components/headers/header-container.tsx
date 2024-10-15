import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
}

export const HeaderContainer = ({ className, children }: Props) => {
  return (
    <header className={`animate__animated animate__fadeIn ${className || ""}`}>
      {children}
    </header>
  );
};
