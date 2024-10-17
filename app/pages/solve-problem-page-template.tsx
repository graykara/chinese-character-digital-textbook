import { PropsWithChildren, ReactNode } from "react";
import { LessonIcon } from "../components/lesson-icon";

interface Props extends PropsWithChildren {
  lesson: number;
  number: number;
  question: string | ReactNode;
}

export const SolveProblemPageTemplate = ({
  lesson,
  number,
  question,
  children,
}: Props) => {
  return (
    <div
      className="relative w-[1760px] h-[990px]"
      style={{
        background: `url('/background/solve-problem-background.png')`,
      }}
    >
      <div className="absolute left-[8px] top-[114px] w-[100px] h-[96px] flex justify-center items-center">
        <LessonIcon lesson={lesson} />
      </div>

      <div className="relative h-[calc(990px_-_160px)] ml-[100px] mt-[158px] px-[55px] flex flex-col">
        <header className="flex items-start gap-4">
          <div className="w-fit h-fit relative">
            <img src="/ui/solve-problem-number-container.png" />
            <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-cookierun text-white font-[60px]">
              {number}
            </p>
          </div>

          <div className="pt-1 text-[55px] tracking-tighter">{question}</div>
        </header>

        <div className="h-full">{children}</div>
      </div>
    </div>
  );
};
