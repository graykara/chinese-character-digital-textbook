"use client";

import {
  getChapterTitleOfChapter,
  getPageByPath,
  NAVIGATION,
} from "@/app/(lessons)/link";
import { PageInfoContext } from "@/app/utils/page-info";
import { Ellipsis, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useMemo, useState } from "react";

export const Navbar = () => {
  const pathname = usePathname();
  const hasHTML = pathname.includes(".html");
  const [showMenu, setShowMenu] = useState(false);

  const [selectedLesson, setSelectedLesson] = useState(1);
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [selectedSubChapter, setSelectedSubChapter] = useState("");

  const {
    title,
    subtitle,
    pageNumber,
    currentLesson,
    currentChapter,
    currentSubChapter,
    setCurrentStep,
    setNavigationDirection
  } = useContext(PageInfoContext);

  useEffect(() => {
    setSelectedLesson(currentLesson);
    setSelectedChapter(currentChapter);
    setSelectedSubChapter(currentSubChapter);
  }, [currentLesson, currentChapter, currentSubChapter]);

  const chapters = useMemo(
    () => [
      ...new Map(
        NAVIGATION.filter((item) => item.lesson === selectedLesson).map(
          (item) => [item.chapter, item],
        ),
      ).values(),
    ],
    [selectedLesson],
  );

  const subChapters = useMemo(() => {
    // 필터링된 항목 중에서 subChapter만 추출하고, 중복 제거
    const filteredSubChapters = NAVIGATION.filter(
      (item) => item.lesson === selectedLesson && item.chapter === selectedChapter
    );

    // subChapter 중복을 제거하면서, 가장 첫 번째 subChapter를 우선으로 유지
    const uniqueSubChapters = filteredSubChapters.reduce((acc, curr) => {
      if (!acc.some(item => item.subChapter === curr.subChapter)) {
        acc.push(curr);
      }
      return acc;
    }, []);

    // subChapter 값에 따라 정렬 (F1, F2, F3 순으로)
    return uniqueSubChapters.sort((a, b) => {
      const subChapterA = a.subChapter;
      const subChapterB = b.subChapter;

      // 숫자와 알파벳이 섞인 경우를 처리하는 방법 (예: F1, F2, F10 등)
      const numA = parseInt(subChapterA.replace(/[^\d]/g, ''), 10);
      const numB = parseInt(subChapterB.replace(/[^\d]/g, ''), 10);

      return numA - numB;
    });
  }, [selectedLesson, selectedChapter]);


  // console.log(subChapters);

  return (
    <>
      <nav className="w-full h-[90px] flex items-center">
        <div className="pl-[80px] bg-[#85bc74] h-full flex items-center w-[600px] flex-none">
          <button className="px-5" onClick={() => setShowMenu(!showMenu)}>
            {!showMenu ? (
              <Menu size={50} color="white" />
            ) : (
              <X size={50} color="white" />
            )}
          </button>
          <p className="text-white text-[35px] tracking-normal">{title}</p>
        </div>
        <div className="pl-[40px] bg-[#a4d896] h-full flex items-center flex-1">
          <p className="text-white text-[35px] tracking-normal">{subtitle}</p>
        </div>

        <div className="absolute right-[130px] flex items-center gap-[50px]">
          <p className="text-white text-[20px]">교과서 P.{pageNumber}</p>
          <button className="">
            <Ellipsis color="white" size={48} />
          </button>
        </div>
      </nav>

      {showMenu ? (
        <div className="fixed top-[90px] left-0 w-[1920px] h-[990px] bg-white bg-opacity-60 z-40">
          <ul className="w-[450px] min-h-[350px] absolute left-[150px] top-0 border-x-4 border-b-4 rounded-b-3xl border-[#9ad290] bg-[#e8effe] px-10 py-5 text-[30px] flex flex-col gap-4">
            <li
              onClick={() => setSelectedLesson(1)}
              className={`flex cursor-pointer transition hover:text-[#b4381d] hover:font-bold ${selectedLesson === 1 ? "text-[#b4381d] font-bold" : ""}`}
            >
              <span className="inline-block w-[25px] text-center">I</span>
              <span>. 살아 숨 쉬는 한자</span>
            </li>
            <li
              onClick={() => setSelectedLesson(2)}
              className={`flex cursor-pointer transition hover:text-[#b4381d] hover:font-bold ${selectedLesson === 2 ? "text-[#b4381d] font-bold" : ""}`}
            >
              <span className="inline-block w-[25px] text-center">II</span>
              <span>. 한자와 어휘</span>
            </li>
            <li
              onClick={() => setSelectedLesson(3)}
              className={`flex cursor-pointer transition hover:text-[#b4381d] hover:font-bold ${selectedLesson === 3 ? "text-[#b4381d] font-bold" : ""}`}
            >
              <span className="inline-block w-[25px] text-center">III</span>
              <span>. 성어 이야기 여행</span>
            </li>
            <li
              onClick={() => setSelectedLesson(4)}
              className={`flex cursor-pointer transition hover:text-[#b4381d] hover:font-bold ${selectedLesson === 4 ? "text-[#b4381d] font-bold" : ""}`}
            >
              <span className="inline-block w-[25px] text-center">IV</span>
              <span>. 짧은 글, 긴 울림</span>
            </li>
            <li
              onClick={() => setSelectedLesson(5)}
              className={`flex cursor-pointer transition hover:text-[#b4381d] hover:font-bold ${selectedLesson === 5 ? "text-[#b4381d] font-bold" : ""}`}
            >
              <span className="inline-block w-[25px] text-center">V</span>
              <span>. 선인들의 향기</span>
            </li>
          </ul>
          <ul className="w-[400px] min-h-[290px] absolute left-[596px] top-0 border-x-4 border-b-4 rounded-b-3xl border-[#9ad290] bg-white py-5 text-[30px] flex flex-col gap-4">
            {chapters.map((item, index) => (
              <li
                key={index}
                onClick={() => setSelectedChapter(item.chapter)}
                className={`flex cursor-pointer transition hover:text-white hover:font-bold hover:bg-[#b4381d] px-10 ${selectedLesson === item.lesson &&
                  selectedChapter === item.chapter
                  ? "text-white font-bold bg-[#b4381d]"
                  : ""
                  }`}
              >
                {/* <span className="chapter-title">{getChapterTitleOfChapter(item.chapter)}</span> */}
                <span
                  className="chapter-title"
                  dangerouslySetInnerHTML={{
                    __html: getChapterTitleOfChapter(item.chapter),
                  }}
                />
              </li>
            ))}
          </ul>
          <ul className="w-fit absolute left-[992px] top-5 border-4 rounded-lg border-[#9ad290] bg-[#e8effe] py-5 text-[24px] flex flex-col gap-2">
            {subChapters.map((item, index) => (
              <Link
                key={index}
                href={
                  getPageByPath("/" + item.path + (hasHTML ? ".html" : "")) ||
                  ""
                }
                onClick={() => {
                  setNavigationDirection(null)
                  setCurrentStep(1);
                  setShowMenu(false);
                }}
                className={`flex cursor-pointer transition hover:text-white hover:font-bold hover:bg-[#9ad290] px-5 ${selectedLesson === currentLesson &&
                  selectedChapter === currentChapter &&
                  selectedSubChapter === item.subChapter
                  ? "text-white font-bold bg-[#9ad290]"
                  : ""
                  }`}
              >
                <span>{item.subChapter}</span>
              </Link>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};
