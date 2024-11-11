import { useEffect, useRef, useState } from "react";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  answer?: string;
  showAnswer?: boolean;
  penClassName?: string;
  containerClassName?: string;
  isExample?: boolean;
}

export const TextareaWithPen = ({
  answer,
  showAnswer,
  penClassName,
  containerClassName,
  ...props
}: Props) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState(props.value || "");

  useEffect(() => {
    if (showAnswer && inputRef.current) {
      setValue(answer || "");
      inputRef.current.className += " text-answer";
      inputRef.current.readOnly = true;
    } else if (!showAnswer && inputRef.current) {
      setValue("");
      inputRef.current.className = inputRef.current.className.replace(
        "text-answer",
        "",
      );
      inputRef.current.readOnly = false;
    }
  }, [showAnswer]);

  return (
    <>
      {/* <div className={`relative w-fit ${containerClassName || ""}`}> */}
      <textarea
        ref={inputRef}
        {...props}
        value={value}
        onChange={(e) => {
          setValue(e.currentTarget.value);
          props.onChange?.(e);
        }}
        className={`resize-none ${containerClassName}`}
      ></textarea>

      {value === "" && !showAnswer ? (
        <img
          src="/ui/textarea-pen.png"
          className={`absolute pointer-events-none ${penClassName || ""}`}
        />
      ) : null}
      {/* </div> */}
    </>
  );
};

export const OLD_TextareaWithPen = ({
  answer,
  showAnswer,
  className,
  penClassName,
  containerClassName,
  isExample = false,
  ...props
}: Props & { className?: string }) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
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
    <>
      <div className={`relative w-fit ${containerClassName || ""}`}>
        <textarea
          ref={inputRef}
          {...props}
          value={value}
          onChange={(e) => {
            setValue(e.currentTarget.value);
            props.onChange?.(e);
          }}
          className={`resize-none ${className}`}
        ></textarea>

        {value === "" && !showAnswer ? (
          <img
            src="/ui/textarea-pen.png"
            className={`absolute pointer-events-none ${penClassName || ""}`}
          />
        ) : null}
      </div>
    </>
  );
};
