import { PropsWithChildren, ReactNode, useContext } from "react";
import { LessonIcon } from "../components/lesson-icon";
import { ProblemNumberIcon } from "../components/solve-problem/problem-number-icon";
import { PageInfoContext } from "../utils/page-info";

interface Props extends PropsWithChildren {
  lesson: number;
  number: number;
  question: string | ReactNode;
  hideIconNumbers?: number[];
  essayTypeNumbers?: number[];
}

export const SolveProblemPageTemplate = ({
  lesson,
  number,
  question,
  children,
  hideIconNumbers = [],
  essayTypeNumbers = [],
}: Props) => {
  const { currentStep } = useContext(PageInfoContext);

  return (
    <div
      className="relative w-[1760px] h-[990px]"
      style={{
        background: `url('/background/solve-problem-background.png')`,
      }}
    >
      <div className="absolute left-[140px] top-[60px]">
        <img
          key={currentStep}
          src="/background/solve-problem-header.png"
          className="animate__animated animate__flipInX"
        />
      </div>
      <div className="absolute left-[8px] top-[114px] w-[100px] h-[96px] flex justify-center items-center">
        <LessonIcon lesson={lesson} />
      </div>

      <div className="relative h-[calc(990px_-_160px)] ml-[100px] mt-[158px] px-[55px] flex flex-col">
        <header className="flex items-start gap-4">
          {!hideIconNumbers.includes(number) ? (
            <ProblemNumberIcon number={number} type={essayTypeNumbers.includes(number) ? "essay" : undefined} />
          ) : null}

          <div
            className={`pt-1 text-[55px] tracking-tighter break-keep
              ${essayTypeNumbers.includes(number) ? "text-[#2a306d]1" : ""}
            `}
          >
            {question}
          </div>
        </header>

        <div className="h-full">{children}</div>
      </div>
    </div>
  );
};
