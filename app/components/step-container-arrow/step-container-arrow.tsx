"use client";

import LEFT from "./left-button.png";
import RIGHT from "./right-button.png";
import CAN_PRESS_LEFT from "./left-button-can-press.png";
import CAN_PRESS_RIGHT from "./right-button-can-press.png";
import { PageInfoContext } from "@/app/utils/page-info";
import { useContext, useEffect } from "react";

export const StepContainerArrow = ({
  step,
  maxStep,
  onStepChange,
  className = "",
}: {
  step: number;
  maxStep: number;
  onStepChange: (step: number) => void;
  className?: string;
}) => {
  const { currentStep, setCurrentStep, setMaxStep } =
    useContext(PageInfoContext);

  useEffect(() => {
    setCurrentStep(1);
    setMaxStep(maxStep);
  }, [maxStep]);

  useEffect(() => {
    onStepChange(currentStep);
  }, [currentStep]);

  useEffect(() => {
    setCurrentStep(step);
  }, [step]);

  return (
    <nav className={`flex justify-center gap-6 ${className}`}>
      <button onClick={() => onStepChange(step - 1)} disabled={step <= 1}>
        <img src={step <= 1 ? LEFT.src : CAN_PRESS_LEFT.src} alt="left" />
      </button>
      <div className="flex items-center gap-5">
        {Array.from({ length: maxStep }).map((_, index) => (
          <button
            key={index}
            onClick={() => onStepChange(index + 1)}
            className={`w-8 h-8 rounded-full ${
              step === index + 1 ? "bg-[#2d6879]" : "bg-[#bcbac4]"
            }`}
          />
        ))}
      </div>
      <button onClick={() => onStepChange(step + 1)} disabled={step >= maxStep}>
        <img
          src={step >= maxStep ? RIGHT.src : CAN_PRESS_RIGHT.src}
          alt="right"
        />
      </button>
    </nav>
  );
};
