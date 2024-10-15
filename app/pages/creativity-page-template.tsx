import { PropsWithChildren } from "react";

export const CreativityPageTemplate = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative flex justify-end items-end mt-6">
      <img src="/background/creativity-background.png" />

      <div className="absolute w-[1630px] h-[816px] left-[130px] top-[150px] flex flex-col">
        {children}
      </div>
    </div>
  );
};
