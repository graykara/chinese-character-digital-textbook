"use client";

import { useEffect, useState } from "react";
import { Navbar } from "../components/navbar";
import { usePathname } from "next/navigation";
import {
  getChapterNumberOfPath,
  getLessonNumberOfPath,
  getNextPage,
  getPageNumberOfPath,
  getPrevPage,
  getSubChatperOfPath,
} from "./link";

import "animate.css";
import { FloatingButtonContainer } from "../components/floating-button-container";
import { AudioProvider } from "../utils/audio/audio-player";
import { AudioLink } from "../utils/audio/audio-link";
import { PageInfoContext } from "../utils/page-info";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const pageNumber = getPageNumberOfPath(pathname) || 1;

  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);

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

  useEffect(() => {
    setCurrentLesson(getLessonNumberOfPath(pathname) || 1);
    setCurrentChapter(getChapterNumberOfPath(pathname) || 1);
    setCurrentSubChapter(getSubChatperOfPath(pathname) || "");
  }, [pathname]);

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
        pageNumber,
        currentLesson,
        currentChapter,
        setCurrentLesson,
        setCurrentChapter,
        currentSubChapter,
        setCurrentSubChapter,
      }}
    >
      <AudioProvider>
        <Navbar />

        <div className="grid grid-cols-[40px__1760px__1fr]">
          <div className="flex justify-end items-center">
            {1 < currentStep ? (
              <button
                onMouseOver={() => setHoverPrev(true)}
                onMouseLeave={() => setHoverPrev(false)}
                onClick={() => setCurrentStep((prev) => prev - 1)}
              >
                <img
                  src="/ui/prev-button-off.png"
                  className={hoverPrev ? "hidden" : ""}
                />
                <img
                  src="/ui/prev-button-on.png"
                  className={hoverPrev ? "" : "hidden"}
                />
              </button>
            ) : (
              <AudioLink href={getPrevPage(pathname) ?? ""}>
                <button
                  onMouseOver={() => setHoverPrev(true)}
                  onMouseLeave={() => setHoverPrev(false)}
                  onClick={() => setNavigationDirection("prev")}
                >
                  <img
                    src="/ui/prev-button-off.png"
                    className={hoverPrev ? "hidden" : ""}
                  />
                  <img
                    src="/ui/prev-button-on.png"
                    className={hoverPrev ? "" : "hidden"}
                  />
                </button>
              </AudioLink>
            )}
          </div>
          <div className="relative w-[1760px] h-[990px] bg-white flex flex-col overflow-hidden">
            {children}
          </div>
          <div className="flex justify-start items-center">
            {currentStep < maxStep ? (
              <button
                onMouseOver={() => setHoverNext(true)}
                onMouseLeave={() => setHoverNext(false)}
                onClick={() => setCurrentStep((prev) => prev + 1)}
              >
                <img
                  src="/ui/next-button-off.png"
                  className={hoverNext ? "hidden" : ""}
                />
                <img
                  src="/ui/next-button-on.png"
                  className={hoverNext ? "" : "hidden"}
                />
              </button>
            ) : (
              <AudioLink href={getNextPage(pathname) ?? ""}>
                <button
                  onMouseOver={() => setHoverNext(true)}
                  onMouseLeave={() => setHoverNext(false)}
                  onClick={() => setNavigationDirection("next")}
                >
                  <img
                    src="/ui/next-button-off.png"
                    className={hoverNext ? "hidden" : ""}
                  />
                  <img
                    src="/ui/next-button-on.png"
                    className={hoverNext ? "" : "hidden"}
                  />
                </button>
              </AudioLink>
            )}
          </div>
        </div>

        <FloatingButtonContainer />
      </AudioProvider>
    </PageInfoContext.Provider>
  );
}
