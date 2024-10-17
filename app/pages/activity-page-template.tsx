import { PropsWithChildren, ReactNode } from "react";
import { LessonIcon } from "../components/lesson-icon";

interface Props extends PropsWithChildren {
  lesson: number;
}

export const ActivityPageTemplate = ({ lesson, children }: Props) => {
  return (
    <div
      className="relative w-[1760px] h-[990px]"
      style={{
        background: `url('/background/activity-background.png')`,
      }}
    >
      <div className="absolute left-[8px] top-[114px] w-[100px] h-[96px] flex justify-center items-center">
        <LessonIcon lesson={lesson} />
      </div>

      <div className="relative h-[calc(990px_-_160px)] ml-[100px] mt-[160px] px-[60px] flex flex-col">
        <div className="h-full">{children}</div>
      </div>
    </div>
  );
};
