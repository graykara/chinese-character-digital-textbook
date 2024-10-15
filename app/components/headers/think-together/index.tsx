import IMAGE from "./image.png";

export const ThinkTogetherHeader = ({
  title = "제목을 입력하세요.",
}: {
  title: string;
}) => {
  return (
    <div className="animate__animated animate__fadeIn relative flex justify-center pb-[30px]">
      <img src={IMAGE.src} alt="image" className="block" />

      <ul className="list-disc marker:text-[#567c56] pl-3">
        <li className="absolute top-[170px] left-[250px] text-[50px] max-w-[1300px]">
          {title}
        </li>
      </ul>
    </div>
  );
};
