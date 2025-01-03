"use client";

import { PageInfoContext } from "@/app/utils/page-info";
import { PropsWithChildren, useContext } from "react";

export default function Lesson1Layout({ children }: PropsWithChildren) {
  const { setTitle, setCurrentLesson } = useContext(PageInfoContext);
  setTitle("II. 한자와 어휘");
  setCurrentLesson(2);

  return children;
}
