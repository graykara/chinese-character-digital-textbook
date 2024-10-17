import { LearnNewCharacterPageTemplate } from "@/app/pages/learn-new-character-page-template/learn-new-character-page-template";
import BACKGROUND1 from "@/app/bgpng_temp/2/중등한문_한자,얼마나 알아3.png";

export default function Page() {
  return (
    <>
      <LearnNewCharacterPageTemplate
        characters={[
          {
            chinese: "馬",
            reading: "마",
            meaning: "말",
            sound: "/sound/3/07words/1.mp3",
          },
          {
            chinese: "東",
            reading: "동",
            meaning: "동녘",
            sound: "/sound/3/07words/2.mp3",
          },
          {
            chinese: "風",
            reading: "풍",
            meaning: "바람",
            sound: "/sound/3/07words/3.mp3",
          },
          {
            chinese: "莫",
            reading: "막",
            meaning: "없다",
            sound: "/sound/3/07words/4.mp3",
          },
          {
            chinese: "坐",
            reading: "좌",
            meaning: "앉다",
            sound: "/sound/3/07words/5.mp3",
          },
          {
            chinese: "井",
            reading: "정",
            meaning: "우물",
            sound: "/sound/3/07words/6.mp3",
          },
          {
            chinese: "觀",
            reading: "관",
            meaning: "보다",
            sound: "/sound/3/07words/7.mp3",
          },
          {
            chinese: "千",
            reading: "천",
            meaning: "일천",
            sound: "/sound/3/07words/8.mp3",
          },
          {
            chinese: "里",
            reading: "리",
            meaning: "마을, 리",
            sound: "/sound/3/07words/9.mp3",
          },
        ]}
      />
      <img src={BACKGROUND1.src} className="absolute left-0 top-0 opacity-25 pointer-events-none" />
    </>
  );
}
