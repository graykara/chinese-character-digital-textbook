import { LearnNewCharacterPageTemplate } from "@/app/pages/learn-new-character-page-template/learn-new-character-page-template";
import BACKGROUND1 from "@/app/bgpng_temp/2/중등한문_한자,얼마나 알아3.png";

export default function Page() {
  return (
    <>
      <LearnNewCharacterPageTemplate
        characters={[
          {
            chinese: "以",
            reading: "이",
            meaning: "어조사",
            sound: "/sound/5/14words/1.mp3",
          },
          {
            chinese: "視",
            reading: "시",
            meaning: "보다",
            sound: "/sound/5/14words/2.mp3",
          },
          {
            chinese: "貴",
            reading: "귀",
            meaning: "귀하다",
            sound: "/sound/5/14words/3.mp3",
          },
          {
            chinese: "而",
            reading: "이",
            meaning: "말잇다",
            sound: "/sound/5/14words/4.mp3",
          },
          {
            chinese: "賤",
            reading: "천",
            meaning: "천하다",
            sound: "/sound/5/14words/5.mp3",
          },
          {
            chinese: "自",
            reading: "자",
            meaning: "스스로",
            sound: "/sound/5/14words/6.mp3",
          },
          {
            chinese: "均",
            reading: "균",
            meaning: "고르다",
            sound: "/sound/5/14words/7.mp3",
          },
          {
            chinese: "等",
            reading: "등",
            meaning: "같다",
            sound: "/sound/5/14words/8.mp3",
          },
          {
            chinese: "存",
            reading: "존",
            meaning: "있다",
            sound: "/sound/5/14words/9.mp3",
          },
          {
            chinese: "生",
            reading: "생",
            meaning: "나다, 살다",
            sound: "/sound/5/14words/10.mp3",
          },
        ]}
      />
      {/* <img src={BACKGROUND1.src} className="debug absolute left-0 top-0 opacity-25 pointer-events-none" /> */}
    </>
  );
}
