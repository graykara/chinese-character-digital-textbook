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
import { Button } from "../components/buttons/button";
import { activityStartSound } from "../utils/activity-start-sound";

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

  const [isPageReady, setIsPageReady] = useState(false);

  const [ignoreRightStep, setIgnoreRightStep] = useState(false);
  const [soundOnStep, setSoundOnStep] = useState<Howl | string | null>(null);

  useEffect(() => {
    // Get direction from URL params
    const urlParams = new URLSearchParams(window.location.search);
    const direction = urlParams.get('d');
    if (direction === 'p') {
      setNavigationDirection('prev');
    } else if (direction === 'n') {
      setNavigationDirection('next');
    }

    // Howler.stop();
    setSoundOnStep(activityStartSound);
    setIsPageReady(false);
    setIgnoreRightStep(false);
    setMaxStep(1);
    setCurrentStep(1);
    setCurrentLesson(getLessonNumberOfPath(pathname) || 1);
    setCurrentChapter(getChapterNumberOfPath(pathname) || 1);
    setCurrentSubChapter(getSubChatperOfPath(pathname) || "");
    setIsLastPage(getIsLastPageOfPath(pathname) || false);
  }, [pathname]);

  useEffect(() => {
    const initializePage = () => {
      console.log("initializePage", ignoreRightStep, navigationDirection, maxStep);
      if (ignoreRightStep) { setCurrentChapter(1) }
      else {
        if (navigationDirection === "prev") {
          setCurrentStep(maxStep);
        } else {
          setCurrentStep(1);
        }
      }
    };

    initializePage();

    const timeout = setTimeout(() => {
      setIsPageReady(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname, navigationDirection, maxStep]);

  if (!isPageReady) return null;

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
        pageNumber: pageNumber || 1,
        currentLesson,
        currentChapter,
        setCurrentLesson,
        setCurrentChapter,
        currentSubChapter,
        setCurrentSubChapter,
        scale: 1,
        isPageReady,
        setIsPageReady,
        ignoreRightStep,
        setIgnoreRightStep,
        soundOnStep,
        setSoundOnStep,
      }}
    >
      <SoundStopper />
      <DndProvider backend={HTML5Backend}>
        <div className="relative w-[1760px] h-[990px] bg-white flex flex-col overflow-hidden">
          {children}
        </div>
      </DndProvider>
    </PageInfoContext.Provider>
  );
}
