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
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import "animate.css";
import { FloatingButtonContainer } from "../components/floating-button-container";
import { AudioProvider } from "../utils/audio/audio-player";
import { AudioLink } from "../utils/audio/audio-link";
import { PageInfoContext } from "../utils/page-info";
import { activityStartSound } from "../utils/activity-start-sound";

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
        pageNumber,
        currentLesson,
        currentChapter,
        setCurrentLesson,
        setCurrentChapter,
        currentSubChapter,
        setCurrentSubChapter,
        scale,
      }}
    >
      <DndProvider backend={HTML5Backend}>
        <AudioProvider>
          <Navbar />

          <div className="grid grid-cols-[40px__1760px__1fr]">
            <div className="flex justify-end items-center">
              {1 < currentStep ? (
                <div className="mt-0">
                  <button
                    onMouseOver={() => setHoverPrev(true)}
                    onMouseLeave={() => setHoverPrev(false)}
                    onClick={() => {
                      activityStartSound.play();
                      setCurrentStep((prev) => prev - 1);
                    }}
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
                </div>
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
                <div className="mt-0">
                  <button
                    onMouseOver={() => setHoverNext(true)}
                    onMouseLeave={() => setHoverNext(false)}
                    onClick={() => {
                      activityStartSound.play();
                      setCurrentStep((prev) => prev + 1);
                    }}
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
                </div>
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
      </DndProvider>
    </PageInfoContext.Provider>
  );
}
