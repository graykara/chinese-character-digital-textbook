import { ReactNode, useEffect, useState } from "react";

interface Props {
  options: (string | ReactNode)[];
  showAnswer: boolean;
  answers: number[];
  isMultiple?: boolean;
  className?: string;
}

export const SelectionQuiz = ({
  options = [],
  showAnswer = false,
  answers = [],
  isMultiple = false,
  className = "",
}: Props) => {
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

  const handleSelection = (index: number) => {
    if (showAnswer) return;

    if (isMultiple)
      selectedOptions.includes(index)
        ? setSelectedOptions(selectedOptions.filter((_, i) => i !== index))
        : setSelectedOptions(selectedOptions.concat(index));
    else setSelectedOptions([index]);
  };

  useEffect(() => {
    if (showAnswer) setSelectedOptions([])
  }, [showAnswer])

  return (
    <div className={`${className}`}>
      {options.map((option, index) => (
        <div
          key={index}
          className={`flex items-center gap-3 cursor-pointer ${showAnswer && answers.includes(index + 1) ? "text-answer" : !showAnswer && selectedOptions.includes(index + 1) ? "text-example" : ""}`}
          onClick={() => handleSelection(index + 1)}
          style={{
            opacity: showAnswer && !answers.includes(index + 1) ? 0.5 : 1
          }}
        >
          <div
            className={`flex-none w-14 h-14 rounded-full text-white flex justify-center items-center ${showAnswer && answers.includes(index + 1) ? "bg-answer" : !showAnswer && selectedOptions.includes(index + 1) ? "bg-example" : "bg-[#5c94ae]"}`}
          >
            {index + 1}
          </div>
          {option}
        </div>
      ))}
    </div>
  );
};
