"use client";

import { useEffect, useState } from "react";
import { Navbar } from "../components/navbar";
import { usePathname } from "next/navigation";
import {
  getChapterNumberOfPath,
  getIsLastPageOfPath,
  getLessonNumberOfPath,
  getNextPage,
  getPageNumberOfPath,
  getPrevPage,
  getSubChatperOfPath,
} from "./link";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import "animate.css";
import { FloatingButtonContainer } from "../components/floating-button-container";
import { PageInfoContext } from "../utils/page-info";
import { SoundStopper } from "./sound-stopper";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const pageNumber = getPageNumberOfPath(pathname) || 1;

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [maxStep, setMaxStep] = useState(1);
  const [navigationDirection, setNavigationDirection] = useState<
    "prev" | "next" | null
  >(null);

  const [currentLesson, setCurrentLesson] = useState(1);
  const [currentChapter, setCurrentChapter] = useState(1);
  const [currentSubChapter, setCurrentSubChapter] = useState("");
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    Howler.stop();
    setMaxStep(1);
    setCurrentStep(1);
    setCurrentLesson(getLessonNumberOfPath(pathname) || 1);
    setCurrentChapter(getChapterNumberOfPath(pathname) || 1);
    setCurrentSubChapter(getSubChatperOfPath(pathname) || "");
    setIsLastPage(getIsLastPageOfPath(pathname) || false);
  }, [pathname]);

  useEffect(() => {
    if (navigationDirection === "prev") {
      setCurrentStep(maxStep)
    } else {
      setCurrentStep(1)
    }
  }, [pathname, navigationDirection, maxStep])

  const [scale, setScale] = useState(1);

  const handleWindowResize = () => {
    let ratio = 1;
    if (window.innerWidth / window.innerHeight > 1.78) {
      // 세로가 더 길어져서 짤릴 때
      ratio = (window.innerHeight * 1920) / 1080 / 1920;
    } else {
      ratio = window.innerWidth < 1920 ? window.innerWidth / 1920 : 1;
    }
    setScale(ratio);
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <PageInfoContext.Provider
      value={{
        title,
        subtitle,
        setTitle,
        setSubtitle,
        currentStep,
        maxStep,
        setCurrentStep,
        setMaxStep,
        navigationDirection,
        setNavigationDirection,
        pageNumber: Number(pageNumber) || 1,
        currentLesson,
        currentChapter,
        setCurrentLesson,
        setCurrentChapter,
        currentSubChapter,
        setCurrentSubChapter,
        scale,
      }}
    >
      <SoundStopper />
      <DndProvider backend={HTML5Backend}>
        {/* <AudioProvider> */}
        <Navbar />

        <div className="grid grid-cols-[40px__1760px__1fr]">
          <div className="flex justify-end items-center">
            {1 < currentStep ? (
              <div className="mt-0">
                <button
                  onClick={() => {
                    setCurrentStep((prev) => prev - 1);
                  }}
                  className="group"
                >
                  <img
                    src="/ui/prev-button-off.png"
                    className={"block group-hover:hidden"}
                  />
                  <img
                    src="/ui/prev-button-on.png"
                    className={"hidden group-hover:block"}
                  />
                </button>
              </div>
            ) : (
              <Link href={getPrevPage(pathname) ?? ""}>
                <button
                  className="group"
                  onClick={() => setNavigationDirection("prev")}
                >
                  <img
                    src="/ui/prev-button-off.png"
                    className={"block group-hover:hidden"}
                  />
                  <img
                    src="/ui/prev-button-on.png"
                    className={"hidden group-hover:block"}
                  />
                </button>
              </Link>
            )}
          </div>
          <div className="relative w-[1760px] h-[990px] bg-white flex flex-col overflow-hidden">
            {children}
          </div>
          <div className={`flex justify-start items-center ${isLastPage && currentStep === maxStep ? "hidden" : ""}`}>
            {currentStep < maxStep ? (
              <div className="mt-0">
                <button
                  className="group"
                  onClick={() => {
                    setCurrentStep((prev) => prev + 1);
                  }}
                >
                  <img
                    src="/ui/next-button-off.png"
                    className={"block group-hover:hidden"}
                  />
                  <img
                    src="/ui/next-button-on.png"
                    className={"hidden group-hover:block"}
                  />
                </button>
              </div>
            ) : (
              <Link href={getNextPage(pathname) ?? ""}>
                <button
                  className="group"
                  onClick={() => setNavigationDirection("next")}
                >
                  <img
                    src="/ui/next-button-off.png"
                    className={"block group-hover:hidden"}
                  />
                  <img
                    src="/ui/next-button-on.png"
                    className={"hidden group-hover:block"}
                  />
                </button>
              </Link>
            )}
          </div>
        </div>

        <FloatingButtonContainer />
        {/* </AudioProvider> */}
      </DndProvider>
    </PageInfoContext.Provider>
  );
}
