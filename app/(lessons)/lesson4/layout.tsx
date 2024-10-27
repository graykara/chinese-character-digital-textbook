"use client";

import { PageInfoContext } from "@/app/utils/page-info";
import { PropsWithChildren, useContext } from "react";

export default function Lesson1Layout({ children }: PropsWithChildren) {
  const { setTitle, setCurrentLesson } = useContext(PageInfoContext);
  setTitle("IV. 짧은 글, 긴 울림");
  setCurrentLesson(4);

  return children;
}
