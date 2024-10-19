"use client";

import AutoplaySound from "@/app/components/autoplay-sound";
import { PageInfoContext } from "@/app/utils/page-info";
import { PropsWithChildren, useContext } from "react";

export default function ActivityLayout({ children }: PropsWithChildren) {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("6. 한자를 알면 쉬운 교과서 속 어휘");

  return (
    <>
      {children}
      <AutoplaySound />
    </>
  );
}
