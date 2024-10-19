"use client";

import { ExerciseHeader } from "@/app/components/exercise-header";
import { HeaderContainer } from "@/app/components/headers/header-container";
import HEADER from "./header.png";
import { PageInfoContext } from "@/app/utils/page-info";
import { useContext } from "react";

export default function Page() {
  const { setSubtitle } = useContext(PageInfoContext);
  setSubtitle("한자와 한문");

  return (
    <>
      <HeaderContainer className="mt-10">
        <img src={HEADER.src} alt="header" />
      </HeaderContainer>
      <ExerciseHeader text="내 이름을 한자로 쓰고 그 뜻을 사용하여 이름의 의미를 써보자." />
    </>
  );
}
