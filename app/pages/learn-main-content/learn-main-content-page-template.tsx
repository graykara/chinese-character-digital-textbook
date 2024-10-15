import { ContentContainer } from "@/app/components/content-container";
import { PropsWithChildren } from "react";
import BACKGROUND from "./background.png";

interface Props extends PropsWithChildren {}

export const LearnMainContentPageTemplate = ({ children }: Props) => {
  return (
    <ContentContainer
      className="w-full h-full"
      style={{
        backgroundImage: `url(${BACKGROUND.src})`,
      }}
    >
      {children}
    </ContentContainer>
  );
};
