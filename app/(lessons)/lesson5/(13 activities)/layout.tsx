"use client";

import AutoplaySound from "@/app/components/autoplay-sound";
import { PageInfoContext } from "@/app/utils/page-info";
import { PropsWithChildren, useContext } from "react";

export default function ActivityLayout({ children }: PropsWithChildren) {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("13. 귀에 대고 말한 까닭");

  return (
    <>
      {children}
      <AutoplaySound />
    </>
  );
}
