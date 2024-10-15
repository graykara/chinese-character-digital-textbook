import HEADER from "../assets/header.png";

export const Header = () => {
  return (
    <header className="pt-5 animate__animated animate__fadeIn">
      <img src={HEADER.src} />
    </header>
  );
};
