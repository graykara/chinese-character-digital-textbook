"use client";

import AutoplaySound from "@/app/components/autoplay-sound";
import { PropsWithChildren } from "react";

export default function ActivityLayout({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <AutoplaySound />
    </>
  );
}
