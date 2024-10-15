export const Quiz = ({
  image,
  answerContainerImage,
  answer,
  showAnswer,
}: {
  image: string;
  answerContainerImage: string;
  answer: string;
  showAnswer: boolean;
}) => {
  return (
    <div className="flex flex-col items-center gap-10">
      <img src={image} className="h-[400px] mb-10" />

      <div className="relative">
        <img src={answerContainerImage} />

        <input className="absolute left-[250px] top-12 text-center w-[480px] focus:outline-none bg-transparent" />

        {showAnswer ? (
          <p
            className={`absolute left-[780px] text-center text-red-500 ${
              answer.length > 20 ? "text-[34px] top-14" : "top-12 w-[460px]"
            }`}
          >
            {answer}
          </p>
        ) : null}
      </div>
    </div>
  );
};
