"use client";

import { useContext, useEffect } from "react";
import { PageInfoContext } from "../utils/page-info";
import { usePathname } from "next/navigation";
import { Button } from "./buttons/button";

export const RightTopStepContainer = ({
  maxStep,
  className = "",
}: {
  maxStep: number;
  className?: string;
}) => {
  const { currentStep, setCurrentStep, setMaxStep, navigationDirection } =
    useContext(PageInfoContext);
  setMaxStep(maxStep)

  return (
    <nav
      className={`fixed right-[120px] top-[130px] flex justify-start items-center gap-[20px] rounded-l-full bg-[#e3e3e3] h-[90px] pl-[18px] pr-[40px] z-[1] ${className}`}
    >
      {Array.from({ length: maxStep }).map((_, index) => (
        <Button
          key={index}
          onClick={() => setCurrentStep(index + 1)}
          className={`w-[55px] h-[55px] rounded-full text-white text-[40px] font-bold ${currentStep === index + 1 ? "bg-[#edc34f]" : "bg-[#a6a6a6]"
            }`}
        >
          {index + 1}
        </Button>
      ))}
    </nav>
  );
};
