"use client";

import { PageInfoContext } from "@/app/utils/page-info";
import { PropsWithChildren, useContext } from "react";

export default function Layout({ children }: PropsWithChildren) {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("첫 번째 발견");

  return children;
}
