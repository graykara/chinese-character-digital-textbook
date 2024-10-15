import { HeaderContainer } from "./header-container";

export const CultureHeader = ({ title }: { title: string }) => {
  return (
    <HeaderContainer className="mt-11 flex items-end gap-5">
      <img src="/header/culture.png" alt="culture-header" />

      <p className="font-cookierun text-[#3f8ecb]">{title}</p>
    </HeaderContainer>
  );
};
