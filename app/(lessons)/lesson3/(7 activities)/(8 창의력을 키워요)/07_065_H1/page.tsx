"use client";

import IMAGE from "./image.png";
import { useEffect, useState } from "react";
import { CreativityPageTemplate } from "@/app/pages/creativity-page-template";
import { CreativityTitleHeader } from "@/app/components/headers/creativity-title-header";

export default function Page() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    setShowAnswer(false);
  }, [step]);

  const items = [
    "마음에 드는 성어를 검색하여 찾는다.",
    "두꺼운 색종이를 준비하여 가로 5㎝, 세로 10㎝ 크기로 자른다.",
    "자른 종이에 자신이 찾은 성어를 쓰고 그 내용에 어울리는 글을 적거나 그림을 그린다.",
    "자신의 개성을 살려 색을 칠하거나 예쁘게 꾸민다.",
    "코팅하고 오려 낸 뒤 구멍을 뚫어 노끈 등으로 묶는다.",
    "친구와 서로 교환하거나 주고 싶은 친구에게 선물을 한다.",
  ];

  return (
    <>
      <CreativityPageTemplate>
        <header className="flex justify-center">
          <CreativityTitleHeader title="‘성어 책갈피’ 만들기" />
        </header>

        <div className="grid grid-cols-[400px__1fr] gap-10">
          <div className="relaitve h-full flex justify-end items-end pr-5">
            <img src={IMAGE.src} />
          </div>

          <div className="flex flex-col gap-14 py-20">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-5">
                <div className="bg-red-500 text-white w-10 h-10 rounded-full flex justify-center items-center text-[30px]">
                  {index + 1}
                </div>
                <p className="text-[30px]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </CreativityPageTemplate>
    </>
  );
}
