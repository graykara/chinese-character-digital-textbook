"use client";

import { PageInfoContext } from "@/app/utils/page-info";
import { PropsWithChildren, useContext } from "react";

export default function Lesson1Layout({ children }: PropsWithChildren) {
  const { setTitle } = useContext(PageInfoContext);
  setTitle("V. 선인들의 향기");

  return children;
}
