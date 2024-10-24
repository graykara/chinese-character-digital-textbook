import { CSSProperties, useEffect, useRef, useState } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  answer?: string;
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
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(props.value || "");

  useEffect(() => {
    if (showAnswer && inputRef.current) {
      setValue(answer || "");
      inputRef.current.className += isExample
        ? " text-example"
        : " text-answer";
      inputRef.current.readOnly = true;
    } else if (!showAnswer && inputRef.current) {
      setValue("");
      inputRef.current.className = inputRef.current.className
        .replace("text-answer", "")
        .replace("text-example", "");
      inputRef.current.readOnly = false;
    }
  }, [showAnswer]);

  return (
    <div className={`relative w-fit ${containerClassName || ""}`}>
      <input
        ref={inputRef}
        {...props}
        value={value}
        onChange={(e) => {
          setValue(e.currentTarget.value);
          props.onChange?.(e);
        }}
      />

      {value === "" && !showAnswer ? (
        <img
          src="/ui/textarea-pen.png"
          className={`absolute top-1/2 -translate-y-1/2 pointer-events-none ${
            penClassName || ""
          }`}
        />
      ) : null}
    </div>
  );
};
