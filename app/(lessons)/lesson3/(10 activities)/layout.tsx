"use client";

import AutoplaySound from "@/app/components/autoplay-sound";
import { PageInfoContext } from "@/app/utils/page-info";
import { PropsWithChildren, useContext } from "react";

export default function ActivityLayout({ children }: PropsWithChildren) {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("10. 이야기가 담긴 성어 ②");

  return (
    <>
      {children}
      {/* <AutoplaySound /> */}
    </>
  );
}
