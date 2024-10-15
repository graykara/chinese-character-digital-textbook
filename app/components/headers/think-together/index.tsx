import { ReactNode } from "react";
import IMAGE from "./image.png";

export const ThinkTogetherHeader = ({
  title = "제목을 입력하세요.",
  subTitle = "",
}: {
  title: string | ReactNode;
  subTitle?: string | ReactNode;
}) => {
  return (
    <>
      <div className="animate__animated animate__fadeIn relative flex justify-center pb-[30px]">
        <img src={IMAGE.src} alt="image" className="block" />

      <ul className="list-disc marker:text-[#567c56] pl-3">
        <li className="absolute top-[177px] left-[200px] text-[55px] leading-[62px] tracking-[-2.5px] max-w-[1300px] break-keep">
          {title}
        </li>
      </ul>
      <div className="relative left-[250px] text-[50px] max-w-[1300px]">
        {subTitle}
      </div>
    </div>
    </>
  );
};
