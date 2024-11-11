"use client";

import { useContext, useEffect } from "react";
import { PageInfoContext } from "../utils/page-info";
import { usePathname } from "next/navigation";

export const RightTopStepContainer = ({
  maxStep,
  // step,
  // onStepChange,
  className = "",
}: {
  maxStep: number;
  // step: number;
  // onStepChange: (step: number) => void;
  className?: string;
}) => {
  const { currentStep, setCurrentStep, setMaxStep, navigationDirection } =
    useContext(PageInfoContext);
  const pathname = usePathname();

  useEffect(() => {
    if (navigationDirection === "prev") {
      setCurrentStep(maxStep);
    } else {
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
    <nav
      className={`fixed right-[120px] top-[130px] flex justify-start items-center gap-[20px] rounded-l-full bg-[#e3e3e3] h-[90px] pl-[18px] pr-[40px] z-[1] ${className}`}
    >
      {Array.from({ length: maxStep }).map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentStep(index + 1)}
          className={`w-[55px] h-[55px] rounded-full text-white text-[40px] font-bold ${currentStep === index + 1 ? "bg-[#edc34f]" : "bg-[#a6a6a6]"
            }`}
        >
          {index + 1}
        </button>
      ))}
    </nav>
  );
};
