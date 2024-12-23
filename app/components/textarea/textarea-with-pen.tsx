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
  isExample = false,
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
  }, [showAnswer, answer]);

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
        className={`resize-none ${containerClassName} ${isExample ? "text-example" : "text-answer"}`}
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
  const divRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(props.value || "");
  const [showAnswerReactNode, setShowAnswerReactNode] = useState<boolean>(false);

  useEffect(() => {
    if (showAnswer && inputRef.current && divRef.current) {
      if (typeof answer === "string") {
        setValue(answer || "");
      } else {
        setShowAnswerReactNode(true);
        setValue("");
      }
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
    <>
      <div className={`relative w-fit ${containerClassName || ""} ${showAnswerReactNode ? "overflow-x-auto overflow-y-hidden" : ""}`}>
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

        <div
          ref={divRef}
          className={`absolute left-0 top-0 whitespace-pre-wrap ${isExample ? "text-example" : "text-answer"} ${showAnswerReactNode ? "block" : "hidden"} ${className}`}
        >
          {answer}
        </div>

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
