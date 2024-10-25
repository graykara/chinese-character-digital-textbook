import HEADER from "./header.png";

export const Header = () => {
  return (
    <header className="pt-1 pb-3 animate__animated animate__fadeIn">
      <img src={HEADER.src} />
    </header>
  );
};
