import { ReactNode, useEffect, useRef, useState } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  answer?: string | ReactNode;
  showAnswer?: boolean;
  penClassName?: string;
  containerClassName?: string;
  isExample?: boolean;
}

export const InputWithPen = ({
  answer,
  showAnswer,
  penClassName,
  containerClassName,
  isExample = false,
  ...props
}: Props) => {
  const divRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(props.value || "");
  const [showAnswerReactNode, setShowAnswerReactNode] =
    useState<boolean>(false);

  useEffect(() => {
    if (showAnswer && inputRef.current && divRef.current) {
      if (typeof answer === "string") setValue(answer || "");
      else setShowAnswerReactNode(true);
      inputRef.current.className += isExample
        ? " text-example"
        : " text-answer";
      inputRef.current.readOnly = true;
    } else if (!showAnswer && inputRef.current && divRef.current) {
      setValue("");
      setShowAnswerReactNode(false);
      inputRef.current.className = inputRef.current.className
        .replace("text-answer", "")
        .replace("text-example", "");
      inputRef.current.readOnly = false;
    }
  }, [showAnswer, inputRef, divRef]);

  return (
    <div className={containerClassName || ""}>
      <div
        className={`relative w-fit ${showAnswerReactNode ? "overflow-x-auto overflow-y-hidden" : ""}`}
      >
        <input
          ref={inputRef}
          {...props}
          value={value}
          onChange={(e) => {
            setValue(e.currentTarget.value);
            props.onChange?.(e);
          }}
        />

        <div
          ref={divRef}
          className={`absolute left-0 top-0 whitespace-nowrap ${isExample ? "text-example" : "text-answer"} ${showAnswerReactNode ? "block" : "hidden"} ${props.className}`}
        >
          {answer}
        </div>

        {value === "" && !showAnswer ? (
          <img
            src="/ui/textarea-pen.png"
            className={`absolute top-1/2 -translate-y-1/2 pointer-events-none ${penClassName || ""
              }`}
          />
        ) : null}
      </div>
    </div>
  );
};
