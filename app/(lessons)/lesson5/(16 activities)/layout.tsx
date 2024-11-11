"use client";

import AutoplaySound from "@/app/components/autoplay-sound";
import { PageInfoContext } from "@/app/utils/page-info";
import { PropsWithChildren, useContext } from "react";

export default function ActivityLayout({ children }: PropsWithChildren) {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("16. 제주 거상 김만덕");

  return (
    <>
      {children}
      {/* <AutoplaySound /> */}
    </>
  );
}
