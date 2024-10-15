import { createContext, Dispatch, SetStateAction } from "react";

export const PageInfoContext = createContext<{
  title: string;
  subtitle: string;
  setTitle: Dispatch<SetStateAction<string>>;
  setSubtitle: Dispatch<SetStateAction<string>>;
  currentStep: number;
  maxStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  setMaxStep: Dispatch<SetStateAction<number>>;
  navigationDirection: "prev" | "next" | null;
  setNavigationDirection: Dispatch<SetStateAction<"prev" | "next" | null>>;
  pageNumber: number;
}>({
  title: "",
  subtitle: "",
  setTitle: () => {},
  setSubtitle: () => {},
  currentStep: 1,
  maxStep: 1,
  setCurrentStep: () => {},
  setMaxStep: () => {},
  navigationDirection: null,
  setNavigationDirection: () => {},
  pageNumber: 1,
});
