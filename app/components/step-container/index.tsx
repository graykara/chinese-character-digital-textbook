"use client";

import { PageInfoContext } from "@/app/utils/page-info";
import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";

export const StepContainer = ({
  // step,
  maxStep,
  // onStepChange,
}: {
  // step: number;
  maxStep: number;
  // onStepChange: (step: number) => void;
}) => {
  const { currentStep, setCurrentStep, setMaxStep, navigationDirection } =
    useContext(PageInfoContext);
  const pathname = usePathname();

  useEffect(() => {
    console.log("navigationDirection", navigationDirection, currentStep, maxStep, pathname);
    if (navigationDirection === "prev") {
      console.log("set current step to maxStep", maxStep);
      setCurrentStep(maxStep);
    } else {
      console.log("set current step to 1");
      setCurrentStep(1);
    }
    setMaxStep(maxStep);
  }, [maxStep, navigationDirection, pathname]);

  // useEffect(() => {
  //   onStepChange(currentStep);
  // }, [currentStep]);

  // useEffect(() => {
  //   setCurrentStep(step);
  // }, [step]);

  return (
    <nav className="fixed left-[calc(50%_-_40px)] -translate-x-1/2 bottom-7 flex justify-center gap-[40px]">
      {Array.from({ length: maxStep }).map((_, index) => (
        <button
          key={index}
          // onClick={() => onStepChange(index + 1)}
          onClick={() => setCurrentStep(index + 1)}
          className={`w-[44px] h-[44px] rounded-full border-[6px] ${currentStep === index + 1
            ? "bg-[#a26032] border-[#d7ac8c]"
            : "bg-[#717271] border-[#b8b9b9]"
            }`}
        ></button>
      ))}
    </nav>
  );
};
