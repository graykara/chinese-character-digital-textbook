export const ProblemNumberIcon = ({
  number,
  type,
}: {
  number: number;
  type?: string;
}) => {
  return (
    <div className="flex-none w-fit h-fit relative">
      {type ? (
        <img src="/ui/solve-problem-number-container2.png" />
      ) : (
        <img src="/ui/solve-problem-number-container.png" />
      )}
      <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-cookierun text-white font-[60px]">
        {number}
      </p>
    </div>
  );
};
