"use client";

import AutoplaySound from "@/app/components/autoplay-sound";
import { PageInfoContext } from "@/app/utils/page-info";
import { PropsWithChildren, useContext } from "react";

export default function ActivityLayout({ children }: PropsWithChildren) {
  const { setSubtitle, setCurrentChapter } = useContext(PageInfoContext);
  setSubtitle("2. 한자, 얼마나 알아?");
  setCurrentChapter(2);

  return (
    <>
      {children}
      <AutoplaySound />
    </>
  );
}
