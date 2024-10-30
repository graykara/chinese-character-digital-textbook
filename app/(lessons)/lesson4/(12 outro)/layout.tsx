"use client";

import AutoplaySound from "@/app/components/autoplay-sound";
import { PageInfoContext } from "@/app/utils/page-info";
import { PropsWithChildren, useContext } from "react";

export default function ActivityLayout({ children }: PropsWithChildren) {
  const { setSubtitle, setCurrentChapter } = useContext(PageInfoContext);
  setSubtitle("단원 마무리");
  setCurrentChapter(12);

  return (
    <>
      {children}
      <AutoplaySound />
    </>
  );
}
