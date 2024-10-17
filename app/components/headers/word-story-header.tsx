import { ReactNode } from "react";
import { HeaderContainer } from "./header-container";

export const WordStoryHeader = ({ title }: { title: string | ReactNode }) => {
  return (
    <HeaderContainer className="mt-10 flex items-end gap-5">
      <img src="/header/word-story.png" alt="culture-header" />

      <p className="animate__animated animate__flipInX animate__delay-1s font-cookierun text-[#cd482d] text-[50px] tracking-tight">
        {title}
      </p>
    </HeaderContainer>
  );
};
