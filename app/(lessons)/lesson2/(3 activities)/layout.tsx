"use client";

import AutoplaySound from "@/app/components/autoplay-sound";
import { PageInfoContext } from "@/app/utils/page-info";
import { PropsWithChildren, useContext } from "react";

export default function ActivityLayout({ children }: PropsWithChildren) {
  const { setSubtitle, setCurrentChapter } = useContext(PageInfoContext);
  setSubtitle("3. 그려서 만든 한자");
  setCurrentChapter(3);

  return (
    <>
      {children}
      {/* <AutoplaySound /> */}
    </>
  );
}
