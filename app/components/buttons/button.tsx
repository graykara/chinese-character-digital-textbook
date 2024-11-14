import { ButtonHTMLAttributes, PropsWithChildren } from "react";

export const Button = ({ children, onClick, ...props }: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
    return <button {...props} onClick={(e) => {
        Howler.stop();
        onClick?.(e);
    }}>{children}</button>;
};
