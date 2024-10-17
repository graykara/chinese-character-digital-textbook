export const LessonIcon = ({ lesson }: { lesson: number }) => {
  if (lesson === 1) return <img src="/ui/lesson1.png" />;
  else if (lesson === 2) return <img src="/ui/lesson2.png" />;
  else if (lesson === 3) return <img src="/ui/lesson3.png" />;
  else if (lesson === 4) return <img src="/ui/lesson4.png" />;
  else if (lesson === 5) return <img src="/ui/lesson5.png" />;
  return null;
};
