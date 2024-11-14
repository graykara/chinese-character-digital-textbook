"use client";

import LEFT from "./left-button.png";
import RIGHT from "./right-button.png";
import CAN_PRESS_LEFT from "./left-button-can-press.png";
import CAN_PRESS_RIGHT from "./right-button-can-press.png";
import { PageInfoContext } from "@/app/utils/page-info";
import { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "../buttons/button";

export const StepContainerArrow = ({
  maxStep,
  className = "",
}: {
  maxStep: number;
  className?: string;
}) => {
  const { currentStep, setCurrentStep, setMaxStep, navigationDirection } =
    useContext(PageInfoContext);
  setMaxStep(maxStep);

  return (
    <nav className={`flex justify-center gap-6 ${className}`}>
      <Button onClick={() => setCurrentStep(currentStep - 1)} disabled={currentStep <= 1}>
        <img src={currentStep <= 1 ? LEFT.src : CAN_PRESS_LEFT.src} alt="left" />
      </Button>
      <div className="flex items-center gap-5">
        {Array.from({ length: maxStep }).map((_, index) => (
          <Button
            key={index}
            onClick={() => setCurrentStep(index + 1)}
            className={`w-6 h-6 m-1 rounded-full ${currentStep === index + 1 ? "bg-[#2d6879]" : "bg-[#bcbac4]"
              }`}
          />
        ))}
      </div>
      <Button onClick={() => setCurrentStep(currentStep + 1)} disabled={currentStep >= maxStep}>
        <img
          src={currentStep >= maxStep ? RIGHT.src : CAN_PRESS_RIGHT.src}
          alt="right"
        />
      </Button>
    </nav>
  );
};
