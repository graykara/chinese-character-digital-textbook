import { LearnNewCharacterPageTemplate } from "@/app/pages/learn-new-character-page-template/learn-new-character-page-template";
import BACKGROUND1 from "@/app/bgpng_temp/2/중등한문_한자,얼마나 알아3.png";

export default function Page() {
  return (
    <>
      <LearnNewCharacterPageTemplate
        characters={[
          {
            chinese: "安",
            reading: "안",
            meaning: "편안하다",
            sound: "/sound/2/05words/1.mp3",
          },
          {
            chinese: "難",
            reading: "난",
            meaning: "어렵다",
            sound: "/sound/2/05words/2.mp3",
          },
          {
            chinese: "今",
            reading: "금",
            meaning: "이제",
            sound: "/sound/2/05words/3.mp3",
          },
          {
            chinese: "業",
            reading: "업",
            meaning: "일",
            sound: "/sound/2/05words/4.mp3",
          },
          {
            chinese: "植",
            reading: "식",
            meaning: "심다",
            sound: "/sound/2/05words/5.mp3",
          },
          {
            chinese: "樹",
            reading: "수",
            meaning: "나무",
            sound: "/sound/2/05words/6.mp3",
          },
          {
            chinese: "義",
            reading: "의",
            meaning: "의롭다",
            sound: "/sound/2/05words/7.mp3",
          },
          {
            chinese: "意",
            reading: "의",
            meaning: "뜻",
            sound: "/sound/2/05words/8.mp3",
          },
          {
            chinese: "思",
            reading: "사",
            meaning: "생각하다",
            sound: "/sound/2/05words/9.mp3",
          },
          {
            chinese: "甚",
            reading: "심",
            meaning: "심하다, 매우",
            sound: "/sound/2/05words/10.mp3",
          },
          {
            chinese: "深",
            reading: "심",
            meaning: "깊다",
            sound: "/sound/2/05words/11.mp3",
          },
          {
            chinese: "眞",
            reading: "진",
            meaning: "참",
            sound: "/sound/2/05words/12.mp3",
          },
          {
            chinese: "心",
            reading: "심",
            meaning: "마음",
            sound: "/sound/2/05words/13.mp3",
          },
        ]}
      />
      {/* <img src={BACKGROUND1.src} className="absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
}
