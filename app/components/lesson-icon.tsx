export const LessonIcon = ({ lesson }: { lesson: number }) => {
  if (lesson === 1) return <img src="/ui/lesson1.png" />;
  return null;
};
