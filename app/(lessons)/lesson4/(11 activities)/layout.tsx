"use client";

import AutoplaySound from "@/app/components/autoplay-sound";
import { PageInfoContext } from "@/app/utils/page-info";
import { PropsWithChildren, useContext } from "react";

export default function ActivityLayout({ children }: PropsWithChildren) {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("11. 너와 나, 우리");

  return (
    <>
      {children}
      {/* <AutoplaySound /> */}
    </>
  );
}
