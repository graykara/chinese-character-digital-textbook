"use client";

import LEFT from "./left-button.png";
import RIGHT from "./right-button.png";
import CAN_PRESS_LEFT from "./left-button-can-press.png";
import CAN_PRESS_RIGHT from "./right-button-can-press.png";
import { PageInfoContext } from "@/app/utils/page-info";
import { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";

export const StepContainerArrow = ({
  // step,
  maxStep,
  // onStepChange,
  className = "",
}: {
  // step: number;
  maxStep: number;
  // onStepChange: (step: number) => void;
  className?: string;
}) => {
  const { currentStep, setCurrentStep, setMaxStep, navigationDirection } =
    useContext(PageInfoContext);
  const pathname = usePathname();

  useEffect(() => {
    setMaxStep(maxStep);
  }, [maxStep, pathname]);

  // useEffect(() => {
  //   onStepChange(currentStep);
  // }, [currentStep]);

  // useEffect(() => {
  //   setCurrentStep(step);
  // }, [step]);

  return (
    <nav className={`flex justify-center gap-6 ${className}`}>
      <button onClick={() => setCurrentStep(currentStep - 1)} disabled={currentStep <= 1}>
        <img src={currentStep <= 1 ? LEFT.src : CAN_PRESS_LEFT.src} alt="left" />
      </button>
      <div className="flex items-center gap-5">
        {Array.from({ length: maxStep }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentStep(index + 1)}
            className={`w-6 h-6 m-1 rounded-full ${currentStep === index + 1 ? "bg-[#2d6879]" : "bg-[#bcbac4]"
              }`}
          />
        ))}
      </div>
      <button onClick={() => setCurrentStep(currentStep + 1)} disabled={currentStep >= maxStep}>
        <img
          src={currentStep >= maxStep ? RIGHT.src : CAN_PRESS_RIGHT.src}
          alt="right"
        />
      </button>
    </nav>
  );
};
