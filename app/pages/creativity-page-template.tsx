import { PropsWithChildren } from "react";

export const CreativityPageTemplate = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative flex justify-end items-end">
      <img src="/background/creativity-background.jpg" />

      <div className="absolute w-[1630px] h-[816px] left-[130px] top-[175px] flex flex-col">
        {children}
      </div>
    </div>
  );
};
