"use client";

import { PageInfoContext } from "@/app/utils/page-info";
import { useContext, useEffect } from "react";

export const StepContainer = ({
  step,
  maxStep,
  onStepChange,
}: {
  step: number;
  maxStep: number;
  onStepChange: (step: number) => void;
}) => {
  const { currentStep, setCurrentStep, setMaxStep } =
    useContext(PageInfoContext);

  useEffect(() => {
    setMaxStep(maxStep);
    setCurrentStep(1);
  }, [maxStep]);

  useEffect(() => {
    onStepChange(currentStep);
  }, [currentStep]);

  useEffect(() => {
    setCurrentStep(step);
  }, [step]);

  return (
    <nav className="fixed left-[calc(50%_-_40px)] -translate-x-1/2 bottom-10 flex justify-center gap-[40px]">
      {Array.from({ length: maxStep }).map((_, index) => (
        <button
          key={index}
          onClick={() => onStepChange(index + 1)}
          className={`w-[44px] h-[44px] rounded-full border-[6px] ${
            step === index + 1
              ? "bg-[#a26032] border-[#d7ac8c]"
              : "bg-[#717271] border-[#b8b9b9]"
          }`}
        ></button>
      ))}
    </nav>
  );
};
