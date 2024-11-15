"use client";

import { PageInfoContext } from "@/app/utils/page-info";
import { PropsWithChildren, useContext } from "react";

export default function Lesson3OutroLayout({ children }: PropsWithChildren) {
  const { setSubtitle, setCurrentChapter } = useContext(PageInfoContext);
  setSubtitle("단원 마무리");
  setCurrentChapter(-2);

  return children;
}
