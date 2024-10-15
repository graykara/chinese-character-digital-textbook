"use client";

import { PageInfoContext } from "@/app/utils/page-info";
import { PropsWithChildren, useContext } from "react";

export default function Lesson1Layout({ children }: PropsWithChildren) {
  const { setTitle } = useContext(PageInfoContext);
  setTitle("I. 살아 숨 쉬는 한자");

  return children;
}
