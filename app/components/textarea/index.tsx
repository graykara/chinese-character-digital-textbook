"use client";

import { HTMLAttributes, useState } from "react";
import styled from "styled-components";

export const TextareaBase = styled.textarea<{
  fontSize: number;
  lineHeight: number;
  textIndent: number;
  underlineWidth: number;
  underlineColor: string;
}>`
  font-size: ${(props) => props.fontSize}px;
  line-height: ${(props) => props.lineHeight}px;
  text-indent: ${(props) => props.textIndent}px;
  background-attachment: local;
  background-image: repeating-linear-gradient(
    transparent,
    transparent ${(props) => props.lineHeight - props.underlineWidth}px,
    ${(props) => props.underlineColor}
      ${(props) => props.lineHeight - props.underlineWidth}px,
    ${(props) => props.underlineColor} ${(props) => props.lineHeight}px,
    transparent ${(props) => props.lineHeight}px
  );

  resize: none;
  background-color: transparent;
  overflow: hidden;
`;

interface Props extends HTMLAttributes<HTMLTextAreaElement> {
  fontSize?: number;
  lineHeight?: number;
  textIndent?: number;
  underlineWidth?: number;
  underlineColor?: string;
  rows?: number;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const Textarea = ({
  fontSize = 45,
  lineHeight = 80,
  textIndent = 0,
  underlineWidth = 4,
  underlineColor = "#d2cbbd",
  rows = 3,
  value,
  onChange,
  placeholder,
  ...props
}: Props) => {
  const { className } = props;

  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <img src="/ui/textarea-box.png" />

      <div className={`absolute left-0 top-0 px-10 py-5 w-full ${className}`}>
        {!value ? (
          <img
            src="/ui/textarea-pen.png"
            className="absolute pointer-events-none"
            style={{
              height: fontSize,
              top: fontSize,
            }}
          />
        ) : null}
        <TextareaBase
          value={value}
          onChange={(e) => onChange(e.currentTarget.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full focus:outline-none placeholder:text-[#9d9483] ${
            placeholder && !value ? "pl-14" : ""
          }`}
          fontSize={fontSize}
          lineHeight={lineHeight}
          textIndent={textIndent}
          underlineWidth={underlineWidth}
          underlineColor={underlineColor}
          rows={rows}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
