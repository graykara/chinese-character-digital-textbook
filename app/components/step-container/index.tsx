"use client";

import { PageInfoContext } from "@/app/utils/page-info";
import { useContext } from "react";
import { Button } from "../buttons/button";

export const StepContainer = ({
  maxStep,
}: {
  maxStep: number;
}) => {
  const { currentStep, setCurrentStep, setMaxStep } =
    useContext(PageInfoContext);
  setMaxStep(maxStep);

  return (
    <nav className="absolute left-[calc(50%_-_40px)] -translate-x-1/2 bottom-[28px] flex justify-center gap-[40px]">
      {Array.from({ length: maxStep }).map((_, index) => (
        <Button
          key={index}
          onClick={() => setCurrentStep(index + 1)}
          className={`w-[44px] h-[44px] rounded-full border-[6px] ${currentStep === index + 1
            ? "bg-[#a26032] border-[#d7ac8c]"
            : "bg-[#717271] border-[#b8b9b9]"
            }`}
        ></Button>
      ))}
    </nav>
  );
};
