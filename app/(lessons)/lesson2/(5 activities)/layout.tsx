"use client";

import AutoplaySound from "@/app/components/autoplay-sound";
import { PageInfoContext } from "@/app/utils/page-info";
import { PropsWithChildren, useContext } from "react";

export default function ActivityLayout({ children }: PropsWithChildren) {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("5. 한자를 알면 틀리지 않는 일상 어휘");

  return (
    <>
      {children}
      {/* <AutoplaySound /> */}
    </>
  );
}
