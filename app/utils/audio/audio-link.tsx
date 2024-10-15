import Link from "next/link";
import { useAudio } from "./audio-player";

interface AudioLinkProps {
  href: string;
  children: React.ReactNode;
}

export const AudioLink: React.FC<AudioLinkProps> = ({ href, children }) => {
  const { play } = useAudio();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // play();
    // 소리 재생 시작 후 약간의 지연을 두고 페이지 전환
    setTimeout(() => {
      window.location.href = href;
    }, 100); // 필요에 따라 지연 시간 조정
  };

  return (
    <Link href={href} onClick={handleClick}>
      {children}
    </Link>
  );
};
