import { HeaderContainer } from "./header-container";

export const CultureHeader = ({ title }: { title: string }) => {
  return (
    <HeaderContainer className="mt-12 flex items-end gap-5">
      <img src="/header/culture.png" alt="culture-header" />

      <p className="animate__animated animate__flipInX animate__delay-1s font-cookierun text-[#3f8ecb] text-[50px] tracking-tight -mb-2">{title}</p>
    </HeaderContainer>
  );
};
