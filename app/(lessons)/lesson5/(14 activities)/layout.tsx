"use client";

import AutoplaySound from "@/app/components/autoplay-sound";
import { PageInfoContext } from "@/app/utils/page-info";
import { PropsWithChildren, useContext } from "react";

export default function ActivityLayout({ children }: PropsWithChildren) {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("14. 사람만 귀한가요");

  return (
    <>
      {children}
      <AutoplaySound />
    </>
  );
}
