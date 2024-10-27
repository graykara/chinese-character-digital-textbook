import HEADER from "./header.png";

export const Header = () => {
  return (
    <header className="pt-3 pb-2 animate__animated animate__fadeIn">
      <img src={HEADER.src} />
    </header>
  );
};
